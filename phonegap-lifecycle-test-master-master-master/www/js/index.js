// declared variables
var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var x = document.getElementById("testing");
/*var key = "keys";
var value = "silver";
var key = "phone"; */
 

    function onLoad() {
        // Event listener for device ready or not
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready"); 
        window.localStorage.setItem("pen", "hello and welcome to my application");
       
      /*  var calling = window.localStorage.getItem("pen");
        window.alert(calling); */
        alert("hello");
        $(document).on("pagethree", function() {
            getLocation();
            showPosition();
            
        });
 
        
    }
	
	function updateDisplay() {
        // Function for when the applcation is launched, paused or resumed
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
        // refers to event listener at the top of document 
		alert("device ready");
        // when user hits resume/pause the opposite command will be changed to false  
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
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
//    alert("before");
//    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
//    } else { 
//        x.innerHTML = "Geolocation is not supported by this browser.";
//    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    hello();
//    alert("after");
//    x.innerHTML = "Latitude: " + position.coords.latitude + 
//    "<br>Longitude: " + position.coords.longitude;
//     alert(position.coords.latitude);
} 

function hello() {
    alert(latitude);
    alert(longitude);
}
                  