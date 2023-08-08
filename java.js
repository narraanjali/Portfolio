let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top=window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");

    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzd-YlTvpjnOoMDVxi9esPSyjjYY3Ha3YZB0I-h7M9kTqVadt4i-bcRRO8AGCKLsgh7Lg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})