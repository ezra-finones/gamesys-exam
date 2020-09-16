document.addEventListener('DOMContentLoaded', () => {
    const inputEl = document.querySelectorAll('[class*="box-"]');

    inputEl.forEach((input) => {
        input.addEventListener('keydown', event => {
            const currEl = event.target

            if (event.keyCode == '40' && currEl.nextElementSibling) {
                const nextEl = currEl.nextElementSibling;
                setActiveElement(currEl, nextEl);
            }

            if (event.keyCode == '38' && currEl.previousElementSibling) {
                const prevEl = currEl.previousElementSibling;
                setActiveElement(currEl, prevEl);
            }
        });

        input.addEventListener('click', event => {
            inputEl.forEach( e => {
                e.classList.remove('active');
            });
            event.target.classList.add('active');
        });
    });
})

function setActiveElement(currEl, el)
{
    currEl.classList.remove('active');
    el.focus();
    el.classList.add('active');
}
