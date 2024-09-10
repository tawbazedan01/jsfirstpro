function largerfontsize(){
    document.querySelector("div").classList.add('larg');
    document.querySelector("div").classList.remove('small');
}

function smallerfontsize(){
    document.querySelector("div").classList.add('small');
    document.querySelector("div").classList.remove('larg');
}

document.querySelector(".plus").onclick = largerfontsize;
document.querySelector(".minus").onclick = smallerfontsize;