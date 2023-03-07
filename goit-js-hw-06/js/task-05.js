const appeal = {
    textInput: document.querySelector("#name-input"),
    changeName: document.querySelector("#name-output"),
}
appeal.textInput.addEventListener("input", onInputChange);
function onInputChange(event) {
    appeal.changeName.textContent = event.target.value.trim();
    if (appeal.changeName.textContent.length === 0) {
        appeal.changeName.textContent = "Anonymous"
    }
}