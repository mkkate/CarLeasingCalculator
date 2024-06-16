// sets input attributes
function setInputAttributes(element, range) {
  element.min = range.MIN;
  element.max = range.MAX;
  element.step = range.STEP;
}

// sets label text
function setLabelText(labelElement, text, range) {
  labelElement.innerText = `${text} (€${range.MIN.toLocaleString()} - €${range.MAX.toLocaleString()}):`;
}

// sets down payment label text
function setDownPaymentLabelText(labelElement, text, range) {
  labelElement.innerText = `${text} (${range.MIN}% - ${range.MAX}%):`;
}
