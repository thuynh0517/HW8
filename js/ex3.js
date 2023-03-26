const travelData = {
  name: "John",
  countries: [
    { name: "Spain", year: 2019 },
    { name: "France", year: 2018 },
    { name: "Italy", year: 2017 }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelData)
})
  .then(response => response.json())
  .then(data => console.log(`Your name is ${data.name} and you visited ${data.visited} countries. ${data.message}`))
  .catch(error => console.error(error));
