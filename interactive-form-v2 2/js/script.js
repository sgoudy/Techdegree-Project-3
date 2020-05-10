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
	// color options = colorTitle
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


