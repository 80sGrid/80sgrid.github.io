/**
 * mobile-banner.js — 80sGrid.com
 * Injects the mobile header banner using CSS media queries (reliable on all phones).
 * Place this file in the /test/ folder.
 * Reference in each quiz page: <script src="mobile-banner.js"></script>
 */

(function () {
  var BANNER_SRC =
    'https://raw.githubusercontent.com/80sGrid/80sgrid.github.io/main/images/mobile-header.jpg';

  // Inject CSS — banner hidden by default, shown only on mobile via media query
  var style = document.createElement('style');
  style.textContent = [
    '#mobile-site-banner {',
    '  display: none;',
    '  width: 100%;',
    '  line-height: 0;',
    '  margin: 0;',
    '  padding: 0;',
    '  overflow: hidden;',
    '}',
    '#mobile-site-banner img {',
    '  width: 100%;',
    '  height: auto;',
    '  display: block;',
    '}',
    '@media (max-width: 768px) {',
    '  #mobile-site-banner { display: block !important; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // Build and inject the banner element at top of body
  function insertBanner() {
    if (document.getElementById('mobile-site-banner')) return;
    var banner = document.createElement('div');
    banner.id = 'mobile-site-banner';
    var img = document.createElement('img');
    img.src = BANNER_SRC;
    img.alt = "Len's 80sGrid.com — Music Edition";
    banner.appendChild(img);
    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertBanner);
  } else {
    insertBanner();
  }
})();
