let mybutton = document.querySelector('submit-button');
function setUserName() {
  const myName = prompt('Please enter your account.');
  const myName2 = prompt('Please enter your password.');
}

mybutton.onclick = () => {
    setUserName();
  }