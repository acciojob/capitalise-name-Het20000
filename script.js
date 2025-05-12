window.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('fname');
  
  inputField.addEventListener('blur', () => {
    inputField.value = inputField.value.toUpperCase();
  });
});
