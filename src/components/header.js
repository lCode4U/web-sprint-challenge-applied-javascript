import {render} from 'react-dom'
import React from "React";





const entry = document.getElementsByClassName('.header-container');


const Header = (headerProp) => {
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

 

  const { date, title, temp } = headerProp;
    const header = document.createElement('div');


 
    // set up structure of elements to// add proper classnames
    date.classList.add('date');
    title.classList.add('title');
    temp.classList.add('temp');
  



    // manipulating elements
    date.textContent = 'June 23, 2021';
    title.textContent = 'Lambd Times';
    temp.textContent = '26';
   
    //appending elements
 
    new Array(header)
  header.forEach(element => {
      return element.append(header);
    })

    // return the object
  return Header 

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
