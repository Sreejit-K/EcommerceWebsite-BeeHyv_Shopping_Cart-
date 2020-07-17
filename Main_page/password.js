
var userlist=[
 {
  username: "admin@beehyv.com" ,
  password: "Admin@1"
  },
  {
  username: "vineetks@beehyv.com" ,
  password: "Vineetks@2"
  },
  {
  username: "sreejith@beehyv.com" ,
  password: "Sreejith@3"
  },
  {
  username: "nanda@beehyv.com" ,
  password: "Nanda@4"
  },
  {
  username: "mounika@beehyv.com" ,
  password: "Mounika@5"
  },
  {
  username: "rohith@beehyv.com" ,
  password: "Rohit@6"
  }
]

var myJSON= JSON.stringify(userlist);

function getinfo(){

  var username= document.getElementById("username");
  var password= document.getElementById("password");

  var check= JSON.parse(myJSON);
  var c=0;

  for(i=0; i< userlist.length ; i++){
    if( username.value == check[i].username && password.value == check[i].password ){
      window.location = "file:///C:/Users/Sreejith%20K/Desktop/Shopping%20Cart/Main_page/main.html"
      alert("you are signed in");
      break;
    }
    c++;
  }

  if(c==5){
    alert("please chech your password or the email Id")
  }
}
