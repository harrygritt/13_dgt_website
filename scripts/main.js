
function main(){
    // Get input
    const brix_input = document.getElementById("brix_value")
    const potential_input = document.getElementById("potential_value")
    const sg_input  =document.getElementById("sg_value")


}


function brix_calculator(){

    const error_text = document.getElementById("error")
    error_text.innerHTML = ""

    // Get input
    var brix_input = document.getElementById("brix_value")
    var potential_input = document.getElementById("potential_value")
    var sg_input  = document.getElementById("sg_value")

    var brix = brix_input.value
    var potential = potential_input.value
    var sg = sg_input.value
    
    // Calc other values
    potential = brix * 0.55
    sg = (brix * 0.004) + 1

    potential_input.value = potential
    sg_input.value = sg

}


function potential_calculator(){

    const error_text = document.getElementById("error")
    error_text.innerHTML = ""

    // Get input
    var brix_input = document.getElementById("brix_value")
    var potential_input = document.getElementById("potential_value")
    var sg_input  = document.getElementById("sg_value")

    var brix = brix_input.value
    var potential = potential_input.value
    var sg = sg_input.value
    
    // Calc other values
    brix = potential / 0.55
    sg = (brix * 0.004) + 1

    potential_input.value = potential
    sg_input.value = sg

}


// Run the code when the page is ready
window.onload = function() {
    main()
  };