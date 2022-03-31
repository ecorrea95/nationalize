let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

const loadCountry = async (name) => {
  try {
    const url = 'https://api.nationalize.io/?name='+name+'';
    const res = await fetch(url);
    const data = await res.json();

    var c1 = regionNames.of(data.country[0].country_id);
    var c2 = regionNames.of(data.country[1].country_id);
    var c3 = regionNames.of(data.country[2].country_id);

    var p1 = parseFloat(data.country[0].probability*100).toFixed(2);
    var p2 = parseFloat(data.country[1].probability*100).toFixed(2);
    var p3 = parseFloat(data.country[2].probability*100).toFixed(2);

    $("#contentCenter").removeClass("center");
    $('div[name="dataPrint"]').removeClass("hide");
    $("#contentCenter").css("margin-top","10vh");

    document.getElementById("country1").innerHTML = c1;
    document.getElementById("country2").innerHTML = c2;
    document.getElementById("country3").innerHTML = c3;
    document.getElementById("probab1").innerHTML = p1+"%";
    document.getElementById("probab2").innerHTML = p2+"%";
    document.getElementById("probab3").innerHTML = p3+"%";
    document.getElementById("countryOther").innerHTML = "Others";
    document.getElementById("probabOther").innerHTML = (100-p1-p2-p3).toFixed(2)+"%";
  } catch(err) {
    console.error(err)
  }
};

function searchCountry() {
  var n = $("#inputName").val();
  loadCountry(n);
}

$("#inputName").on('keypress', function(e) {
    if(e.which == 13) {
      searchCountry();
    }
});

$("#inputName").focus();
