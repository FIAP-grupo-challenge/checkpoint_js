document.getElementById("numbers-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var media = (num1 + num2 + num3 + num4) / 4;
    if(media >= 7){
        alert("Aprovado com media : " + media);
    } else if (media < 7 && media >= 5.5) {
        alert("Ficou de exame com media: " + media)
    } else {
        alert("Reprovou com media: " + media)
    }
   });