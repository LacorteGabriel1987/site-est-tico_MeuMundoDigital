function toggleDescription(id) {
  let desc = document.getElementById("desc" + id);

  // Verifica o estilo display da descrição e alterna
  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block"; // Exibe
  } else {
    desc.style.display = "none"; // Oculta
  }
}
