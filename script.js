let ac = document.getElementById("button1");
let screen = document.getElementsByClassName("screen")[0]



screen.textContent ="";
let del =document.getElementById("button2");
let screencontent = screen.textContent;



let update = (_newcontent)=>{
    
    
    screen.textContent =_newcontent;
    
}
let clear=()=>{

    screencontent = " ";
    update(screencontent)
}
ac.addEventListener("click",()=>{

  clear()
})


let dele=()=>{
     
    screencontent = screencontent.slice(0,-1);
    update(screencontent)
}

del.addEventListener("click",()=>{
   
    dele();
})


let exponential =document.getElementById("button3");
let addition = document.getElementById("button16")
let divide= document.getElementById("button4")
let multiply= document.getElementById("button8")
let subtract= document.getElementById("button12")
let operator ="";
let result =0;


exponential.addEventListener("click",()=>{
  let expo=()=>{

      screencontent+="%"; 
    
     update(screencontent)
 
    }
    expo()
})
addition.addEventListener("click",()=>{
  let add=()=>{

      screencontent+="+"; 
      operator = "+"
     update(screencontent)
    
    }
    add()
})
subtract.addEventListener("click",()=>{
  let sub=()=>{

      screencontent+="-"; 
      operator = "-"
     update(screencontent)
     
    }
   sub()
})
multiply.addEventListener("click",()=>{
  let multi=()=>{

      screencontent+="*"; 
      operator ="*"
     update(screencontent)
     
    }
   multi()
})
divide.addEventListener("click",()=>{
  let divi=()=>{

      screencontent+="/"; 
      operator = "/"
     update(screencontent)
     
    }
   divi()
})

let one = document.getElementById("button13")
let two = document.getElementById("button14")
let three = document.getElementById("button15")
let four = document.getElementById("button9")
let five = document.getElementById("button10")
let six = document.getElementById("button11")
let seven = document.getElementById("button5")
let eight = document.getElementById("button6")
let nine = document.getElementById("button7")
let doublezero = document.getElementById("button17")
let singlezero = document.getElementById("button18")
let decimal = document.getElementById("button19")
one.addEventListener("click",()=>{
  let on=()=>{

      screencontent+="1"; 
     update(screencontent)
     
    }
   on()
})
two.addEventListener("click",()=>{
  let tw=()=>{

      screencontent+="2"; 
     update(screencontent)
     
    }
   tw()
})
three.addEventListener("click",()=>{
  let thr=()=>{

      screencontent+="3"; 
     update(screencontent)
     
    }
   thr()
})
four.addEventListener("click",()=>{
  let fur=()=>{

      screencontent+="4"; 
     update(screencontent)
     
    }
   fur()
})
five.addEventListener("click",()=>{
  let fiv=()=>{

      screencontent+="5"; 
     update(screencontent)
     
    }
   fiv()
})
six.addEventListener("click",()=>{
  let sx=()=>{

      screencontent+="6"; 
     update(screencontent)
     
    }
   sx()
})
seven.addEventListener("click",()=>{
  let seve=()=>{

      screencontent+="7"; 
     update(screencontent)
     
    }
   seve()
})
eight.addEventListener("click",()=>{
  let eigh=()=>{

      screencontent+="8"; 
     update(screencontent)
     
    }
   eigh()
})
nine.addEventListener("click",()=>{
  let nne=()=>{

      screencontent+="9"; 
     update(screencontent)
     
    }
   nne()
})
doublezero.addEventListener("click",()=>{
  let double=()=>{

      screencontent+="00"; 
     update(screencontent)
     
    }
   double()
})
singlezero.addEventListener("click",()=>{
  let single=()=>{

      screencontent+="0"; 
     update(screencontent)
     
    }
   single()
})
decimal.addEventListener("click",()=>{
  let deci=()=>{

      screencontent+="."; 
     update(screencontent)
     
    }
   deci()
})

let equal = document.getElementById("button20");


let calculate=()=>{

    if(operator && screencontent .includes(operator)){

        let values =screencontent.split(operator);
         
        let value1 = parseFloat(values[0]);
        let value2 = parseFloat(values[1])
        
        switch(operator){
            
            case "+":
                result=value1+value2;
                break;
            case "-":
                result=value1-value2;
                break;
                case "/":
                    result=value1/value2;
                    break;
                    case "*":
                        result=value1*value2;
                        break;
                        
                    }
                    screencontent = result.toString();
                    update(screencontent)
                }
                
            }


                equal.addEventListener("click",()=>{

    calculate();
})