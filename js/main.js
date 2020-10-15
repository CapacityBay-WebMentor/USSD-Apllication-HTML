let navBar = document.querySelector(".nav-bar");

// let scroll =;


window.addEventListener("scroll", _ => {
    if (window.scrollY >0) {
        navBar.classList.add("sticky");
        // scroll = true;

    } else {
        navBar.classList.remove("sticky");
        // scroll = false;

    }
    })
