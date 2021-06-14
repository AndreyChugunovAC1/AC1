let dim = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

next = (a) => {return a == 11 ? 0 : a + 1};
prev = (a) => {return a == 0 ? 11 : a - 1};

function Fil(y, m) {
    Dt = new Date(y, m, 1);
    n = (Dt.getDay() + 6) % 7;
    if (m == 2) {

    }
    else 
        L = dim[prev(m)];
    for (var i = 1; i <= n; i++) {
        document.getElementById(String(i)).innerHTML = L - n + i;
        document.getElementById(String(i)).classList = "tmp";
    }
    S = dim[m];
    if (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0))
        S = 29;
    for (var i = 1; i <= S; i++) {
        document.getElementById(String(n + i)).innerHTML = i;
        document.getElementById(String(i + n)).classList= "t1";
    } 
    if (S == 28 && n == 0) {
        for (var i = 29; i <= 42; i++) {
            document.getElementById(String(i)).innerHTML = "";
            document.getElementById(String(i)).classList = "empty";
        }
    }
    else {
        for (var i = n + S + 1; i <= 35; i++) {
            document.getElementById(String(i)).innerHTML = i - n - S;
            document.getElementById(String(i)).classList = "tmp";
        }
        if (n + S <= 36) {
            for (var i = 36; i <= 42; i++) {
                document.getElementById(String(i)).innerHTML = "";
                document.getElementById(String(i)).classList = "empty"
            }
        }
        else {
            for (var i = 36; i <= 42; i++) {
                document.getElementById(String(i)).innerHTML = i - 34;
                document.getElementById(String(i)).classList = "tmp";
            }
        }
    }
    /* document.getElementById("month").value = m; */
    /*
    for (var i = 1; i <= 42; i++)
        document.getElementById(String(d)).style = "class: t1";
    document.getElementById(String(d)).style = "class: t1";
    */
}

function Plus() {
    x = parseInt(document.getElementById("month").value);
    if (x != 11) {
        x++
    }
    else if (x == 11 && parseInt(document.getElementById("year").value != 9999) ) {
        x = 0, document.getElementById("year").value = String(parseInt(document.getElementById("year").value) + 1);
    }
    Fil(parseInt(document.getElementById("year").value), x);
    document.getElementById(String("month")).value = x;
}

function Minus() {
    x = parseInt(document.getElementById("month").value);
    if (x != 0) {
        x--
    }
    else if (x == 0 && parseInt(document.getElementById("year").value != 1) ) {
        x = 11, document.getElementById("year").value = String(parseInt(document.getElementById("year").value) - 1);
    }
    Fil(parseInt(document.getElementById("year").value), x);
    document.getElementById(String("month")).value = x;
}

Dt = new Date();
Fil(Dt.getFullYear(), Dt.getMonth());
function Call() {
  Fil(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value));
}
