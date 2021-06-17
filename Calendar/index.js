let dim = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

next = (a) => {return a == 11 ? 0 : a + 1};
prev = (a) => {return a == 0 ? 11 : a - 1};

function Fil(y, m) {
    Dt = new Date(y, m, 1);
    n = (Dt.getDay() + 6) % 7;
    L = dim[prev(m)];
    for (var i = 1; i < 42; i++)
    {
        document.getElementById(String(i)).style = "color:green"
    }
    if (m == 2 && (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0))) {
        L++;
    }
    document.getElementById("month").value = m;
    document.getElementById("year").value = y;    
    for (var i = 1; i <= n; i++) {
        document.getElementById(String(i)).innerHTML = L - n + i;
        document.getElementById(String(i)).style = "color:grey";
    }
    S = dim[m];
    if (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0) && m == 1)
        S = 29;
    for (var i = 1; i <= S; i++) {
        document.getElementById(String(n + i)).innerHTML = i;
        document.getElementById(String(i + n)).classList= "t1";
    } 
    F = S + n;
    if (F > 35)
        for (var i = F + 1; i <= 42; i++) {
            document.getElementById(String(i)).innerHTML = i - F;
            document.getElementById(String(i)).classList= "tmp";
            document.getElementById(String(i)).style = "color:grey";
        }
    else if (F > 28) {
        for (var i = F + 1; i <= 35; i++) {
            document.getElementById(String(i)).innerHTML = i - F;
            document.getElementById(String(i)).style = "color:grey";
        }
        for (var i = 36; i <= 42; i++) {
            document.getElementById(String(i)).innerHTML = "";
            document.getElementById(String(i)).classList= "empty";
        }
    }
    Now = new Date;
    if (Now.getFullYear() == y && Now.getMonth() == m) {
        document.getElementById(String(n + Now.getUTCDate())).style = "color:red";
    }


    /* document.getElementById("month").value = m; */
    /*
    for (var i = 1; i <= 42; i++)
        document.getElementById(String(d)).style = "class: t1";
    document.getElementById(String(d)).style = "class: t1";
    */
}

function Plus() {
    m = parseInt(document.getElementById("month").value);
    y = parseInt(document.getElementById("year").value);
    if (m == 11) {
        y++; 
        m = 0;
    }
    else {
        m++;
    }
    Fil(y, m);
}

function Minus() {
    m = parseInt(document.getElementById("month").value);
    y = parseInt(document.getElementById("year").value);
    if (m == 0) {
        y--; 
        m = 11;
    }
    else {
        m--;
    }
    Fil(y, m);
}


Dt = new Date();
Fil(Dt.getFullYear(), Dt.getMonth());
function Call() {
  Fil(parseInt(document.getElementById("year").value), parseInt(document.getElementById("month").value));
}
