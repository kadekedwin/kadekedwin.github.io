const scriptURL = "https://script.google.com/macros/s/AKfycbxH7a6CqLJjbNPpS078aZ9FF2kg8e3ynRfbHp6pUd3L2khkTAbPo5UDqDGddKnaYta3Bw/exec";
const form = document.forms["edwin-contact-form"];

const btnKirim = document.querySelector("#kirim");
const btnLoading = document.querySelector("#loading");
const successAlert = document.querySelector("#pesan-berhasil");
const failAlert = document.querySelector("#pesan-gagal");
const btnClose = document.getElementsByClassName("btn-close");

btnClose[0].addEventListener("click", function(){
    successAlert.classList.toggle('d-none');
});
btnClose[1].addEventListener("click", function(){
    failAlert.classList.toggle('d-none');
});

//submit clicked
form.addEventListener("submit", (e) => {
    e.preventDefault();

    btnKirim.classList.toggle("d-none");
    btnLoading.classList.toggle("d-none");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("Success!", response);
            btnKirim.classList.toggle("d-none");
            btnLoading.classList.toggle("d-none");
            successAlert.classList.toggle("d-none");
            form.reset();
        })
        .catch((error) => {
            console.error("Error!", error.message);
            btnKirim.classList.toggle("d-none");
            btnLoading.classList.toggle("d-none");
            failAlert.classList.toggle("d-none");
            form.reset();
        });
});