function displayFormData() {
  const form = document.getElementById("myForm");
  const formData = new FormData(form);
  const keys = ["name", "email", "payment", "promotion", "location"];
  let tableHtml = "<table><tr><th>Key</th><th>Value</th></tr>";
  for (const key of keys) {
    tableHtml += `<tr><td>${key}</td><td>${formData.get(key) || ""}</td></tr>`;
  }
  tableHtml += "</table>";
  document.getElementById("formData").innerHTML = tableHtml;
}