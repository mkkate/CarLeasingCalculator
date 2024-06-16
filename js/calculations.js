function calculateDownPaymentAmount(carValue, downPaymentPercent) {
  return (carValue * downPaymentPercent) / 100;
}

function calculateAnnualInterestRate(carType, CarType, InterestRate) {
  return carType === CarType.NEW ? InterestRate.NEW : InterestRate.USED;
}

function calculateMonthlyInterestRate(annualInterestRate) {
  return annualInterestRate / 12 / 100;
}

function calculateLoanAmount(carValue, downPaymentAmount) {
  return carValue - downPaymentAmount;
}

function calculateEMI(loanAmount, monthlyInterestRate, leasePeriod) {
  // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
  // EMI - equal monthly installment,
  // P - principal (the loan),
  // r - monthly interest rate,
  // n - number of payments (lease period in months)
  return (
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, leasePeriod)) /
    (Math.pow(1 + monthlyInterestRate, leasePeriod) - 1)
  );
}

function calculateTotalLeasingCost(
  monthlyInstallment,
  leasePeriod,
  downPaymentAmount
) {
  return monthlyInstallment * leasePeriod + downPaymentAmount;
}

// updates calculated values
function updateValues() {
  const carType = document.getElementById("carType").value;
  const carValue = parseFloat(document.getElementById("carValueRange").value);
  const leasePeriod = parseFloat(
    document.getElementById("leasePeriodDropdown").value
  );
  const downPaymentPercent = parseFloat(
    document.getElementById("downPaymentRange").value
  );

  const downPaymentAmount = calculateDownPaymentAmount(
    carValue,
    downPaymentPercent
  );

  const annualInterestRate = calculateAnnualInterestRate(
    carType,
    CarType,
    InterestRate
  );

  const monthlyInterestRate = calculateMonthlyInterestRate(annualInterestRate);

  const loanAmount = calculateLoanAmount(carValue, downPaymentAmount);

  const monthlyInstallment = calculateEMI(
    loanAmount,
    monthlyInterestRate,
    leasePeriod
  );

  const totalLeasingCost = calculateTotalLeasingCost(
    monthlyInstallment,
    leasePeriod,
    downPaymentAmount
  );

  document.getElementById("leasingCost").innerText =
    totalLeasingCost.toFixed(2);

  document.getElementById("downPaymentValue").innerText =
    downPaymentAmount.toFixed(2);

  document.getElementById("downPaymentPercent").innerText = downPaymentPercent;

  document.getElementById("monthlyInstallment").innerText =
    monthlyInstallment.toFixed(2);

  document.getElementById("interestRate").innerText =
    annualInterestRate.toFixed(2);
}
