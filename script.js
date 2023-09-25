function appendToDisplay(value){
    Document.getElementById('display').value +=value;
}
function appendToDisplay(value){
    document.getElementById('display').value += '';
}
function appendToDisplay(value){
    var result = eval(document.getElementById('display').value);
    Document.getElementById('display').value = result;
}