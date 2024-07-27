// Agrega la clase 'fade-in' a los elementos después de que se cargue la página
$(document).ready(function() {
	$('.fade-in').addClass('fade-in');
});

function enviarFormularioAjax() {
  
  // Obtener el token de respuesta del reCAPTCHA
  var recaptchaResponse = grecaptcha.getResponse();

  // Verificar si se ha seleccionado el reCAPTCHA
  if (recaptchaResponse.length === 0) {
    // Mostrar mensaje de error utilizando SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa el reCAPTCHA antes de enviar el formulario.'
    });
    return;
  }  
  // Resto del código para enviar el formulario utilizando Ajax
  var empresa = $("#empresa").val();
  var nombre = $("#nombre").val();
  var cargo = $("#cargo").val();
  var email = $("#email").val();
  var pais = $("#pais").val();
  var telefono = $("#telefono").val();
  var norma = $("#norma").val();

  var datos = {
    Empresa: empresa,
    Nombre: nombre,
    Cargo: cargo,
    Email: email,
    Pais: pais,
    Telefono: telefono,
    Norma: norma
  };

  $.ajax({
    url: "https://formsubmit.co/ajax/clientes@isoquality.cl",
    method: "POST",
    data: datos,
    success: function(response) {
      console.log(response);
      limpiarCamposFormulario()
      mostrarMensajeConfirmacion();
    },
    error: function(error) {
      console.error(error);
    }
  });
}

function limpiarCamposFormulario() {
  $("#empresa").val("");
  $("#nombre").val("");
  $("#cargo").val("");
  $("#email").val("");
  $("#pais").val("");
  $("#telefono").val("");
  $("#norma").val("");
}


function mostrarMensajeConfirmacion() {
  Swal.fire({
    icon: 'success',
    title: '¡Formulario enviado!',
    text: 'El formulario se ha enviado correctamente.'
  });
}