var num = 1;
document.getElementsByClassName('items__item-number').innerText=num;

var minus1 = document.getElementById('minus-icon1');

var plus1 = document.getElementById('plus-icon1');


var minus2 = document.getElementById('minus-icon2');

var plus2 = document.getElementById('plus-icon2');

var modal = document.getElementById('modal');

var button = document.querySelector('.order-form__button');

var closeModal = document.getElementById('close');

var form = document.querySelector('.page');

var email = document.getElementById('email');

var phone = document.getElementById('phone');

var name = document.getElementById('name');

var address = document.getElementById('address');

var city = document.getElementById('city');

var countries = document.getElementById('countries').value;
console.log(countries);
var postalCode = document.getElementById('postal-code');
console.log(postalCode);

plus1.onclick = function increase (){
  num = num + 1;
  document.getElementsByClassName('items__item-number').innerText=num;
}

minus1.onclick = function decrease (){
  num = num - 1;
  document.getElementsByClassName('items__item-number').innerText=num;
}


button.onclick = function () {
  modal.style.display = "flex";
  form.classList.add('blur');
}

closeModal.onclick = function () {
  modal.style.display = "none";

  form.classList.remove('blur');
}