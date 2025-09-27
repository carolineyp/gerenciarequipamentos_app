document.addEventListener("DOMContentLoaded", () => {
    const nmUser = localStorage.getItem("nmuser");
    if (nmUser) {
      document.getElementById("nmuser").innerText = "ola " + nmUser;
    }
  });
  