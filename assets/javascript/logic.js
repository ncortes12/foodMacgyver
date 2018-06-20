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
var count = 0;
// Adding the API into a variable






// Authentication
var username = "nicole";
var title;



$("#search").on("click", function (event) {
    event.preventDefault();

    var ingredientsInput = $("#ingredientsInput");
    var excludedInput = $("#excludedInput");
    var timeInput = $("#timeInput");

    var userIngredients = ingredientsInput.val().trim();
    ingredients = userIngredients.replace(/ /g, "-");
    ingredientsInput.val(""); 

    var userExcluded = excludedInput.val().trim();
    excluded = userExcluded.replace(/ /g, "-");
    excludedInput.val("");

    time = timeInput.val().trim();
    timeInput.val("");

    title = userIngredients.split(" ", 1);

    console.log(ingredientsInput, excludedInput, timeInput);
    
  console.log(ingredients, excluded , time );
   
  var food = "https://api.edamam.com/search?app_id=bffc1c60&app_key=f34dee8c2c3b557affccc392f878882b&q=" + ingredients + "&time=1-" + time + "&excluded=" + excluded;
  var beer = "https://api.punkapi.com/v2/beers/?food=" + title + "&per_page=2"

  //API GET Request
$.ajax({
  url: food,
  method: "GET"
})
  .then(function (response) {
    var results = response.hits;
    $("#results").empty();
    for (var i = 0; i < results.length; i++) {
      // After the data from the AJAX request comes back


      // Saving properties into variables
      
      
      var recDiv =$("<div>");
      recDiv.attr("id", count);
      
      
     


      var recLabel = `<div><h1>${results[i].recipe.label}</h1></div>`;
      var recImage = `<img src="${results[i].recipe.image}">`;
      var recURL = `<div>${results[i].recipe.url}</div>`;
      var recTime = `<div><p>Cook Time in Minutes</p>${results[i].recipe.totalTime}</div>`;
      var favBtn = $("<button>").text("Favorite");
      favBtn.attr("recipe", count);
      favBtn.addClass("favorite");
      recDiv.append(recLabel, recImage, recURL, recTime, favBtn);
      
     
      $("#results").append(recDiv);
      count++;

      // console.log(recLabel, recImage, recURL, recTime);

      // console.log(response);
     


      

    }
    $.ajax({
      url: beer,
      method: "GET"
    }).then(function (beerResponse){
        console.log(beer);
        var beerResult = beerResponse
      for (var j=0; j < beerResult.length; j++){
        
        var beerName = beerResult[j].name;
        var tagline = beerResult[j].tagline;
        var description = beerResult[j].description;
        var beerImg = beerResult[j].image_url;
        
        console.log(beerName, tagline, description, beerImg );
       
      
  
      }})
  })

 

  });
  $(document).on("click", ".favorite", function(){
    var favCount = $(this).attr("recipe");
    var save = ( $("#"+favCount).html())
    database.ref(username).push({
      savedRec: save,
    
    
  })

  })
database.ref(username).on("child_added", function (snapshot) {
  var snap = snapshot.val();
  console.log(snap.savedRec);
  


});






  

  
