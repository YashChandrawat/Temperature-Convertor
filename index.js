function convert() {
    var temperature = document.getElementById("temperature").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var convertedTemp;
    if (isNaN(temperature)) {
        alert("Please enter a valid temperature.");
    } else {
        if (from === "celsius") {
            if (to === "fahrenheit") {
                convertedTemp = (temperature * 9 / 5) + 32;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " °F";
            } else if (to === "kelvin") {
                convertedTemp = parseFloat(temperature) + 273.15;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " K";
            } else {
                document.getElementById("result").innerHTML = temperature + " °C"
            }
        }

        else if (from === "fahrenheit") {
            if (to === "celsius") {
                convertedTemp = (temperature - 32) * 5 / 9;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " °C";
            } else if (to === "kelvin") {
                convertedTemp = parseFloat((temperature - 32) * 5 / 9) + 273.15;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " K";
            }
            else {
                document.getElementById("result").innerHTML = temperature + " °F"
            }
        }

        else {
            if (to === "celsius") {
                convertedTemp = parseFloat(temperature) - 273.15;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " °C";
            } else if (to === "fahrenheit") {
                convertedTemp = ((parseFloat(temperature) - 273.15) * 9 / 5) + 32;
                document.getElementById("result").innerHTML = convertedTemp.toFixed(2) + " °F";
            }
            else {
                document.getElementById("result").innerHTML = temperature + " K"
            }
        }

    }
}
