
function insert(number){
    document.form.textview.value = document.form.textview.value + number;
}

function equal(){
    var expression = document.form.textview.value;
    if(expression){
        document.form.textview.value = eval(expression);
    }
}

function clearText(){
    document.form.textview.value = "";
}

function backSpace(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
