const inputs = {
    a: document.getElementById("input_a"),
    b: document.getElementById("input_b"),
    c: document.getElementById("input_c")
}

const resultDivs = {
    div_equation: document.getElementById("equation"),
    div_resolution: document.getElementById("resolution")
}

function f_submit() {
    clearResultDiv();
    if (isValid(inputs.a)) {
        const numbers = getNumbers(inputs.a, inputs.b, inputs.c);
        showEquation(numbers);
        showResolution(numbers);
    }
}

function clearResultDiv() {
    resultDivs.div_equation.innerHTML = "";
    resultDivs.div_resolution.innerHTML = "";
}

function isValid(inputA) {
    if (!inputA.value.length || !Number(inputA.value)) {
        window.alert("[ERRO] Não é uma equação do segundo grau!")
        return false;
    } return true;
}

function getNumbers(inputA, inputB, inputC) {
    return {
        a: Number(inputA.value),
        b: Number(inputB.value),
        c: Number(inputC.value)
    }
}

function showEquation(numbers) {
    const equationValues = getEquation(numbers.a, numbers.b, numbers.c);
    const equation = `${equationValues.textA}${equationValues.textB}${equationValues.textC} = 0`;
    resultDivs.div_equation.innerHTML = equation;
}

function getEquation(a, b, c) {
    return {
        textA: getTextValues.getTextA(a),
        textB: getTextValues.getTextB(b),
        textC: getTextValues.getTextC(c)
    }
}

const getTextValues = {
    getTextA(a) {
        if (a === 1) return "<span>x</span><sup>2</sup>";
        else if (a === -1) return "-<span>x</span><sup>2</sup>"
        else return `${a}<span>x</span><sup>2</sup>`;
    },
    getTextB(b) {
        if (b === 1) return "+<span>x</span>";
        else if (b === -1) return "-<span>x</span>";
        else if (b > 1) return `+${b}<span>x</span>`;
        else if (b < -1) return `${b}<span>x</span>`
        else return "";
    },
    getTextC(c) {
        if (c === 0) return "";
        else if (c > 0) return `+${c}`;
        else return `${c}`;
    }
}

function showResolution(numbers) {
    const a = numbers.a;
    const b = numbers.b;
    const c = numbers.c;
    const delta = b ** 2 - 4 * a * c;
    const solutions = calculateSolutions(b, delta);
    resultDivs.div_resolution.innerHTML = resolution(delta, solutions);
}

function calculateSolutions(b, delta) {
    return {
        x1: (- b + Math.sqrt(delta)) / 2,
        x2: (- b - Math.sqrt(delta)) / 2,
        x: - b / 2
    }
}

function resolution(delta, solutions) {
    if (delta > 0) {
        const x1 = solutions.x1.toFixed(4).replace(/\.?0+$/, '');
        const x2 = solutions.x2.toFixed(4).replace(/\.?0+$/, '');
        return `<strong><span>x1</span> = <span>${x1}</span> <br> <span>x2</span> = <span>${x2}</span> <br> <span>S</span> = {<span>${x1}</span>, <span>${x2}</span>}</strong>`;
    } else if (delta === 0) {
        const x = solutions.x.toFixed(4).replace(/\.?0+$/, '');
        return `<strong><span>x</span> = <span>${x}</span> <br> <span>S</span> = {<span>${x}</span>}</strong>`;
    } else {
        return "<strong><span>Soluções não reais</span> <br> <span>S</span> = <span>Ø</span></strong>";
    }
}