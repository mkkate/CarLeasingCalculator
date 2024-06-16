// sync range input with text output
function syncTextWithRange(rangeElement, textElement) {
  textElement.value = rangeElement.value;
  updateValues();
}

// sync text input with range output
function syncRangeWithText(textElement, rangeElement) {
  rangeElement.value = textElement.value;
  updateValues();
}
