
function mixer_calc(){
    // Get mixer inputs
    var percent_input = document.getElementById("percent")
    var shot_input = document.getElementById("shot_size")
    var cup_input = document.getElementById("cup_size")
    var actual_percent_value = document.getElementById("actual_percent_value")
    
    var percent = percent_input.value
    var shot = shot_input.value
    var cup = cup_input.value

    if(percent < 0 || shot < 0 || cup < 1){
        percent = 0
        shot = 0
        cup = 1
    }
    
    percent_input.value = percent
    shot_input.value = shot
    cup_input.value = cup

    // Calculate actual percentage of mixer
    actual_percent = Math.round(percent * shot) / cup

    // Update value
    actual_percent_value.innerHTML = "Actual Percentage: " + actual_percent + "%"
    
}


function convert_calc(operation){
    // Get Formulas
    const formula_pot = document.getElementById(unit_formula).innerHTML()

    // Get unit inputs
    var brix_input = document.getElementById("brix_value")
    var potential_input = document.getElementById("potential_value")
    var sg_input  = document.getElementById("sg_value")

    var brix = brix_input.value
    var potential = potential_input.value
    var sg = sg_input.value
    
    // Check inupts to avoid negative numbers
    if(brix < 0 || potential < 0 || sg < 1){
        brix = 0
        potential = 0
        sg = 1
    }

    // Calculate other values
    switch (operation){
        case "brix":
            potential = brix * 0.55
            sg = (brix * 0.004) + 1
            formula_pot.innerHTML() = "brix + * 0.55"
            formula_sg = "(" + brix + "* 0.004) + 1"
            break;

        case "potential":
            brix = potential / 0.55
            sg = (potential / 131.25) + 1
            break;

        case "sg":
            brix = (sg - 1) / 0.004
            potential = (sg - 1) * 131.25
            break;
    }

    // Update values
    potential_input.value = Math.round(potential * 10) / 10 // 1 dp
    sg_input.value = Math.round(sg * 1000) / 1000 // 3 dp
    brix_input.value = Math.round(brix)

}

// Run the code when the page is ready
window.onload = function() {
    main()
  };

function runOnScroll(element){

    // Update css var to be 0px

}

window.addEventListener(
    "scroll",
    () => runOnScroll(element),
);