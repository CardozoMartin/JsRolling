export const validateName = (value, campo) => {
  // Minima long del nombre
  if (value.trim().length <= 2) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');

    return false;
  }

  // Maxima long del nombre
  if (value.trim().length >= 100) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  campo.classList.remove('is-invalid');
  campo.classList.add('is-valid');
  return true;
};

export const validateNumber = (value, campo) => {
  // Cantidad de digitos distinta a 10 caracteres
  // 381 123 4567
  if (value < 0 && value>100) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  // No tenga caracteres no numericos
  if (isNaN(Number(value))) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  campo.classList.remove('is-invalid');
  campo.classList.add('is-valid');
  return true;
};
export const validacionGenero = (value, campo) => {
  // Minima long del nombre
  if (value.trim().length <= 2) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');

    return false;
  }

  // Maxima long del nombre
  if (value.trim().length >= 100) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  campo.classList.remove('is-invalid');
  campo.classList.add('is-valid');
  return true;
};

export const validarAltura = (value, campo) => {
    if (value < 0 && value>100) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
      }
    
      // No tenga caracteres no numericos
      if (isNaN(Number(value))) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
      }
    
      campo.classList.remove('is-invalid');
      campo.classList.add('is-valid');
      return true;
};

export const validateImage = (value, campo) => {
  // Cantidad de digitos menor a 4
  if (value.trim().length < 4) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  // Cantidad de digitos mayor a 300
  if (value.trim().length > 300) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

  if (!regex.test(value)) {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  }

  campo.classList.remove('is-invalid');
  campo.classList.add('is-valid');
  return true;
};