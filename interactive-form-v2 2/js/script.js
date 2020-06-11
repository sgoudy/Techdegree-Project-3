// Set "name" to "autofocus".
const name = document.querySelector('#name');
name.focus();

// Create 'other' input field that's hidden initially but displays with js disabled.
const otherTitle = document.querySelector('#other-title');
otherTitle.style.display = 'none';
const titles = document.querySelector('#title');

// Don't allow "select theme" to be a selected item.
const design = document.querySelector('#design');
design[0].hidden = true;

// Select parent element of colors.
const colorBlock = document.querySelector('#color');
colorBlock.hidden = true;

// Add "please select t-shirt" to color list.
const newTee = document.createElement('option');
colorBlock.appendChild(newTee);
newTee.textContent = "Please Select a Color";
colorBlock.insertBefore(newTee, colorBlock.childNodes[0]);
newTee.setAttribute('selected', true);
newTee.style.display = 'none';

// Select color options.
const colorOptions = document.querySelectorAll('#color option');

// Activities constants.
const totalActCost = document.createElement('div');
const activities = document.querySelector('.activities');
activities.appendChild(totalActCost);
let actCost = 0;
totalActCost.textContent = `Total Cost: $${actCost}`;

// Remove 'select payment method' from options
const selectPay = document.querySelector('#payment');
selectPay[0].setAttribute('hidden', 'true');
selectPay[1].setAttribute('selected', 'selected');

// Set credit info to display by default. Hide bit/paypal. 
const credit = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bit = document.getElementById('bitcoin');
paypal.hidden = true;
bit.hidden = true;

// Declare variables for input fields
const form = document.querySelector('form');
const nameVal = document.getElementById('name');
nameVal.setAttribute('clearfix', true);
const fieldset = document.querySelector('fieldset');

const nameTip = document.createElement('span');
nameTip.innerHTML = ' '+ '<br>' + 'Name: First Name Last Name.' + '<br>' + ' Email: sample@example.com';
fieldset.appendChild(nameTip);
nameTip.hidden = true;

const emailTip = document.createElement('span');
emailTip.innerHTML = ' '+ '<br>' + 'INVALID EMAIL ADDRESS: Must include "@" and "." symbols.';
fieldset.appendChild(emailTip);
emailTip.hidden = true;

const email = document.getElementById('mail');

const activitiesDiv = document.querySelector('.activities');
const activitiesVal = document.querySelectorAll('.activities input');

const ccNum = document.querySelector('#cc-num');
const ccZip = document.querySelector('#zip');
const cVV = document.querySelector('#cvv');

// Add <span> elements for tooltips
// Tips for CC Number.

const numDiv = document.querySelector('.col-6');
const numTip = document.createElement('span');
numTip.textContent = 'Number should be between 13 and 16 digits.';
numDiv.appendChild(numTip);
numTip.hidden = true;

// Tips for CC Zipcode.

const zipDiv = document.querySelector('.col-3');
const zipTip = document.createElement('span');
zipTip.textContent = 'Please enter 5-digit number.';
zipDiv.appendChild(zipTip);
zipTip.hidden = true;

// Tips for CC CVV.

const zipDivs = document.querySelectorAll('.col-3');
const cvvDiv = zipDivs[1];
const cVVTip = document.createElement('span');
cVVTip.textContent = 'Please enter 3-digit number.';
cvvDiv.appendChild(cVVTip);
cVVTip.hidden = true;

// BASIC & T-SHIRT INFO SECTIONS
//---------------------------------------------------------//
// Function to show 'Other' Job Role field when selected.

function titleSelect (){
	if (titles.value === 'other'){
		otherTitle.style.display = '';
	} else {
		otherTitle.style.display = 'none';
	} return false;
}

// Function for color selection listener.
function showInfo (){
	 colorBlock.hidden = false;
	 newTee.style.display = '';
	 newTee.setAttribute('hidden', true);
		if (design.value === 'js puns'){	 			 
			 colorBlock.value = colorOptions[0].value;
			 colorOptions[1].hidden = false;
			 colorOptions[2].hidden = false;
			 colorOptions[3].hidden = false;
			 colorOptions[4].hidden = true;
			 colorOptions[5].hidden = true;
			 colorOptions[6].hidden = true;
	 	} if (design.value === 'heart js') {	
 			 colorBlock.value = colorOptions[0].value;	
	 		 colorOptions[1].hidden = true;
	 		 colorOptions[2].hidden = true;
	 		 colorOptions[3].hidden = true;
	 		 colorOptions[4].hidden = false;
			 colorOptions[5].hidden = false;
			 colorOptions[6].hidden = false;	
	 	} return true;
}

// ACTIVITIES SECTION //
//----------------------------------------------------------//

// Function to disable conflicting events and enable others -----//
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
			} else {
				actInput[i].disabled = false;
			}
		}
	} if(clicked.checked){
			actCost += clickedType;
			activitiesDiv.style.border = 'white';
	} else {
			actCost -= clickedType;
	} return totalActCost.textContent = 'Total Cost: $' + `${actCost}`;
});

// PAYMENT SECTION //
//---------------------------------------------------------//

