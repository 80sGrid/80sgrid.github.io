#!/usr/bin/env python3
"""
80sGrid North Star Dashboard
Pulls GA4 data and renders an 80s-themed JPG dashboard image.
Usage: python3 dashboard.py
"""

import os
import sys
from datetime import datetime, timedelta

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Filter,
    FilterExpression,
    FilterExpressionList,
    Metric,
    OrderBy,
    RunReportRequest,
)
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from matplotlib.patches import FancyBboxPatch

# ── Config ────────────────────────────────────────────────────────────────────
PROPERTY_ID = "525313891"
OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dashboard.jpg")

# 80s color palette
BG_DARK = "#0d0221"
BG_CARD = "#1a0a2e"
NEON_PINK = "#ff2a6d"
NEON_CYAN = "#05d9e8"
NEON_PURPLE = "#d300c5"
NEON_YELLOW = "#f5e642"
NEON_GREEN = "#39ff14"
TEXT_WHITE = "#e0e0e0"
TEXT_DIM = "#8888aa"
GRID_COLOR = "#2a1a4e"

FUNNEL_COLORS = [NEON_CYAN, NEON_PURPLE, NEON_PINK]
PIE_COLORS = [NEON_PINK, NEON_CYAN, NEON_PURPLE, NEON_YELLOW, NEON_GREEN, "#ff6b35", "#7b68ee", "#00ced1"]


# ── GA4 helpers ───────────────────────────────────────────────────────────────
def ga4_client():
    return BetaAnalyticsDataClient()


def run_report(client, date_range, dimensions, metrics, dim_filter=None, order_bys=None, limit=10000):
    """Run a GA4 report and return rows as list of dicts."""
    req = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        date_ranges=[DateRange(start_date=date_range[0], end_date=date_range[1])],
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        limit=limit,
    )
    if dim_filter:
        req.dimension_filter = dim_filter
    if order_bys:
        req.order_bys = order_bys

    resp = client.run_report(req)
    rows = []
    for row in resp.rows:
        r = {}
        for i, d in enumerate(dimensions):
            r[d] = row.dimension_values[i].value
        for i, m in enumerate(metrics):
            r[m] = row.metric_values[i].value
        rows.append(r)
    return rows


def event_filter(event_name):
    return FilterExpression(
        filter=Filter(
            field_name="eventName",
            string_filter=Filter.StringFilter(value=event_name),
        )
    )


def and_filter(*expressions):
    return FilterExpression(
        and_group=FilterExpressionList(expressions=list(expressions))
    )


def dim_string_filter(field, value):
    return FilterExpression(
        filter=Filter(
            field_name=field,
            string_filter=Filter.StringFilter(value=value),
        )
    )


