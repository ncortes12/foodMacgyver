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






// Authentication
var username;
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
    for (var i = 0; i < results.length; i++) {
      // After the data from the AJAX request comes back

// Saving properties into variables
      
      var recLabel = `<div><h1>${results[i].recipe.label}</h1></div>`;
      var recImage = `<img src="${results[i].recipe.image}">`;
      var recURL = `<div>
      <form  action="${results[i].recipe.url}" target="_blank">
      <input id = "gorecipe" type="submit" value="Go To Recipe"/>
  </form></div>`;

      var recTime = `<div>${results[i].recipe.totalTimeInSecondsl}</div>`;

      var style = '<div id="reccard" class = "card amber darken-2">'+recLabel+ recImage+recURL+recTime+'</div>';
      console.log(recImage, recLabel, recTime, recURL);
      $("#results").append(style);
      //results[i]

      // $("#gorecipe").on("click", function(){
      //   window.open(results[i].recipe.url)
      // });

      // reccard,recLabel, recImage, recURL, recTime
      // console.log(recLabel, recImage, recURL, recTime);
      console.log(food);
      // console.log(response);

    }

    $.ajax({
      url: beer,
      method: "GET"
    }).then(function (beerResponse){
        console.log(beer);
        var beerResult = beerResponse
      for (var j=0; j < beerResult.length; j++){
        
        var beerName = `<div><h1>${beerResult[j].name}</h1></div>`;
        var tagline = `<div><h2>${beerResult[j].tagline}</h2></div>`;
        var description = `<div>${beerResult[j].description}</div>`;
        var beerImg = `<img src="${beerResult[j].image_url}" width="100px" height"200px">`;
        
        console.log(beerName, tagline, description, beerImg );
       

        var alcohol='<div class = "card amber darken-2">'+beerName+tagline+description+description+beerImg+'</div>'
       
        
        $("#beer").append(alcohol);
        // beerName,tagline,description,beerImg
      }})
  })

  var urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.get('username'));

  });




// database.ref(username).push({



// })

// database.ref(username).on("child_added", function (snapshot) {
//   var snap = snapshot.val();


// });

  

  
