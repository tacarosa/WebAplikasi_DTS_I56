// saat click button lihat detail
function handleCLick(){
    alert("Coming Soon !")
}

// saat klik menu dinavbar
function onClickMenuOurService(){
    document
      .getElementById('content')
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

// Redirect Link
function redirectLink3(){
    let classes = document.getElementById("satu") 
    classes.scrollIntoView()
}

//saat scroll ke bagian konten
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        let classes = document.getElementById("satu") 
        classes.classList.add("fadeIn")
    } 
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        let classes2 = document.getElementById("dua") 
        classes2.classList.add("fadeIn")
    }
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        let classes2 = document.getElementById("tiga") 
        classes2.classList.add("fadeIn")
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        let classes2 = document.getElementById("empat") 
        classes2.classList.add("fadeIn")
    }
    
    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
        let classes2 = document.getElementById("lima") 
        classes2.classList.add("fadeIn")
    }
}