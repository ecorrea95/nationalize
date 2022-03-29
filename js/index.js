async function traerPais() {
  const respuesta = await fetch("https://api.nationalize.io?name=asldkj");

  if (!respuesta.OK) {
    let oops = "404";
    alert(oops);
    throw new Error(oops);
  }

  const nombre = respuesta.json();

  return nombre;
}

function mostrarNombre(n) {
  document.getElementById("mensaje").innerHTML = n.country[0].country_id;
}

traerPais().then(mostrarNombre);
