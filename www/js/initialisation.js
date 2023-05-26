document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  screen.orientation.lock('landscape'); // Verrouillage de l'écran en mode paysage
  AndroidFullScreen.immersiveMode(); // Application en mode plein écran
  //window.plugins.insomnia.keepAwake(); // Empêcher la mise en veille de la tablette
}
