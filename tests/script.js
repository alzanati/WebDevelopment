function clickMe() {
    
    "use strict";
    var x, y, z;
    y = 5;
    z = 5;
    y = y * z;
    x = document.getElementById("num").value;
    if (!x.isEmptyObject) {
        x = x * y;
    }
    document.getElementById("text").innerHTML = "you entered :  " + x;
}

function mult(x, y) {
    "use strict";
    return x * y;
}

function mutiplay() {
    
    "use strict";
    var x, y, z;
    
    x = document.getElementById("num1").value;
    y = document.getElementById("num2").value;
    
    document.getElementById("text").innerHTML = "  = " + mult(x, y);
}

function getElment() {
    "use strict";
    
    var z;
    z = document.getElementById("selection").value;
    document.getElementById("text").innerHTML = "You choose :  " + z;
}