export default function darkMode() {
  const $btnDarkMode = document.querySelector(
    ".header--darkModeButton",
  );

  const $icon = $btnDarkMode.querySelector(".fa-solid");
  const theme = localStorage.getItem ("theme") ?? "ligth";

  if (theme ==="dark") {
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    document.body.classList.add("dark");
  }

  $icon.classList.toggle("fa-sun", theme === "dark");


  // Registrar el evento click en el botón

  $btnDarkMode.addEventListener("click", (e) => {
   // const $icon = $btnDarkMode.querySelector(".fa-solid");

    // $icon.classList.remove("fa-moon");
    // $icon.classList.add("fa-sun");

    const isDark = localStorage.getItem ("theme") === "dark";

    $icon.classList.toggle("fa-sun");
    $icon.classList.toggle("fa-moon");

   

    //este codigo es previo pa q elementos hijo cambie cuando se pone en dark.por ejemplo
    document.body.classList.toggle("dark");

    //Esto es pa q se guarde la configuracionq ha hecho el usuario y se qyuede en el que eliguio:
    localStorage.setItem("theme", isDark ? "light" : "dark");

    // const $header = document.querySelector("header");
    // const $main = document.querySelector("main");

    // if(isDark){
    //     $header.classList.add("dark");
    //     $main.classList.add("dark");
    // }



  });

  // Cambiar el icono del elemento fa-solid a sun o moon según corresponda




}