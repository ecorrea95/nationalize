// async function traerPais() {
//   var respuesta = await fetch("https://api.nationalize.io/?name=todd");
//
//   // if(!respuesta.OK) {
//   //   let oops = "404";
//   //   console.log(oops);
//   //   throw new Error(oops);
//   // }
//
//   const nombre = respuesta.json();
//
//   return nombre;
// }
//
// function mostrarNombre(n) {
//   document.getElementById("mensaje").innerHTML = n.country[0].country_id;
// }
//
// traerPais().then(mostrarNombre);


const loadCountry = async (name) => {
  try {
    const url = 'https://api.nationalize.io/?name='+name+'';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    document.getElementById("mensaje").innerHTML = data.country[0].country_id;
  } catch(err) {
    console.error(err)
  }
};

function searchCountry() {
  var n = $("#inputName").val();
  console.log(n);
  loadCountry(n);
}
