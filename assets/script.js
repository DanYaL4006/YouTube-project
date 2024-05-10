let $ = document;
let body = $.body;
let header  = $.querySelector("header");
// ----------------------------------------------------
let svgSettings = $.querySelector(".svg-setting");
let svgLeftFlesh = $.querySelector(".svg-left-flesh");
let inputSearch = $.querySelector("#input-search");
let btnSearch2 = $.querySelector(".btn-search2");
let settingsMenu = $.querySelector(".settings-menu");
let imgYtLogo = $.querySelector(".img-yt-logo");
let selectTheme = $.querySelector(".select-theme");
let themeMenu = $.querySelector(".theme-menu");
let lTheme = $.querySelector(".l-theme");
let lTheme2 = $.querySelector(".l-theme2");
let dTheme = $.querySelector(".d-theme");
let btnBlack = $.querySelector(".btn-black");
let liLeftNav = $.querySelector(".li-left-nav");
let svgTick = $.querySelector(".svg-tick");
let svgTick1 = $.querySelector(".svg-tick1");
let svgTick2 = $.querySelector(".svg-tick2");
let apTheme = $.querySelector(".ap-theme");
let svgMic = $.querySelector(".svg-mic");
// ----------------------------------------------------
let signInModal = $.querySelector(".signIn-modal");
let modal = $.querySelector(".modal");
let svgQuit = $.querySelector(".svg-quit");
let signInBtn = $.querySelector(".signInBtn");
let inpT = $.querySelector("#inp-t");
let inpP = $.querySelector("#inp-p");
let inpP2 = $.querySelector("#inp-p2");
let svgPass = $.querySelector("#svg-pass");
let svgUser = $.querySelector("#svg-user");
let svgRepeatP = $.querySelector(".svg-repeat-p");
let btn = $.querySelector(".btn");
// ----------------------------------------------------
let passNotValid = $.querySelector(".sp-pass");
let UserNotValid = $.querySelector(".sp-user");
let svgWrong1 = $.querySelector(".svg-wrong1");
let svgWrong2 = $.querySelector(".svg-wrong2");
let svgWrong3 = $.querySelector(".svg-wrong3");
let spPlsFill = $.querySelector(".sp-pls-fill");
let signInEror = $.querySelector(".signInEror");
let pass2NotSame = $.querySelector(".sp-pass2-not-same");
let spCheckShort = $.querySelector(".sp-check-short");
let spCheckGood = $.querySelector(".sp-check-good");
let spCheckStrong = $.querySelector(".sp-check-strong");
// ----------------------------------------------------
let signInSucsses = $.querySelector(".signInSucsses");
let btnSuccsess = $.querySelector(".btn-succsess");
let usernameShow = $.querySelector(".username-show");
let username = $.querySelector(".username");
let notAllowed = $.querySelector(".not-allowed");
// ----------------------------------------------------
let svgHamber = $.querySelector(".svg-hamber");
let svgHamber2 = $.querySelector(".svg-hamber2");
let ulLeftNav = $.querySelector(".ul-left-nav");
let ulLeftNav2 = $.querySelector(".ul-left-nav2");
let reponsiveNav = $.querySelector(".reponsive-nav");
// ----------------------------------------------------
let imgMain = $.querySelector(".img-main");
let imgMain2 = $.querySelector(".img-main2");
let imgMain3 = $.querySelector(".img-main3");
let headerNav = $.querySelector(".header-nav");
// ----------------------------------------------------
let refresh = $.querySelector(".refresh");
// ----------------------------------------------------
let isOnClick = true;
let isUnVis = true;
let isNav1 = true;
// ----------------------------------------------------
signInBtn.addEventListener("click", function () {
    let isNoVis = true;
    if (isNoVis) {
        signInModal.style.visibility = "visible";
        modal.style.visibility = "visible";
        isNoVis = false;
    } else {
        signInModal.style.visibility = "hidden";
        modal.style.visibility = "hidden";
        isNoVis = true;
    }
})
// to show and hide signIn modal
svgQuit.addEventListener('click', function () {
    signInModal.style.visibility = "hidden";
    modal.style.visibility = "hidden";
    passNotValid.style.visibility = "hidden";
    UserNotValid.style.visibility = "hidden";
    pass2NotSame.style.visibility = "hidden";
    svgWrong1.style.visibility = "hidden";
    svgWrong2.style.visibility = "hidden";
    svgWrong3.style.visibility = "hidden";
    spPlsFill.style.visibility = "hidden";
    svgUser.style.color = "";
    svgPass.style.color = "";
    svgRepeatP.style.color = "";
    inpP.value = "";
    inpT.value = "";
    inpP2.value = "";
})
// click on quit button to exit from signIn modal

