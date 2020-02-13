var Array =  ["Parijs", 8, "IJselmeer"];
punten = 0;

function antwoordCheck() {
    var frankrijk = document.getElementById("frankrijk").value;
    var spin = document.getElementById("spin").value;
    var meer = document.getElementById("meer").value;

    if (frankrijk == Array[0]) {
        punten = punten += 1;
    }
    if (spin == Array[1]) {
        punten = punten += 1;
    }
    if (meer == Array[2]) {
        punten = punten += 1;
    }

    console.log(meer);
    console.log(spin);
    console.log(frankrijk);

    document.getElementById("resultaat").innerHTML =  "Jouw resultaat is" + punten;
}