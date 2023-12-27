/** Description :
 // In this file I've learn more about Objects.
 * - Object Using Constructor 
 * - Creating Nested Object
 * - Merging Object's
 *      1) using Object.assign()
 *      2) using Sprad Operator
 * - Accessing Object's key and value using Object.key() and Object.value()
 * - Using Object.entries() to see all entries of Object.
 * - Used Object.hasOwnProperty() to check, key is persent in object or not
 * - Destructuring of Object
 * - Short about JSON API
 */

//------------------------------------------------------------//
//          Creating Object Using Constructor
//------------------------------------------------------------//
 
// const obj = new Object(); // but this object is singleton object

// console.log(obj); // output : {} (empty object)

// const tinderUser = {}

// we can add multiple key and assign value to it with dot '.' 
// tinderUser.id = "123"
// tinderUser.name = "Manav"
// tinderUser.isLogedIn = false

// console.log(tinderUser);

//************************************************************//

//------------------------------------------------------------//
//                  creating Nested Object
//------------------------------------------------------------//

// const regularUser = {
//     email : "manav@gmail.com",
//     fullName : {
//         fname : "karan",
//         lname : "chavda",
//         education : {
//             college : "GECM",
//             school : "Vivekanand"
//         }
//     }
// }

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.education);


//************************************************************//

//------------------------------------------------------------//
//              Merging of multiple Object's
//------------------------------------------------------------//
// Merging of multiple Object's
/**
 * there are thwo type of merging of objects : 
 *  1) using Object.assign() method
 *  2) using Spred Operator
 */


//------------------------------------------------------------//
//          1) using Object.assign() method
//------------------------------------------------------------//
/**
 * - in this method all object assign in tergeted object from resource objects
 * - Object.assign(target, obj(source1), obj(source2))
 * - Object.assign() always returns an object 
 */

// const obj1 = {a:1,b:2}
// const obj2 = {c:4,d:5}

// const obj3 = Object.assign(obj1,obj2) 
// // here obj1 is target and obj2 is source, so that values of obj2 is assign in obj1 and it will store in obj3
// console.log(obj3); // output : { a: 1, b: 2, c: 4, d: 5 }

// const obj3 = Object.assign({}, obj1, obj2)
// // here "{}" empty_object is target and obj1 & obj2 are source, so that values of obj1 & obj2 is assign in empty_obj and it will store in obj3
// console.log(obj3); // output : { a: 1, b: 2, c: 4, d: 5 }

//------------------------------------------------------------//
//                  2) using Sprad Operator
//------------------------------------------------------------//

// const obj1 = {a:1,b:2}
// const obj2 = {c:4,d:5}

// const obj3 = {...obj1, ...obj2}
// console.log(obj3); // output : { a: 1, b: 2, c: 4, d: 5 }

//************************************************************//

//------------------------------------------------------------//
/**
* Accessing Object's key using Object.key() method
*   and Object's value using Object.value() method 
* which will return array
*/

//************************************************************//

//------------------------------------------------------------//
//                  Accessing Object's key
//------------------------------------------------------------//

// const tinderUser = {}
// tinderUser.id = "123"
// tinderUser.name = "Manav"
// tinderUser.isLogedIn = false

// console.log(Object.keys(tinderUser)); // output : [ 'id', 'name', 'isLogedIn' ]

//------------------------------------------------------------//
//                 Accessing Object's values
//------------------------------------------------------------//

// const tinderUser = {}
// tinderUser.id = "123"
// tinderUser.name = "Manav"
// tinderUser.isLogedIn = false

// console.log(Object.values(tinderUser)); // output : [ '123', 'Manav', false ]


//------------------------------------------------------------//
//                      Object.entries()
//------------------------------------------------------------//
/**
* Object.entries() will returns all entries within arrays and this array bounded in another array.
*/

