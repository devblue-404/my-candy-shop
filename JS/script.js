const header = document.querySelector('header');
const btnHome = document.getElementById('btnHome');
const actionButton = document.getElementById('btn-add-cart');
window.addEventListener('scroll', function(){
    if (this.window.scrollY > 20) {
        header.classList.add('sticky');
        btnHome.style.display = "block";
    }
    else {
        header.classList.remove('sticky');
        btnHome.style.display = "none"
    }
})

function addCart() {
    window.alert("Add successfully!!");
} 

function showWebpage() {
    window.location.href = './collection.html';
} 