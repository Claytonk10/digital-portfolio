/* Shared navigation and Google Drive button wiring. No external scripts. */
(function () {
  'use strict';
  var toggle = document.querySelector('.mobile-toggle');
  var nav = document.querySelector('.nav-links');
  var dropdown = document.querySelector('.dropdown');
  var dropbtn = document.querySelector('.dropbtn');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (dropbtn && dropdown) {
    dropbtn.addEventListener('click', function () {
      var open = dropdown.classList.toggle('open');
      dropbtn.setAttribute('aria-expanded', String(open));
    });
  }
  function parseDrive(raw) {
    var url = (raw || '').trim();
    if (!url) return null;
    try {
      var obj = new URL(url);
      if (obj.protocol !== 'https:') return null;
      // Support Google Drive's standard PDF file links.
      if (obj.hostname === 'drive.google.com') {
        var match = obj.pathname.match(/\/file\/d\/([A-Za-z0-9_-]+)/);
        var id = match ? match[1] : obj.searchParams.get('id');
        if (id && /^[A-Za-z0-9_-]+$/.test(id)) {
          return {view:'https://drive.google.com/file/d/'+id+'/view', download:'https://drive.google.com/uc?export=download&id='+encodeURIComponent(id)};
        }
      }
      // Non-PDF Drive docs and other https documents open normally.
      return {view:url, download:url};
    } catch(err) { return null; }
  }
  var config = window.PORTFOLIO_FILES || {};
  document.querySelectorAll('[data-doc]').forEach(function (element) {
    var item = parseDrive(config[element.getAttribute('data-doc')]);
    if (!item) {
      element.classList.add('is-unavailable');
      element.setAttribute('aria-disabled','true');
      element.setAttribute('title','Add this document link to assets/site-config.js first');
      element.addEventListener('click',function(ev) { ev.preventDefault(); alert('This document has not been linked yet. Add its Google Drive share link in assets/site-config.js.'); });
      return;
    }
    element.href = element.getAttribute('data-mode') === 'download' ? item.download : item.view;
    element.target = '_blank';
    element.rel = 'noopener noreferrer';
  });
})();
