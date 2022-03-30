const loadCountry = async (name) => {
  try {
    const url = 'https://api.nationalize.io/?name='+name+'';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    document.getElementById("country1").innerHTML = data.country[0].country_id;
    document.getElementById("country2").innerHTML = data.country[1].country_id;
    document.getElementById("country3").innerHTML = data.country[2].country_id;
    document.getElementById("probab1").innerHTML = parseFloat(data.country[0].probability*100).toFixed(2)+"%";
    document.getElementById("probab2").innerHTML = parseFloat(data.country[1].probability*100).toFixed(2)+"%";
    document.getElementById("probab3").innerHTML = parseFloat(data.country[2].probability*100).toFixed(2)+"%";
  } catch(err) {
    console.error(err)
  }
};

function searchCountry() {
  var n = $("#inputName").val();
  console.log(n);
  loadCountry(n);
}
