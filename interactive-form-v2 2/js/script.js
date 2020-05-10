// Set "name" to "autofocus".
const nameAutoFocus = document.querySelector('#name').setAttribute("autofocus", "true");

// Create 'other' input field that's hidden initially but displays with js disabled.
const otherTitle = document.querySelector('#other-title');
otherTitle.style.display = 'none';

// Don't allow "select theme" to be a selected item.
const design = document.querySelector('#design');
design[0].hidden = true;

// Select parent element of colors.
const colorTitle = document.querySelector('#color');
colorTitle.setAttribute('hidden', 'true');

// Add "please select t-shirt" to color list.
const newTee = document.createElement('option');
colorTitle.appendChild(newTee);
newTee.textContent = "Please Select a T-shirt Theme";
colorTitle.insertBefore(newTee, colorTitle.childNodes[0]);
newTee.setAttribute('selected', 'selected');
newTee.style.display = 'none';

// Select color options.
const colorOptions = document.querySelectorAll('#color option');

// Function for listener.
function showInfo (){
	 colorTitle.hidden = false;
		 if (design.value === 'js puns'){
			 colorOptions[1].hidden = false;
			 colorOptions[2].hidden = false;
			 colorOptions[3].hidden = false;
			 colorOptions[4].hidden = true;
			 colorOptions[5].hidden = true;
			 colorOptions[6].hidden = true;
	 		}
	 		else {
	 		 colorOptions[1].hidden = true;
	 		 colorOptions[2].hidden = true;
	 		 colorOptions[3].hidden = true;
	 		 colorOptions[4].hidden = false;
			 colorOptions[5].hidden = false;
			 colorOptions[6].hidden = false;
	 		}
	 	}
// 'Change' listener.
design.addEventListener('change', showInfo, false);
//----------------------------------------------------------//
const totalActCost = document.createElement('div');
const activities = document.querySelector('.activities');
activities.appendChild(totalActCost);
let actCost = 0;
totalActCost.textContent = 'Total Cost: $ ' + `${actCost}`;



activities.addEventListener('change', (e) => {
	const clicked = e.target;
	const clickedType = parseInt(clicked.getAttribute('data-cost'));
		if(clicked.checked){
			actCost += clickedType;
			totalActCost.textContent = 'Total Cost: $' + `${actCost}`;
		}
			else {
			actCost -= clickedType;
			totalActCost.textContent = 'Total Cost: $' + `${actCost}`;
			}
});

