const form = document.querySelector('.form');
const binary = document.querySelector('#binary')
console.log(binary)



// FUNCTION TO CHANGE THE COMPORTAMENT FROM SUBMIT FORM
function changeBehavior(event){
    event.preventDefault();
}

function calcBinary(value) {
    let index = 0;
    let soma = 0;
    for(let i = value.length -1; i >= 0; i--){
        soma += value[i] * Math.pow(2, index);
        index++;
    }
    return soma;
}

function returnValue(){
    let valueBin = binary.value;
    const decimal = document.querySelector('#decimal');
    decimal.value = (calcBinary(valueBin))
    
    
}


// Listerners 
form.addEventListener('submit', changeBehavior);
binary.addEventListener('input', function(){
    let size = binary.value.length - 1;
    if(binary.value[size] !== '0' && binary.value[size] !== '1' ){
        if(binary.value[size] !== undefined){
            binary.value = binary.value.slice(0, size)
            alert('Type only 0 or 1!')
        }

    }
})
