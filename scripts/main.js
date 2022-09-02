let myButton = document.querySelector('.submit-button');
let div = document.querySelector('.flex-section');

  myButton.onclick = () => {
    div.innerHTML += 'Congratulations <br> you just signed up <br> Please check your email <br> for more information';
  }
  