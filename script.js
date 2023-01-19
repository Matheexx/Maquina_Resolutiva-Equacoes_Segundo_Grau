// Declarações das variáveis do DOM:

// Variáveis dos inputs dos valores de a, b e c
const input_a = document.getElementById("input_a");
const input_b = document.getElementById("input_b");
const input_c = document.getElementById("input_c");

// Variável das divs que ficarão a equação e o resultado 
const div_equation = document.getElementById("equation");
const div_resolution = document.getElementById("resolution");


// Function onclick, que se executa quando se clica no botão "Enviar" no html. Ela executa outras funções de acordo com a base das regras de uma equação do segundo grau.
function f_submit() {
    div_equation.innerHTML = "";
    div_resolution.innerHTML = "";
    if(verifyValues(input_a.value, input_b.value, input_c.value)) {
        const numbers = turnNumber(input_a.value, input_b.value, input_c.value);
        const number_a = numbers[0];
        const number_b = numbers[1];
        const number_c = numbers[2];
        div_equation.innerHTML = `<p>${equation(number_a, number_b, number_c)}</p>`;
        if(verifyDelta(number_a, number_b, number_c)[0]) {
            div_resolution.innerHTML = `<p>${resolution(number_a, number_b, number_c)}</p>`;
        }
        else {
            div_resolution.innerHTML = `<p>${verifyDelta(number_a, number_b, number_c)[1]}</p>`
        }
    }
}


// Function que verifica se todos os valores foram digitados e se o valor de a não é igual a 0
function verifyValues(a, b, c) {
    if(a.length && b.length && c.length) {
        if(Number(a)) return true;
        alert("[ERRO] Não é uma equação do segundo grau!");
        return false;
    }
    else {
        alert("[ERRO] Digite todos os valores da equação do segundo grau!");
        return false;
    }
}


// Function que retorna um array com os valores dos inputs, que estão em string, para number
function turnNumber(a, b, c) {return [Number(a), Number(b), Number(c)]}


// Function que verifica se o delta >= 0, se sim, retorna um array com os valores: true e a variável delta
function verifyDelta(a, b, c) {
    const delta = b ** 2  -4 * a * c;
    if(delta >= 0) return [true, delta];
    div_resolution.innerHTML = "";
    return [false, "<strong><span>Soluções não reais</span> <br> <span>S</span> = <span>Ø</span></strong>"];
}


// Function que, calcula o(s) valor(es) de x através do delta presente no segundo elemento do array da function verifyDelta(), e retorna a mensagem da resolução
function resolution(a, b, c) {
    const delta = verifyDelta(a, b, c)[1];
    if(delta == 0) {
        const x = ((-b + Math.sqrt(delta))/(2 * a)).toFixed(4).replace(/\.?0+$/, '');
        return `<strong><span>x</span> = <span>${x}</span> <br> <span>S</span> = {<span>${x}</span>}</strong>`;
    }
    else if(delta > 0) {
        const x1 = ((-b + Math.sqrt(delta))/(2 * a)).toFixed(4).replace(/\.?0+$/, '');
        const x2 = ((-b - Math.sqrt(delta))/(2 * a)).toFixed(4).replace(/\.?0+$/, '');
        return `<strong><span>x1</span> = <span>${x1}</span> <br> <span>x2</span> = <span>${x2}</span> <br> <span>S</span> = {<span>${x1}</span>, <span>${x2}</span>}</strong>`;
    }
}


// Function que retorna a equação montada
function equation(a, b, c) {
    if(a == 1) {
        if(b == 1){
            if(c > 0) {
                return `<strong><span>x</span>²+<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong><span>x</span>²+<span>x</span>${c}=0</strong>`;
            }
            else {
                return "<strong><span>x</span>²+<span>x</span>=0</strong>";
            }
        }
        else if(b == -1) {
            if(c > 0) {
                return `<strong><span>x</span>²-<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong><span>x</span>²-<span>x</span>${c}=0</strong>`;
            }
            else {
                return "<strong><span>x</span>²-<span>x</span>=0</strong>";
            }
        }
        else if(b > 0) {
            if(c > 0) {
                return `<strong><span>x</span>²+${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong><span>x</span>²+${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong><span>x</span>²+${b}<span>x</span>=0</strong>`;
            }
        }
        else if(b < 0) {
            if(c > 0) {
                return `<strong><span>x</span>²${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong><span>x</span>²${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong><span>x</span>²${b}<span>x</span>=0</strong>`;
            }
        }
        else {
            if(c > 0) {
                return `<strong><span>x</span>²+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong><span>x</span>²${c}=0</strong>`;
            }
            else {
                return "<strong><span>x</span>²=0</strong>";
            }
        }
    }
    else if(a == -1) {
        if(b == 1){
            if(c > 0) {
                return `<strong>-<span>x</span>²+<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>-<span>x</span>²+<span>x</span>${c}=0</strong>`;
            }
            else {
                return "<strong>-<span>x</span>²+<span>x</span>=0</strong>";
            }
        }
        else if(b == -1) {
            if(c > 0) {
                return `<strong>-<span>x</span>²-<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>-<span>x</span>²-<span>x</span>${c}=0</strong>`;
            }
            else {
                return "<strong>-<span>x</span>²-<span>x</span>=0</strong>";
            }
        }
        else if(b > 0) {
            if(c > 0) {
                return `<strong>-<span>x</span>²+${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>-<span>x</span>²+${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>-<span>x</span>²+${b}<span>x</span>=0</strong>`;
            }
        }
        else if(b < 0) {
            if(c > 0) {
                return `<strong>-<span>x</span>²${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>-<span>x</span>²${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>-<span>x</span>²${b}<span>x</span>=0</strong>`;
            }
        }
        else {
            if(c > 0) {
                return `<strong>-<span>x</span>²+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>-<span>x</span>²${c}=0</strong>`;
            }
            else {
                return "<strong>-<span>x</span>²=0</strong>";
            }
        }
    }
    else {
        if(b == 1){
            if(c > 0) {
                return `<strong>${a}<span>x</span>²+<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>${a}<span>x</span>²+<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>${a}<span>x</span>²+<span>x</span>=0</strong>`;
            }
        }
        else if(b == -1) {
            if(c > 0) {
                return `<strong>${a}<span>x</span>²-<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>${a}<span>x</span>²-<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>${a}<span>x</span>²-<span>x</span>=0</strong>`;
            }
        }
        else if(b > 0) {
            if(c > 0) {
                return `<strong>${a}<span>x</span>²+${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>${a}<span>x</span>²+${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>${a}<span>x</span>²+${b}<span>x</span>=0</strong>`;
            }
        }
        else if(b < 0) {
            if(c > 0) {
                return `<strong>${a}<span>x</span>²${b}<span>x</span>+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>${a}<span>x</span>²${b}<span>x</span>${c}=0</strong>`;
            }
            else {
                return `<strong>${a}<span>x</span>²${b}<span>x</span>=0</strong>`;
            }
        }
        else {
            if(c > 0) {
                return `<strong>${a}<span>x</span>²+${c}=0</strong>`;
            }
            else if(c < 0) {
                return `<strong>${a}<span>x</span>²${c}=0</strong>`;
            }
            else {
                return `<strong>${a}<span>x</span>²=0</strong>`;
            }
        }
    }
}
