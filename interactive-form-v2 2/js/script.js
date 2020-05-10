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

//---------------------------------------------------------//
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

// ACTIVITIES SECTION //
//----------------------------------------------------------//
const totalActCost = document.createElement('div');
const activities = document.querySelector('.activities');
activities.appendChild(totalActCost);
let actCost = 0;
totalActCost.textContent = 'Total Cost: $ ' + `${actCost}`;

activities.addEventListener('change', (e) => {
	const clicked = e.target;
	const clickedType = parseInt(clicked.getAttribute('data-cost'));
	const date = e.target;
	const dateData = date.getAttribute('data-day-and-time');
	const actInput = document.querySelectorAll('.activities input');	
	for (let i = 0; i < actInput.length; i += 1){
		const actType = actInput[i].getAttribute('data-day-and-time');
	if(dateData === actType &&  date !== actInput[i]){ 
			if(date.checked) {
				actInput[i].disabled = true;
			}
			else {
				actInput[i].disabled = false;
			}
		}
	}
		if(clicked.checked){
			actCost += clickedType;
		}
			else {
			actCost -= clickedType;
			}
	return totalActCost.textContent = 'Total Cost: $' + `${actCost}`;
});

// PAYMENT SECTION //
//---------------------------------------------------------//
const selectPay = document.querySelector('#payment');
selectPay[0].setAttribute('hidden', 'true');

function payInfo (e) {
	const selectedMethod = e.target.value;
	const credit = document.getElementById('credit-card');
	const payPal = document.getElementById('paypal');
	const bit = document.getElementById('bitcoin');
	 if (selectedMethod === 'credit card'){
			 credit.hidden = false;
			 payPal.hidden = true;
			 bit.hidden = true;
	 		}
	 	else if (selectedMethod === 'paypal'){
	 		 credit.hidden = true;
			 payPal.hidden = false;
			 bit.hidden = true;
			}
	 	else if (selectedMethod === 'bitcoin'){
	 		 credit.hidden = true;
			 payPal.hidden = true;
			 bit.hidden = false;
	 		}
	 	}
// 'Change' listener.
selectPay.addEventListener('change', payInfo, false);
