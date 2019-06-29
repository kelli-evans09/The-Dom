// var headingElement = document.querySelector("#main-heading");
// headingElement.innerHTML = "Hello, world!";

// var greetc2 = "Hello, Cohort 2!";
// document.querySelector("#helloC2").innerHTML = greetc2;

// // // Lightning Exercise #1
// // Hello, world
// // In your index.html file, add an h1 element with an id of #hello-container.
// // In your JavaScript file, declare a new variable called greeting and give it a value of "Hello, world"
// // Use document.querySelector to target your #hello-container
// // User the .innerHTML property to insert the value of your greeting variable into your #hello-container element.

// var greeting = "Hello, world";
// document.querySelector("#hello-container").innerHTML = greeting;

// // The contents of this object will change depending on what today's special is
// var currentSpecial = {
// //     name: "Fried Green Tomato BLT",
// //     description: "So good you'll cry",
// //     price: 9.99
// //   }
  
// //   // We'll use the object to build up an HTML string 
// //   var htmlString = `
// //     <h3 class="dish-name">${currentSpecial.name}</h3>
// //     <p class="dish-description">
// //       ${currentSpecial.description}
// //     </p>
// //     <h5 class= "dish-price">${currentSpecial.price}</h5>
// //   `
// //   // Then we'll put the html string in the #daily-special div
// //   document.querySelector("#daily-special").innerHTML = htmlString;

// //   var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

// //   for(var i = 0; i < menuItemsArray.length; i++){
// //     // target the menu items container and add a bullet for each item in the array
// //     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
// //   }

// //   Notice that we use += here-- that's new! The += operator adds to the existing HTML content of #menu-items-container. Here's another way of writing it:
// // document.querySelector("#menu-items-container").innerHTML =  document.querySelector("#menu-items-container").innerHTML + `<li>${menuItemsArray[i]}</li>`

// // var choresArray = ["Sweep", "Dust", "Mop", "Laundry"];

// // for (var i = 0; i < choresArray.length; i++)
// // {
// //     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`
// // }

// // var movieObject = {
// //     title: "Star Wars: A New Hope",
// //     genre: "Science Fiction",
// //     releaseDate: "May 25, 1977"
// //   }

// //   var htmlString = `
// //   <h3 class="title">${movieObject.title}</h3>
// //   <p class="genre">${movieObject.genre}</p>
// //   <h5 class="release date">${movieObject.releaseDate}</h5>`

// // document.querySelector("#movie-poster").innerHTML = htmlString;

// //   Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

// // var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// // for (var i=0; i < downtownRestaurants.length; i++)
// // {
// //     document.querySelector("#restaurants-list").innerHTML += `<li>${downtownRestaurants[i]}</li>`
// // }

// // // Loop over the downtownRestaurants array.
// // Use the loop to create an <li> element for each item in the array.
// // Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// // You should see a bulleted list of restaurants in the DOM.

// // var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// // for (var i=0; i < sandwichToppings.length; i++)
// // {
// //     document.querySelector("#sandwich-container").innerHTML += `<li>${sandwichToppings[i]}</li>`
// // }

// // Write a function that does the following things:
// // Loop through sandwichToppings
// // Build an <li> element for each item in the array.
// // Use document.querySelector and .innerHTML to print your HTML string to the "#sandwich-container".
// // Call the function. You should see a bulleted list of all the sandwich toppings in the DOM.

// // ********************************************************************

// var movieSchedule = [
//     {
//       title: "Ralph Breaks the Internet",
//       rating: "PG",
//       currentlyPlaying: true,
//       poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
//     }, 
//     {
//       title: "The Grinch",
//       rating: "G",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
//     },
//     {
//       title: "A Star is Born",
//       rating: "R",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
//     },
//      {
//       title: "Bohemian Rhapsody",
//       rating: "PG-13",
//       currentlyPlaying: true
//     },
//     {
//       title: "Fantastic Beasts: The Crimes of Grindlewald",
//       rating: "PG-13",
//       currentlyPlaying: true,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
//     },
//     {
//       title: "Robin Hood",
//       rating: "PG-13",
//       currentlyPlaying: false,
//       poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
//     },
//     {
//       title: "Spider-Man: Into the Spider-Verse",
//       rating: "PG-13",
//       currentlyPlaying: true,
//     }
//   ]

// for (var i=0; i < movieSchedule.length; i++)
// {
//     var htmlString = `
//      <h3 class="title">${movieSchedule[i].title}</h3>
//      <p class="rating">
//       ${movieSchedule[i].rating}
//      </p>
//      <h5 class= "currently-playing">${movieSchedule[i].currentlyPlaying}</h5>
//    `
//    document.querySelector("#movie-schedule").innerHTML += htmlString
   
// }


// //   Use a for loop to loop through the movies (DONE), build an HTML representation of each movie(HOW?!), and insert it into the #movie-schedule container in the DOM(WHAT??).
// You can use any elements you like in your HTML string as long as all the data in the movieSchedule object is included.

// **********************************************************************************************************************************************


// Group Webpage Project

// Create a webpage about your partner. All the content in the DOM should come from your JavaScript file. 


// Create an object about your partner. 

allanObject = {
    firstName: "Allan",
    lastName: "Cook",
    favoriteMovies: ["Fast and the Furious" , "Step Brothers", "Ted" , "Superbad" , "Central Intelligence"],
    favFood: "Peanut butter",
    hobbies: ["Playing the drums" , "Marketing" , "Video Games" , "Working on cars" , "Technology"],
    funFact: "Allan has driven a Lamborghini",
    specialTalent: "Allan can make a four leaf clover with his tongue",
     }

var greeting = "Allan Cook";
document.querySelector("#name-container").innerHTML = greeting;

var favMovies = "Favorite Movies:";
document.querySelector("#movie-list").innerHTML = favMovies;

for (var i=0; i < allanObject.favoriteMovies.length; i++)
{
    document.querySelector("#favorite-movies").innerHTML += `<li>${allanObject.favoriteMovies[i]}</li>`
}

var favFood = "Allan loves peanut butter";
document.querySelector("#fav-food").innerHTML = favFood;

var hobbiesList = "Allan's Hobbies:";
document.querySelector("#hobbies-list").innerHTML = hobbiesList;

for (var i=0; i < allanObject.hobbies.length; i++)
{
    document.querySelector("#hobbies").innerHTML += `<li>${allanObject.hobbies[i]}</li>`
}

var funFact = "Allan has driven a Lamborghini";
document.querySelector("#fun-fact").innerHTML = funFact;

var specialTalent = "Allan can make a four leaf clover with his tongue";
document.querySelector("#special-talent").innerHTML = specialTalent;



// Create a bulleted list (ul) with a li element for each of their favorite movies. (Use a for loop to build this part of the HTML string!)




// Display the additional content on the webpage. 

// Challenge:
// Style your webpage using CSS. 

