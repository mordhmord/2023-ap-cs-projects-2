// change screen when pressing buttons
onEvent("HomeButton2", "click", function( ) {
  setScreen("mainScreen");
});

onEvent("homeButton1", "click", function( ) {
  setScreen("mainScreen");
});

onEvent("highPageButton", "click", function( ) {
  setScreen("highPriceScreen");
  findHigh();
});

onEvent("lowPagebutton", "click", function( ) {
  setScreen("lowPriceScreen");
  findLow();
});

onEvent("cityDropDown2", "change", function( ) {
  findHigh();
});

onEvent("cityDropDown1", "change", function( ) {
  findLow();
});
// findHigh function finds the high temp for a city uou pick this year
function findHigh() {
 var input = getText("cityDropDown2");
 var category  = getColumn("US Gas Prices", input);
 var high =  0;
 for(var i = 0; i < category.length; i++){
   if(category[i] > high) {
     high = category[i];
   }
 }
 setText("text_areaForHigh", (input + " highest gas price was for this year was" + " is " + high));
 
}
// findLow function finds the low temp for a city you pick this year
function findLow() {
 var input = getText("cityDropDown1");
 var category  = getColumn("US Gas Prices", input);
 var low =  10;
 for(var i = 0; i < category.length; i++){
   if(category[i] < low) {
     low = category[i];
   }
 }
 setText("text_areaForLow", (input + " lowest gas price was for this year " + " is " + low));
}
