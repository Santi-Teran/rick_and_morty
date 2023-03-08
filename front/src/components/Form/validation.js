export function validate({ username, password }) {

    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = new RegExp('[0-9]');

    if (!username) {
      errors.username = "El nombre de usuario no puede estar vacío.";
    }  
    if (username.length > 35) {
      errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";
    }  
    if (!emailRegex.test(username)) {
      errors.username = "El nombre de usuario tiene que ser un email válido.";
    }
  
    if (!password) {
      errors.password = "La contraseña no puede estar vacía.";
    }  
    if (!passwordRegex.test(password)) {
      errors.password = "La contraseña debe tener al menos un número.";
    }  
    if (password.length < 6 || password.length > 10) {
      errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
  
    return errors;
  }