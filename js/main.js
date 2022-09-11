window.onload=function(){
if(localStorage.getItem("theme")){
if(localStorage.getItem("theme")=="dark"){
    darkTheme()
}else{
    lightTheme()
}
}
}
// Header Sec
let headerEle=document.querySelector(".header");
let aboutSec=document.querySelector(".about-us")
let homeBtn=document.querySelector(".home-btn");
let landing=document.querySelector(".landing")
let aboutUs=document.querySelector(".about-us")
let services=document.querySelector(".services")
// active on Header Links:
let linksLisA=document.querySelectorAll(".header .container .links ul li a");
linksLisA.forEach(a=>{
    a.onclick=function(){
        linksLisA.forEach(a=>a.classList.remove("active"))
        a.classList.add("active")
        document.querySelector(a.dataset.sec).scrollIntoView({
            behavior:"smooth"
        })
    }
})
window.onscroll=function(){
    // console.log(window.scrollY )
    if(this.scrollY > (headerEle.offsetHeight / 2)){
        headerEle.classList.add("fixed")
    }else{
        headerEle.classList.remove("fixed")
        
    }
    if(this.scrollY > aboutSec.offsetHeight){
        homeBtn.classList.add("show")
        homeBtn.onclick=function(){
            landing.scrollIntoView({
                behavior:"smooth"
            })
        }
    }else{
        homeBtn.classList.remove("show")
        
    }
    let bodyEle=Array.from(document.querySelectorAll("body> div"));
    // console.log(bodyEle)
    bodyEle.forEach(ele=>{
    if(this.scrollY> (ele.offsetTop -100) && this.scrollY <(ele.offsetTop + ele.offsetHeight) ){
        linksLisA.forEach(a=>a.classList.remove("active"))
        linksLisA.forEach(a=>{
            if(a.dataset.sec==`.${ele.className}`){
                a.classList.add("active")
            }
        })
        
    }
   
})

}
let menuIcon=document.querySelector(".header .container >i");
let linksEle=document.querySelector(".header .container .links")
menuIcon.onclick=function(){
    linksEle.classList.toggle("open")
}

// Dark Light Themes:
let themeColor=document.querySelector(".header .container .links ul li i");
themeColor.onclick=function(){
    if(themeColor.classList.contains("bx-moon")){
        localStorage.setItem("theme","dark")
    darkTheme()
}else{
    localStorage.setItem("theme","light")
    lightTheme()

}
}
function darkTheme(){
    themeColor.className="bx bx-sun";
    document.documentElement.style.setProperty("--body-color","#1D2521")
    document.documentElement.style.setProperty("--sec-header-color","#F1F3F2")
    document.documentElement.style.setProperty("--para-header-color","#c7d1cc")
    document.documentElement.style.setProperty("--products-back","#27302c")


}
function lightTheme(){
    themeColor.className="bx bx-moon";
    document.documentElement.style.setProperty("--body-color","#FBFEFD")
    document.documentElement.style.setProperty("--sec-header-color","#393939")
    document.documentElement.style.setProperty("--para-header-color","#707070")
    document.documentElement.style.setProperty("--products-back","#FFF")

}