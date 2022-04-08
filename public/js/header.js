var myModal = new coreui.Modal(document.getElementById("myModal"), {
  keyboard: false,
});

var btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
  btnLogin.addEventListener("click", function () {
    myModal.show();
  });
}

var btnLogout = document.getElementById("btnLogout");
if (btnLogout) {
  btnLogout.addEventListener("shown.coreui.modal", function () {});
}
