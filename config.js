Config · JS
Copy

// ============================================================
// 80sGrid.com — Global Configuration File
// Edit this file to change settings across ALL quiz pages
// ============================================================

const GRID_CONFIG = {

  // ----------------------------------------------------------
  // DAILY LIMIT
  // How many quizzes a player can check per day
  // Set to 999 for effectively unlimited
  // ----------------------------------------------------------
  DAILY_LIMIT: 999,

  // ----------------------------------------------------------
  // PLAYS COUNTER STARTING VALUES
  // The baseline play count shown on each quiz page
  // ----------------------------------------------------------
  PLAYS_START: {
    1: 100,
    2: 100,
    3: 100,
    4: 100,
    5: 100,
    6: 100,
    7: 100,
  },

  // ----------------------------------------------------------
  // LEADERBOARD — Fake/Seed Scores
  // Shown until real players fill the board (top 10)
  // ----------------------------------------------------------
  FAKE_SCORES: [
    { initials: 'ACE', pct: 100, quizzes: 7, date: '2/1/26' },
    { initials: 'MAX', pct: 96,  quizzes: 7, date: '2/3/26' },
    { initials: 'ROX', pct: 93,  quizzes: 7, date: '2/5/26' },
    { initials: 'JAX', pct: 89,  quizzes: 7, date: '2/8/26' },
    { initials: 'ZEN', pct: 89,  quizzes: 5, date: '2/10/26' },
    { initials: 'VIX', pct: 85,  quizzes: 7, date: '2/12/26' },
    { initials: 'RAD', pct: 85,  quizzes: 4, date: '2/14/26' },
    { initials: 'SKY', pct: 82,  quizzes: 7, date: '2/15/26' },
    { initials: 'NEO', pct: 81,  quizzes: 5, date: '2/16/26' },
    { initials: 'LUX', pct: 80,  quizzes: 7, date: '2/16/26' },
  ],

  // ----------------------------------------------------------
  // SITE INFO
  // ----------------------------------------------------------
  SITE_URL:   'https://80sgrid.com/',
  SITE_TITLE: "Len's 80sGrid.com Music Edition",
  SHARE_TEXT: "🎸 Test your 80s music knowledge! Play Len's 80sGrid.com Music Edition: https://80sgrid.com/",
  TOTAL_QUIZZES: 7,

  // ----------------------------------------------------------
  // SPONSOR LINK (shown after results)
  // ----------------------------------------------------------
  SPONSOR_URL:   'https://arrivealivepodcast.com',
  SPONSOR_NAME:  'The Arrive Alive Podcast',
  SPONSOR_TAGLINE: 'The Top Motorcycle Safety Podcast',

};
