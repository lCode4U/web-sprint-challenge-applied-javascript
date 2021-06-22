import React from "react";

const entry = document.getElementsByClassName('header-container');
console.log(entry);

const Header = () => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // initiate elements needed for components
  
  const header = document.createElement("div");

  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');
  


  // set up structure of elements to// add proper classnames
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");
  
  



 // manipulating elements
 const headerArray = { date: "June 19th, 2021", title: "Lambda Times", temp: '26'};
debugger

 //appending elements
  
  date.appendChild(header)
  title.appendChild(header)
  temp.appendChild(header)
 
 
  // return the object
return header;

  

  
  
  
}








const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
