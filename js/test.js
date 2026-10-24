// create HTML body
let body=document.body;

body.style.backgroundColor="#1E293B";
// create a div element container
let container=document.createElement("div");
container.id="container";
body.appendChild(container);

container.style.cssText = `width: 100%;
max-width: 700px;
height: 100vh; 
margin: 0 auto;
background-color: #08224d;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 30px;
box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.75);
    `;

// create a header element
let header=document.createElement("h1");
header.textContent="X O Game";
container.appendChild(header);
header.style.cssText = `
color: white;
width: 90%;
background-color: red;
padding: 10px 10px;
margin: 0 auto;
text-align: center;
border-radius: 15px;
font-size: 50px;
fornt-weight: bold;
`;
//create a div container for boxes
let boxContainer=document.createElement("div");
boxContainer.id="boxContainer";
container.appendChild(boxContainer);
boxContainer.style.cssText = `
width: 90%;
height: 600px;
margin: 0 auto;
padding: 10px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
gap: 10px;
`;
// create 9 boxes
for (let i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.className = "box boxs";
    boxContainer.appendChild(box);
}
let boxes = document.querySelectorAll(".boxs");
boxes.forEach(function(box) {
    box.style.cssText = `
        background-color: red;
        border: 2px solid black;
        text-align: center;
        font-size: 150px;
        color: white;
        border-radius: 15px;
    `;
    box.addEventListener("mouseenter", function() {
        if (box.textContent === "" && header.textContent !== "X Wins!" && header.textContent !== "O Wins!") {
            box.style.backgroundColor = "";
        }
        
    });
      box.addEventListener("mouseleave", function() {
         if (box.classList.contains("winner")) return;
            box.style.backgroundColor = "red";
        
    });
});
let role=document.createElement("h3");
role.textContent="X 's Turn";
container.appendChild(role);
role.style.cssText = `
width:200px;
text-align: center;
color: white;
border: 2px solid black;
border-radius: 15px;
padding: 10px;
font-size: 30px;
font-weight: bold;
`;
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (box.textContent !== ""|| header.textContent === "X Wins!" || header.textContent === "O Wins!") return;

        if ( 
            role.textContent === "X's Turn") {
            box.textContent = "X";
            role.textContent = "O's Turn";
        } else {
            box.textContent = "O";
            role.textContent = "X's Turn";
        }
    });
});





// check for winner
function checkWinner() {
    const winners=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < winners.length; i++) {
        const [a, b, c] = winners[i];
        if (boxes[a].textContent !== "" && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            if (boxes[a].textContent === "X") {
                role.textContent = "X Wins!";
                boxes[a].style.backgroundColor = "green";
                boxes[b].style.backgroundColor = "green";
                boxes[c].style.backgroundColor = "green"; 
                if (
                         boxes[a].textContent !== "" &&
                        boxes[a].textContent === boxes[b].textContent &&
                        boxes[a].textContent === boxes[c].textContent
                    ) {
                        boxes[a].classList.add("winner");
                        boxes[b].classList.add("winner");
                        boxes[c].classList.add("winner");
                    
                        return boxes[a].textContent;
                    }
                
            } else {
                role.textContent = "O Wins!";
                boxes[a].style.backgroundColor = "green";
                boxes[b].style.backgroundColor = "green";
                boxes[c].style.backgroundColor = "green"; 
                if (
                        boxes[a].textContent !== "" &&
                        boxes[a].textContent === boxes[b].textContent &&
                        boxes[a].textContent === boxes[c].textContent
                    ) {
                        boxes[a].classList.add("winner");
                        boxes[b].classList.add("winner");
                        boxes[c].classList.add("winner");
                    
                        return boxes[a].textContent;
                    }
                
            }
            

            
            return;
        }
    }
}
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        checkWinner();
    });
});
 



// create a reset button
let resetButton=document.createElement("button");
resetButton.textContent="New Game";
container.appendChild(resetButton);
resetButton.style.cssText = `
width: 150px;
height: 50px;
font-size: 20px;
font-weight: bold;
background-color: blue;
color: white;
border-radius: 15px;
border:none;
`
resetButton.addEventListener("click", function() {
    boxes.forEach(function(box) {
        box.textContent = "";
        box.style.backgroundColor = "red";
        box.classList.remove("winner");
    });
    role.textContent = "O 's Turn";
});