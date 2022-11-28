
let faqs = document.querySelectorAll(" .faq .container .box")

faqs.forEach( faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});