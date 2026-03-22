/**
 * mobile-banner.js — 80sGrid.com
 * Injects the mobile-only header banner on phones/tablets.
 * Add this script once to each quiz page:
 *   <script src="../mobile-banner.js"></script>
 *
 * Upload mobile-header.jpg to:
 *   https://github.com/80sGrid/80sgrid.github.io/tree/main/images
 */

(function () {
  // Only run on mobile / small screens
  if (window.innerWidth > 768) return;

  // Image URL — update this after uploading your banner to GitHub
  var BANNER_SRC =
    'https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/mobile-header.jpg';

  // Build the banner element
  var banner = document.createElement('div');
  banner.id = 'mobile-site-banner';
  banner.style.cssText = [
    'width:100%',
    'max-width:100%',
    'display:block',
    'line-height:0',
    'margin:0',
    'padding:0',
    'overflow:hidden',
  ].join(';');

  var img = document.createElement('img');
  img.src = BANNER_SRC;
  img.alt = "Len's 80sGrid.com — Music Edition";
  img.style.cssText = [
    'width:100%',
    'height:auto',
    'display:block',
    'object-fit:cover',
    'object-position:center top',
  ].join(';');

  banner.appendChild(img);

  // Insert at the very top of <body>, before everything else
  function insertBanner() {
    var body = document.body;
    if (!body) return;
    // Don't insert twice
    if (document.getElementById('mobile-site-banner')) return;
    body.insertBefore(banner, body.firstChild);
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBanner);
  } else {
    insertBanner();
  }
})();
