//Following Javascript provides a method to save & clear text inputs to LocalStorage as with populating the text inputs with the stored data upon refreshing of the site.


	function populatePageInputs(){
	    //Upon loading the webpage, check what elements exist in local storage of users device to repopulate the fields
	    for (let [key, value] of Object.entries(localStorage)) {
		    if(document.getElementById(key)){ //Key (ElementID) exists on page
				document.getElementById(key).value = value; //Populate the Key (ElementById) with the value (TextBox Value)
			}
		}
	}

    function saveToLocalStorage(dataKey,dataValue){
	    localStorage.setItem(dataKey, dataValue);
    }
    
    function clearLocalStorage(){
    	for (let [key, value] of Object.entries(localStorage)) {
	    	if (key != "inputOfficersName" && 
	    		key !="inputSerialHeightStick" && 
				key !="inputSerialTapeMeasure"){ // Don't clear Officer's Name field - used across multiple forms.
			    	if(document.getElementById(key)){ //Key (ElementID) exists on page
						localStorage.removeItem(key); //Remove value from localStorage	
					}
			}
		}
	} 
	
	
//EVENT LISTENER - Deselection of a Text Input - Save INPUT value to Local Storage
	inputs = document.getElementsByTagName("input");
	for (let i=0; i<inputs.length;i++) {
		inputs[i].addEventListener("blur", function (){
		    saveToLocalStorage(inputs[i].id,inputs[i].value) 
		    
	    		//INNER EVENT LISTENER - CHANGE ALL CALLSIGNS WITHIN NARRATIVES WHEN CALLSIGN TEXT BOX UPDATED	    		
				narrativeCallSign = document.getElementsByClassName("callSignText");
				for (let i=0; i<narrativeCallSign.length;i++) {
					narrativeCallSign[i].innerHTML= document.getElementById("inputCallSign").value.toUpperCase();
				}
		});
	}
	
	
	