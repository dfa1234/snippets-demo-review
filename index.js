import './style.css';

const appDiv = document.getElementById('border-div-id');
appDiv.addEventListener('click', function () {
  console.log(this);
  this.style.borderWidth = `${Math.random() * 30}px ${Math.random() * 30}px ${
    Math.random() * 30
  }px ${Math.random() * 30}px`;
});
