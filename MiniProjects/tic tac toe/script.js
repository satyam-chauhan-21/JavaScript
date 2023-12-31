let btns = document.querySelectorAll(".btn")
let resetBtn = document.querySelector("#reset-btn")


// we have two players : playerX, playerO
let turnO = true;

const winPettern = [
    [0, 1, 2],
    [0, 2, 4],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]


/**
 * here we add foreach() method on btns because it's an array of buttons which have class ".btn".
 *      then we add a callback arrow function with parameter "box", and this parameter "box" iterate one by one all buttons
 *      then we add an eventListner on this "box".
 */
btns.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerHTML = "O"
            box.st
            turnO = false
        }
        else
        {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true

        checkWin();
    })
})

//------------------------------------------------------------//
//          Solving tic tac toe's 2D array confution
//------------------------------------------------------------//
// I'm solving this for below loop execution confution
/**
 * In Tic Tac Toe there are total 8 pettern or combination of boxes in which ,
 *      when same symbol occur so the player of that symbol win the match.
 * there total 9 boxes and I have count these boxes from 0 to 8.
 * 
 * |-----------|----------|----------|
 * |     0     |    1     |     2    |
 * |-----------|----------|----------|
 * |     3     |    4     |     5    |
 * |-----------|----------|----------|
 * |     6     |    7     |     8    |
 * |-----------|----------|----------| 
 * 
 * so i am storing that combination of winnig petterns in an array.
 *      like,
 *  row petterns: 1st pettern:- [0,1,2]
 *                2st pettern:- [3,4,5]
 *                3st pettern:- [6,7,8]
 *  column petterns: 4st pettern:- [0,3,6]
 *                   5st pettern:- [1,4,7]
 *                   6st pettern:- [2,5,8]
 *  diagonal petterns: 7st pettern:- [0,1,2]
 *                     8st pettern:- [0,1,2]
 * 
 */

// const checkWin = () => {
//     for (const pettern of winPettern) {
//         console.log(pettern);
//         // console.log(btns[pettern[0]],btns[pettern[1]],btns[pettern[2]]);
//     }
// }
// checkWin()
// /**
//  * by runnig above code i've got this output.
//  * output : 
//  * [ 0, 1, 2 ]
//    [ 0, 2, 4 ]
//    [ 0, 3, 6 ]
//    [ 1, 4, 7 ]
//    [ 2, 4, 6 ]
//    [ 2, 5, 8 ]
//    [ 3, 4, 5 ]
//    [ 6, 7, 8 ]
//  */


/**
 * using below forOF() loop i'm printing elements inside of each array.
 * here "pettern" refers to each sub array in side the winPetterns array.
 * by using "pettern" we can access each subarray inside of the winPetterns array.
 *  - now if we write like this "pettern[index_of_subarray]" we can access values inside of each subarray one by one when loop iterate.
 *      - for example : pettern[0] will print first subarray's first element. (here, which is 0) 
 *                      pettern[1] will print second subarray's first element. (here, which is 1) 
 *                      pettern[2] will print third subarray's first element. (here, which is 2) 
 * now loop value increase pettern points to second sub array,
 *      - for example : pettern[0] will print first subarray's first element. (here, which is 0) 
 *                      pettern[1] will print second subarray's first element. (here, which is 2) 
 *                      pettern[2] will print third subarray's first element. (here, which is 4) 
 */
// const checkWin = () => {
//     for (const pettern of winPettern) {
//         console.log(pettern[0],pettern[1],pettern[2]);
//         // console.log(btns[pettern[0]],btns[pettern[1]],btns[pettern[2]]);
//     }
// }
// checkWin()


const checkWin = () => {
    for (const pettern of winPettern) {
        console.log(pettern[0],pettern[1],pettern[2]);
        // console.log(btns[pettern[0]],btns[pettern[1]],btns[pettern[2]]);
    }
}