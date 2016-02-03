$(document).ready(function(){

  $(".NavBar").fadeIn(2000);
  $(".center-content").delay(1000).fadeIn(3000);
  $(".mainText").fadeIn(3000);
  $(".headPhoto1").fadeIn(1000);


// var getRequest = {
//   type:'get',
//   url: 'http://api.openweathermap.org/data/2.5/weather?zip=48309,us',
//   dataType: 'json',
//   success: function(data) {
//       $(".weatherStats").append("<span class='current'>The current weather is:</span>" + "<br><br>" +  Math.round(data.main.temp * 9/5 - 459.67) + " degrees, with " + data.weather[0].description);
//       console.dir(data);
//   },
//   error: function(error) {
//     console.log(error);

//   }

// };

// $.ajax(getRequest);

});
