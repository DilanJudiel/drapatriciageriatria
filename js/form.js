document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "522223592373";

  const nombre = document.querySelector("#nombre").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const consulta = document.querySelector("#consulta").value;
  // const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Dra. Patricia Geriatra_*%0A
		*Cita*%0A%0A
		*Nombre*%0A
		${nombre}%0A
		*Indica la fecha de tu cita*%0A
		${fecha}%0A
		*Indica la hora de tu cita*%0A
		${hora}%0A
		*Motivo de consulta*%0A
		${consulta}`;

  if (nombre === "" || fecha === "" || hora === "" | consulta === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu cita, ${nombre}`;

  window.open(url);
});