# ── Data fetching ─────────────────────────────────────────────────────────────
def fetch_all_data():
    client = ga4_client()
    today = datetime.now().strftime("%Y-%m-%d")
    seven_days_ago = (datetime.now() - timedelta(days=6)).strftime("%Y-%m-%d")
    thirty_days_ago = (datetime.now() - timedelta(days=29)).strftime("%Y-%m-%d")
    d7 = (seven_days_ago, today)
    d30 = (thirty_days_ago, today)

    data = {}

    # ── Header metrics ────────────────────────────────────────────────────
    # Total users 7d
    rows = run_report(client, d7, [], ["totalUsers"])
    data["total_users_7d"] = int(rows[0]["totalUsers"]) if rows else 0

    # Quiz completions 7d
    rows = run_report(client, d7, [], ["eventCount"], dim_filter=event_filter("quiz_complete"))
    data["completions_7d"] = int(rows[0]["eventCount"]) if rows else 0

    # Quiz starts 7d
    rows = run_report(client, d7, [], ["eventCount"], dim_filter=event_filter("quiz_start"))
    data["starts_7d"] = int(rows[0]["eventCount"]) if rows else 0

    # Completion rate
    data["completion_rate"] = (
        data["completions_7d"] / data["starts_7d"] * 100 if data["starts_7d"] > 0 else 0
    )

    # Share count 7d
    rows = run_report(client, d7, [], ["eventCount"], dim_filter=event_filter("viral_share"))
    data["shares_7d"] = int(rows[0]["eventCount"]) if rows else 0

    # Share conversions 7d
    rows = run_report(client, d7, [], ["eventCount"], dim_filter=event_filter("share_conversion"))
    data["share_conversions_7d"] = int(rows[0]["eventCount"]) if rows else 0

    # K-factor = (shares per user) * (conversion rate per share)
    if data["total_users_7d"] > 0 and data["shares_7d"] > 0:
        shares_per_user = data["shares_7d"] / data["total_users_7d"]
        conversion_per_share = data["share_conversions_7d"] / data["shares_7d"]
        data["k_factor"] = shares_per_user * conversion_per_share
    else:
        data["k_factor"] = 0.0

    # ── Chart 1: Daily users (7d trend) ───────────────────────────────────
    rows = run_report(
        client, d7, ["date"], ["totalUsers"],
        order_bys=[OrderBy(dimension=OrderBy.DimensionOrderBy(dimension_name="date"))],
    )
    data["daily_dates"] = [r["date"] for r in rows]
    data["daily_users"] = [int(r["totalUsers"]) for r in rows]

    # ── Chart 2: Quiz funnel (page_view_enhanced -> quiz_start -> quiz_complete)
    rows = run_report(client, d7, [], ["eventCount"], dim_filter=event_filter("page_view_enhanced"))
    views = int(rows[0]["eventCount"]) if rows else 0
    data["funnel"] = {
        "Views": views,
        "Starts": data["starts_7d"],
        "Completes": data["completions_7d"],
    }

    # ── Chart 3: Retention ───────────────────────────────────────────────
    # Try retention_day dimension (registered, may need 24-48h to populate)
    try:
        rows = run_report(
            client, d30, ["customEvent:retention_day"], ["eventCount"],
            dim_filter=event_filter("retention"),
        )
        retention_map = {}
        for r in rows:
            day = r.get("customEvent:retention_day", "")
            if day and day != "(not set)":
                retention_map[day] = int(r["eventCount"])
    except Exception:
        retention_map = {}

    if retention_map:
        # Use retention day milestones
        data["retention_mode"] = "milestones"
        data["retention"] = {}
        for rd in ["1", "3", "7", "14", "30"]:
            data["retention"][f"D{rd}"] = retention_map.get(rd, 0)
    else:
        # Fallback: new vs returning by day
        data["retention_mode"] = "new_vs_returning"
        rows = run_report(
            client, d7, ["date", "newVsReturning"], ["totalUsers"],
            order_bys=[OrderBy(dimension=OrderBy.DimensionOrderBy(dimension_name="date"))],
        )
        ret_data = {}
        for r in rows:
            date = r["date"]
            kind = r["newVsReturning"]
            count = int(r["totalUsers"])
            if date not in ret_data:
                ret_data[date] = {"new": 0, "returning": 0}
            ret_data[date][kind] = count
        sorted_dates = sorted(ret_data.keys())
        data["retention_dates"] = sorted_dates
        data["retention_new"] = [ret_data[d].get("new", 0) for d in sorted_dates]
        data["retention_returning"] = [ret_data[d].get("returning", 0) for d in sorted_dates]

    # ── Chart 4: Traffic sources ──────────────────────────────────────────
    rows = run_report(
        client, d7, ["customEvent:source_category"], ["eventCount"],
        dim_filter=event_filter("traffic_source"),
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="eventCount"), desc=True)],
    )
    data["traffic_sources"] = {r["customEvent:source_category"]: int(r["eventCount"]) for r in rows}

    # ── Footer stats ──────────────────────────────────────────────────────
    # Average score (dimension may need 24-48h after registration to populate)
    data["avg_score"] = 0
    try:
        rows = run_report(
            client, d7, ["customEvent:score"], ["eventCount"],
            dim_filter=event_filter("quiz_complete"),
        )
        total_score = 0
        total_completions = 0
        for r in rows:
            try:
                score = int(r["customEvent:score"])
                count = int(r["eventCount"])
                total_score += score * count
                total_completions += count
            except (ValueError, KeyError):
                pass
        data["avg_score"] = total_score / total_completions if total_completions > 0 else 0
    except Exception:
        pass  # Dimension not yet available in Data API

    # Average time to complete (dimension may need 24-48h after registration)
    data["avg_time"] = 0
    try:
        rows = run_report(
            client, d7, ["customEvent:time_to_complete_seconds"], ["eventCount"],
            dim_filter=event_filter("quiz_complete"),
        )
        total_time = 0
        total_count = 0
        for r in rows:
            try:
                t = float(r["customEvent:time_to_complete_seconds"])
                c = int(r["eventCount"])
                total_time += t * c
                total_count += c
            except (ValueError, KeyError):
                pass
        data["avg_time"] = total_time / total_count if total_count > 0 else 0
    except Exception:
        pass  # Dimension not yet available in Data API

    # Top quiz by completions
    rows = run_report(
        client, d7, ["customEvent:quiz_number"], ["eventCount"],
        dim_filter=event_filter("quiz_complete"),
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name="eventCount"), desc=True)],
    )
    data["top_quiz"] = "N/A"
    for r in rows:
        if r["customEvent:quiz_number"] not in ("(not set)", ""):
            data["top_quiz"] = r["customEvent:quiz_number"]
            break

    return data


