let myform=document.getElementById("myform")
let usernameinp=document.getElementById("inp")
let surnameinp=document.getElementById("inp2")
let ageinp=document.getElementById("inp3")
let emailinp=document.getElementById("inp4")


myform.addEventListener("submit", function (event) {
    event.preventDefault();

    axios.post("https://655c8cc025b76d9884fd82fe.mockapi.io/products", {
        name: usernameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        email: emailinp.value,
    })
        .then(res => {
          console.log(res.data);
        })
});