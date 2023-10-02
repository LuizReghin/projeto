function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //  html.classList.toggle("light")  faz a mesma função //

  // pegar a tag img //
  const img = document.querySelector("#profile img")

  //se tiver light mode, adicionar imagem light //

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
