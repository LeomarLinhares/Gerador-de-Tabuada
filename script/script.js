function tabuada() {
    let tabTxt = document.querySelector('div#tabuada');
    let num    = Number(document.querySelector('input#numero').value);
    let tab    = 1;

    if (document.querySelector('input#numero').value.length == 0) {
        alert('[ERRO]: Insira um número no campo.');
        tabTxt.innerHTML = `Impossível calcular \u{1F614}`;

    } else {
        tabTxt.innerHTML = "";

        while (tab <= 10) {
            if (tab == 10) {
                tabTxt.innerHTML += `${num} x ${tab} = ${num * tab}<br>`;
            } else {
                if (tabTxt.innerHTML == "") {
                    tabTxt.innerHTML = `${num} x 0${tab} = ${num * tab}<br>`;
                } else {
                    tabTxt.innerHTML += `${num} x 0${tab} = ${num * tab}<br>`;
                }
            }
            tab++;
        }
    }

}
