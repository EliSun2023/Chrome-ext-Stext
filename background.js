chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        document.addEventListener('mouseup', () => {
          const selection = window.getSelection().toString().trim();
          console.log('Selection:', selection);
          if (selection) {
            chrome.runtime.sendMessage({ selection });
            console.log('Message sent:', selection);
          }
        });
      }
    });
  });
  