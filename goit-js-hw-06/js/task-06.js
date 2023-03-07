const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
    inputRef.classList.toggle("valid", inputRef.value.length >= 6);
    inputRef.classList.toggle("invalid", inputRef.value.length < 6)
})