# ── Rendering ─────────────────────────────────────────────────────────────────
def format_number(n):
    if n >= 1_000_000:
        return f"{n / 1_000_000:.1f}M"
    if n >= 1_000:
        return f"{n / 1_000:.1f}K"
    return str(n)


def format_date_label(date_str):
    """Convert YYYYMMDD to Mon DD."""
    dt = datetime.strptime(date_str, "%Y%m%d")
    return dt.strftime("%b %d")


def style_ax(ax):
    """Apply consistent 80s styling to a chart axis."""
    ax.set_facecolor(BG_CARD)
    ax.tick_params(axis="x", colors=TEXT_DIM, labelsize=7)
    ax.tick_params(axis="y", colors=TEXT_DIM, labelsize=7)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["bottom"].set_color(GRID_COLOR)
    ax.spines["left"].set_color(GRID_COLOR)
    ax.grid(axis="y", color=GRID_COLOR, linewidth=0.5, alpha=0.5)


def render_dashboard(data):
    fig = plt.figure(figsize=(16, 10), facecolor=BG_DARK, dpi=150)
    gs = gridspec.GridSpec(
        4, 4,
        figure=fig,
        hspace=0.45,
        wspace=0.35,
        left=0.06, right=0.94,
        top=0.88, bottom=0.12,
    )

    # ── Title ─────────────────────────────────────────────────────────────
    fig.text(
        0.5, 0.95, "80sGrid  NORTH STAR DASHBOARD",
        ha="center", va="center",
        fontsize=22, fontweight="bold", color=NEON_PINK,
        fontfamily="monospace",
    )
    fig.text(
        0.5, 0.915,
        f"Generated {datetime.now().strftime('%b %d, %Y at %I:%M %p')}  |  Last 7 days",
        ha="center", va="center",
        fontsize=9, color=TEXT_DIM, fontfamily="monospace",
    )

    # ── Header KPI cards ──────────────────────────────────────────────────
    kpis = [
        ("USERS (7d)", format_number(data["total_users_7d"]), NEON_CYAN),
        ("COMPLETIONS (7d)", format_number(data["completions_7d"]), NEON_PINK),
        ("COMPLETION RATE", f"{data['completion_rate']:.0f}%", NEON_PURPLE),
        ("K-FACTOR", f"{data['k_factor']:.3f}", NEON_YELLOW),
    ]
    for i, (label, value, color) in enumerate(kpis):
        ax = fig.add_subplot(gs[0, i])
        ax.set_facecolor(BG_CARD)
        ax.set_xlim(0, 1)
        ax.set_ylim(0, 1)
        ax.axis("off")

        rect = FancyBboxPatch(
            (0.02, 0.02), 0.96, 0.96,
            boxstyle="round,pad=0.05",
            facecolor=BG_CARD, edgecolor=color, linewidth=1.5,
        )
        ax.add_patch(rect)

        ax.text(0.5, 0.7, value, ha="center", va="center",
                fontsize=26, fontweight="bold", color=color, fontfamily="monospace")
        ax.text(0.5, 0.25, label, ha="center", va="center",
                fontsize=8, color=TEXT_DIM, fontfamily="monospace")

    # ── Chart 1: Daily Users trend ────────────────────────────────────────
    ax1 = fig.add_subplot(gs[1:3, 0:2])
    style_ax(ax1)
    dates = data["daily_dates"]
    users = data["daily_users"]
    x = range(len(dates))

    if dates:
        ax1.fill_between(x, users, alpha=0.15, color=NEON_CYAN)
        ax1.plot(x, users, color=NEON_CYAN, linewidth=2.5, marker="o", markersize=5)
        ax1.set_xticks(list(x))
        ax1.set_xticklabels([format_date_label(d) for d in dates], fontsize=7, color=TEXT_DIM, fontfamily="monospace")
    ax1.set_title("DAILY USERS (7d)", fontsize=10, color=TEXT_WHITE, fontfamily="monospace", pad=8)

    # ── Chart 2: Quiz Funnel ──────────────────────────────────────────────
    ax2 = fig.add_subplot(gs[1, 2:4])
    style_ax(ax2)
    funnel = data["funnel"]
    labels = list(funnel.keys())
    values = list(funnel.values())
    bars = ax2.bar(labels, values, color=FUNNEL_COLORS, width=0.55, edgecolor="none")
    for bar, val in zip(bars, values):
        ax2.text(bar.get_x() + bar.get_width() / 2, bar.get_height(),
                 format_number(val), ha="center", va="bottom",
                 fontsize=9, fontweight="bold", color=TEXT_WHITE, fontfamily="monospace")
    ax2.set_title("QUIZ FUNNEL (7d)", fontsize=10, color=TEXT_WHITE, fontfamily="monospace", pad=8)
    ax2.tick_params(axis="x", labelsize=8)

    # ── Chart 3: Retention ──────────────────────────────────────────────
    ax3 = fig.add_subplot(gs[2, 2])
    style_ax(ax3)

    if data["retention_mode"] == "milestones":
        ret = data["retention"]
        ret_labels = list(ret.keys())
        ret_values = list(ret.values())
        bars = ax3.bar(ret_labels, ret_values, color=NEON_CYAN, width=0.5, edgecolor="none", alpha=0.85)
        for bar, val in zip(bars, ret_values):
            if val > 0:
                ax3.text(bar.get_x() + bar.get_width() / 2, bar.get_height(),
                         str(val), ha="center", va="bottom",
                         fontsize=7, color=TEXT_WHITE, fontfamily="monospace")
        ax3.set_title("RETENTION (30d)", fontsize=9, color=TEXT_WHITE, fontfamily="monospace", pad=8)
    else:
        ret_dates = data["retention_dates"]
        ret_new = data["retention_new"]
        ret_returning = data["retention_returning"]
        if ret_dates:
            x3 = range(len(ret_dates))
            ax3.bar(x3, ret_returning, color=NEON_CYAN, width=0.5, label="Returning", alpha=0.85)
            ax3.bar(x3, ret_new, bottom=ret_returning, color=NEON_PURPLE, width=0.5, label="New", alpha=0.85)
            ax3.set_xticks(list(x3))
            ax3.set_xticklabels([format_date_label(d) for d in ret_dates], fontsize=5, rotation=45, ha="right", color=TEXT_DIM, fontfamily="monospace")
            ax3.legend(fontsize=6, loc="upper left", frameon=False, labelcolor=TEXT_DIM)
        ax3.set_title("NEW vs RETURNING (7d)", fontsize=9, color=TEXT_WHITE, fontfamily="monospace", pad=8)

    # ── Chart 4: Traffic Sources ──────────────────────────────────────────
    ax4 = fig.add_subplot(gs[2, 3])
    ax4.set_facecolor(BG_DARK)
    sources = data["traffic_sources"]
    if sources:
        clean = {}
        for k, v in sources.items():
            label = k.replace("_", " ").title() if k != "(not set)" else "Other"
            clean[label] = v
        s_labels = list(clean.keys())
        s_values = list(clean.values())
        colors = PIE_COLORS[: len(s_labels)]
        wedges, texts, autotexts = ax4.pie(
            s_values, labels=None, autopct="%1.0f%%",
            colors=colors, startangle=140,
            textprops={"fontsize": 7, "color": TEXT_WHITE, "fontfamily": "monospace"},
            pctdistance=0.78,
        )
        ax4.legend(
            wedges, s_labels, loc="lower center", fontsize=6,
            ncol=2, frameon=False,
            bbox_to_anchor=(0.5, -0.15),
            labelcolor=TEXT_DIM,
        )
    else:
        ax4.text(0.5, 0.5, "No data", ha="center", va="center", color=TEXT_DIM, fontsize=9, fontfamily="monospace")
    ax4.set_title("TRAFFIC SOURCES (7d)", fontsize=9, color=TEXT_WHITE, fontfamily="monospace", pad=8)

    # ── Footer stats ──────────────────────────────────────────────────────
    avg_score = data["avg_score"]
    avg_time = data["avg_time"]
    footer_items = [
        f"Avg Score: {avg_score:.1f}/9" if avg_score > 0 else "Avg Score: --",
        f"Avg Time: {avg_time:.0f}s" if avg_time > 0 else "Avg Time: --",
        f"Top Quiz: #{data['top_quiz']}",
        f"Shares (7d): {data['shares_7d']}",
    ]
    footer_text = "    |    ".join(footer_items)
    fig.text(
        0.5, 0.03, footer_text,
        ha="center", va="center",
        fontsize=9, color=TEXT_DIM, fontfamily="monospace",
        bbox=dict(boxstyle="round,pad=0.4", facecolor=BG_CARD, edgecolor=GRID_COLOR, linewidth=0.5),
    )

    # ── Save ──────────────────────────────────────────────────────────────
    fig.savefig(OUTPUT_PATH, format="jpeg", facecolor=BG_DARK, dpi=150, bbox_inches="tight")
    plt.close(fig)
    print(f"Dashboard saved to {OUTPUT_PATH}")


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    print("Fetching GA4 data...")
    try:
        data = fetch_all_data()
    except Exception as e:
        print(f"Error fetching GA4 data: {e}", file=sys.stderr)
        sys.exit(1)

    print("Rendering dashboard...")
    render_dashboard(data)
    print("Done!")


if __name__ == "__main__":
    main()
