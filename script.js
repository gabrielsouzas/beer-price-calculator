const container = document.querySelector('.container');

var priceInput = document.querySelectorAll('.price_input')
var fifty = document.querySelectorAll('.fifty')
var twoHundredSixtyNine = document.querySelectorAll('.two_hundred_sixty_nine');
var threeHundred = document.querySelectorAll('.three_hundred')
var threeHundredFifty = document.querySelectorAll('.three_hundred_fifty')
var thousand = document.querySelectorAll('.thousand')
var fourThousandTwoHundred = document.querySelectorAll('.four_thousand_two_hundred')

var selectMl = document.querySelectorAll('.sel_ml')

var lastIndex = 0;

function Calculate(event) {
    // To catch the elements created with javascript
    selectMl = document.querySelectorAll('.sel_ml')
    priceInput = document.querySelectorAll('.price_input')
    fifty = document.querySelectorAll('.fifty')
    twoHundredSixtyNine = document.querySelectorAll('.two_hundred_sixty_nine');
    threeHundred = document.querySelectorAll('.three_hundred')
    threeHundredFifty = document.querySelectorAll('.three_hundred_fifty')
    thousand = document.querySelectorAll('.thousand')
    fourThousandTwoHundred = document.querySelectorAll('.four_thousand_two_hundred')


    if (event) {
        var price = 0;
        var index = 0;
        if (event.target === undefined) {
            price = event.value;
            index = Number(event.dataset.index)
        } else {
            price = event.target.value;
            index = Number(event.target.dataset.index);
        }
        
        const fiftyMlCost = (Number(price)/(Number(selectMl[index].value)/50));
        fifty[index].innerHTML = fiftyMlCost.toFixed(3);

        twoHundredSixtyNine[index].innerHTML = CalculateValueMl(fiftyMlCost, 269);
        threeHundred[index].innerHTML = CalculateValueMl(fiftyMlCost, 300);
        threeHundredFifty[index].innerHTML = CalculateValueMl(fiftyMlCost, 350);
        thousand[index].innerHTML = CalculateValueMl(fiftyMlCost, 1000);
        fourThousandTwoHundred[index].innerHTML = CalculateValueMl(fiftyMlCost, 4200);
    }
}

function CalculateValueMl(fifty_ml_cost, selected_ml) {
    return (fifty_ml_cost*(Number(selected_ml)/50)).toFixed(2);
}

selectMl.forEach(element => {
    element.addEventListener('change', () => {
        Calculate(priceInput[Number(element.dataset.index)]);
    })
});

function addLineBeer(){
    lastIndex++;

    const div = document.createElement('div');
    const selectBrand = createSelectBrand();
    
    const selectMl = createSelectMl();
    setIndexAndClass(selectMl, lastIndex, 'sel_ml');
    
    const input = document.createElement('input');
    setIndexAndClass(input, lastIndex, 'price_input');
    input.setAttribute('oninput', 'Calculate(event)');

    const labelA = document.createElement('label');
    setIndexAndClass(labelA, lastIndex, 'fifty', '0,00');

    const labelB = document.createElement('label');
    setIndexAndClass(labelB, lastIndex, 'two_hundred_sixty_nine', '0,00');

    const labelC = document.createElement('label');
    setIndexAndClass(labelC, lastIndex, 'three_hundred', '0,00');

    const labelD = document.createElement('label');
    setIndexAndClass(labelD, lastIndex, 'three_hundred_fifty', '0,00');

    const labelE = document.createElement('label');
    setIndexAndClass(labelE, lastIndex, 'thousand', '0,00');

    const labelF = document.createElement('label');
    setIndexAndClass(labelF, lastIndex, 'four_thousand_two_hundred', '0,00');

    div.appendChild(selectBrand);
    div.appendChild(selectMl);
    div.appendChild(input);
    div.appendChild(labelA);
    div.appendChild(labelB);
    div.appendChild(labelC);
    div.appendChild(labelD);
    div.appendChild(labelE);
    div.appendChild(labelF);

    container.appendChild(div);

    removeAndAddButton();

}

function setIndexAndClass(element, index, class_name = '', text = '') {
    if (class_name) {
        element.classList.add(class_name);
    }
    if (text) {
        element.innerHTML = text;
    }
    element.setAttribute('data-index', `${index}`);
}

const createSelectMl = () => {
    const options = `
        <option value="269">269</option>
        <option value="300" selected>300</option>
        <option value="350">350</option>
        <option value="1000">1000</option>
        <option value="4200">4200</option>
    `;

    const select = createElement('select', '', options);
    
    return select;
}

const createSelectBrand = () => {
    const options = `
        <option value="Antartica">Antartica</option>
        <option value="Skol">Skol</option>
        <option value="Brahma">Brahma</option>
        <option value="Sub-Zero">Sub-Zero</option>
        <option value="Budweiser">Budweiser</option>
        <option value="Stella Artois">Stella Artois</option>
        <option value="Burguesa">Burguesa</option>
        <option value="Conti">Conti</option>
        <option value="Amstel">Amstel</option>
    `;

    const select = createElement('select', '', options);
    
    return select;
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    
    if (innerText) {
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}


function removeAndAddButton() {
    const buttonContainer = document.querySelector('.button-container');
    buttonContainer.remove();

    const newButtonContainer = document.createElement('div');
    newButtonContainer.classList.add('button-container');

    const button = document.createElement('button');
    button.setAttribute('id', 'btn-add');
    button.classList.add('material-symbols-outlined');
    button.innerHTML = 'add';

    newButtonContainer.appendChild(button);
    container.appendChild(newButtonContainer);
}

const btnAdd = document.querySelector('#btn-add');

btnAdd.addEventListener('click', addLineBeer);