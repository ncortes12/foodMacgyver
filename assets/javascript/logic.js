// Initialize Firebase
var config = {
  apiKey: "AIzaSyCywidV9KECB6FaxejYiJIjcPIeEu7I3zs",
  authDomain: "foodmacgyver-11d8c.firebaseapp.com",
  databaseURL: "https://foodmacgyver-11d8c.firebaseio.com",
  projectId: "foodmacgyver-11d8c",
  storageBucket: "foodmacgyver-11d8c.appspot.com",
  messagingSenderId: "198176051883"
};
firebase.initializeApp(config);
var food = url = "https://api.edamam.com/search?app_id=bffc1c60&app_key=f34dee8c2c3b557affccc392f878882bq=" + ingredients + "time=1-" + time + "excluded=" + excluded ;


var ingredients;
var time;
var excluded;

var username;
var database = firebase.database();

var beer = url = "https://api.punkapi.com/v2/beers/?food=" + title + "&per_page=10"
var title;

$("#button").on("click", function (event) {
    event.preventDefault();
    var ingredientsInputEl = $("#ingredientsInput");
    var allergyInputEl = $("#allergyInput");
    var dietInputEl = $("#dietInput");
    var timeInputEl = $("#timeInput");
    var ingredients = ingredientsInputEl.val().trim();
    ingredientsInputEl.val(""); 
    var allergy = allergyInputEl.val().trim();
    allergyInputEl.val("");
    var diet = dietInputEl.val().trim();
    dietInputEl.val("");
    var time = timeInputEl.val().trim();
    timeInputEl.val("");
    console.log(ingredientsInputEl, allergyInputEl, dietInputEl, timeInputEl);
  
    });


database.ref(username).push({



})

database.ref(username).on("child_added", function (snapshot) {
  var snap = snapshot.val();


})

var replaceSpace = "chicken salad";

var result = replaceSpace.replace(" ", "_");

console.log(result);
