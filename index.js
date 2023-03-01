leftOperand = document.getElementById('left-operand');
rightOperand = document.getElementById('right-operand');
result = document.getElementById('result');

leftOperand.addEventListener("input",()=>{
    calcul();
})
rightOperand.addEventListener("input",()=>{
    calcul();
})

function calcul(){
    document.querySelector('#result').textContent = 
        (document.querySelector('#left-operand').value && document.querySelector('#right-operand').value )
        ? parseInt(document.querySelector('#left-operand').value)+parseInt(document.querySelector('#right-operand').value)
        : null
}

calcul()


