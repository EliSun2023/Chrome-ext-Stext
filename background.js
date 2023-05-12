chrome.action.onClicked.addListener(async (tab) => {
  const [tabId] = await chrome.tabs.query({ active: true, currentWindow: true });

  await chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: () => {
      const selectedText = window.getSelection().toString();
      chrome.action.setBadgeText({ text: selected-text });
    }
  });
});
