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
const userDesign = document.getElementsByName('user-design');
// Select 'values'
const jsPuns = userDesign[0][1];
const heartJs = userDesign[0][2];
// Select Design box for 'change' event listener.
const designName = document.getElementById('design');


// Function for listener.
function showInfo (info){
	 colorOptions.hidden = false;
	 const puns = [];
	 puns.push(colorOptions[1], colorOptions[2], colorOptions[3]);
 	 const js = [];
	 js.push(colorOptions[4], colorOptions[5], colorOptions[6]);
	 // Group colors for JS puns.
	 for (let i = 0; i < colorOptions.length; i += 1){
		 if (designName.value === 'js puns'){
			 colorOptions[i+4].hidden = true;
	 }
	 // Group colors for JS Love.
		 else if (designName.value === 'heart js'){
			colorOptions[i<4].hidden = true;
		}
	}
}


// 'Change' listener.
designName.addEventListener('change', (event) => {
	if (designName.value === 'js puns'|'heart js'){
		showInfo();
	}
});

