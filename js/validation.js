function validateCarValueInput() {
  const carValueText = document.getElementById("carValueText");
  const carValue = parseFloat(carValueText.value);
  const carValueRange = document.getElementById("carValueRange");

  if (
    isNaN(carValue) ||
    carValue < CarValueRange.MIN ||
    carValue > CarValueRange.MAX
  ) {
    carValueText.setCustomValidity(
      `Please enter a value between €${CarValueRange.MIN.toLocaleString()} and €${CarValueRange.MAX.toLocaleString()}.`
    );
  } else {
    carValueText.setCustomValidity("");
    carValueRange.value = carValue;
  }

  carValueText.reportValidity();
}

function validateDownPaymentInput() {
  const downPaymentText = document.getElementById("downPaymentText");
  const downPayment = parseFloat(downPaymentText.value);
  const downPaymentRange = document.getElementById("downPaymentRange");

  if (
    isNaN(downPayment) ||
    downPayment < DownPaymentRange.MIN ||
    downPayment > DownPaymentRange.MAX
  ) {
    downPaymentText.setCustomValidity(
      `Please enter a value between ${DownPaymentRange.MIN}% and ${DownPaymentRange.MAX}%.`
    );
  } else {
    downPaymentText.setCustomValidity("");
    downPaymentRange.value = downPayment;
  }

  downPaymentText.reportValidity();
}
