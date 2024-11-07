const submit = document.querySelector('#valider');
const reset = document.querySelector('#zero');

const submitModal = document.querySelector('#submitModal');
const resetModal = document.querySelector('#resetModal');

const submitNon = document.querySelector('#submitNon');
const resetNon = document.querySelector('#resetNon');

const submitOui = document.querySelector('#submitOui');
const resetOui = document.querySelector('#resetOui');

submit.addEventListener('click', e => {
    e.preventDefault();
    submitModal.classList.toggle('active');
    if (resetModal.classList.contains('active')) { resetModal.classList.toggle('active') };
})

submitNon.addEventListener('click', e => {
    e.preventDefault();
    submitModal.classList.toggle('active');
})

submitOui.addEventListener('click', () => {
    submitModal.classList.toggle('active');
})

reset.addEventListener('click', e => {
    e.preventDefault();
    resetModal.classList.toggle('active');
    if (submitModal.classList.contains('active')) { submitModal.classList.toggle('active'); };
})

resetNon.addEventListener('click', e => {
    e.preventDefault();
    resetModal.classList.toggle('active');
})

resetOui.addEventListener('click', () => {
    resetModal.classList.toggle('active');
})