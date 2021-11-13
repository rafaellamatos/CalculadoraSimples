function calculate(type, value){
    if (type === 'action'){
        if(value === 'c'){
            document.getElementById("result").value = ""
        }
        if(value === '+'  || value === '-' || value === '*' || value === '/'|| value === '.'){
            document.getElementById("result").value += value
        }
        if(value === '='){
            let exp = eval(document.getElementById("result").value)
            document.getElementById("result").value = exp 
        }

    }else if(type==='value'){
       document.getElementById("result").value += value
    }
}