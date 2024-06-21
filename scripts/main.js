
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
    actual_percent_value.innerHTML = "Actual Percentage = " + actual_percent + "%"
    
}


function convert_calc(operation){
    // Get Formulas
    const formula = document.getElementById("unit_formula")
    
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
            formula.innerHTML = "Potential: brix * 0.55 <br> SG: (brix * 0.004) + 1"
            break;

        case "potential":
            brix = potential / 0.55
            sg = (potential / 131.25) + 1
            formula.innerHTML = "Brix: potential / 0.55 <br> SG: (potential / 131.25) + 1"
            break;

        case "sg":
            brix = (sg - 1) / 0.004
            potential = (sg - 1) * 131.25
            formula.innerHTML = "Brix: (sg - 1) / 0.004 <br> Potential: (sg - 1) * 131.25"
            break;
    }

    // Update values
    potential_input.value = Math.round(potential * 10) / 10 // 1 dp
    sg_input.value = Math.round(sg * 1000) / 1000 // 3 dp
    brix_input.value = Math.round(brix)

}


function fetch_jokes(){

    // Begin Fetching Jokes
    fetch("../data/jokes.json")
    
    // Begin converting into JSON
    .then((response) => {
            return response.json()
        }
    )
    .then((data) => {
        display_jokes(data.jokes)
    }
)
}


function display_jokes(data){

    const joke_container = document.getElementById("joke_container")

    // Rabdomise order of jokes displayed
    data = data.sort((a , b) => 0.5 - Math.random())

    // Loop to display each joke 
    for (let i = 0; i < data.length; i++) {

        // Create the joke contianer
        let j_total = document.createElement("div");


        // Fill the joke info
        let j_setup = document.createElement("p");
        j_setup.innerHTML = data[i].setup
        j_total.append(j_setup)
        
        let j_line = document.createElement("em");
        j_line.innerHTML = data[i].punchLine
        j_total.append(j_line)

        let j_credit = document.createElement("p");
        j_credit.classList.add("credit")
        j_credit.innerHTML = "Credit: " + data[i].credit
        j_total.append(j_credit)
        
        joke_container.append(j_total)

        
        
       
        

        

        console.log(data[i])
    }
}


// Run the code when the page is ready
window.onload = function() {

    // TO DO only run on jokes page
    fetch_jokes()
  };

function runOnScroll(element){

    // Update css var to be 0px

}

window.addEventListener(
    "scroll",
    () => runOnScroll(element),
);