

function calculator(operation){
    // Get input
    var brix_input = document.getElementById("brix_value")
    var potential_input = document.getElementById("potential_value")
    var sg_input  = document.getElementById("sg_value")

    
    var brix = brix_input.value
    var potential = potential_input.value
    var sg = sg_input.value
    
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
    console.log(brix)
    brix_input.value = brix

}


// Run the code when the page is ready
window.onload = function() {
    main()
  };