
let carts = document.querySelectorAll('.addtocart');

let products = [{
    name: 'black Tshirt',
    Brand: 'Nike',
    tag: 'Men Black Solid Standard Fit ACDMY Round Neck DRI-FIT T-shirt',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9163719/2019/4/23/1ed9f1e1-e6e7-4a8c-9df5-ed366510b0481556005789498-Nike-Men-Tshirts-9401556005788616-1.jpg',
    price: 1046,
    pricecheck: 'p2',
    inCart: 0,
  },
  {
    name: 'black Tshirt',
    Brand: 'Addidas',
    tag: 'Addidas round neck black Tshirt',
    url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/6b7d86e3d5094fcb87cdaa080110b9f9_9366/badge-of-sport-tee.jpg',
    price: 2200,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'track pant',
    Brand: 'Nike',
    tag: 'Women Black Slim Fit Solid BLISS VCTRY DRI-FIT Cropped Joggers',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9084211/2019/4/2/8b33df1a-da9d-497e-a7ee-42fdfc72bb2e1554208471482-Nike-Women-Black-Slim-Fit-Solid-AS-W-NK-BLISS-VCTRY-DRI-FIT--1.jpg',
    price: 2895,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'puma Bra',
    Brand: 'Puma',
    tag: 'Black Printed Non-Wired Lightly Padded Dry Cell Sports Bra',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11443084/2020/2/14/5ffc3dcc-7a83-4fcf-960d-ccba2abce7471581664348316-Puma-Women-Bra-6781581664346853-1.jpg',
    price: 1954,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'shoes',
    Brand: 'Nike',
    tag: 'Men Grey Flex Control II Training Shoes',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4030191/2018/4/11/11523428568605-Mens-Nike-Flex-Control-II-Training-Shoe-9901523428568458-1.jpg',
    price: 4496,
    pricecheck: 'p5',
    inCart: 0
  },
  {
    name: 'Tshirt',
    Brand: 'Reebok',
    tag: 'Men Navy Blue Style Round Neck T-shirt',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10575568/2019/10/11/27c6c0fd-fd08-4414-b0bc-723b298ba0001570777529640-Reebok-Men-Navy-Blue-Style-Round-Neck-T-shirt-26115707775281-1.jpg',
    price: 779,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'track',
    Brand: 'Addidas',
    tag: 'Men Grey Melange E CAMO LIN Solid Joggers',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10528638/2019/12/16/09458401-582a-44a3-b3bc-9144df951c281576497930680-ADIDAS-Men-Track-Pants-5801576497929061-1.jpg',
    price: 1996,
    pricecheck: ' p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Addidas',
    tag: 'Men Grey Melange Solid Whizz Running Shoes',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10394265/2020/3/26/56fcd415-a2f8-4bf1-867a-bc1535f91e381585213615631-ADIDAS-Men-Grey-Melange-Solid-Whizz-Running-Shoes-3931585213-1.jpg',
    price: 3359,
    pricecheck: ' p4',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Men Navy Blue Solid Strike Blaze LP Sports Sandals',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11383024/2020/3/21/3d466ea1-a367-469d-b772-f69f8b4c7e381584793660055-Reebok-Men-Navy-Blue-Solid-Strike-Blaze-LP-Sports-Sandals-94-1.jpg',
    price: 2239,
    pricecheck: 'p2 p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Unisex Black & LIme Green Pump Supreme EMB Running Shoes',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8497537/2019/8/7/3a444f06-1b9d-4148-aa05-59e3fa2e79721565177553304-Reebok-Men-Black--LIme-Green-Pump-Supreme-EMB-Running-Shoes--1.jpg',
    price: 9099,
    pricecheck: 'p6',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Puma',
    tag: 'Men Black Slim Fit Solid Tour Round Neck T-shirt',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10781022/2019/11/22/e54476c5-2bb9-48b3-9ee6-40c41fdaf1d81574414754744-Puma-Men-Tshirts-5431574414753293-1.jpg',
    price: 976,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Nike',
    tag: 'Men Navy Blue Solid Regular Fit Football Shorts',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11702420/2020/6/18/3d3f42d4-ed15-43d2-8dcb-51eabd9301741592480722690-Nike-Dri-FIT-Academy-M18-Mens-Soccer-Shorts-1941592480720404-1.jpg',
    price: 1695,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Puma',
    tag: 'Women Black Printed Round Neck Cat dryCELL Training T-shirt',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11443124/2020/2/13/e24c9bce-98b1-44b8-83f5-0e6383e1678e1581594016614-Puma-Women-Tshirts-411581594014973-1.jpg',
    price: 1495,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Men Charcoal Grey Foundation PERF Solid Polo Collar T-shirt',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10575664/2019/9/26/1cfc6041-6302-4b84-a3f5-c66fdffa866e1569484396624-Reebok-Men-Tshirts-9041569484395117-1.jpg',
    price: 714,
    pricecheck: 'p1',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Puma',
    tag: 'Men blue Round Neck DRI-FIT T-shirt',
    url: 'https://assets.ajio.com/medias/sys_master/root/h2f/h6e/12670172332062/-1117Wx1400H-460324488-blue-MODEL.jpg',
    price: 1256,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Addidas',
    tag: 'Men Grey Melange E CAMO LIN Solid Joggers',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10528638/2019/12/16/09458401-582a-44a3-b3bc-9144df951c281576497930680-ADIDAS-Men-Track-Pants-5801576497929061-1.jpg',
    price: 1964,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Reebok',
    tag: 'Men Navy Hustle LP Running Shoes',
    url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10465544/2019/12/6/e542a7dc-cab5-43a7-a15e-9a17770c208a1575611438884-Reebok-Men-Sports-Shoes-7621575611438026-1.jpg',
    price: 2995,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Puma',
    tag: 'black long sleve Tshirt',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-yVhjvkg0DYVpNZOXHx1S0-ApZm7A-NkDAw&usqp=CAU',
    price: 3249,
    pricecheck: ' p4',
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
