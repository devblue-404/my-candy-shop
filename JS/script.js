const header = document.querySelector('header');
const btnHome = document.getElementById('btnHome');

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
    window.open('./collection.html', '_blank');
} 

var actionButton1 = document.getElementById("btn-add-cart1");
var actionButton2 = document.getElementById("btn-add-cart2");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

actionButton1.onclick = function() {
  modal.style.display = "block";
}
actionButton2.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openBlogsPage() {
  window.open('./blogs.html', '_blank');
}

function reloadHomePage() {
  window.location.reload();
}


