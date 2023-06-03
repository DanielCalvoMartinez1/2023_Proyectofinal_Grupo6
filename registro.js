// Registro.js

// Obtener el formulario de registro por su etiqueta <form>
const registrationForm = document.querySelector("form");

// Agregar un event listener para el evento 'submit' del formulario
registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores ingresados por el usuario
  const username = document.getElementById("username").value;
  const fullname = document.getElementById("fullname").value;
  const birthdate = document.getElementById("birthdate").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Realizar la validación del formulario de registro
  if (password !== confirmPassword) {
    // Mostrar un mensaje de error si las contraseñas no coinciden
    alert("Las contraseñas no coinciden");
  } else {
    // Crear un objeto con los datos del usuario
    const userData = {
      username: username,
      fullname: fullname,
      birthdate: birthdate,
      email: email,
      password: password
    };

    // Aquí puedes agregar el código para enviar los datos del usuario al servidor o almacenarlos en algún lugar

    // Mostrar un mensaje de éxito
    alert("Registro exitoso");

    // Redirigir a la página de inicio de sesión
    window.location.href = "inicio_sesion.html";
  }
});

