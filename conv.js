document.getElementById('convert-button').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature-input').value;
    const selectedUnit = document.getElementById('unit').value;
    const resultDisplay = document.getElementById('converted-temp');
    
    // Validate input is a number
    if (isNaN(tempInput) || tempInput === '') {
      resultDisplay.textContent = 'Please enter a valid number!';
      return;
    }
  
    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let targetUnit;
  
    // Conversion logic
    if (selectedUnit === 'celsius') {
      convertedTemp = `${((temperature * 9/5) + 32).toFixed(2)} °F (Fahrenheit), ${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (selectedUnit === 'fahrenheit') {
      convertedTemp = `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (selectedUnit === 'kelvin') {
      convertedTemp = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${(((temperature - 273.15) * 9/5) + 32).toFixed(2)} °F (Fahrenheit)`;
    }
  
    // Display result
    resultDisplay.textContent = `Converted Temperature: ${convertedTemp}`;
  });
  