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
var food = url = "http://api.yummly.com/v1/api/recipes?_app_id=40f36316&_app_key=2ba2f9225692cc4bb5e7d9b14d992e19&q=" + ingredients + "maxTotalTimeInSeconds=" + time + "allowedAllergy[]=" + allergy + "allowedDiet[]=" + diet;


var ingredients;
var time;
var allergy;
var diet;
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
    var ingredientsInputVal = ingredientsInputEl.val().trim();
    ingredientsInputEl.val(""); 
    var allergyInputEl = allergyInputEl.val().trim();
    allergyInputEl.val("");
    var dietInputEl = dietInputEl.val().trim();
    dietInputEl.val("");
    var timeInputEl = timeInputEl.val().trim();
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
