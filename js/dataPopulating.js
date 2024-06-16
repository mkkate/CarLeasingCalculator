// populates the car type dropdown with values from enum
function populateCarTypeDropdown() {
  const carTypeElement = document.getElementById("carType");
  const options = Object.values(CarType);
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    carTypeElement.appendChild(optionElement);
  });
}

// populates the lease period dropdown with values from enum
function populateLeasePeriodDropdown() {
  const leasePeriodDropdown = document.getElementById("leasePeriodDropdown");
  for (
    let i = LeasePeriodRange.MIN;
    i <= LeasePeriodRange.MAX;
    i += LeasePeriodRange.STEP
  ) {
    const optionElement = document.createElement("option");
    optionElement.value = i;
    optionElement.text = i;
    leasePeriodDropdown.appendChild(optionElement);
  }
}
