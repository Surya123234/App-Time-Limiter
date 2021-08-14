document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  const testButton = document.getElementById('test');
  testButton.addEventListener('click', () => {
    chrome.runtime.sendMessage({action: "testFetch"}, (response) => {
      responseText = document.getElementById('responseText');
      responseText.innerHTML = response;
    })
  })

}

