chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: function () {
      var selectedText = window.getSelection().toString();
      return selectedText;
    },
  }, function (result) {
    document.getElementById('selected-text').innerHTML = result[0].result;
  });
});
