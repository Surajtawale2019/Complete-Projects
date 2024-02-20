// window.addEventListener("beforeunload", function (e)
// {
//     e.preventDefault();
//     e.returnValue="";
// });


let popup1 = document.getElementById("popup");

function openPopup()
{
    popup1.classList.add("open-popup");
}

function closePopup()
{
    popup1.classList.remove("open-popup");
}