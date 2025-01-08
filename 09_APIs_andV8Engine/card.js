// api.js me hamne jo bhi sikh hai usse ham ek iCard type kuch banate hai.

// so first let's get the all data from github users API.



const xhr = new XMLHttpRequest()
const requestURL = 'https://api.github.com/users/hiteshchoudhary'
xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText)
        
        document.querySelector('img').src = data.avatar_url
        document.querySelector('h1').innerHTML = data.name
        document.querySelector('h3').innerHTML = data.bio
        document.querySelector('#first').innerHTML = data.followers
        document.querySelector('#second').innerHTML = data.following
    }
}
xhr.send()