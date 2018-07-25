$(document).ready(initializeApp);

let foodInput = null;

/**
 * @param {}
 */
function initializeApp () {
    addClickHandler();
}

$(function() {
    $('input.autocomplete').autocomplete({
        // can ajax nutri api for list, but unable too
      data: {
        "Apple": null,
        "Chicken": null,
        "Taco": null,
        "Wings": null,
        "Burritos": null,
        "Cake": null,
        "Rice": null,
        "Pizza": null,
        "Curry": null,
        "Orange": null,
        "Beer": null,
        "Wine": null,
        "Burger": null,
        "Fish": null,
        "Ice Cream": null,
        "Strawberry": null,
        "Cheese": null,
        "Bread": null,
        "Chips": null,
        "Salsa": null,
      }
    });
});

/**
 * @param  {}
 * @param  {}
 */
function addClickHandler () {
    $(".submit").click(submitClicked);
}

/**
 * @param  {}
 */
function submitClicked () {
    retrieveInput();
    changePage();
}

function changePage () {
    location.assign("food.html")
}

function retrieveInput () {
    foodInput = $("#food").val();
    var food = sessionStorage;
    food.setFood = foodInput;
}