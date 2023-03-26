fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
.then(response => response.json())
.then(data => {
  const table = document.querySelector('#paintings');
  data.forEach(painting => {
    const row = table.insertRow();
    row.insertCell().textContent = painting.name;
    row.insertCell().textContent = painting.year;
    row.insertCell().textContent = painting.artist;
  });
})
.catch(error => console.error(error));