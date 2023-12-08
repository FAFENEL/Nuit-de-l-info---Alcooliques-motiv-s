function ouvrirSite() {
    var bodyElement = document.body;
    var button = document.getElementById("button");
    var tab = document.getElementById("img_fond");
    document.getElementById("filter").remove();
    bodyElement.style.overflow = "auto";
    button.style.display = "none";
    button.style.opacity = '0';
    tab.style.transform = "scale(0.6)"+" translateY(-25%)";
}