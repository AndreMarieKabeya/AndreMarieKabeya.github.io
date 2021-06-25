// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
  var a = document.getElementById(txtPhone).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}

//Function to make sure that at least ont checkbox is checked
function manageCheckBoxes() {
  var form_data = new FormData(document.querySelector("form"));

  if (!form_data.has("service[]")) {
    document.getElementById("option_not_selected").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("option_not_selected").style.visibility = "hidden";
    return true;
  }

}

function theFunction() {
  var chosenDay = document.getElementById("dateInput").value;
  //Code to get time displayed with AM or PM was found on stackOverflow. Link: https://stackoverflow.com/questions/39310579/get-am-pm-from-html-time-input
  var chosenTime = document.getElementById("timeInput").value.split(':'),
    hours, minutes, meridian;
  hours = chosenTime[0];
  minutes = chosenTime[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  
  alert("Votre rendez-vous a bel et bien était pris avec " + $("#doctors option:selected").text() +
  " Le " + chosenDay + " à " + hours + ':' + minutes + ' ' + meridian);
}

function validateCard(cardNum) {
  var a = document.getElementById(cardNum).value;
  var filter = /^[0-9]{14}$/;
  if (filter.test(a)) {
    return true;
  } else {
    return false;
  }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
  // Sunday is Day 0, disable all Sundays
  if ((date.getDay() === 1 || date.getDay() === 5) && $("#doctors option:selected").text() === "Dr. Mark")
    return [false];

  else if ((date.getDay() === 4 || date.getDay() === 6) && $("#doctors option:selected").text() === "Dr. Sarah")
    return [false];
  else if ((date.getDay() === 2 || date.getDay() === 3) && $("#doctors option:selected").text() === "Dr. Zack")
    return [false];
  var string = jQuery.datepicker.formatDate(setDateFormat, date);
  return [unavailableDates.indexOf(string) === -1];
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function() {

  // phone validation, it calls validatePhone
  // and also some feedback as an Alert + putting a value in the input that shows the format required
  // the "addClass" will use the class "error" defined in style.css and add it to the phone input
  // The "error" class in style.css defines yellow background and red foreground
  $("#phone").on("change", function() {
    if (!validatePhone("phone")) {
      alert("Format de numéro incorrect. Veuillez entrer 10 chiffres uniquement et sans aucun caractère spécial");
      $("#phone").val("xxxxxxxxxx");
      $("#phone").addClass("error");
    } else {
      $("#phone").removeClass("error");
    }
  });

  $("#debit").on("change", function() {
    if (!validateCard("debit")) {
      alert("Mauvais format de carte de crédit. Veuillez entrez tous les 14 chiffres de votre carte de crédit et sans aucun caractère spécial.");
      $("#debit").val("xxxxxxxxxxxxxx");
      $("#debit").addClass("error");
    } else {
      $("#debit").removeClass("error");
    }
  });

  // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
  // You can try different themes (the names are under the calendars) / This is Excite Bike
  // To use a different theme you must include its css in your HTML file.
  // The one I included in my HTML is the Excite Bike, but you can try others

  // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
  // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
  $("#dateInput").datepicker({
    dateFormat: setDateFormat,
    // no calendar before June 1rst 2020
    minDate: new Date('06/01/2020'),
    maxDate: '+4M',
    // used to disable some dates
    beforeShowDay: $.datepicker.noWeekends,
    beforeShowDay: disableDates
  });

  /*$("#timeInput").timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10',
    maxTime: '6:00pm',
    defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});*/


  // Look at the different events on which an action can be performed
  // https://www.w3schools.com/jquery/jquery_events.asp
  // Here, we put
  $("#debit").on("mouseenter", function() {
    $("#debit").addClass("showInput");
  });

  $("#debit").on("mouseleave", function() {
    $("#debit").removeClass("showInput");
  });

  // https://jqueryui.com/tooltip/
  // The class "highlight" used here is predefined in JQuery UI
  // the message of the tooltip is encoded in the input (in the HTML file)
  $("#debit").tooltip({
    classes: {
      "ui-tooltip": "highlight"
    }
  });
});
