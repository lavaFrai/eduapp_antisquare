function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


setInterval(function(){
    if (document.querySelector(".shp-copyright") != null)
        document.querySelector(".shp-copyright").remove();

    if (document.querySelector("#chat-24-widget-container") != null)
        document.querySelector("#chat-24-widget-container").remove();

    if (document.querySelector(".project-name") != null)
        document.querySelector(".project-name").innerHTML = "Залупа";

    if (document.querySelector(".brand-logo") != null)
        document.querySelector(".project-name").innerHTML = "Залупа";

    if (document.querySelector(".title-signout") != null)
        document.querySelector(".title-signout").innerHTML = "Пойти нахуй";

    if (document.querySelector(".brand-logo") != null)
        document.querySelector(".project-name").innerHTML = "Залупа";

    if (document.querySelector(".brand-logo") != null)
        document.querySelector(".brand-logo").style.backgroundImage = "url(\"https://steamuserimages-a.akamaihd.net/ugc/859487187058166664/F1394B31361B706826D9DE26FBA775FAC0666975/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true\")";
        
    if (document.querySelector(".shp_notification__img") != null)
        document.querySelector(".shp_notification__img").src = "https://i.ibb.co/9WJJpBS/Cm-WI4e-Z74u0-removebg-preview.png";

    if (getElementByXpath("/html/body/div/div/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[5]/div[1]/div") != null)
        getElementByXpath("/html/body/div/div/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[5]/div[1]/div").innerHTML = '<img src="https://media1.giphy.com/media/10FwycrnAkpshW/giphy.gif">';
}, 1000)
