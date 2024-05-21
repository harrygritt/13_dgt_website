
function mixer_calc(){
    // Get mixer inputs
    var percent_input = document.getElementById("percent").value
    var shot_input = document.getElementById("shot_size").value
    var cup_input = document.getElementById("cup_size").value
    var actual_percent_value = document.getElementById("actual_percent_value")
    
    // BUG - DOESN'T UPDATE INPUTS
    if(percent_input < 0 || shot_input < 0 || cup_input < 0){
        percent_input = 0
        shot_input = 0
        cup_input = 0
    }

    // Calculate actual percentage of mixer
    actual_percent = Math.round(percent_input * shot_input) / cup_input

    // Update value
    actual_percent_value.innerHTML = actual_percent + "%"
    
}


function convert_calc(operation){
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
    potential_input.value = potential
    sg_input.value = sg
    brix_input.value = brix

}


// Run the code when the page is ready
window.onload = function() {
    main()
  };