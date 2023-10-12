

window.onload = () => {
    const buttons = document.querySelectorAll('.number');
    const screen = document.querySelector('.write');
    const equals = document.querySelector('#btn-eql');
   const clear = document.querySelector('#clear');

    buttons.forEach(button => {
        button.addEventListener('click',(e) =>{
            screen.value += e.target.innerHTML;
        })

    })

    equals.addEventListener('click',(e) =>{
        if(!screen.value){
            screen.value = "Enter value"
        }else{
            screen.value = eval(screen.value);
        }
    })

    clear.addEventListener('click' , () =>{
        screen.value = "";
    })
}