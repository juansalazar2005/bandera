//let boton = document.getElementById("botonBusqueda");
//let buscador = document.getElementById("busqueda")
//bandera = true

//boton.addEventListener("click", function(event){
//    console.log("clicked")
  //  if (bandera == true) {
    //    buscador.classList.remove("invisible")
      //  bandera = false
    //}
    //else {
      //  if(bandera == false) {
        //    buscador.classList.add("invisible")
          //  bandera = true
        //}
    //}
//})

let bandera = true
let boton = document.getElementById("botonBusqueda")
boton.addEventListener("click", function(event) {
    console.log("clicked")
    let buscador = document.getElementById("busqueda")
    if (bandera == true) {
        buscador.classList.remove("invisible")
    }
    else {
        buscador.classList.add("invisible")
    }
    bandera = !bandera
    
})