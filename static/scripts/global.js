$(function() {

    var $base_unit = 12;
    var $main = document.getElementsByTagName("main")[0];
    var $page = document.getElementsByClassName("page-container")[0];
    var $body_brdr = parseInt(getComputedStyle($main,null).getPropertyValue('border-left-width').substr(0, 2))
    var $brdr_em = $body_brdr / $base_unit;

    var $menu = $("div#menu");
    var menu_offset = parseInt($("div#menu").css("transform").split(",")[4], 10);
    $menu = document.getElementById("menu");
    var $menu_em = menu_offset / $base_unit;
    var $menu_third = Math.ceil(0.333333333 * $menu_em);

    document.getElementById("menu-toggle-open").onclick = function() {
        $menu.style.transform = "translateX(" + ( ($menu_third/$menu_em) * menu_offset ) + "px)";
        $main.style.transform = "translateX(" + ( ((-$menu_third + $brdr_em)/$menu_em) * menu_offset ) + "px)";
        $page.style.opacity = 0.25;
    }

    document.getElementById("menu-toggle-close").onclick = function() {
        $menu.style.transform = "translateX(" + ( (($menu_em + $brdr_em)/$menu_em) * menu_offset ) + "px)";
        document.body.style.transform = "translateX(0px)";
        $main.style.transform = "translateX(0px)";
        $page.style.opacity = 1;
    }
});