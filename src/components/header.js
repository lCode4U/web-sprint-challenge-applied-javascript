const Header = (title, date, temp) => {
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
  const headerObject = { title, date, temp };
  const headerParent = document.querySelectorAll('body');
  const header = document.createElement('div');
  const headerDate = document.createElement('span');
  headerDate.textContent = { date };
  headerDate.classList.add('date');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = {title};
  const headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = {temp};

header.appendChild(headerDate);
header.appendChild(headerTitle);
header.appendChild(headerTemp);
 headerParent.append(header);


}

const headerAppender = (selector) => {
  const selector = document.querySelector('header');
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  Header(newHeader => {
    newHeader = { topics, music, announcements}

  // It should append the header to the element in the DOM that matches the given selector.
  //
  headerParent.appendChild(Header(newHeader))
  
});
}
export { Header, headerAppender }