function inputUpdated() {
  document.getElementById('value').innerHTML = document.getElementById('input').value
}

document.getElementById('update').addEventListener('click', inputUpdated)