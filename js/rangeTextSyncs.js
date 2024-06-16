// sync range input with text input
function syncTextWithRange(rangeElement, textElement) {
  textElement.value = rangeElement.value;
  updateValues();
}

// sync text input with range input
function syncRangeWithText(textElement, rangeElement) {
  rangeElement.value = textElement.value;
  updateValues();
}
