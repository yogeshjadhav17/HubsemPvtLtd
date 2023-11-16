alert("Hello Welcome to my website");

console.log("This Website belongs to Hubsem Private limited");
document.write("This is a website development company named Hubsem Private limited");


// The following example will show you how to loop through all properties of a Javascript object

let person= {"name":"Clark", "surname":"kent","age":"36"};

// loop through all the properties in the object.

for(let prop in person){
    document.write("<p>"+prop+ "=" + person[prop]+ "</p>");
    document.write("<p>"+person[prop]+"</p>");
}

//example 2

let fruits = ["Apple","Banana", "Mango", "Orange", "Papaya"];

for(let i in fruits){
    document.write("<p>"+fruits[i]+"</p>");
}

// using for..of loop which allows us to iterate over arrays or other iterable objects.
ci
let letters= ["a","b","c","d","e","f"];

for(let letter of letters) {
    console.log(letter);    // this will give output as a,b,c,d,e,f.
    document.write(letter);  // a,b,c,d,e,f.
}
// Iterating over string for ..of loop

let greet= "Hello World";

for(let character of greet){
    console.log(character);
    document.write(character);
}

// using function chnage the current paragraph in html.
function myFunction(){
    document.getElementById('demo1').innerHTML="We also deliver static, plain as well as required dynamic web pages to our clients";

}

// using bulb on and off using funvction



function myFunction() {
    let image=document.getElementById('demo');
    if(image.src.match("Images\bulboff.jpg"))
    document.getElementById('MyImage').src='Images\bulbon.jpg';
        else
        document.getElementById('MyImage1').src='Images\bulboff.jpg';
             }


            // ECMA script 2015 
const Bharani =name => {
    return  'Hi $(name)';
}

console.log(Bharani("Yogesh"));
    

