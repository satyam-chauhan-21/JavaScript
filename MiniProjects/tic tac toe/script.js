/**
 * this code is not working for winning pattern [ 0, 4, 8].
 * and there is no Drow method. so write code for drow method.
 *
 * https://g.co/bard/share/488ab0d1d3ac
 */

let btns = document.querySelectorAll(".btn")
// console.log(btns);
let resetBtn = document.querySelector("#reset-btn")
let newgameBtn = document.querySelector("#newgame")
let winMsg = document.querySelector("#result-box")
// count is used for checking drow condition
let count = 0;


// we have two players : playerX, playerO
let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 2, 4],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true
    enableBoxes();
    winMsg.style.display = "none"
}

// below function is written for enable button boxes after pressing reset or newgame button
const enableBoxes = () => {
    for (const box of btns) {
        box.disabled = false;
        box.innerHTML = ""
    }
}

/**
 * here we add foreach() method on btns because it's an array of buttons which have class ".btn".
 *      then we add a callback arrow function with parameter "box", and this parameter "box" iterate one by one all buttons
 *      then we add an eventListner on this "box".
 */
btns.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked");
        if (turnO) {
            box.innerText = "O"
            box.style.color = "red"
            turnO = false
        }
        else {
            box.innerText = "X"
            box.style.color = "green"
            turnO = true
        }
        box.disabled = true

        count = count + 1;
        checkWin();
    })
})

// //------------------------------------------------------------//
// //          Solving tic tac toe's 2D array confution
// //------------------------------------------------------------//
// // I'm solving this for below loop execution confution
// /**
//  * In Tic Tac Toe there are total 8 pattern or combination of boxes in which ,
//  *      when same symbol occur so the player of that symbol win the match.
//  * there total 9 boxes and I have count these boxes from 0 to 8.
//  * 
//  * |-----------|----------|----------|
//  * |     0     |    1     |     2    |
//  * |-----------|----------|----------|
//  * |     3     |    4     |     5    |
//  * |-----------|----------|----------|
//  * |     6     |    7     |     8    |
//  * |-----------|----------|----------| 
//  * 
//  * so i am storing that combination of winnig patterns in an array.
//  *      like,
//  *  row patterns: 1st pattern:- [0,1,2]
//  *                2st pattern:- [3,4,5]
//  *                3st pattern:- [6,7,8]
//  *  column patterns: 4st pattern:- [0,3,6]
//  *                   5st pattern:- [1,4,7]
//  *                   6st pattern:- [2,5,8]
//  *  diagonal patterns: 7st pattern:- [0,1,2]
//  *                     8st pattern:- [0,1,2]
//  * 
//  */

// // const checkWin = () => {
// //     for (const pattern of winpattern) {
// //         console.log(pattern);
// //         // console.log(btns[pattern[0]],btns[pattern[1]],btns[pattern[2]]);
// //     }
// // }
// // checkWin()
// // /**
// //  * by runnig above code i've got this output.
// //  * output : 
// //  * [ 0, 1, 2 ]
// //    [ 0, 2, 4 ]
// //    [ 0, 3, 6 ]
// //    [ 1, 4, 7 ]
// //    [ 2, 4, 6 ]
// //    [ 2, 5, 8 ]
// //    [ 3, 4, 5 ]
// //    [ 6, 7, 8 ]
// //  */


// /**
//  * using below forOF() loop i'm printing elements inside of each array.
//  * here "pattern" refers to each sub array in side the winpatterns array.
//  * by using "pattern" we can access each subarray inside of the winpatterns array.
//  *  - now if we write like this "pattern[index_of_subarray]" we can access values inside of each subarray one by one when loop iterate.
//  *      - for example : pattern[0] will print first subarray's first element. (here, which is 0) 
//  *                      pattern[1] will print second subarray's first element. (here, which is 1) 
//  *                      pattern[2] will print third subarray's first element. (here, which is 2) 
//  * now loop value increase pattern points to second sub array,
//  *      - for example : pattern[0] will print first subarray's first element. (here, which is 0) 
//  *                      pattern[1] will print second subarray's first element. (here, which is 2) 
//  *                      pattern[2] will print third subarray's first element. (here, which is 4) 
//  */
// // const checkWin = () => {
// //     for (const pattern of winpattern) {
// //         console.log(pattern[0],pattern[1],pattern[2]);
// //         // console.log(btns[pattern[0]],btns[pattern[1]],btns[pattern[2]]);
// //     }
// // }
// // checkWin()

// this loop explain about how we get position of btn and then its value
// const checkWin = () => {
//     for (const pattern of winpattern) {
//         console.log(pattern[0], pattern[1], pattern[2]);
//         console.log(
//             btns[pattern[0]].innerHTML,
//             btns[pattern[1]].innerHTML,
//             btns[pattern[2]].innerHTML
//         );

//         let position1value = btns[pattern[0]].innerText;
//         let position2value = btns[pattern[1]].innerText;
//         let position3value = btns[pattern[2]].innerText;
//     }
// }


// below function is written for disable button boxes after winning the match
const disableBoxes = () => {
    for (const box of btns) {
        box.disabled = true;
    }
}



// below function is written for showing winner
const showWinner = (winner) => {
    winMsg.style.display = "block"
    winMsg.innerHTML = `Winner is    ${winner}`
    disableBoxes();
}

// this is my checkwin function
const checkWin = () => {
    for (const pattern of winpattern) {
        let position1value = btns[pattern[0]].innerHTML
        let position2value = btns[pattern[1]].innerHTML
        let position3value = btns[pattern[2]].innerHTML

        if (position1value !== "" && position2value !== "" && position3value !== "") {
            if (position1value === position2value && position2value === position3value) {
                // console.log("winner", position1value);
                showWinner(position1value);
            }
        }
    }
}

// // this is bardAI's updated checkwin function
// const checkWin = () => {
//     let showWinnerCalled = false; // Flag to avoid redundant calls
  
//     for (const pattern of winpattern) {
//       let position1value = btns[pattern[0]].innerHTML;
//       let position2value = btns[pattern[1]].innerHTML;
//       let position3value = btns[pattern[2]]; // Corrected from pattern[3]
  
//       if (
//         position1value !== "" &&
//         position2value !== "" &&
//         position3value !== ""
//       ) {
//         if (
//           position1value === position2value &&
//           position2value === position3value
//         ) {
//           showWinner(position1value);
//           showWinnerCalled = true; // Set flag
//           break; // Exit the loop if a winner is found
//         }
//       }
//     }
  
//     if (!showWinnerCalled) {
//       checkDraw();
//     }
//   };
  

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);