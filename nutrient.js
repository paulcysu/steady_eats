$(document).ready(initializeApp);

var food = sessionStorage.getItem("setFood");
console.log("food Item: ", food);

function initializeApp(){
    $(".submit").addClass("scale-in");
    $("#reset").addClass("scale-in");
    // nutritionCallFromServer();
}


function nutritionCallFromServer(){
    console.log("called");
   let userQuery = food
   let dataForServer = {
       "Content-Type": "application/x-www-form-urlencoded",
    // "x-app-id": "0657689d",
    // "x-app-key": "1c577a065dc2109313e314fdb410b965",
       "x-app-id": "ff571cbd",
       "x-app-key": "f4112a83315f79c5cdff346b54f08998",
       "x-remote-user-id": "0",
       "Cache-Control": "no-cache",
       "query": 'apple',
   }
   let options = {
       dataType: 'json',
       url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
       headers: dataForServer,
       data: {
           'query': userQuery
       },
       method: 'post',
       success: function(response) {
           console.log(response);
           let src = response.foods[0].photo.highres;
           let img = $('<img>').attr('src', src);
           
           $('#pic').html(img);
           storeNutritionToDOM(response.foods[0])
       },
       error: function(error){
           console.log('error: ', error);
           return false;
       }
   }
   $.ajax(options);
}


function storeNutritionToDOM (foodObj) {
   $(".serving").text(foodObj.serving_qty);
   $(".unit").text(foodObj.serving_unit);
   $(".calories").text(foodObj.nf_calories + " kcal");
   $(".carbohydrate").text(foodObj.nf_total_carbohydrate + " g");
   $(".protein").text(foodObj.nf_protein + " g");
   $(".fat").text(foodObj.nf_total_fat + " g");
   $(".sugar").text(foodObj.nf_sugars + " g");
   $(".sodium").text(foodObj.nf_sodium + " mg");
   $(".cholesterol").text(foodObj.nf_cholesterol + " mg");
   $(".serving").text(foodObj.serving_qty + " " + foodObj.serving_unit);
   $(".unit").text(foodObj.serving_unit);
   $(".calories").text(foodObj.nf_calories + " kcal");
   $(".carbohydrate").text(foodObj.nf_total_carbohydrate + " g");
   $(".protein").text(foodObj.nf_protein + " g");
   $(".fat").text(foodObj.nf_total_fat + " g");
   $(".sugar").text(foodObj.nf_sugars + " g");
   $(".sodium").text(foodObj.nf_sodium + " mg");
   $(".cholesterol").text(foodObj.nf_cholesterol + " mg");
}