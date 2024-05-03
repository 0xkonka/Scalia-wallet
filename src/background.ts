// Listen for any HTTP/HTTPS requests
chrome.webRequest.onBeforeRequest.addListener(
  // Callback function to handle requests
  (details) => {
    // Check if the request URL contains the .scalia TLD
    console.log('details.url', details.url)
    if (details.url.includes('gmx')) {
      // Send a message to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
          chrome.tabs.sendMessage(activeTab.id!, { scaliaDetected: true });
        }
      });
    }
  },
  
  // Filters - only interested in HTTP/HTTPS requests
  { urls: ['http://*/*', 'https://*/*'] },
  // Additional options - empty for now
  []
);