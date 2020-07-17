let carts = document.querySelectorAll('.addtocart');

let products = [{
    name: 'black Tshirt',
    Brand: 'Apple',
    tag: 'Apple iPhone XR 128 GB, White, Smartphone',
    url: 'https://www.reliancedigital.in/medias/Apple-iPhone-XR-128GB-White-491488448-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MDU2OHxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaGMyLzkwNTE3MzA4Mzc1MzQuanBnfDczNGQxMzVkMTBhZGE0YTYxMzI2NzlmMjRmYmRmNTI1MDI3OTE5YTUxNWE1YzJlY2U3ODkxMDExZDZiNDllZmI',
    price: 57800,
    pricecheck: 'p6',
    inCart: 0,
  },
  {
    name: 'black Tshirt',
    Brand: 'Samsung',
    tag: 'Samsung Galaxy S10 (Prism Blue, 8GB RAM, 128GB Storage)',
    url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRr33HMirn2UpL3xkm_-m9bSLz7ICatU-K_so-Rxk45cSbrRqxKORAd7WixyU1v-97TGrHNHh9N0A&usqp=CAc',
    price: 49900,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'track pant',
    Brand: 'Lenovo',
    tag: 'Lenovo BRIN Ideapad S145 Laptop (10th Gen Intel Core i3-1005G1/8GB/1TB HDD/Integrated Graphics/Windows 10/MSO/FHD), 39.62 cm (15.6 inch)',
    url: 'https://www.reliancedigital.in/medias/Lenovo-81W800BRIN-Laptops-491615735-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjcyNjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2g3MS85Mjc5OTgxMzg3ODA2LmpwZ3wwMmMxODIyOTAzNDc0MGVhN2IxODczMzhlYWQ3YWJmZjA2NDY2OWQ0ODczNzZlMWUyZmM1MzNlMjg5YzdmY2U1',
    price: 38999,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'puma Bra',
    Brand: 'Apple',
    tag: 'Apple iPad 2019 25.90 cm (10.2 inch) Wi-Fi Tablet 32 GB, Space Grey',
    url: 'https://www.reliancedigital.in/medias/Apple-iPad-10-2-WiFi-32GB-SG-2019-491584630-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2ODkyNnxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGUzLzkyMDk0NzkzMzE4NzAuanBnfGIxZmZlZTdjZjY5MWQ0NTc1Mzk4YTkxZGEwZWNkNDk3ZDNjMzllMWMzODBiYmExNjFlNDU2YjViNDc1ODEwOWI',
    price: 2990,
    pricecheck: 'p2 ',
    inCart: 0
  },
  {
    name: 'shoes',
    Brand: 'Hp',
    tag: 'HP Laptop - 14s-er0003tu',
    url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoXgDTWuD912d4eQFYp-OjN1S7oZCWQOxesZc6M4Ry8WBIE_JLcB0rqRX6oSh94fOLW_SOXzG5P-w&usqp=CAc',
    price: 65999,
    pricecheck: 'p5',
    inCart: 0
  },
  {
    name: 'Tshirt',
    Brand: 'Lenovo',
    tag: 'Lenovo Tab V7 17.52 cm (6.9 inch) Tablet 3 GB RAM, 32 GB, Onyx Black',
    url: 'https://www.reliancedigital.in/medias/Lenovo-ZA4L0020IN-Tablets-491584463-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzc1OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaGU1L2hlNS85MTgxNTgxMDE3MTE4LmpwZ3wyNWJjOTk3MDk3N2Q4MjZkZTY1MjhlN2U1OTYwMWIwMzczYzBhYzM4MzUxZThhMjY5ZjBhMDE0OTI0Y2JiZGJi',
    price: 11990,
    pricecheck: 'p2',
    inCart: 0
  },
  {
    name: 'track',
    Brand: 'Apple',
    tag: 'Apple MacBook Air Core i5 5th Gen – (8 GB/128 GB SSD/Mac OS Sierra)',
    url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR54yhvbPeeMZHHsUbpOyBGFtY6EfWrvTlcEI__gMECjQ7qpwWLHMC6wnHqgHSUJjx-UGc2eKWMoEc&usqp=CAc',
    price:42000,
    pricecheck: ' p5',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Samsung',
    tag: 'Samsung Galaxy M01 Smart Phone 32 GB, 3 GB RAM, Black',
    url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyDes81n8DGii1uPNedZu-pxtH3w9WrN5XA1FPI6-HJlwYV3o4vQK4Ni28h_Rj3bc952NxGAzuMA&usqp=CAc',
    price: 9099,
    pricecheck: ' p1',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Lenovo',
    tag: 'Lenovo 2NIN Ideapad S145 Laptop (AMD A6/8GB/1TB HDD/Integrated Graphics/Windows 10/HD)',
    url: 'https://www.reliancedigital.in/medias/Lenovo-S145-81ST002NIN-Laptop-491431481-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDQwNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2hjYy85Mjc1MjQxNzkxNTE4LmpwZ3w3NzIzZTY2YzY3NTk4YmU2ZTNmNDMzYjNkNTc1OWU4NGY0NTgyOTkyOWFlZGEzNzg2NjI3NmYzZmI5ODljYzcy',
    price: 24779,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Apple',
    tag: 'Apple MU8G2LB/A Wireless Keyboard',
    url: 'https://www.reliancedigital.in/medias/Apple-MU8G2LB-A-Keyboards-491503396-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjI0MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaGNkL2gzMS85MDc5NzUwNTU3NzI2LmpwZ3wxYmM5NGYzYmNjM2M3YTRhOWZjMzIxNTU2Zjg1YmM5ZmRhMmJkNmQwZDI5NTVhMzZjNzg1OWY4MTcwOTNkYWYx',
    price: 15099,
    pricecheck: 'p2',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Hp',
    tag: 'HP 15-da0101TU Laptop (Intel Pentium Quad Core/4GB/1TB HDD/Windows 10), 39.62 cm (15.6 inch)',
    url: 'https://www.reliancedigital.in/medias/HP-15da0101TU-PQC-4GB-1TB-Win-10-Laptop-491488258-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NjI3NnxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDMyLzkxNDk2MzU1OTIyMjIuanBnfGI4MDUxOGMyM2JkZjY0OGM0ODk5MDU4MDIzY2NmMmY4OWQxMzM2MWRkMzllMGZhOTc4MzQ1YjFkYzQ2MjE3Yzc',
    price: 25899,
    pricecheck: 'p3',
    inCart: 0
  },
  {
    name: 'red Tshirt',
    Brand: 'Samsung',
    tag: 'Samsung Galaxy A20s 64 GB, 4 GB RAM, Green, Smartphone',
    url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0y-QGEGJRNSAaJ6s4rikP7ko7e9-gDIZ2pa_R2BA4QuywNM_2o576k8UeUKwMMCNYL8UislPeig&usqp=CAc',
    price: 13695,
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
