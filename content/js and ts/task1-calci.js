let result=0;
const input=document.getElementById('input');
const finalResult=document.getElementById('output');

function add()
{
    result+=parseInt(input.value);
    finalResult.innerText=result;
}

function subtract()
{
    result-=parseInt(input.value);
    finalResult.innerText=result;
}
function multiply()
{
    result*=parseInt(input.value);
    finalResult.innerText=result;
}
function divide()
{
    result/=parseInt(input.value);
    finalResult.innerText=result;
}


document.getElementById('sum').addEventListener('click',add);
document.getElementById('minus').addEventListener('click',subtract);
document.getElementById('mul').addEventListener('click',multiply);
document.getElementById('div').addEventListener('click',divide);

