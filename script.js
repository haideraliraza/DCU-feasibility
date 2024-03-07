function calculate() {
  var singlePhaseValue = parseFloat(document.getElementById('singlePhase').value) || 0;
  var threePhaseValue = parseFloat(document.getElementById('threePhase').value) || 0;

  var withDCUResult = (singlePhaseValue * 22522.523) + (threePhaseValue * 36502.089) + 195749.0885 + 3951;
  var withoutDCUResult = (singlePhaseValue * 29503.8545) + (threePhaseValue * 48630.777) + 105517.5185 + (singlePhaseValue + threePhaseValue + 1) * 2696.4;

  var resultContainer = document.getElementById('results');
  resultContainer.innerHTML = `
    <p>With DCU Result: ${withDCUResult.toFixed(2)}</p>
    <p>Without DCU Result: ${withoutDCUResult.toFixed(2)}</p>
  `;

  var feasibilityMessage = withDCUResult > withoutDCUResult ? "DCU is not feasible" : "DCU is feasible";
  resultContainer.innerHTML += `<p>${feasibilityMessage}</p>`;

  // Show the reset button
  document.getElementById('resetBtn').style.display = 'block';
}

function reset() {
  document.getElementById('singlePhase').value = '';
  document.getElementById('threePhase').value = '';
  document.getElementById('results').innerHTML = '';

  // Hide the reset button
  document.getElementById('resetBtn').style.display = 'none';
}