// Function identifies which information to show based on payment 
// 	   method selected.
function payInfo (e) {
	const selectedMethod = e.target.value;
	if (selectedMethod === 'credit card'){
			 credit.hidden = false;
			 payPal.hidden = true;
			 bit.hidden = true;
	} else if (selectedMethod === 'paypal'){
	 		 credit.hidden = true;
			 payPal.hidden = false;
			 bit.hidden = true;
	} else if (selectedMethod === 'bitcoin'){
	 		 credit.hidden = true;
			 payPal.hidden = true;
			 bit.hidden = false;
	}
}

// FORM VALIDATION //
//--------------------------------------------------------------//

// Show / Hide Tips Function so they display on 'input'
function showOrHideTip(show, element) {
  // show element when show is true, hide when false
    if (show) {
    element.style.display = "inherit";
    } else {
    element.style.display = "none";
    }
}

// Name validator (verify ONLY letters)-------------------
function nameValidFunc (){
	const nameValValue = nameVal.value;
	const testName = /^[A-Za-z\s]+$/.test(nameValValue);
	if (testName === true){
		nameVal.style.borderColor = 'white';
		nameTip.hidden = true;
		return true;
		} else {nameVal.style.borderColor = 'red';
		nameTip.hidden = false;
		return false;
		}
}

// Email validator (contains '@' and '.', in that order)-
function emailValidFunc (){
	const emailValue = email.value;	
	const emailCheck = emailValue.indexOf('@');
	const emailLast = emailValue.lastIndexOf('.');
    if (emailValue.length > 0 && emailCheck > 1 && emailLast > (emailCheck + 1)) {
    	email.style.borderColor = 'white';
    	nameTip.hidden = true;
    	emailTip.hidden = true;
    	return true;
    	} else if (emailValue.length > 0 && (emailCheck === -1 || emailLast === -1)){
		emailTip.hidden = false;
		email.style.borderColor = 'blue';
		return false;
		} else {
		email.style.borderColor = 'red';
		nameTip.hidden = false;
		return false;
		}
}

// Activities validator (at least 1 selected) -----------
function activitiesValFunc (){
	for (let i = 0; i < activitiesVal.length; i += 1){
		if (activitiesVal[i].checked){
			activitiesDiv.style.border = '2px solid white';
			return true;
		} 
	}
	activitiesDiv.style.border = '2px solid red';
	return false; 
}

// CREDIT VALIDATORS
// -----------------------------------------------------
function isValidNumber (){
	const ccNumVal = ccNum.value;
	const test2 = /^\d{13,16}$/.test(ccNumVal);
	if (ccNumVal > 0){	
		if (test2 === true){
			ccNum.style.borderColor = 'white';
			return true;
		} else {
			ccNum.style.borderColor = 'red';
			return false;
		}
	} else {ccNum.style.borderColor = 'red';
	return false;
	}
}

function isValidZip(){
	const ccZipVal = ccZip.value;
	const test1 = /^\d{5}$/.test(ccZipVal);
	if (ccZipVal > 0){
		if (test1 === true){
			ccZip.style.borderColor = 'white';
			return true;
		} else {
			ccZip.style.borderColor = 'red';
			return false;
		}
	} else {ccZip.style.borderColor = 'red';
	return false;
	}
}

function isValidCVV(){
	const cVValue = cVV.value;
	if (cVValue > 0){
		const test = /^\d{3}$/.test(cVValue);
		if (test === true){
			cVV.style.borderColor = 'white';
			return true;
		} else {
			cVV.style.borderColor = 'red';
			return false;
		}
	} else {cVV.style.borderColor = 'red';
	return false;
	}
}

// Validator function to turn on/ off TIPS on INPUT------------
function createListener(validator){
  	return e => {
    const text = e.target.value;
    const valid = validator(text);    
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  	}
}

// Function identifies payment type and returns true if any of the 
// 		below conditions are satisfied----------------------------
function payValFunc (){
	const selectedValue = selectPay.value;
	if (selectedValue === 'paypal'){
		selectPay.style.borderColor = 'white';
		return true;
	} if (selectedValue === 'bitcoin'){
		selectPay.style.borderColor = 'white';
		return true;
	}
	// This line validates that every input in the credit section
	//     is correct before processing as true
	if (isValidNumber() === true && isValidZip() === true && isValidCVV() === true){
    	return true;
  	}
}

// INPUT LISTENER FUNCTIONS
//-----------------------------------------------------------
titles.addEventListener('change', titleSelect, false);
design.addEventListener('change', showInfo, false);
selectPay.addEventListener('change', payInfo, false);
nameVal.addEventListener("input", nameValidFunc);
email.addEventListener("input", emailValidFunc);
ccNum.addEventListener("input", createListener(isValidNumber), false);
ccZip.addEventListener("input", createListener(isValidZip), false);
cVV.addEventListener("input", createListener(isValidCVV), false);

// SUBMIT LISTENER  FUNCTIONS-------------------------------
form.addEventListener('submit', (e) => {
  	if (!nameValidFunc()){
    e.preventDefault();
    console.log("This name validator prevented submission");
  	}
  	if (!emailValidFunc()){
    e.preventDefault();
    console.log("This email validator prevented submission");
  	}
  	if (!activitiesValFunc()){
    e.preventDefault();
    console.log("This activities validator prevented submission");
  	}
  	if (!payValFunc()){
    e.preventDefault();
    console.log("This payval validator prevented submission");
  	}   	
});