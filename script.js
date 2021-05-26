function validateForm() {
    var x = document.forms["loan"]["amount"].value;
    if (x > 1000000000 || x < 1000000){
        //alert("Invalid Amount.")
        document.getElementById('e1').innerHTML = "Invalid Amount.";
    } else {
        document.getElementById('e1').innerHTML = "";
    }

    var y = document.forms["loan"]["duration"].value;
    if(y > 120 || x < 120){
        //alert("Invalid Duration.")
        document.getElementById('e2').innerHTML = "Invalid Duration.";
    } else {
        document.getElementById('e2').innerHTML = "";
    }

    var z = document.forms["loan"]["rate"].value;
    if(z > 30 || z < 3){
        //alert("Invalid Rate.")
        document.getElementById('e3').innerHTML = "Invalid Rate.";
    } else {
        document.getElementById('e3').innerHTML = "";
    }
}
