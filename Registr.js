const body = document.querySelector("body")
const form = document.querySelector( ".form")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const btn = document.querySelector(".btn-next")
const h4 = document.querySelector(".text")
const openPopUp = document.getElementById("open-pop-up")
const closePopUp = document.getElementById("pop-up-close")
const popUp = document.getElementById("pop-up")


body.style.background = "gray"
let num = 3
form.addEventListener("submit", (e)=>{
    e.preventDefault()


    function add(){
        if (email.value === "motion-web" && password.value === "12345"){
            email.value = ""
            password.value = ""
            email.style.border = "2px solid green"
            password.style.border = "2px solid green"
            h4.style.color = "green"
            h4.innerHTML = "Hello"

        }else {
            num--
            email.value = ""
            password.value = ""

        }


        if (num === 2){
            h4.innerHTML = "сизде 2 попытка калды"
            h4.style.color = "green"
            email.style.border = "2px solid white"
            password.style.border = "2px solid white"

        }
        if (num === 1){
            h4.innerHTML = "сизде 1 попытка калды"
            h4.style.color = "yellow"
            email.style.border = "2px solid white"
            password.style.border = "2px solid white"
        }
        if (num === 0){
            h4.innerHTML = "доступ закрыт"
            h4.style.color = "red"
            btn.setAttribute("disabled", "disabled")
        }


    }
    if (email.value === "" && password.value === "") {
        email.style.border = "2px solid red"
        password.style.border = "2px solid red"
        h4.style.color = "red"
        h4.innerHTML = "Бир нерсе жаз"
    }else if (email.value !== "" && password.value !== ""){
        return add()

    }
            })
email.addEventListener("click", ()=>{
    email.style.border = "2px solid gray"
    password.style.border = " 2px solid gray"
    h4.innerHTML = ""
})
password.addEventListener("click", ()=>{
    email.style.border = "2px solid gray"
    password.style.border = " 2px solid gray"
    h4.innerHTML = ""
})


openPopUp.addEventListener("click",  (e)=>{
    e.preventDefault()
    popUp.classList.add("active")
})
closePopUp.addEventListener("click", (e)=>{
    e.preventDefault()
    popUp.classList.remove("active")
})