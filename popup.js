chrome.tabs.executeScript(
  {
    code: "window.getSelection().toString();"
  },
  function(selection) {
    document.getElementById("selected-text").innerHTML = selection[0];
  }
);