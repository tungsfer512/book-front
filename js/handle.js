var adds = document.querySelectorAll('.add-to-cart');
console.log(adds);
for (var i = 0; i < adds.length; i++) {
  adds[i].addEventListener('click', function () {
    console.log(this);
    var product_id = i;
    var id = localStorage.length + 1;
    
    // var name = this.parentNode.parentNode.children('.product-item-content-body-title').children('a').text;
    
    var price = this.parentElement.parentElement.children[4].children[0].innerText;
    var name = this.parentElement.parentElement.children[1].children[0].innerText;
    var img = this.parentElement.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('src');
    var quantity = 1;
    var type = 'cart';
    console.log(img);
    if (localStorage.getItem(i) == null) {
      localStorage.setItem(product_id, JSON.stringify(
        {
          id: id,
          name: name,
          img: img,
          price: price,
          quantity: quantity,
          type: type
        }
      ));
    }
    else {
      var item = JSON.parse(localStorage.getItem(product_id));
      item.quantity++;
      localStorage.setItem(product_id, JSON.stringify(item));
    }
  });
}

function addToCart() {

}