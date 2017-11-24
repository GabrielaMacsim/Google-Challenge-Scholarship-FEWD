function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}


var laugh = function(num) {
    var y = "";
    for( var x=1; x <=num; x++) {
        y += "ha";
    }
    return y + "!";
};

emotions("happy", laugh);



/////////////////////////////


emotions("happy", function(num) {
    var y = "";
    for( var x=1; x <=num; x++) {
        y += "ha";
    }
    return y + "!";
});




// functie(x) <-evalueaza functie , se da rezultatul functiei.
// function functie(x) {...} <- declaratie de functie
// myFunc(1,2,3, functie)
