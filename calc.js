function displayData(num){
    summary.value = summary.value + num
}
function allClear(){
    summary.value=''
}

function evaluateEx(){
    summary.value = eval(summary.value)
}
function backSpace(){
    summary.value = summary.value.slice(0,-1)
}