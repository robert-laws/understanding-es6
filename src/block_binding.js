// var = global/function scope
// let = block scope
// const = read-only



const item = "pencil";
const place = 'here';

const person = {
    name: "Bob"
}

person.name = "Hal" // values within objects can be modified even if they're declared with const

function getValue(condition) {
    if (condition) {
        let value = "blue";
        return value;
    } else {
        return null;
    }
}

function test() {
    var name = "bob";
    if (!cond) {
        let name = "hal"; // declaring same variable name in containing scope is okay
    }
}

var num = 0;
for (var i = 0; i < 5; i++) {
    num += i;
}


// display in the browser
var root = document.getElementById("root");
root.innerHTML = "<h1>" + getValue("a").toUpperCase() + "</h1>";
root.innerHTML += "<h1>" + person.name + "</h1>";
root.innerHTML += "<h1>" + i + "</h1>";