// Set "name" to "autofocus".
const nameAutoFocus = document.getElementById("name").setAttribute("autofocus", "true");
// Create 'other' input field that's hidden initially but displays with js disabled.
const otherTitle = document.getElementById("other-title");
otherTitle.style.display = 'none';
// Don't allow "select theme" to be a selected item.
const design = document.getElementsByName("user-design");
const selectDesign = design[0][0];
selectDesign.style.display = 'none';
// Add "please select t-shirt" to color list.
const select = document.querySelectorAll('select');
const selectColor = select[3];
const newTee = document.createElement('option');
selectColor.appendChild(newTee);
newTee.textContent = "Please Select a T-shirt Theme";
selectColor.insertBefore(newTee, selectColor.childNodes[0]);
newTee.setAttribute('selected', 'selected');
newTee.style.display = 'none';
// Hide color options.
const colorOptions = document.getElementById('color');
colorOptions.setAttribute('hidden', 'true');
// Make appropriate color option appear when 'design' selected.
const jsPuns = document.getElementsByName('user-design');



/***
selectDesign.addEventListener('change', e => {
	const jsPuns = document.getElementsByClassName('user-design');
	console.log(jsPuns);
	if (e.target.value = 'js puns'){
		
		colorOptions.style.display =
	}
});
***/
