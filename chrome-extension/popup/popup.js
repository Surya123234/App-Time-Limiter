document.addEventListener('DOMContentLoaded', onLoad)

function onLoad() {
  document.getElementById("form").addEventListener("submit", handleSubmit, false);

}



function handleSubmit() {
  chrome.runtime.sendMessage({
    "action": "limit_website_usage",
    "website": document.querySelector("#website").value,
    "hours": document.querySelector("#duration-hours").value,
    "minutes": document.querySelector("#duration-minutes").value
  }, (res) => {
    console.log(res);
  })
}





