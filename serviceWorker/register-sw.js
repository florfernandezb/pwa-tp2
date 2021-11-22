function registerServiceWorker() {
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("../serviceWorker.js").then((message) => {
      console.log("Service Worker esta listo!");
    });
  } else {
    console.log('Service Worker no es soportado!');
  }
}