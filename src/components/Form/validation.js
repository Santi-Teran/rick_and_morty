// eslint-disable-next-line
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate({ username, password }) {
    const errors = {};
  
    if (!username) {
      errors.username = "El nombre de usuario no puede estar vacío.";
    } else if (username.length > 35) {
      errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";
    } else if (!emailRegex.test(username)) {
      errors.username = "El nombre de usuario tiene que ser un email válido.";
    }
  
    if (!password) {
      errors.password = "La contraseña no puede estar vacía.";
    } else if (!/\d/.test(password)) {
      errors.password = "La contraseña debe tener al menos un número.";
    } else if (password.length < 6 || password.length > 10) {
      errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
  
    return errors;
  }