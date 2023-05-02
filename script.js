const priceInput = document.querySelectorAll('.price_input')

const fifty = document.querySelectorAll('.fifty')
const twoHundredSixtyNine = document.querySelectorAll('.two_hundred_sixty_nine');
const threeHundred = document.querySelectorAll('.three_hundred')
const threeHundredFifty = document.querySelectorAll('.three_hundred_fifty')
const thousand = document.querySelectorAll('.thousand')
const fourThousandTwoHundred = document.querySelectorAll('.four_thousand_two_hundred')

const selectMl = document.querySelectorAll('.sel_ml')

var lastIndex = 0;

function Calculate(event) {
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
    const div = createElement('div');
    const selectBrand = createSelectBrand();
    
    const selectMl = createSelectMl();
    
    const input = createElement('input');
    const labelA = createElement('label');
    const labelB = createElement('label');
    const labelC = createElement('label');
    const labelD = createElement('label');
    const labelE = createElement('label');
    const labelF = createElement('label');


    /*<div>
                <select>
                    <option value="Antartica">Antartica</option>
                </select>
                <select data-index="1" class="sel_ml">
                    <option value="269">269</option>
                    <option value="300" selected>300</option>
                    <option value="350">350</option>
                    <option value="1000">1000</option>
                    <option value="4200">4200</option>
                </select>
                <input data-index="1" class="price_input" type="text" oninput="Calculate(event)">
                <label data-index="1" class="fifty">0,00</label>
                <label data-index="1" class="two_hundred_sixty_nine">0,00</label>
                <label data-index="1" class="three_hundred">0,00</label>
                <label data-index="1" class="three_hundred_fifty">0,00</label>
                <label data-index="1" class="thousand">0,00</label>
                <label data-index="1" class="four_thousand_two_hundred">0,00</label>
            </div>*/
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