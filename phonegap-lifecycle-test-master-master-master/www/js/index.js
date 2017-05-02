// declared variables
var x = document.getElementById("testing");
 

    function onLoad() {
        // Event listener for device ready or not
		  $(document).on("pagethree", function() {
            getLocation();
            showPosition();
			hello();
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); 
        window.localStorage.setItem("pen", "hello and welcome to my application");
       
      /*  var calling = window.localStorage.getItem("pen");
        window.alert(calling); */
        alert("hello");
        });
		
        
    }

    // Handle the pause event
    // creates the function that pauses the screen for user, also displays alert message informing them 
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	// creates a function what resumes the program for the user, will also display an alert box informing them of this 
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }

function toggle() {
    alert("hello");
   /* $("#pageone").addClass(theme: 'b');
    $(this).buttonMarkup({theme: 'b'});
    $(this).parent().buttonMarkup({ theme: "b" });   */
}

function exit() {
    navigator.app.exitApp();
}

function getLocation() { 
   alert("before");
   if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
   } else { 
       x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    hello();
	alert("after");

//    alert("after");
//    x.innerHTML = "Latitude: " + position.coords.latitude + 
//    "<br>Longitude: " + position.coords.longitude;
//     alert(position.coords.latitude);
} 

function hello() {
    alert(latitude);
    alert(longitude);
}

function normal() {
	document.body.style.backgroundColor = "";
} 

function black() {
	document.body.style.backgroundColor = "black";
} 

function white() {
	document.body.style.backgroundColor = "white";
} 

function grey() {
	document.body.style.backgroundColor = "grey";
} 

function yellow() {
	document.body.style.backgroundColor = "yellow";
} 






















                  