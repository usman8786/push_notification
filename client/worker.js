console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Information Added or Updated!",
    icon: "https://www.asasa.com/assets/images/asasa_logo.png"
  });
});
