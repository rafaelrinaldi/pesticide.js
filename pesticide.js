(function() {
  var all = document.body.getElementsByTagName('*'),
      count = 0,
      item;

  for(; count < all.length; ++count) {
    item = all[count];
    item.style.outline = '1px solid red';
  }
})();
