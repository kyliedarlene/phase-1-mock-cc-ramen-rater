// write your code here


// get DOM nodes

const ramenMenu = document.getElementById('ramen-menu');

const insertImage = document.getElementById('insert-image');
const insertName = document.getElementById('insert-name');
const insertRestaurant = document.getElementById('insert-restaurant');
const insertRating = document.getElementById('rating-display');
const insertComment = document.getElementById('comment-display');


// load ramen pictures in ramen-menu div on page load

fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {     
        ramens.forEach((ramen) => {
            ramenDisplay(ramen);
        });
    })


// take object as argument and insert object properties into DOM

function ramenDisplay(source) {
    // insert image in ramen-menu div
    const ramenPic = document.createElement('img');
    ramenPic.src = source.image;
    ramenMenu.append(ramenPic);

    // add click event
    ramenPic.addEventListener('click', () => {
        insertImage.src = source.image;
        insertName.innerText = source.name;
        insertRestaurant.innerText = source.restaurant;
        insertRating.innerText = source.rating;
        insertComment.innerText = source.comment;
    });    
}


// add new ramen to DOM with form submission

const form = document.getElementById('new-ramen');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamen = {
        image: event.target.image.value,
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        rating: event.target.rating.value,
        comment: event.target["new-comment"].value,
    }

    ramenDisplay(newRamen);
})