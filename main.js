let login_btn = document.querySelector(".log-in-btn")
let incorrect = document.querySelector(".incorrect")
let innercorrect = false
let exit = document.querySelector(".exit_account")
let registr_page = document.querySelector(".registr-page");
let main_page = document.querySelector(".main-page");
let body_back = document.body
var footerElement = document.getElementById("footer")
let posts = document.querySelector(".posts")

function display_posts(posts_arr) {
  let items = [];
  items.push(`<div class="posts_header">
  <h1 style="font-family: Andale Mono, monospace;">Главная страница</h1>
  <img class="show_menu" src="./images/others/show_menu.png">
</div>`)
  for (let i = 0; i < posts_arr.length; i++) {
    items.push(
     `<div class="post">
      <div><img class="pfp" style="width: 50px;height: 50px;" src="${posts_arr[i].pfp}"></div>
      <div class="name" title="Никнейм пользователя"><h2>${posts_arr[i].name}</h2></div>
      <div class="post_image">${posts_arr[i].post_image}</div>
      <div class="heart" title="Нравится"><img src="./images/others/heart.png" width="40px" height="30px" class="grey-heart" id="grey_heart"></div>
      <div class="comment" title="Написать комментарий"><img src="./images/others/comment.png" width="25px" height="25px"></div>
      <div class="description" title="Описание"><div class="name" title="Никнейм пользователя"><h4>${posts_arr[i].name}</h4></div><p>${posts_arr[i].description}</p></div>    
      </div>`
      )
  }
  return items
}

const posts_item = display_posts(all_posts)

posts.innerHTML = posts_item.join("")

login_btn.addEventListener("click", function(){
    let login_input = document.querySelector(".login").value;
    let password_input = document.querySelector(".password-input").value;
    if(login_input == "tuna202" && password_input == "tunasuperfish"){
        registr_page.style.display = "none";
        main_page.style.display = "flex";
        footerElement.style.display = "block"
    }else{if (!innercorrect) {
      incorrect.innerHTML += "Неправильно введены данные"
      innercorrect=true
    }
      
    }
});

let heartElement = document.querySelectorAll(".heart");
let imgElement = document.querySelectorAll(".grey-heart")
console.log(imgElement);
for (let i = 0; i < heartElement.length; i++) {
    heartElement[i].addEventListener("click" , function(){
        console.log(heartElement[i]);
        if (heartElement[i].classList.contains("liked")) {
        heartElement[i].classList.remove("liked");
        imgElement[i].classList.add("grey-heart")
      } else {
        heartElement[i].classList.add("liked");
        imgElement[i].classList.remove("grey-heart")
      }
    }
    
)}   

let edit = document.querySelector(".edit_profile")
edit.addEventListener("click",function(){
  window.alert("В разработке")
})

let comments = document.querySelectorAll(".comment")
for (let i = 0; i < comments.length; i++) {
    comments[i].addEventListener("click",function(){
      window.alert("В разработке")
    
  })
}

exit.addEventListener("click",function(){
  registr_page.style.display = "flex";
  main_page.style.display = "none";
  footerElement.style.display = "none"
})


let menu_btn = document.querySelector(".show_menu")
let menu = document.querySelector(".menu")
menu_btn.addEventListener("click",function(){
  if(menu_btn.classList.contains("hide_menu")){
    menu_btn.classList.remove("hide_menu")
    menu.style.display = "none"
    posts.style.marginLeft = "0px"
}else{
  menu_btn.classList.add("hide_menu")
  menu.style.display = "block"
  posts.style.marginLeft = "353px"
}
})
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.getElementById("scroll_top").style.display = "block";
  } else {
    document.getElementById("scroll_top").style.display = "none";
  }
});


document.getElementById("scroll_top").addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: scroll with smooth animation
        });
})
    


