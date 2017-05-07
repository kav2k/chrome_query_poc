chrome.browserAction.onClicked.addListener((details) => {
  chrome.tabs.query(
    { url: "*://example.com/*", currentWindow: true },
    (tabs) => {
      if (tabs.length) {
        chrome.tabs.update(tabs[0].id, {active: true});
      } else {
        chrome.tabs.create({ url: "https://example.com/"});
      }
    }
  );
})