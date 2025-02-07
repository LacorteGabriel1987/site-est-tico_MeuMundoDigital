function toggleDescription(id) {
  let desc = document.getElementById("desc" + id);

  // Verifica o estilo display da descrição e alterna
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block"; // Exibe
  } else {
    desc.style.display = "none"; // Oculta
  }
}

document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  //Salvar preferência no navegador

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Verificar se o usuário já tinha escolhido um tema antes
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
