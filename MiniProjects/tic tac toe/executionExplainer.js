// is me vo code likha hai jiska executiom mujhe samjh nahi aaya.


//ssbse pehle iss function ke andar ki loop samjh me nahi aa rahi hai.
/*
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

const checkWin = () => {
    for (const pattern of winpattern) {
        let position1value = btns[pattern[0]].innerHTML
        let position2value = btns[pattern[1]].innerHTML
        let position3value = btns[pattern[2]].innerHTML

        if (position1value !== "" && position2value !== "" && position3value !== "") {
            // if upper and niche vali constion true hongi to winner show vala function call ho jayega/
            if (position1value === position2value && position2value === position3value) {
                // console.log("winner", position1value);
                showWinner(position1value);
            }
            // // if upper vali constion true nahi huyi to matchDraw function call hoga
            // else{
            //     matchDraw()
            // } 
            // // ye upper vala logic to kaam nahi kar raha hai.
        }
    }
}
*/

// so uper valie function ko fir se likhte hai apne tarike se,
// jiske liye pehle ye array chahiye
const winpattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

// now function likhte hai,
// function checkWin(){
//     // iske andar ek loop hai
//     for (const pattern of winpattern) {
//         console.log(pattern)
//     }
// }
// checkWin()

// so itne code se hame pattern vale array ki ek ek value means sab array mil raha hai,
/**
 *  [ 0, 1, 2 ] // direction: ->
    [ 0, 4, 8 ] // direction: \
    [ 0, 3, 6 ] // direction: fisrt column (down) !
    [ 1, 4, 7 ] // direction: 
    [ 2, 4, 6 ] // direction: 
    [ 2, 5, 8 ] // direction: 
    [ 3, 4, 5 ] // direction: 
    [ 6, 7, 8 ] // direction: 
 */

// abhi uss function ko or achhe se likhte hai,
function checkWin(){
    // iske andar ek loop hai
    for (const pattern of winpattern) {
        // console.log(pattern[0])// so ye likhne se hame subarray ka first element mil jata hai
        console.log(pattern[0],pattern[1],pattern[2])// ab ye likhne se hame subarray ke saare elements alag alag mil jate hai.
        // like,
        /**
         * 0 1 2
           0 2 8
           0 3 6
           1 4 7
           2 4 6
           2 5 8
           3 4 5
           6 7 8
           ye dhyan rakhna ki ab ye array ke elements nahi rahe hai ye sab ek alag individual numbers hai.
         */
    }
}
checkWin()


// now abhi, ye jo hamne ek ek karke pehle winpattern se uske subArray nikale then unn subArray ke ndar se number type me saare elements nikale so ye numbers hame vo 9 boxes ke number find karne me help karenge.
// let suppose hamne first box ko click kiya and first boc ka number hame pata hai ki "0" hai so uss box par ya to "O" hoga ys fir "X" hoga. and hame ye value check karni padegi ki box par kya value hai tab ye upper hamne jis tarah se saare array mese number nikal liye hai na vo hame help karenge.
// yaha par hamne first box ko click kiya to uska number hai "0", to jisne bhi 0 number vali pattern hogi usme ye batayega ki "0" vale box ke andar "O" ya "X" me se koi value hai.
// upper hamne number to iss "console.log(pattern[0],pattern[1],pattern[2])" iss line se nikal liye the. 
// so if hamne unn box ke andar ki value dekhni hai to unko hamne JS ke andar "btn" name ke varibale me store kar rakha hai jisme hamne querySelectorAll() ka use kiya hai and function ki argument me "class ka name" pass kiya hai so ab uss btn variable ke andar hame queryselectorall() nodelist return kar raha hai jisme saare box means buttons hai. and ye nodeList means ek type ka array hi hota hai so btn variable me hamare pass ek array ke andar saare buttons hai. 
// and if hame unn button ko alag alag chahiye to hame upper jaise number nikale hai unn number ka use karke konse box me kya hai vo jaan skte hai.
// uske liye hame btn array ko access karna padega joki hame ese kar skte hai "console.log(btn[pattern[0]],btn[pattern[1]],btn[pattern[2]])".


// baaki ka video dekh ke kal likhunga.