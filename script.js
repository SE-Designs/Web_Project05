const button = document.getElementById("submit");
button.addEventListener('click', () => {

// function calculate() {
	
	// var input_value = document.getElementsByClassName("form controls").value;
  
    // let input_value = parseFloat(document.getElementsByClassName("form_controls").value);
	// const input_value = document.querySelector("input").value;
	// var input_value = parseFloat(inp_val).value;
	
		let name = document.forms["results"]["bride_name"].value;
		let input_value = document.forms["results"]["input_value"].value;
		let letter = document.forms["results"]["letter"].value;
	
    const res1 = document.getElementById("education");
    const res2 = document.getElementById("networth");
    const res3 = document.getElementById("caste");
    const res4 = document.getElementById("skills");
    const res5 = document.getElementById("age");
    const res6 = document.getElementById("reputation");
    
    const r1 = res1.value;
    const r2 = res2.value;
    const r3 = res3.value;
    const r4 = res4.value;
    const r5 = res5.value;
    const r6 = res6.value;
	// input_value = 100;
	
	// EDUCATION:
        if (r1 == "undergraduate"){
            input_value *= 1.50;
        }
        else if (r1 == "college"){
            input_value *= 1.20;
        }
        else if (r1 == "high_school"){
            input_value *= 1.05;
        }
        else if (r1 == "middle_school"){
            input_value *= 0.90;
        }
		else {
			input_value = input_value;
		}
		
	// NETWORTH:

        if (r2 == "upper_class"){
            input_value *= 2.00;
        }
        else if (r2 == "middle_class"){
            input_value *= 1.50;
        }
        else if (r2 == "lower_class"){
            input_value *= 1.20;
        }
		else {
			input_value = input_value;
		}
		
	// CASTE:

        if (r3 == "brahmin"){
            input_value += 100;
        }
        else if (r3 == "kshatriya"){
            input_value += 50;
        }
        else if (r3 == "vaishya"){
            input_value += 20;
        }
        else if (r3 == "shudra"){
            input_value += 15;
        }
        else if (r3 == "varna"){
            input_value -= 50;
        }
		else {
			input_value = input_value;
		}
		
	// SKILLS:

    if (document.getElementById("sk_num1").checked) {
        price = price+10;
    }

    if (document.getElementById("sk_num2").checked) {
        input_value = input_value+20;
    }

    if (document.getElementById("sk_num3").checked) {
        input_value = input_value+15;
    }

    if (document.getElementById("sk_num4").checked) {
        input_value = input_value+10;
    }
		
	// AGE:

    if (document.getElementById("eighteen").checked) {
        input_value = input_value*1.5;
    }

    else if (document.getElementById("twenty_four").checked) {
        input_value = input_value*1.2;
    }

    else if (document.getElementById("twenty_eight").checked) {
        input_value = input_value*0.95;
    }

	// GOSSIPS:

    if (document.getElementById("rep_num1").checked) {
        input_value = input_value*0.85;
    }

    if (document.getElementById("rep_num2").checked) {
        input_value = input_value*0.9;
    }

    if (document.getElementById("rep_num3").checked) {
        input_value = input_value-20;
    }
		
		// var results = input_value;
		// document.getElementById("results").innerHTML = "Value for " name + " is "input_value + "$";;

		
		    let bride = {
				bride_name: name,
				bride_price: input_value,
				love_letter: letter
			}
    
    document.getElementById("results").innerHTML =`Total price is for ${bride.name} is ${bride.input_value}$ and with the following love letter: "${bride.letter}"`;
			
    } )