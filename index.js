const inputwala = document.getElementById('input')

// add karega input me value or ek string banayega
function jordo(kuch){
    inputwala.value += kuch
}
// for clearing the previous value
function clearme(){
    inputwala.value = ''
}

// for calculating all value
function resultall(){
    try{
    inputwala.value = eval(inputwala.value)
    }
    catch(error){
        inputwala.value = 'Error'
    }
}