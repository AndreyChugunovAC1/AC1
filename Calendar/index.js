let dim = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function Fil(y, m, d) {
    Dt = new Date(y, m, 1);
    n = (Dt.getDay() + 6) % 7;
    for (var i = 1; i <= n; i++) {
        document.getElementById(String(i)).innerHTML = " ";
    }
    S = dim[m];
    if (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0))
        S = 29;
    for (var i = 1; i <= S; i++) {
        document.getElementById(String(n + i)).innerHTML = i;
    } 
    for (var i = n + S + 1; i <= 42; i++) {
        document.getElementById(String(i)).innerHTML = " ";
    }
    /* document.getElementById("month").value = m; */
    for (var i = 1; i <= 42; i++)
        document.getElementById(String(d)).style = "class: t1";
    document.getElementById(String(d)).style = "class: t1";
}

Dt = new Date();
Fil(Dt.getFullYear(), Dt.getMonth(), Dt.getUTCDate());
function Call() {
  Fil(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value), parseInt(document.getElementById("day").value));
}
