let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
let root = document.documentElement;

const loadCountry = async (name) => {
  try {
    const url = 'https://api.nationalize.io/?name='+name+'';
    const res = await fetch(url);
    const data = await res.json();

    if (data.country[0].country_id == undefined || data.country[1].country_id == undefined || data.country[2].country_id == undefined) {
      // Show msg no countries found
      $("#errorMsg").text("No countries found for that name");
      $("#error").removeClass("hide");
    } else {
      // Show data
      var c1 = regionNames.of(data.country[0].country_id);
      var c2 = regionNames.of(data.country[1].country_id);
      var c3 = regionNames.of(data.country[2].country_id);

      var p1 = parseFloat(data.country[0].probability*100).toFixed(2);
      root.style.setProperty('--prob1', p1+"%");
      var p2 = parseFloat(data.country[1].probability*100).toFixed(2);
      root.style.setProperty('--prob2', p2+"%");
      var p3 = parseFloat(data.country[2].probability*100).toFixed(2);
      root.style.setProperty('--prob3', p3+"%");
      var p4 = (100-p1-p2-p3).toFixed(2);
      root.style.setProperty('--prob4', p4+"%");

      $("#contentCenter").removeClass("center");
      $('div[name="dataPrint"]').removeClass("hide");
      $("#contentCenter").css("margin-top","10vh");

      document.getElementById("country1").innerHTML = c1;
      document.getElementById("country2").innerHTML = c2;
      document.getElementById("country3").innerHTML = c3;
      document.getElementById("countryOther").innerHTML = "Others";

      var probab1 = $('#probab1').text();
      var probab2 = $('#probab2').text();
      var probab3 = $('#probab3').text();
      var probabOther = $('#probabOther').text();

      $({numberValue: probab1}).animate({numberValue: p1}, {
          duration: 3000,
          easing: 'linear',
          step: function() {
              $('#probab1').text(((this.numberValue*100)/100).toFixed(2)+"%");
          }
      });
      $({numberValue: probab2}).animate({numberValue: p2}, {
          duration: 3000,
          easing: 'linear',
          step: function() {
              $('#probab2').text(((this.numberValue*100)/100).toFixed(2)+"%");
          }
      });
      $({numberValue: probab3}).animate({numberValue: p3}, {
          duration: 3000,
          easing: 'linear',
          step: function() {
              $('#probab3').text(((this.numberValue*100)/100).toFixed(2)+"%");
          }
      });
      $({numberValue: probabOther}).animate({numberValue: p4}, {
          duration: 3000,
          easing: 'linear',
          step: function() {
              $('#probabOther').text(((this.numberValue*100)/100).toFixed(2)+"%");
          }
      });

    }
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

function printCountry() {

}
