fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
  .then(response => response.json())
  .then(data => {
    const places = data.places; // Access the 'places' property

    let tableData = "";
    Object.keys(places).forEach(place => {
      const { info, name, image } = places[place];
      tableData += `<tr>
                      <td>${place}</td>
                      <td>${info}</td>
                      <td>${name}</td>
                      <td><img src="${image}"/></td>
                    </tr>`;
    });

    document.getElementById("table-body").innerHTML = tableData;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
