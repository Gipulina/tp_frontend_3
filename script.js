
let cant__nombres = 0
let array__nombres = []

function mostrarNombres(){
    //buscar todos los nombres y guardarlos en array_nombres
    //por cada nombre mostrar en DIV resultado
    this.preventDefault;
    array__nombres      = document.getElementsByClassName("nombres");
    let ul__resultado   = document.getElementById("resultado")
    
    for (let index = 0; index < array__nombres.length; index++) {
        console.log( array__nombres[index].value )

        let new__li     = document.createElement("li")
        let new__span   = document.createElement("span")
        let new__span__value   = document.createTextNode(array__nombres[index].value)
        
        new__span.appendChild(new__span__value)
        new__li.appendChild(new__span)
        ul__resultado.appendChild(new__li)
    }

}

function guardarNumero(){
    this.preventDefault;
    cant__nombres = parseInt( document.getElementById("primer__numero").value ,10)
    console.log(cant__nombres)

    crearInputsNombres()
}

function crearInputsNombres(){
    let div__nombres = document.getElementById("nombres")
    
    for (let index = 0; index < cant__nombres; index++) {
        // let input__options = {required=true, placeholder="nombre" }
        // let tag__input = document.createElement("input", input__options);
        let tag__input = document.createElement("input");
            tag__input.className = "nombres";
            tag__input.type = "text";

        let tag__br = document.createElement("br");

        div__nombres.appendChild(tag__input);
        div__nombres.appendChild(tag__br);
    }
    // <input type="text" name="nombres__persona" required>
}



function load(){
    let btns = document.getElementsByClassName("btn");
    btns[0].addEventListener("click",guardarNumero);
    btns[1].addEventListener("click",mostrarNombres);
}

load();