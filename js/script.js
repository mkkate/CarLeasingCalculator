// form initializing with default values and event listeners
document.addEventListener("DOMContentLoaded", function () {
  populateCarTypeDropdown();

  setInputAttributes(document.getElementById("carValueRange"), CarValueRange);

  setInputAttributes(
    document.getElementById("downPaymentRange"),
    DownPaymentRange
  );

  setCarValueLabelText(
    document.getElementById("carValueLabel"),
    "Car Value",
    CarValueRange
  );

  setDownPaymentLabelText(
    document.getElementById("downPaymentLabel"),
    "Down Payment",
    DownPaymentRange
  );

  populateLeasePeriodDropdown();

  const carValueRange = document.getElementById("carValueRange");
  const carValueText = document.getElementById("carValueText");
  const leasePeriodDropdown = document.getElementById("leasePeriodDropdown");
  const downPaymentRange = document.getElementById("downPaymentRange");
  const downPaymentText = document.getElementById("downPaymentText");

  carValueRange.addEventListener("input", () =>
    syncTextWithRange(carValueRange, carValueText)
  );

  carValueText.addEventListener("input", () =>
    syncRangeWithText(carValueText, carValueRange)
  );

  leasePeriodDropdown.addEventListener("change", updateValues);

  downPaymentRange.addEventListener("input", () =>
    syncTextWithRange(downPaymentRange, downPaymentText)
  );

  downPaymentText.addEventListener("input", () =>
    syncRangeWithText(downPaymentText, downPaymentRange)
  );

  document.getElementById("carType").addEventListener("change", updateValues);

  updateValues();
});
