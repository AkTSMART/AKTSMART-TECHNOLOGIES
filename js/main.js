window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>80){

nav.classList.add("shadow-lg");

}else{

nav.classList.remove("shadow-lg");

}

});
