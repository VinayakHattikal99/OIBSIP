function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result1");
  
  
    // Validate input as a number
    if (isNaN(temperatureInput)) {
      resultElement.textContent = "Invalid temperature input!";
      return;
    }
  
    // Perform temperature conversion
    var convertedTemperature;
    var resultUnit;
    if (unitSelect === "celsius") {
      convertedTemperature = (temperatureInput - 32) * 5 / 9;
      resultUnit = "°C";
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = temperatureInput * 9 / 5 + 32;
      resultUnit = "°F";
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
      resultUnit = "K";
    }
  
    // Display the result
    resultElement.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + resultUnit;
  }
  