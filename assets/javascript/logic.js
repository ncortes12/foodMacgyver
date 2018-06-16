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






// Authentication
var username;
var title;
var beer = "https://api.punkapi.com/v2/beers/?food=" + title + "&per_page=2"


$("#button").on("click", function (event) {
    event.preventDefault();

    var ingredientsInput = $("#ingredientsInput");
    var excludedInput = $("#excludedInput");
    var timeInput = $("#timeInput");

    var userIngredients = ingredientsInput.val().trim();
    ingerdients = userIngredients.replace(/ /g, "-");
    ingredientsInput.val(""); 

    var userExcluded = excludedInput.val().trim();
    excluded = userExcluded.replace(/ /g, "-");
    excludedInput.val("");

    time = timeInput.val().trim();
    timeInput.val("");

    title = ingredients.split(" ", 1);

    console.log(ingredientsInput, excludedInput, timeInput);
    

    $("#results").append("<div>test</div>");


  //API GET Request
$.ajax({
  url: food,
  method: "GET"
})
  .then(function (response) {
    var results = response.hits;
    for (var i = 0; i < results.length; i++) {
      // After the data from the AJAX request comes back


      // Saving properties into variables
      var recLabel = `<div><h1>${results[i].recipe.label}</h1></div>`;
      var recImage = `<img src="${results[i].recipe.image}">`;
      var recURL = `<div>${results[i].recipe.url}</div>`;
      var recTime = `<div>${results[i].recipe.totalTimeInSecondsl}</div>`;

      
      $("#results").append(recLabel, recImage, recURL, recTime);

      console.log(recLabel, recImage, recURL, recTime);

      console.log(response);

    }
  })
console.log(beer);
  $.ajax({
    url: beer,
    method: "GET"
  }).then(function (beerResponse){
    
      var beerResult = beerResponse
    for (var j=0; j < beerResult.length; j++){
      
      var beerName = beerResult[j].name;
      var tagline = beerResult[j].tagline;
      var description = beerResult[j].description;
      var beerImg = beerResult[j].image_url;
      
      console.log(beerName, tagline, description, beerImg );
     

    }})

  });




database.ref(username).push({



})

database.ref(username).on("child_added", function (snapshot) {
  var snap = snapshot.val();


});

  

  
