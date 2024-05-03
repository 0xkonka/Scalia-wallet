
// import { createApp } from "vue";
// import App from "./App.vue";

// window.onload = async () => {
//   const el = document.querySelector('body');
//   if (el) {
//     el.insertAdjacentHTML(
//       'afterend',
//       '<div id="crx-app"></div>',
//     );
//     const app = createApp(App)
//     app.mount('#crx-app');
//   }
// }


// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Update the state and display the message
  if (message.scaliaDetected) {
    document.querySelector('p')!.textContent = 'Scalia will be here';
  }
});