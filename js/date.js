//Following Javascript will convert a date input to a valueAsDate where it is then expanded to full text IE: "Monday 1st January 2022". The resetDateVariables function provides a method to clear the global variables else the data exists when generating narratives. 25/09/2022


function dateString(dateInputID){
	const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const dayDate = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"];
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
	
	// const date = new Date(); //Get the users current date
	const date = dateInputID.valueAsDate //Getthe date from the date picker and convert it from yyyy-mm-dd to the date format
	
	 let = weekdayString = weekday[date.getDay()];
	 let = dayDateString = dayDate[date.getDate()-1]; //.getDate() returns a range of 1-31. Subtract 1 due to constant beginning at 0.
	 let = monthString = month[date.getMonth()];
	 let = yearString = date.getFullYear();
	 return([weekdayString,dayDateString,monthString,yearString])

}

function resetDateVariables(){
	weekdayString = ""
	dayDateString = ""	
	monthString = ""
	yearString = ""
}