//import {sqrt} from 'Math'

/*
function quadratic(a, b, c) { 
    let discrim = b**2 - 4*a*c;
    console.log("Discrimannt Value: " + discrim)
    if (discrim == 0) {
        var x1 = (-b)/(2*a)
        console.log("One Solution: " + x1)
    }
    else if (discrim > 0) {
        var x1 = (-b+Math.sqrt(discrim)) / (2*a)
        var x2 = (-b-Math.sqrt(discrim)) / (2*a)
         console.log("Solution 1: " + x1)
         console.log(x1)
         console.log("Solution 2: " + x2)
         }
    else if (discrim < 0) {
        var left = (-b)/(2*a)
        var right = 1/(Math.sqrt(4*a))
        console.log("Imaginary Solution 1: " + left + " + i*" + right)
        console.log("Imaginary Solution 2: " + left + " - i*" + right)
    }
    else
        console.log("Input Error")
}

quadratic(1, 2 ,3)
quadratic(1, 4, 4)

*/

    function quadratic() {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;
            let discrim = (parseFloat(b)**2) - (4*parseFloat(a)*parseFloat(c))
            discrim_str = ("Discriminant Value: " + discrim)
            document.getElementById('discriminant_val').innerHTML=discrim_str
            if (discrim == 0) {
                var x1 = -(parseFloat(b))/(2*parseFloat(a))
                document.getElementById('answer1').innerHTML="One Solution: x =" + x1
                document.getElementById('answer2').innerHTML= ""
                document.getElementById('sqrt_arg').innerHTML="->Note: " + -b + "/" + "(2*" + parseFloat(a) + ") = " + x1
                }
            else if (discrim > 0) {
                var x1 = (parseFloat(-b)+Math.sqrt(discrim)) / (2*parseFloat(a))
                var x2 = (parseFloat(-b)-Math.sqrt(discrim)) / (2*parseFloat(a))
                document.getElementById('answer1').innerHTML="Solution 1: x = " + x1
                document.getElementById('answer2').innerHTML= "Solution 2: x = " + x2
                var left = -(parseFloat(b))/(2*parseFloat(a))
                var right = ((parseFloat(b)**2) - (4*parseFloat(a)*parseFloat(c))) / (4*parseFloat(a))
                document.getElementById('sqrt_arg').innerHTML= "->AKA: x = " + left + " +/- " + "sqrt(" + right + ")"
            }
            else if (discrim < 0) {
                var left = -(parseFloat(b))/(2*parseFloat(a))
                var z = Math.abs(((parseFloat(b)**2) - (4*parseFloat(a)*parseFloat(c))) / (4*parseFloat(a)))
                var right = Math.sqrt(z)
                if (right == 1) {
                    document.getElementById('answer1').innerHTML="Imaginary Solution 1: " + left + " + i"
                    document.getElementById('answer2').innerHTML="Imaginary Solution 2: " + left + " - i"
                    document.getElementById('sqrt_arg').innerHTML="->Note: " + right + " = sqrt(" + z + ")" 
                    }
                else if (right != 1) {
                    document.getElementById('answer1').innerHTML="Imaginary Solution 1: " + left + " + i*" + right 
                    document.getElementById('answer2').innerHTML="Imaginary Solution 2: " + left + " - i*" + right
                    document.getElementById('sqrt_arg').innerHTML="->Note: " + right + " = sqrt(" + z + ")"
                    }
                }   
            else {
                document.getElementById('answer1').innerHTML="->Input Error"
                }
        }
        



