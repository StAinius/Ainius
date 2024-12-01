
const checkbox = document.getElementById('checkbox');


if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  checkbox.checked = true;
}

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); 
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); 
  }
});