let carts = document.querySelectorAll('.addtocart');

let products = [{
    name: 'Politics',
    Brand: 'Obama',
    tag: 'The Worst President in History',
    url: 'https://m.media-amazon.com/images/I/513mxL7badL._SL500_.jpg',
    price: 1138,
    pricecheck: 'p2',
    inCart: 0,
  },
  {
    name: 'Romance',
    Brand: 'Preeti Shenoy',
    tag: 'Life Is What You Make It',
    url: 'https://m.media-amazon.com/images/I/51ytMbS0nyL._SL500_.jpg',
    price: 2010,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'Thriller',
    Brand: 'Chetan Bhagat',
    tag: 'The Girl in Room 105',
    url: 'https://m.media-amazon.com/images/I/51C60HLknnL._SL500_.jpg',
    price: 595,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'Politics',
    Brand: 'Chris Gosden',
    tag: 'The History of Magic',
    url: 'https://m.media-amazon.com/images/I/51yJLGoyzeL._SL500_.jpg',
    price: 1093,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'Self-Development',
    Brand: 'Héctor García, Francesc Miralles',
    tag: 'Ikigai',
    url: 'https://m.media-amazon.com/images/I/511HccWipML._SL500_.jpg',
    price: 615,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'Romance',
    Brand: 'Chetan Bhagat',
    tag: 'Half Girlfriend',
    url: 'https://m.media-amazon.com/images/I/51jHMdGd14L._SL500_.jpg',
    price: 779,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'Self-Development',
    Brand: ' Robert Hagstrom',
    tag: 'The Warren Buffett Way',
    url: 'https://m.media-amazon.com/images/I/51lmFVyRNjL._SL500_.jpg',
    price: 1996,
    pricecheck: ' p3',
    inCart: 0
  },
  {
    name: 'Politics',
    Brand: ' Brianna Wiest',
    tag: '101 Essays That Will Change the Way You Think',
    url: 'https://m.media-amazon.com/images/I/41UMKWmPb5L._SL500_.jpg',
    price: 659,
    pricecheck: ' p1',
    inCart: 0
  },
  {
    name: 'Thriller',
    Brand: 'Chetan Bhagat',
    tag: 'Five Point Someone',
    url: 'https://m.media-amazon.com/images/I/51RTrp+HY0L._SL500_.jpg',
    price: 568,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'Self-Development',
    Brand: ' Robert T. Kiyosaki',
    tag: 'Rich Dad Poor Dad',
    url: 'https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg',
    price: 2099,
    pricecheck: 'p2',
    inCart: 0
  },
  {
    name: 'Politics',
    Brand: 'Solomon Northup',
    tag: 'Twelve Years a Slave',
    url: 'https://m.media-amazon.com/images/I/51uEYZAl-xL._SL500_.jpg',
    price: 976,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'Thriller',
    Brand: 'Chetan Bhagat',
    tag: '2 States',
    url: 'https://m.media-amazon.com/images/I/51dNXGYLqBL._SL500_.jpg',
    price: 1695,
    pricecheck: 'p2 ',
    inCart: 0
  },

]




// count no of items in cart and load it in the cartitem icon
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart-item').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-item').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-item').textContent = 1;
  }

  setItems(product);

}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//calculating Total amount
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }

}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products-container");
 let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="row justify-content-center s1 bg-light text-center productContainer">
          <div class="col-sm-2 text-left pt-2 "><img src=\"${item.url}\" wigth=\"120px\" height=\"120px\"></div>
            <div class="col-sm-4 text-left pt-2 "><h5 class="product-title"></h5><h5> ${item.tag}</h5></div>
            <div class="col-sm-2 align-self-center text-left pt-2"><h5 ><i class="fa fa-inr m-2" style="font-size:15px" aria-hidden="true"></i><span class="price">${item.price} </span> </h5></div>
            <div class="col-sm-2 align-self-center text-center pt-2"><h5 class="quantity"> <span style="font-size:23px">${item.inCart} </span> </h5></div>
           <div class="col-sm-2 align-self-center text-center pt-2"><h5 ><i class="fa fa-inr m-2" style="font-size:15px" aria-hidden="true"></i><span class="total">${item.inCart* item.price}</span><i class="icon-remove-circle ml-4" aria-hidden="true"></i></h5></div>
      </div>
      `;
    });
    productContainer.innerHTML+=`
    <div class="container rounded border s1 border-light py-auto ">
    <div class="row w-100 text-right">
      <div class="col-md-4">
      </div>

      <div class="col-md-8 mt-3">
        <span><h3 class=" text-left"><span class="m-5">Cart Total:</span>  <i class="fa fa-inr m-2" style="font-size:25px" aria-hidden="true"></i>${cartCost}</h3>  </span>
      </div>

    </div>
    </div>

    `;
  }
}

onLoadCartNumbers();
displayCart();

//finish of loading the count of items in cart

// Brand filter code
var filterCheckboxes = $( '.filter-checkboxes' );

filterCheckboxes.on( 'change', function() {

  var selectedFilters = {};

  filterCheckboxes.filter( ':checked' ).each( function() {

    if ( ! selectedFilters.hasOwnProperty( this.name ) ) {
      selectedFilters[ this.name ] = [];
    }

    selectedFilters[ this.name ].push( this.value );

  } );
console.log(selectedFilters);


 $(".item").hide();
$.each( selectedFilters, function( k, v ) {

    $("." +k).show();

});
if(selectedFilters==null){
  $(".item").show();
}

});
//end of brand filter code

//Price Filter Code
var $filterCheckboxes = $( '.price-checkboxes' );

$filterCheckboxes.on( 'change', function() {

  var selectedFilters = {};

  $filterCheckboxes.filter( ':checked' ).each( function() {

    if ( ! selectedFilters.hasOwnProperty( this.name ) ) {
      selectedFilters[ this.name ] = [];
    }

    selectedFilters[ this.name ].push( this.value );

  } );
console.log(selectedFilters);
 $(".item").hide();
$.each( selectedFilters, function( k, v ) {

    $("." +k).show();
});
});
//end of price filter code
