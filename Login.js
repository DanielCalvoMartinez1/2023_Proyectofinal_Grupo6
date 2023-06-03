// Login.js

// Obtener el formulario de inicio de sesión por su ID
const loginForm = document.getElementById("loginForm");

// Agregar un event listener para el evento 'submit' del formulario
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores ingresados por el usuario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Realizar la validación del inicio de sesión
  if (username === "Dani" && password === "1234") {
    // Inicio de sesión exitoso, redirigir al usuario a otra página
    window.location.href = "menu.html";
  } else {
    // Mostrar un mensaje de error
    alert("Nombre de usuario o contraseña incorrectos");
  }
});
