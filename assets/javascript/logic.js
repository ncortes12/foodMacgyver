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

var database = firebase.database();

// Variables for API query
var ingredients;
var time;
var excluded;

// Adding the API into a variable
var food = "https://api.edamam.com/search?app_id=bffc1c60&app_key=f34dee8c2c3b557affccc392f878882b&q=" + ingredients + "&time=1-" + time + "&excluded=" + excluded;


// API GET Request
$.ajax({
  url: food,
  method: "GET"
})

  // After the data from the AJAX request comes back
  .then(function (response) {

    // Saving properties into variables
    var recLabel = response.hits.recipe.label;
    var recImage = response.hits.recipe.image;
    var recURL = response.hits.recipe.url;
    var recIngredients = response.hits.recipe.ingredientsLines;
    var recTime = response.hits.recipe.totalTimeInSeconds;

    console.log(response);

  });



// Authentication
var username;

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

var result = replaceSpace.replace(" ", "-");

console.log(result);
