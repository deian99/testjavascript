const myCalculator = document.querySelector('#my-calculator')
const FirstNumber = document.querySelector('#stNumber')
const SecondNumber = document.querySelector('#ndNumber')
const message = document.querySelector('.msg')
const results = document.querySelector('#rezultate')

/*function calculInmultire(Number, Number) {
    var result = Number * Number;
    return result;
}

 */

//var calculeaza = calculInmultire(12, 12);
//alert(calculeaza);


myCalculator.addEventListener('submit', onCalculate)

function onCalculate(e) {
    e.preventDefault();


    if (FirstNumber.value === '' || SecondNumber.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Error: Please enter all fields';
        setTimeout(removeFromDOM, 3500);
    }

    else {
        calcul = FirstNumber.value * SecondNumber.value;
        console.log(calcul);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`The result of ${FirstNumber.value} x ${SecondNumber.value} is ${calcul}`))

        results.appendChild(li)

        FirstNumber.value = null;
        SecondNumber.value = null;

    }
    if(isNaN(calcul)) {
        message.classList.add('error')
        message.innerHTML = 'Error: Please enter numbers only'
        setTimeout(removeFromDOM, 3500)

    }


}

function removeFromDOM() {
    message.remove();
}