let nevek = ["Andi", "Kati", "Laci", "Tamás", "Livia"]



let nevekIr = (nevek) => {
    nevek.forEach((nev) => {
        let szoveg = "<li>" + nev + "</li>";
        $('ul').append(szoveg);
        if (nev == "Kati") {
            $("li:last-of-type").css('font-weight', 'bold');
        }
    });
}