inpT.addEventListener("keydown", function () {
    svgWrong1.style.visibility = "hidden";
    UserNotValid.style.visibility = "hidden";
    if (inpT.value.length <= 3) {
        svgUser.style.color = "red";
    } else if (inpT.value.length < 5) {
        svgUser.style.color = "rgb(200 ,215 , 13)";
    } else if (inpT.value.length >= 8) {
        svgUser.style.color = "rgb(0 ,180 , 20)";
    }
})
inpP.addEventListener("keydown", function () {
    svgWrong2.style.visibility = "hidden";
    passNotValid.style.visibility = "hidden";
    if (inpP.value.length <= 3) {
        svgPass.style.color = "red";
        spCheckShort.style.visibility = "visible";
        spCheckStrong.style.visibility = "hidden";
        spCheckGood.style.visibility = "hidden";
    } else if (inpP.value.length < 5) {
        svgPass.style.color = "rgb(200 ,215 , 13)";
        spCheckGood.style.visibility = "visible";
        spCheckShort.style.visibility = "hidden";
        spCheckStrong.style.visibility = "hiddden";
    } else if (inpP.value.length >= 8) {
        svgPass.style.color = "rgb(0 ,180 , 20)";
        spCheckStrong.style.visibility = "visible";
        spCheckGood.style.visibility = "hidden";
        spCheckShort.style.visibility = "hidden";
    } if (inpP.value == "") {
        spCheckShort.style.visibility = "hidden";
    }
})
// check validation data and strong or weak pass
btn.addEventListener("click", function () {
    spCheckGood.style.visibility = "hidden";
    spCheckShort.style.visibility = "hidden";
    spCheckStrong.style.visibility = "hidden";
    if (inpT.value.length < 5) {
        svgUser.style.color = "red";
        UserNotValid.style.visibility = "visible";
        svgWrong1.style.visibility = "visible";
    } else {
        svgUser.style.color = "green";
        UserNotValid.style.visibility = "hidden";
        svgWrong1.style.visibility = "hidden";
    }
    if (inpP.value.length < 5) {
        svgPass.style.color = "red";
        passNotValid.style.visibility = "visible";
        svgWrong2.style.visibility = "visible";
    } else {
        svgPass.style.color = "green";
        passNotValid.style.visibility = "hidden";
        svgWrong2.style.visibility = "hidden";
    }
    if (inpP2.value != inpP.value) {
        svgRepeatP.style.color = "red";
        pass2NotSame.style.visibility = "visible";
        svgWrong3.style.visibility = "visible";
    }
    else {
        svgRepeatP.style.color = "green";
        pass2NotSame.style.visibility = "hidden";
        svgWrong3.style.visibility = "hidden";
    }
})
btn.addEventListener("click", function () {
    if (inpT.value == "") {
        spPlsFill.style.visibility = "visible";
    }
    if (inpP.value == "") {
        spPlsFill.style.visibility = "visible";
        svgRepeatP.style.color = "red";
    } else if (inpP2.value == "") {
        spPlsFill.style.visibility = "visible";
        svgRepeatP.style.color = "red";
    }
    else {
        spPlsFill.style.visibility = "hidden";
    }
})
// sign in btn click to check valid data or not if not show eror
btn.addEventListener("click", function () {
    if (svgUser.style.color == "green" && svgPass.style.color == "green" && svgRepeatP.style.color == "green") {
        usernameShow.innerHTML = `<i class="fa-solid fa-user fa-shake"></i>`;
        usernameShow.addEventListener("click" , function () {
            usernameShow.innerHTML = `<i class="bi bi-person-fill"></i>`;
            let valueName = inpT.value;
            let valuePass = inpP.value;
            alert("Welcome!!\n\nYour username:" + "  " + valueName);
            alert("Your password:" + "  " + valuePass);
        })

        btnSuccsess.addEventListener("click", function () {
            signInSucsses.style.visibility = "hidden";
        })

        usernameShow.style.visibility = "visible";
        usernameShow.style.cursor = "pointer";
        notAllowed.style.visibility = "hidden";
        signInSucsses.style.visibility = "visible";
        signInModal.style.visibility = "hidden";
        modal.style.visibility = "hidden";
    }else{
        usernameShow.style.cursor = "not-allowed";
        usernameShow.style.visibility = "hidden";
    }
})
// show sign in sucsses alert & user info
let user = [
    {}
]
btn.addEventListener("click" , function () {
    let newObj = {username : inpT.value , password : inpP.value};
    user.push(newObj);
})
console.log(user);
// show database in console
// ----------------------------------------------------
inputSearch.addEventListener("click", function () {
    if (isOnClick) {
        btnSearch2.style.display = "block";
        inputSearch.style.width = "571px";
        inputSearch.style.left = "321px";
        inputSearch.style.paddingLeft = "40px";
        isOnClick = false;
    } else {
        btnSearch2.style.display = "none";
        inputSearch.style.width = "535px";
        inputSearch.style.left = "357px";
        inputSearch.style.paddingLeft = "15px";
        isOnClick = true;
    }
})
// input search click
svgMic.addEventListener("click", function () {
    alert("Allow www.youtube.com to use your microphone?");
})
// Allow access to the microphone by click with alert
svgSettings.addEventListener("click", function () {
    selectTheme.style.visibility = "hidden";
    if (isUnVis) {
        settingsMenu.style.visibility = "visible";
        isUnVis = false;
    } else {
        settingsMenu.style.visibility = "hidden";
        svgTick.style.visibility = "hidden";
        svgTick1.style.visibility = "hidden";
        svgTick2.style.visibility = "hidden";  
        isUnVis = true;
    }
})
// show the settings menu by click
themeMenu.addEventListener("click", function () {
    settingsMenu.style.visibility = "hidden";
    selectTheme.style.visibility = "visible";
})
svgLeftFlesh.addEventListener("click", function () {
    settingsMenu.style.visibility = "visible";
    selectTheme.style.visibility = "hidden";
})
lTheme.addEventListener("click", function () {
    body.style.backgroundColor = "";
    svgTick.style.visibility = "visible";
    svgTick1.style.visibility = "hidden";
    svgTick2.style.visibility = "hidden";
    imgYtLogo.setAttribute("src" , "assets/images/youtubeLogo.png");
    header.style.backgroundColor = "";
    ulLeftNav.style.backgroundColor = "";
    ulLeftNav2.style.backgroundColor = "";
    svgSettings.style.fill= "";
    usernameShow.style.color = "";
    svgSettings.style.border = "";
    svgHamber.style.fill = "";
    svgHamber2.style.fill = "";
    apTheme.innerHTML = "Appearance: Device theme";
})
dTheme.addEventListener("click", function () {
    body.style.backgroundColor = "#303030";
    svgTick1.style.visibility = "visible";
    svgTick.style.visibility = "hidden";
    svgTick2.style.visibility = "hidden";
    ulLeftNav.style.backgroundColor = "#606060";
    ulLeftNav2.style.backgroundColor = "#606060";
    header.style.backgroundColor = "#303030";
    signInBtn.style.backgroundColor = "#fff";
    btnBlack.style.backgroundColor = "#101010";
    svgSettings.style.fill = "#fff";
    svgSettings.style.border = "none";
    imgYtLogo.setAttribute("src" , "assets/images/image (2).png");
    usernameShow.style.color = "#fff";
    svgHamber.style.fill = "#fff";
    svgHamber2.style.fill = "#fff";
    apTheme.innerHTML = "Appearance: Dark";
})
lTheme2.addEventListener("click", function () {
    body.style.backgroundColor = "";
    svgTick2.style.visibility = "visible";
    svgTick.style.visibility = "hidden";
    svgTick1.style.visibility = "hidden";
    ulLeftNav.style.backgroundColor = "";
    svgSettings.style.border = "";
    svgSettings.style.fill= "";
    usernameShow.style.color = "";
    ulLeftNav2.style.backgroundColor = "";
    svgHamber.style.fill = "";
    svgHamber2.style.fill = "";
    imgYtLogo.setAttribute("src" , "assets/images/youtubeLogo.png");
    header.style.backgroundColor = "";
    apTheme.innerHTML = "Appearance: Light";
})
// change page theme to dark or white
// ----------------------------------------------------
svgHamber.addEventListener("click", function () {
    if (isNav1){
        ulLeftNav2.style.visibility = "visible";
        ulLeftNav.style.visibility = "hidden";
        ulLeftNav2.style.overflow = "hidden";
        imgMain.setAttribute("class" , "col-4 img-main");
        imgMain2.setAttribute("class" , "col-4 img-main");
        imgMain3.setAttribute("class" , "col-4 img-main");
        headerNav.style.left = "152px";
        isNav1 = false;
    }else{
        ulLeftNav2.style.visibility = "hidden";
        ulLeftNav.style.visibility = "visible";
        isNav1 = true;
        imgMain.setAttribute("class" , "col-3 img-main");
        imgMain2.setAttribute("class" , "col-3 img-main");
        imgMain3.setAttribute("class" , "col-3 img-main");
        headerNav.style.left = "";
    }
})
svgHamber2.addEventListener("click", function () {
    if (isUnVis){
        reponsiveNav.style.marginLeft = "0";
        svgHamber2.style.fill = "#fff";
        isUnVis = false;
    }else{
        reponsiveNav.style.marginLeft = "-250px";
        svgHamber2.style.fill = "#000";
        isUnVis = true;
    }
})
// open & close navigation menu & responsive navigation menu
// finish