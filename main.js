
// Here set the minutes, seconds, and tenths-of-second when you want the chronometer to stop
// If all these values are set to 0, the chronometer not stop automatically
var stmints = 0;
var stseconds = 0;
var stzecsec = 0;
var sthours = 0;
var startchron = 0;

var zecsec = 0;
var seconds = 0;
var mints = 0;
var hours = 0;

function chronometer() {

  if(startchron == 1) {

if(zecsec == stzecsec && seconds == stseconds && mints == stmints && hours == sthours) {
  toAutoStop();
  return;
  }
    zecsec -= 1;       // set tenths of a second

    // set tenths seconds
    if(zecsec < 0) {
      zecsec = 99;
      seconds -= 1;
    }

    // set seconds
    if(seconds < 0) {
      seconds = 60;
      mints -= 1;
    }

    // set minutes
    if(mints < 0) {
      mints = 60;
      hours -= 1;
    }

    //set hours
    if(hours < 0) {
      hours = 0;
    }

    // adds data in #showtm
    $('#showtm').html(hours+ ':'+ mints+ ':'+ seconds+ ',' + zecsec);

    // if the chronometer reaches to the values for stop, calls whenChrStop(), else, auto-calls chronometer()
    if(zecsec == stzecsec && seconds == stseconds && mints == stmints && hours == sthours){
      toAutoStop();
    } 
    else{
      setTimeout("chronometer()", 10); //Intervalo de milisegundos
    } 
  }
}

function startChr() 
{ 
  $("#btnStart").prop( "disabled", true );
  initValuesChronometer(); 
  startchron = 1; 
  chronometer(); 
}      // starts the chronometer

function stopChr() { 
startchron = 0; 
$("#btnStart").prop( "disabled", false );
}   // stops the chronometer

function resetChr() {
  zecsec = "0" + 0;  seconds = "0" + 0; mints = "0" + 0; hours ="0" + 0; startchron ="0" +   0; 
  document.getElementById('showtm').innerHTML = hours+ ':' +mints+ ':'+ seconds+ ','+ zecsec;
  resetFormValues();
}


// function to be executed when the chronometer stops
function toAutoStop() {
  $("#btnStart").prop( "disabled", false );
  document.getElementById("sonido").play();
}


function updateAIH(idInput,valueRange){
  $("#"+idInput+"").val(valueRange);
}

function updateARH(idInput,valueInput){
  $("#"+idInput+"").val(valueInput);
}

function resetFormValues(){
  $("#formulario input").each(function( index ) {
    $( this ).val(0);
});
  
}

function initValuesChronometer(){
  // the initial tenths-of-second, seconds, and minutes
zecsec = $("#amountInputTenths").val();
seconds = $("#amountInputSeconds").val();
mints = $("#amountInputMinutes").val();
hours = $("#amountInputHours").val();
}

function formatZero(valor){
  valor = "0" + valor;
  return valor;
}