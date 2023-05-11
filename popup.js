chrome.runtime.onMessage.addListener((message) => {
    const selectedText = message.selection;
    console.log('Message received:', selectedText);
    document.getElementById('selected-text').textContent = selectedText;
  });
  