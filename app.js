function updateCaseNumber(product, isIncreasing, productUnitPrice) {
  const productInput = document.getElementById(`${product}-number`);
  let productNumber = productInput.value;

  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }

  productInput.value = productNumber;

  // Update Case Total
  const productTotal = document.getElementById(`${product}-total`);
  productTotal.innerText = productNumber * productUnitPrice;
  const caseTotal = parseInt(document.getElementById("case-total").innerText);
  const phoneTotal = parseInt(document.getElementById("phone-total").innerText);
  const subTotal = caseTotal + phoneTotal;
  document.getElementById("sub-total").innerText = subTotal;

  const taxTotal = parseFloat(subTotal * 0.1).toFixed(2);
  document.getElementById("tax-total").innerText = taxTotal;

  document.getElementById("total-price").innerText =
    parseFloat(subTotal) + parseFloat(taxTotal);
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", true, 59);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", false, 59);
});

document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", true, 1219);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", false, 1219);
});
