function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(width) {
    triangle="";
    for(x=1; x <= width; x++) {
        triangle += makeLine(x);
    }
    return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
