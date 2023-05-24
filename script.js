const container = document.querySelector('.container');

const inputB = document.querySelector('#input-b');
const inputC = document.querySelector('#input-c');
const inputD = document.querySelector('#input-d');
const inputE = document.querySelector('#input-e');
const inputF = document.querySelector('#input-f');

var priceInput = document.querySelectorAll('.price_input')
var fifty = document.querySelectorAll('.fifty')
var labelB = document.querySelectorAll('.label_b');
var labelC = document.querySelectorAll('.label_c')
var labelD = document.querySelectorAll('.label_d')
var labelE = document.querySelectorAll('.label_e')
var labelF = document.querySelectorAll('.label_f')

var lastIndex = 0;

function Calculate(event) {
    // To catch the elements created with javascript
    selectMl = document.querySelectorAll('.sel_ml')
    priceInput = document.querySelectorAll('.price_input')
    fifty = document.querySelectorAll('.fifty')
    labelB = document.querySelectorAll('.label_b');
    labelC = document.querySelectorAll('.label_c')
    labelD = document.querySelectorAll('.label_d')
    labelE = document.querySelectorAll('.label_e')
    labelF = document.querySelectorAll('.label_f')


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
        
        price = price.replaceAll(',', '.');
        const fiftyMlCost = (Number(price)/(Number(selectMl[index].value)/50));
        fifty[index].innerHTML = fiftyMlCost.toFixed(3);

        labelB[index].innerHTML = CalculateValueMl(fiftyMlCost, inputB.value);
        labelC[index].innerHTML = CalculateValueMl(fiftyMlCost, inputC.value);
        labelD[index].innerHTML = CalculateValueMl(fiftyMlCost, inputD.value);
        labelE[index].innerHTML = CalculateValueMl(fiftyMlCost, inputE.value);
        labelF[index].innerHTML = CalculateValueMl(fiftyMlCost, inputF.value);
    }
}

function CalculateValueMl(fifty_ml_cost, selected_ml) {
    return (fifty_ml_cost*(Number(selected_ml)/50)).toFixed(2);
}

function addChangeListenerSelectMl() {
    const selectMl = document.querySelectorAll('.sel_ml')
    const priceInput = document.querySelectorAll('.price_input');
    selectMl.forEach(element => {
        element.addEventListener('input', () => {
            Calculate(priceInput[Number(element.dataset.index)]);
        })
    });
}

addChangeListenerSelectMl();

function addLineBeer(){
    lastIndex++;

    const div = document.createElement('div');
    const selectBrand = document.createElement('input');//createSelectBrand();
    
    const selectMl = document.createElement('input');//createSelectMl();
    selectMl.setAttribute('type', 'number')
    setIndexAndClass(selectMl, lastIndex, 'sel_ml');
    
    const input = document.createElement('input');
    setIndexAndClass(input, lastIndex, 'price_input');
    input.setAttribute('oninput', 'Calculate(event)');

    const labelA = document.createElement('label');
    setIndexAndClass(labelA, lastIndex, 'fifty', '0,00');

    const labelB = document.createElement('label');
    setIndexAndClass(labelB, lastIndex, 'label_b', '0,00');

    const labelC = document.createElement('label');
    setIndexAndClass(labelC, lastIndex, 'label_c', '0,00');

    const labelD = document.createElement('label');
    setIndexAndClass(labelD, lastIndex, 'label_d', '0,00');

    const labelE = document.createElement('label');
    setIndexAndClass(labelE, lastIndex, 'label_e', '0,00');

    const labelF = document.createElement('label');
    setIndexAndClass(labelF, lastIndex, 'label_f', '0,00');

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
    addChangeListenerSelectMl();

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
    button.setAttribute('onclick', 'addLineBeer()');
    button.classList.add('material-symbols-outlined');
    button.innerHTML = 'add';

    newButtonContainer.appendChild(button);
    container.appendChild(newButtonContainer);
}

//teste
