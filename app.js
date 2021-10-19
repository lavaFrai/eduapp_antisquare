function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
//document.write('<!-- Yandex.RTB --><script>window.yaContextCb=window.yaContextCb||[]</script><script src="https://yandex.ru/ads/system/context.js" async></script>');

let toRemove = [
    '//*[@id="page-wrapper"]/div/div/div[2]/div/div[6]/div[2]',
    '/html/body/div/div/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[6]/div/div/div[2]'
]


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
        getElementByXpath("/html/body/div/div/div[2]/div/div[2]/div[4]/div/div/div[2]/div/div[5]/div[1]/div").innerHTML = '<img src="https://github.com/lavaFrai/eduapp_antisquare/blob/main/media/ricardo-milos.gif?raw=true">';
        
    if (getElementByXpath('//*[@id="vue_instance_1"]/div/div[2]/div[3]/div/div/nav/div/ul') != null)
        getElementByXpath('//*[@id="vue_instance_1"]/div/div[2]/div[3]/div/div/nav/div/ul').innerHTML = '<li class="active"><a href="/pupil/root" class="router-link-active"><i class="icon-home"></i> <span class="nav-label">Главная</span></a></li><li class=""><a href="/pupil/finances/" class=""><i class="icon-usd"></i> <span class="nav-label">Задонатить</span></a> <!----></li>';
    
    if (getElementByXpath('//*[@id="vue_instance_1"]/div/div[2]/div[1]/div[1]/nav/ul[4]/li[1]/a/span') != null)
        getElementByXpath('//*[@id="vue_instance_1"]/div/div[2]/div[1]/div[1]/nav/ul[4]/li[1]/a/span').innerHTML = "ЕБАНЫЙ<br>SLAVE"
        
    if (getElementByXpath('//*[@id="page-wrapper"]/div/div/div[2]/div/div[3]/div[2]/div/div/div[3]/span[1]/span[1]') != null)
        getElementByXpath('//*[@id="page-wrapper"]/div/div/div[2]/div/div[3]/div[2]/div/div/div[3]/span[1]/span[1]').innerHTML = "Начать"
    
    if (getElementByXpath('//*[@id="page-wrapper"]/div/div/div[2]/div/div[3]/div[2]/div/div/div[3]/span[1]/span[2]') != null)
        getElementByXpath('//*[@id="page-wrapper"]/div/div/div[2]/div/div[3]/div[2]/div/div/div[3]/span[1]/span[2]').innerHTML = "fisting"
        
    if (getElementByXpath('//*[@id="page-wrapper"]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div[1]/div/div/section/div[1]/div[3]/div[1]/div/div[2]/div[2]/span') != null)
        getElementByXpath('//*[@id="page-wrapper"]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div[1]/div/div/section/div[1]/div[3]/div[1]/div/div[2]/div[2]/span').innerHTML = "Dungeon MASTER"
    
    arr = document.querySelectorAll(".client__classes_list__classroom");
    for (let i = 0; i < arr.length; i++)
    {
        arr[i].innerHTML = '<i class="shp_icons-board text-info"></i> В dungeon';
    }

    for (let i = 0; i < toRemove.length; i++)
    {
        if (getElementByXpath(toRemove[i]) != null)
            getElementByXpath(toRemove[i]).remove();
    }
}, 1000)
