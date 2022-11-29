document.getElementById("bigger").addEventListener("click",bigger);
document.getElementById("FancyShmancy").addEventListener("click",fancify);
document.getElementById("BoringBetty").addEventListener("click",borify);
document.getElementById("Moo").addEventListener("click",moo);

function bigger(){
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
    var text = document.getElementById("textArea").value;
    var result = text.toUpperCase();
    document.getElementById("textArea").value = result;
    
    var parts = result.split(" ");

    var i;
    for(i=0; i < parts.length;i++){
        var tmp = parts[i].toUpperCase();
        parts[i] = tmp;

        if(parts[i].includes(".")){
            tmp = parts[i].slice(0, -1);
            parts[i] = tmp.concat("-Moo.");
        }
    }

    var str = parts.join("_");
    document.getElementById("textArea").value = str;
}