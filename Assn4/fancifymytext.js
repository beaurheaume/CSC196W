document.getElementById("bigger").addEventListener("click",bigger);
document.getElementById("FancyShmancy").addEventListener("click",fancify);
document.getElementById("BoringBetty").addEventListener("click",borify);
document.getElementById("Moo").addEventListener("click",moo);

// function alertBox(){
//     alert("You've been alerted!");
// }

function bigger(){
    alert("Let's Get Bigger!");
    document.getElementById("textArea").style.fontSize="24pt";
}

function fancify(){
    document.getElementById("textArea").style.fontWeight="bold";
    document.getElementById("textArea").style.color="blue";
    document.getElementById("textArea").style.textDecoration="underline";
    document.getElementById("BoringBetty").checked=false;
}

function borify(){
    document.getElementById("textArea").style.fontWeight="normal";
    document.getElementById("textArea").style.color="black";
    document.getElementById("textArea").style.textDecoration="none";
    document.getElementById("FancyShmancy").checked=false;
}

function moo(){
    let text = document.getElementById("textArea");
    let upperCased = text.value.toUpperCase();
    let message = upperCased.split(".");
    let moo = message.join(" -Moo");
    text.value = moo;
}