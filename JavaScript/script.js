// var h1Element = document.querySelector("h1");
// h1Element.style.color = "blue";

// var bodyElement = document.querySelector("body");
// var isWhite = true;

// setInterval ( function () {
//     if (isWhite) {
//         bodyElement.style.background = "yellow";
//     } else {
//         bodyElement.style.background = "white";
//     }
//     isWhite = !isWhite;
// }, 1000)

// SELECTING

// var selectWithId = document.getElementById("oakParagraph");
// console.log(selectWithId);

// var selectWithClass = document.getElementsByClassName("background");
// console.log(selectWithClass[0]);

// var selectByTag = document.getElementsByTagName("h1");
// console.log(selectByTag);

// var selectWithQuery = document.querySelector("h1");
// console.log(selectWithQuery);

// var selectWithQueryId = document.querySelector("#oakParagraph");
// console.log(selectWithQueryId);

// var selectWithQueryClass = document.querySelector(".background");
// console.log(selectWithQueryClass);

// var selectWithQueryAllClass = document.querySelectorAll(".background");
// console.log(selectWithQueryAllClass);

// MANIPULATION
// var divToManipulate = document.querySelector(".background");

// divToManipulate.style.height = "50px";
// divToManipulate.style.width = "400px";
// divToManipulate.style.backgroundColor = "red";
// divToManipulate.style.fontSize = "30px";
// divToManipulate.style.border = "5px solid black";

// divToManipulate.classList.add("addClass");
// divToManipulate.classList.remove("addClass");

// divToManipulate.classList.toggle("addClass");
// divToManipulate.classList.toggle("addClass");

// var parapraph = document.querySelector("#oakParagraph");

// parapraph.textContent = "OAK is the best academy, really!!"

// parapraph.innerHTML = "OAK Academy is a <strong>BEST</strong> academy";

// var myLink = document.querySelector("a");

// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://www.facebook.com/")

// console.log(myLink.getAttribute("href"));

// myLink.textContent = "FACEBOOK";

// EVENT HANDLER

// var button = document.querySelector("#btn1");
// var title = document.querySelector("#OAKTitle");

// button.addEventListener("click", function () {
//     console.log("Button Clicked");
//     title.style.backgroundColor = "yellow";
// });

// // QUIZ

// var listParent = document.querySelector("ul");
// var isWhite = false;

// listParent.addEventListener("click", function () {
//     console.log("Button Clicked");
//     if (isWhite) {
//         listParent.style.backgroundColor = "yellow";
//     } else {
//         listParent.style.backgroundColor = "white";
//     }
//     isWhite = !isWhite;
// });

var listItems = document.querySelectorAll("li");
var isGreen = false;

for (var index = 0; index < listItems.length; index++) {
    listItems[index].addEventListener("click", function () {
        console.log("Item Clicked");
        if (isGreen) {
            this.style.color = "black";
        } else {
            this.style.color = "green";
        }
        isGreen = !isGreen;
    })
}

var oakParagraph = document.querySelector("#OAKTitle");

function toggleBackground() {
    oakParagraph.classList.toggle("toggleBackground");
};

oakParagraph.addEventListener("click", toggleBackground);

listSeries = document.getElementsByClassName("sentaiSeries");

for (let index = 0; index < listSeries.length; index++) {
    var element = listSeries[index];
    element.addEventListener("mouseover", function () {
        this.style.backgroundColor = "blue";
        this.style.color = "white";        
    });
    element.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";        
    });
    element.addEventListener("click", function () {
        if (this.classList.contains("okay")) {
            this.classList.remove("okay");
        } else {
            this.classList.add("okay");
        }
    })
};