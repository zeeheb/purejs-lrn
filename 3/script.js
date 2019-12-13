const btnsub = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnsub.addEventListener("click", (event) => {
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input input")];

    fields.forEach( field => {
        if (field.value === "") {
            form.classList.add('validateError');
            document.querySelector(".done").style.opacity = 1;
        }
    });

const formError = document.querySelector(".validateError");
    if (formError) {
            formError.addEventListener("animationend", (event) => {
                if (event.animationName === 'vibrate') {
                    formError.classList.remove("validateError");
                }
            });
        } else {
            form.classList.add("form-hide");
        }
});

form.addEventListener("animationstart", (event) => {
    if (event.animationName == 'down') {
        document.querySelector("body").style.overflow = 'hidden';
    }
})

form.addEventListener("animationend", (event) => {
    if (event.animationName == 'down') {
    form.style.display = 'none';
    document.querySelector("body").style.overflow = 'hidden';
    document.querySelector("h1").textContent = 'Passou!'
    document.querySelector(".done").textContent = 'Boa'
    }

});



