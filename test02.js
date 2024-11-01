function helloWorld(name){
    alert(`Hello, ${name}!`);
}
helloWorld("gdg on campus sogang");


const helloBtn=document.getElementById("helloBtn");
const userName=document.getElementById("userName");

helloBtn.addEventListener('click',()=>{
    helloWorld(userName.value);
})