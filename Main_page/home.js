let carts = document.querySelectorAll('.addtocart');

let products = [{
    name: 'black Tshirt',
    Brand: 'Nike',
    tag: 'Furnishmyhome Bamboo Outdoor Chair',
    url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMwbCe--ON0Xn4eqTM7kX11VGSTbC-2-SGtS78N0tLDSiaBF12XAdtpfPFeGza3ajg_6UFOy_eYjcREa4VbNKf9Qis_WgO4Hu-fcuPMIg&usqp=CAE',
    price: 1046,
    pricecheck: 'p2',
    inCart: 0,
  },
  {
    name: 'black Tshirt',
    Brand: 'Addidas',
    tag: 'Tea Style Decorative Showpiece',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTnjFoU9qVenqXmgp2xD_REjkgSMAwJwM9Ovu4Dp9BafnGjgCrVD8RCTGQCJHaedigTBushNV2Wx-2vH6h3YzpulnPVVPBVADwGPh2fQr8&usqp=CAE',
    price: 2200,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'track pant',
    Brand: 'Nike',
    tag: 'High Living Bravo Hb Black High Back Office',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhuFg0EPjFgHsJRICuDjyWD-wiL1Eb77bq6Fq8AsUAE_17mvTCHisuUNEuAYDx5uBZn0a9L3tAzPTWzpTo1bzoCMs0p1rXBr8y2TjExY6PVXcTLb1PWzNQ&usqp=CAE',
    price: 2895,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'puma Bra',
    Brand: 'Puma',
    tag: 'The New Look Living Room Design Long Wall',
    url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVG2X0xGUnc0krPZ-VneU-FymxelADmykF0r0Ia4UOGqZMaS7gYL3gge9JhQdX-Ng2ZoXESK8R4oEsT9KKiog-YNsEXvMufQ&usqp=CAE',
    price: 1954,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'shoes',
    Brand: 'Nike',
    tag: '4-Shelf Kitchen Cabinet Solid wood',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXASLsKV7fueVVc_SfaT91fDKDMdC_za56wNX9cZFkA-yvu3OiaD762hdYaJ0vtNIiUb2uQAvlbjvBXZnxMlxl7__v6xX7fFEfApZabxk0c3ycoTsh2RH2RA&usqp=CAE',
    price: 4496,
    pricecheck: 'p5',
    inCart: 0
  },
  {
    name: 'Tshirt',
    Brand: 'Reebok',
    tag: 'Kawachi DIY Multifunctional Floor Standing',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNgZbj_TfjOuA6t3jaA8KGpXv5q_tLoUaWLJHmHDa9Al2jdEJReZ5xzwLd82hQ2E6wLIA91Oqr-Mr4_EnBipv_DW0PPC5Gz_9b-zTyeFAm&usqp=CAE',
    price: 779,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'track',
    Brand: 'Addidas',
    tag: 'Solid Wood Bennett Sofa Set Online in India - Parsons Sofa Set',
    url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtpvoohJEsYv4bZikeAxhg_MT8d5IDZ6HVMuo6Vajy7X4zrozIGqqrFrsgzAtNF3VJq9OHGgZxzOCGq_wiWlx11XV9x9f82JVD78XS-xIfDGA0C3q9P4GU&usqp=CAE',
    price: 1996,
    pricecheck: ' p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Addidas',
    tag: 'Solid Wood Jali Bar Tully Online | New ...',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ40_3MkC0K5revizif8auCiK_r78yoqUQ9jqhJhz-SgrrfT8N5XuFrPWuHt4sktQFJLoTQPVILiJeBSQ6xOPiLmwczs6B580Wg5kuYikBa&usqp=CAE',
    price: 3359,
    pricecheck: ' p4',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Crystal Furnitech Dynamic Engineered Wood',
    url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlDQff-0FhGcUdGgjtvph5LiLpwbn1SzTqpwL_n69owOVEKjkE79IvI1ZBSA1b4Wx89GuJUpCLrUpdECqCjyc_PSxixTOJF4Vsw1FNAJA&usqp=CAE',
    price: 2239,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Visitor Bench Steel Benches Three Seater Sofa',
    url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTp9VWbVU5I_r4Sr1PZX58PudnU3LQ3kl6fXyDu83Tmpn_HMmqQnlBvv1BylnpCiZYaQ26iYj3JIQibqJmu8Qt-wLMOyVAQYdZLIFyVOQ59MfhQQfV6BkF_CA&usqp=CAE',
    price: 9099,
    pricecheck: 'p6',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Puma',
    tag: 'Woodkartindia Wooden Corner Zigzag Wall Shelf for Home Decor Wall Decor Living Room Decor Gifting Item',
    url: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJY63--7g4TW7PCXlfO8SWQsJL6hQ8SyZa829Q-D0rB7Q4rnSDav4r79Pmk-cO2HBxfx8taM0_Jthajb6Sorua49YT_mn-bMSMjaiZ1MMTbcqUVtF59KL2&usqp=CAE',
    price: 976,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Nike',
    tag: 'Sugandha Folding Engineered Wood Study Table',
    url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8Qt48gH5X0W5-_xu2GkPGCDkQv_zwrskRnG8cJ_LVeq-pNpGKr3fsIWo0b7WarisV7TuPxpn6kkg-McLXJ4R8MOX-tmd702O3Zy07Lkwv6a8qSTcTjHjH&usqp=CAE',
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
