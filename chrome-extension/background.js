console.log("hello world")

async function testApiCall() {
  const response = await fetch('http://localhost:3000');
  return await response.text();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    default:
      break
    case 'testFetch':
      testApiCall().then(sendResponse);
      return true;
      break;
  }
})