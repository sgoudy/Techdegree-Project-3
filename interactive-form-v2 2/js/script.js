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

// Activities constants.
const totalActCost = document.createElement('div');
const activities = document.querySelector('.activities');
activities.appendChild(totalActCost);
let actCost = 0;
totalActCost.textContent = 'Total Cost: $ ' + `${actCost}`;

// Remove 'select payment method' from options
const selectPay = document.querySelector('#payment');
selectPay[0].setAttribute('hidden', 'true');
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
nameTip.textContent = 'Name: First Name Last Name. Email: sample@example.com';
fieldset.appendChild(nameTip);
nameTip.hidden = true;

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

//---------------------------------------------------------//
// Job Role Event Listener and function to show 'Other' field
//     when selected.

function titleSelect (){
	console.log(titles.value);
	if (titles.value === 'other'){
		otherTitle.style.display = '';
	} else {
		otherTitle.style.display = 'none';
	} return false;
}

titles.addEventListener('change', titleSelect, false);

// Function for color selection listener.
function showInfo (){
	 colorTitle.hidden = false;
		 if (design.value === 'js puns'){
			 colorOptions[1].hidden = false;
			 colorOptions[2].hidden = false;
			 colorOptions[3].hidden = false;
			 colorOptions[4].hidden = true;
			 colorOptions[5].hidden = true;
			 colorOptions[6].hidden = true;
	 		} else {
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
	}
		if(clicked.checked){
			actCost += clickedType;
		} else {
			actCost -= clickedType;
		}
	return totalActCost.textContent = 'Total Cost: $' + `${actCost}`;
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
// 'Change' listener.
selectPay.addEventListener('change', payInfo, false);

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
	const testName = /^[A-Za-z]+$/.test(nameValValue);
	if (testName === true){
		nameVal.style.borderColor = 'white';
		return true;
		}
		else {nameVal.style.borderColor = 'red';
		showOrHideTip('show', nameTip);
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
    	return true;
    }
    else {
	email.style.borderColor = 'red';
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

// -----------------------------------------------------
function isValidNumber (){
	const ccNumVal = ccNum.value;
	const ccNumValDig = parseInt(ccNumVal);
	const test2 = /^\d{13,16}$/.test(ccNumValDig);
	if (ccNumValDig > 0){	
		if (test2 === true){
			ccNum.style.borderColor = 'white';
			showOrHideTip('hide', numTip);
			return true;
		} else {
			ccNum.style.borderColor = 'red';
		}
	}
	else {ccNum.style.borderColor = 'red';
	return false;
	}
}

function isValidZip(){
	const ccZipVal = ccZip.value;
	const ccZipDig = parseInt(ccZipVal);
	const test1 = /^\d{5}$/.test(ccZipDig);
	if (ccZipDig > 0){
		if (test1 === true){
			ccZip.style.borderColor = 'white';
			showOrHideTip('hide', zipTip);
			return true;
		} else {
			ccZip.style.borderColor = 'red';
		}
	} 
	else {ccZip.style.borderColor = 'red';
	return false;
	}
}

function isValidCVV(){
	const cVValue = cVV.value;
	const cVdig = parseInt(cVValue);
	if (cVValue > 0){
		const test = /^\d{3}$/.test(cVdig);
		if (test === true){
			cVV.style.borderColor = 'white';
			showOrHideTip('hide', cVVTip);
			return true;
		} else {
			cVV.style.borderColor = 'red';
		}
	} 
	else {cVV.style.borderColor = 'red';
	return false;
	}
}
// EVENT LISTENER TO CHECK INPUTS ON CC INFO ------------
// Validator function -----------------------------------

function createListener(validator){
  return e => {
    const text = e.target.value;
    const valid = validator(text);    
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  	};
}

nameVal.addEventListener("input", createListener(nameValidFunc));
email.addEventListener("input", createListener(emailValidFunc));
ccNum.addEventListener("input", createListener(isValidNumber));
ccZip.addEventListener("input", createListener(isValidZip));
cVV.addEventListener("input", createListener(isValidCVV));

// Function identifies payment type---------------------------
function payValFunc (){
	const selectedValue = selectPay.value;
	if (selectedValue === 'paypal'){
		selectPay.style.borderColor = 'white';
		return true;
	}
	if (selectedValue === 'bitcoin'){
		selectPay.style.borderColor = 'white';
		return true;
	}
	else if (selectedValue === 'credit card' && ccNum.value === ''){
		ccNum.style.borderColor = 'red';
		showOrHideTip('show', numTip);
	} 
	else if (selectedValue === 'credit card' && ccZip.value === ''){
		ccZip.style.borderColor = 'red';
		showOrHideTip('show', zipTip);	
	}
	else if (selectedValue === 'credit card' && cVV.value === ''){
		cVV.style.borderColor = 'red';
		showOrHideTip('show', cVVTip);
	}
	else if (selectedValue === 'credit card' && ccNum.value !== '' && ccZip.value !== '' && cVV.value !== ''){
		selectPay.style.borderColor = 'white';
		console.log('true');
		return true;
	}
	 else if (selectedValue === 'select method'){
		selectPay.style.borderColor = 'red';
	return false; 
	}		
}
//-----------------------------------------------------------

// EVENT LISTENER FOR ALL FUNCTIONS----------------------
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

// EVENT LISTENER FOR ALL FUNCTIONS----------------------
form.addEventListener('submit', (e) => {
  	if (nameValidFunc() === true && emailValidFunc() === true && activitiesValFunc() === true && payValFunc() === true){
 	return true;
 	}
});
