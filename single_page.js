
function home()
{
    document.getElementsByClassName("movies_page")[0].style = "display: none;";
    document.getElementsByClassName("setings_page")[0].style = "display: none;";
    document.getElementsByClassName("Series_page")[0].style = "display: none;";
    document.getElementsByClassName("home_page")[0].style = "";
}

function movies()
{
    document.getElementsByClassName("setings_page")[0].style = "display: none;";
    document.getElementsByClassName("Series_page")[0].style = "display: none;";
    document.getElementsByClassName("home_page")[0].style = "display: none;";
    document.getElementsByClassName("movies_page")[0].style = "";
}

function Series()
{
    document.getElementsByClassName("home_page")[0].style = "display: none;";
    document.getElementsByClassName("setings_page")[0].style = "display: none;";
    document.getElementsByClassName("movies_page")[0].style = "display: none;";
    document.getElementsByClassName("Series_page")[0].style = "";
}

function setings()
{
    document.getElementsByClassName("home_page")[0].style = "display: none;";
    document.getElementsByClassName("movies_page")[0].style = "display: none;";
    document.getElementsByClassName("Series_page")[0].style = "display: none;";
    document.getElementsByClassName("setings_page")[0].style = "";
}