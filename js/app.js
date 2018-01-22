(function() {
  var preload = document.getElementById('cont-carga');
  var loading = 0;
  var id = setInterval(frame, 34);

  function frame() {
    if(loading === 100) {
      clearInterval(id);
      window.open("lyftB.html", "_self");
    } else {
      loading = loading + 1;
      if(loading == 90) {
      preload.style.animation = "fadeout is ease";
      }
    }
  }
})();
