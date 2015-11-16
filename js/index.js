function store() {
  var submitEl = document.getElementById('submit');
  localStorage.setItem("name", submitEl.value);
}
