document.querySelector(".header__about").addEventListener("click",()=>{
    // console.log("click");
    document.querySelector(".about").scrollIntoView();
});

document.querySelector(".header__contact").addEventListener("click",()=>{
    // console.log("click");
    document.querySelector(".contact").scrollIntoView();
});
document.querySelector(".header__download").addEventListener("click",()=>{
    window.open("https://www.fbi.gov/history/famous-cases/db-cooper-hijacking");
})