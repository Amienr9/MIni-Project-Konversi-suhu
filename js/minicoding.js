function convertCelsius() {
    var celsiusInput = document.getElementById('input');
    var result = document.getElementById('result');
    var logic = document.getElementById('logic'); 
  
    if (celsiusInput.value === "" || isNaN(celsiusInput.value)) {
      alert('Please enter a valid temperature in Celsius value');
      Reset();
      return;
    }
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
  
    result.textContent = "Result: " + celsius + "°C = " + fahrenheit + "°F";
    logic.textContent = "Method: " + celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
  }
  
  function reverseCelsius() {
    location.reload();
  }
  
  function reverseFahrenheit() {
    Reset();
    var fahrenheitInput = document.getElementById('input');
    var label = document.querySelector('label[for="input"]');
    var convertButton = document.querySelector('button[onclick="convertCelsius()"]');
    var reverseButton = document.querySelector('button[onclick="reverseFahrenheit()"]'); 
  
    label.textContent = "Fahrenheit:";
    fahrenheitInput.placeholder = "Enter the temperature in Fahrenheit";
  
    convertButton.setAttribute("onclick", "convertFahrenheit()");
    reverseButton.setAttribute("onclick", "reverseCelsius()");
  }
  
  function convertFahrenheit() {
    var fahrenheitInput = document.getElementById('input'); 
    var result = document.getElementById('result');
    var logic = document.getElementById('logic'); 
  
    if (fahrenheitInput.value === "" || isNaN(fahrenheitInput.value)) {
      alert('Please enter a valid temperature in Fahrenheit');
      return;
    }
  
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
  
    result.textContent = "Result: " + fahrenheit + "°F = " + celsius + "°C";
    logic.textContent = "Method: (" + fahrenheit + "°F - 32) * 5/9 = " + celsius + "°C";
  }
  
  function Reset() {
    var input = document.getElementById("input");
    var result = document.getElementById("result");
    var logic = document.getElementById("logic");
  
    input.value = "";
    result.textContent = "";
    logic.textContent = "";
  }
  
  //tester