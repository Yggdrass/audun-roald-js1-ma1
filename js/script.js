const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

/*Question 1:
Create an object called cat.

Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".*/


   
var cat = {
  complain: function(string) {  
    return "Meow!";
  }
};

console.log(cat.complain);

/*Question 2:
Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

Change its innerHTML value to "Updated heading".*/

const heading = document.querySelector("h3");

heading.innerHTML = "Updtated heading";


/*Question 3:
Use the style property on the heading variable from the question above to change its font size to "2em".*/

heading.style.fontSize = "2em";


/*Question 4:
Add a class to the heading variable called subheading.*/

heading.classList = "subheading"




/*Question 5:
Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.

Loop through the p elements and change the colour of each to "red".*/

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "Red";
}



/*Question 6:
Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.*/

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML += "<p>" + "New paragraph" + "</p>";
resultContainer.style.backgroundColor = "Yellow";




/*Question 7:
Create a function that has one parameter called list.

Inside the function, loop through the list parameter and console log the name property in each object.

Call the function and pass in the cats variable in the script.js file in the repo.*/


function list (list) {
   var list = cats;
   for (i = 0; i < list.length; i++){
     console.log(list[i]);
   }
}

list(cats);




/*Question 8:
Create a function called createCats. The function will have one parameter called cats.

Inside the function loop through the value passed in as cats and create HTML for each object in the array.

Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.

If the age property is missing, it should display “Age unknown” instead.

Return the HTML from the function.

Call the function and pass in the cats array as the argument.

Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.*/

var html = "";
var catsList = cats;

function createCats (cats) {
   for (var i = 0; i < catsList.length; i++) {
       console.log(cats[i]);
       html += "<div>" + cats[i] + "</div>";
       var catsName = cats.name;
       catsName.HTML += "<h5>" + catsName + "</h5>";
   }
}

/*cats.forEach((item)=>{
    let li = document.createElement("div");
    var catsName = cats.name;

    catsName.innerHTML += "<h5>" + cats.name + "</h5>";
  })
*/

createCats(cats);