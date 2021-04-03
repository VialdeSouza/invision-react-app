const fieldRequiredValidator = (value) => {
  const clean = value.replace(/\s+/g, '');
  if (clean.length) {
    return ({ isValid: true, errorMessage: '' });
  }
  return ({ isValid: false, errorMessage: 'Este campo não pode ser vazio' });
};
export default fieldRequiredValidator;
