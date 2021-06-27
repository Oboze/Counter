let counter=0;
const displayArea=document.getElementById('display');
displayArea.textContent=counter;
const buttons=document.querySelectorAll('.btn');// returns nodelist of buttons
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        currentTarget=e.currentTarget.classList;
        console.log(currentTarget);
        if (currentTarget.contains('increment')){
            displayArea.textContent=++counter; 
        }else if (currentTarget.contains('decrement')){
            displayArea.textContent=--counter;
        }else if (currentTarget.contains('reset')){
            counter=0;
            displayArea.textContent=counter;
        }
    });// end of event listener
});//end of forEach array function