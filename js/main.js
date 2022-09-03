let togglMenu = document.querySelector(".toggle-menu");
let close = document.querySelector(".close")
let menuMobil = document.querySelector(".menu-mobil");

togglMenu.addEventListener("click", () => {
    menuMobil.classList.add("open")
})

close.addEventListener("click", () => {
    menuMobil.classList.remove("open")
});

// shadow header while scroll
let header = document.querySelector("header")
function scroll() {
    window.onscroll = () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = "0 0 10px #8e8b8b"
        }
    } 
}

scroll()


// Features-toggle

let information = [
    {
        title: `Bookmark in one click`,
        p: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.`
    },
    {
        title: `Intelligent search`,
        p: `Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.`
    },
    {
        title: `Share your bookmarks`,
        p: `Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.`
    }
]

let toggleItem = document.querySelectorAll(".toggle-item");
let FeaturesImg = document.querySelector(".content-img img");
let FeaturesTitle = document.querySelector(".content-title");
let FeaturesP = document.querySelector(".content-p");

toggleItem.forEach(item => {
    item.addEventListener("click", () => {
        let index = item.id
        toggleItem.forEach(ele => ele.classList.remove("active"));
        item.classList.add("active");

        FeaturesImg.src = `images/illustration-features-tab-${index}.svg`;
        FeaturesTitle.innerHTML = information[index - 1].title;
        FeaturesP.innerHTML = information[index - 1].p;

        console.log(FeaturesTitle)
    })
});



// Answer Questions toggle
let QuestionItem = document.querySelectorAll(".Question");
let arrow = document.querySelector(".arrow");

QuestionItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.toggle("active");
        item.parentNode.lastElementChild.classList.toggle("active")
    })
});


// valid email
let email = document.querySelector(".email");
let text = document.querySelector(".text");
let pattern = /^[^ ]+@[^ ]+\.[1-z]{2,3}$/;

email.addEventListener("keydown", () => {
    if (email.value != "") {
        if (email.value.match(pattern)) {
            text.classList.add("valid");
            text.innerHTML = "Don, the email is valid"
            email.classList.add("active");
            email.style.borderColor = "rgb(4 171 68)"
        }else {
            text.classList.remove("valid");
            text.classList.add("invalid");
            text.innerHTML = "Whoops,make sure it's an email"
            email.classList.add("active")
            email.style.borderColor = "var(--Primary-red)"
        }
    }else {
        text.classList.remove("invalid");
        text.innerHTML = ""
        email.classList.remove("active");
        email.style.borderColor = "var(--text-color)"
    }
})




