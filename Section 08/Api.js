

// const requestUrl = 'https://api.github.com/users/hiteshchoudhary' // API link
// const xhr = new XMLHttpRequest() // Creating
// xhr.open('GET', requestUrl) 
// console.log("here")
// // console.log(xhr.readyState)
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState) 
//     if(xhr.readyState === 4){
//         const api = this.responseText // getting whole api
//         const apiData = JSON.parse(api)  // convert from string into number
//         console.log(typeof apiData)
//         console.log(apiData.followers)
//     }
// } 
// xhr.send()

/*
XMLHttpRequest() : Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
new XMLHttpRequest()  : making an object from it
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.



The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

Value 	State 	            Description
0 	    UNSENT 	            Client has been created. open() not called yet.
1 	    OPENED 	            open() has been called.
2 	    HEADERS_RECEIVED 	send() has been called, and headers and status are available.
3 	    LOADING 	        Downloading; responseText holds partial data.
4 	    DONE 	            The operation is complete.


UNSENT:
    The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

OPENED:
    open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

HEADERS_RECEIVED:
    send() has been called, all redirects (if any) have been followed and the response headers have been received.

LOADING:
    Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

DONE:
    The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.


EXAMPLE:
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("Type of request", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);

*/

// const xhr2 = new XMLHttpRequest();
// console.log("UNSENT", xhr2.readyState); // readyState will be 0

// xhr2.open("GET", "https://api.github.com/users/hiteshchoudhary", true);
// console.log("OPENED", xhr2.readyState); // readyState will be 1

// xhr2.onprogress = () => {
//   console.log("LOADING", xhr2.readyState); // readyState will be 3
// };

// xhr2.onload = () => {
//   console.log("DONE", xhr2.readyState); // readyState will be 4
// };

// xhr2.send(null);

// OR 

const requestApi = 'https://api.github.com/users/hiteshchoudhary'
const xhr3 = new XMLHttpRequest()
console.log(xhr3.readyState) // 0  UNSENT
xhr3.open('GET', requestApi)
console.log(xhr3.readyState) // 1  OPENED
xhr3.onreadystatechange = function(){
    console.log(xhr3.readyState)

    // console.log(this.responseText)
    const object = JSON.parse(this.responseText) // converting to JSON
    // console.log(typeof object)
    console.log('name: ', object.name)
    console.log('login: ', object.login)
    console.log('id: ', object.id)
    console.log('followers: ', object.followers)
    console.log('url: ', object.url)
    console.log('location: ', object.location)
}
xhr3.send()