// const tinderUser = {}
// tinderUser.id = "123"
// tinderUser.name = "Manav"
// tinderUser.isLogedIn = false

// console.log(Object.entries(tinderUser)); // output : [ [ 'id', '123' ], [ 'name', 'Manav' ], [ 'isLogedIn', false ] 

//------------------------------------------------------------//
//                 Object.hasOwnProperty()
//------------------------------------------------------------//
/**
* this method is used to check the key we passed as parameter in method is Present in object or not.
* - returns boolean value : false or ture
*/

// const tinderUser = {}
// tinderUser.id = "123"
// tinderUser.name = "Manav"
// tinderUser.isLogedIn = false

// console.log(Object.hasOwnProperty('name')); // output : true
// console.log(Object.hasOwnProperty('Uname')); // output : false

//************************************************************//

//------------------------------------------------------------//
//                  Destructuring of Object
//------------------------------------------------------------//
/**
 * Destructuring of Object means suppose
 *   if we are using "course.courseTeacher" often but
 *   we don't want to use this big name "course.courseTeacher" and we are frusteted sing this 
 *   big name and we wanted to minimise this big name so "Destructuring of Object" come to play.
 * in Destructuring of Object we just assign or use a short name for "course.courseTeacher" instead of using 
 *   whole "course.courseTeacher", this is called Destructuring of Object.
 */
// const course = {
//     courseName : "JS in hindi",
//     coursePrice : 299,
//     courseTeacher : "Hitesh Choudhary"
// }

/**
 * arter writing below statement we don't need to write "course.courseTeacher".
 * we can just simply use "courseTeacher" instead of "course.courseTeacher".
 */
// const {courseName,coursePrice,courseTeacher} = course
// console.log(courseName);
// console.log(coursePrice);
// console.log(courseTeacher);

/**
 * now we don't even need to write "courseTeacher" because 
 *   we rename "courseTeacher" to "Teacher".
 * we can just simply use "Teacher" instead of "courseTeacher".
 */
// const {courseName: cname,coursePrice: price,courseTeacher: Teacher} = course
// console.log(cname);
// console.log(price);
// console.log(Teacher);

//************************************************************//

//------------------------------------------------------------//
//                          JSON API
//------------------------------------------------------------//

/**
 * JSON stands for JavaScript Object Notation.
 * JSON API is nothing but an Object.
 */

// this is our JSON, just an object, it can be represent by curly breckets or square breckets
// {
//     "name" : "karan",
//     "course" : "JS hondi"
// }

// [
//     {},
//     {},
//     {}
// ]


//------------------------------------------------------------//
//                  API of my github account
//------------------------------------------------------------//
/**
 * {
  "login": "satyam-chauhan-21",
  "id": 118276154,
  "node_id": "U_kgDOBwzAOg",
  "avatar_url": "https://avatars.githubusercontent.com/u/118276154?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/satyam-chauhan-21",
  "html_url": "https://github.com/satyam-chauhan-21",
  "followers_url": "https://api.github.com/users/satyam-chauhan-21/followers",
  "following_url": "https://api.github.com/users/satyam-chauhan-21/following{/other_user}",
  "gists_url": "https://api.github.com/users/satyam-chauhan-21/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/satyam-chauhan-21/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/satyam-chauhan-21/subscriptions",
  "organizations_url": "https://api.github.com/users/satyam-chauhan-21/orgs",
  "repos_url": "https://api.github.com/users/satyam-chauhan-21/repos",
  "events_url": "https://api.github.com/users/satyam-chauhan-21/events{/privacy}",
  "received_events_url": "https://api.github.com/users/satyam-chauhan-21/received_events",
  "type": "User",
  "site_admin": false,
  "name": "SATYAM CHAUHAN",
  "company": null,
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Always redy to learn something new...",
  "twitter_username": "Satyam_as_21",
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-11-15T12:44:01Z",
  "updated_at": "2023-12-23T12:35:39Z"
}
 */