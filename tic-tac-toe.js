const board = document.querySelector(".container");
const heading = document.querySelector(".helper");
const squares = document.querySelectorAll(".square");
let clickCount = 0;

const dialogX = document.querySelector(".X");
const dialogO = document.querySelector(".O");
const dialogCat = document.querySelector(".Cat");

const oMaker = () => {
    const oDiv = document.createElement("div");
    oDiv.classList.add("o-symbol");
    const oSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="843" height="843" viewBox="0 0 843 843"><defs><style>.a1,.c1{fill:none;}.a1{stroke:#242f40;stroke-width:10px;}.b1{stroke:none;}</style></defs><g class="a1"><circle class="b1" cx="421.5" cy="421.5" r="421.5"/><circle class="c1" cx="421.5" cy="421.5" r="416.5"/></g></svg>';
    oDiv.innerHTML = oSVG;
    oDiv.style.transition = "opacity 500ms ease";
    oDiv.style.opacity = "0";
    return oDiv;
}

const xMaker = () => {
    const xDiv = document.createElement("div");
    xDiv.classList.add("x-symbol");
    const xSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="757.071" height="757.071" viewBox="0 0 757.071 757.071"><defs><style>.a{fill:none;stroke:#d72638;stroke-width:10px;}</style></defs><g transform="translate(3.536 3.536)"><line class="a" x2="750" y2="750"/><line class="a" x1="750" y2="750"/></g></svg>';
    xDiv.innerHTML = xSVG;
    xDiv.style.transition = "opacity 500ms ease";
    xDiv.style.opacity = "0";
    return xDiv;
}

const lMaker = (symbol) => {
    const lDiv = document.createElement("div");
    lDiv.classList.add("line");
    let lSVG;

    lSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="784" height="10" viewBox="0 0 784 10"><defs><style>.al{fill:none;stroke:#AB87FF;stroke-width:15px;}</style></defs><line class="al" x2="784" transform="translate(0 5)"/></svg>';

    lDiv.innerHTML = lSVG;
    lDiv.style.transition = "opacity 500ms ease";
    lDiv.style.opacity = "0";
    lDiv.style.position = "absolute";
    lDiv.style.width = "100%";
    return lDiv;
}

const symbolAdder = (symbol, target) => {
    if (target.hasChildNodes()) {
        return;
    }
    target.appendChild(symbol);
    setTimeout(() => {
        symbol.style.opacity = "1";
    }, 250);
}

const firstLineChecker = (symbol) => {
    let firstLineX = true;
    let firstLineSquares = [];
    for (let i = 0; i < 3; i++) {
        const element = squares[i].firstChild;
        firstLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                firstLineX = false;   
            }
        }
    }
    firstLineSquares.forEach(square => {
        if (!square) {
            firstLineX = false;
        }
    });

    if (firstLineX) {
        const t = ((firstLineSquares[0].offsetHeight - 5) / 2) + "px";
        const line = lMaker(symbol);
        line.style.top = t;
        line.style.left = "0";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return firstLineX;
}

const secondLineChecker = (symbol) => {
    let secondLineX = true;
    let secondLineSquares = [];
    for (let i = 3; i < 6; i++) {
        const element = squares[i].firstChild;
        secondLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                secondLineX = false;   
            }
        }
    }
    secondLineSquares.forEach(square => {
        if (!square) {
            secondLineX = false;
        }
    });

    if (secondLineX) {
        const t = ((board.offsetHeight - 15) / 2) + "px";
        const line = lMaker(symbol);
        line.style.top = t;
        line.style.left = "0";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return secondLineX;
}

const thirdLineChecker = (symbol) => {
    let thirdLineX = true;
    let thirdLineSquares = [];
    for (let i = 6; i < 9; i++) {
        const element = squares[i].firstChild;
        thirdLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                thirdLineX = false;   
            }
        }
    }

    thirdLineSquares.forEach(square => {
        if (!square) {
            thirdLineX = false;
        }
    });

    if (thirdLineX) {
        const t = ((thirdLineSquares[0].offsetHeight + 15) / 2) + "px";
        const line = lMaker(symbol);
        line.style.bottom = t;
        line.style.left = "0";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return thirdLineX
}

const firstColumnChecker = (symbol) => {
    let firstLineX = true;
    let firstLineSquares = [];
    const firstLineSquaresNum = [0, 3, 6];
    for (const i of firstLineSquaresNum) {
        const element = squares[i].firstChild;
        firstLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                firstLineX = false;   
            }
        }
    }
    firstLineSquares.forEach(square => {
        if (!square) {
            firstLineX = false;
        }
    });

    if (firstLineX) {
        const t = "-" + (firstLineSquares[0].offsetWidth + 25) + "px";
        const line = lMaker(symbol);
        line.style.top = "50%";
        line.style.left = t;
        line.style.transform = "rotate(90deg)";
        line.style.transformOrigin = "center";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return firstLineX;
}

const secondColumnChecker = (symbol) => {
    let secondLineX = true;
    let secondLineSquares = [];
    const secondLineSquaresNum = [1, 4, 7];
    for (const i of secondLineSquaresNum) {
        const element = squares[i].firstChild;
        secondLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                secondLineX = false;   
            }
        }
    }
    secondLineSquares.forEach(square => {
        if (!square) {
            secondLineX = false;
        }
    });

    if (secondLineX) {
        const line = lMaker(symbol);
        line.style.top = "50%";
        line.style.transform = "rotate(90deg)";
        line.style.transformOrigin = "center";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return secondLineX;
}

const thirdColumnChecker = (symbol) => {
    let thirdLineX = true;
    let thirdLineSquares = [];
    const thirdLineSquaresNum = [2, 5, 8];
    for (const i of thirdLineSquaresNum) {
        const element = squares[i].firstChild;
        thirdLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                thirdLineX = false;   
            }
        }
    }
    thirdLineSquares.forEach(square => {
        if (!square) {
            thirdLineX = false;
        }
    });

    if (thirdLineX) {
        const t = (thirdLineSquares[0].offsetWidth + 30) + "px";
        const line = lMaker(symbol);
        line.style.top = "50%";
        line.style.left = t;
        line.style.transform = "rotate(90deg)";
        line.style.transformOrigin = "center";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return thirdLineX;
}

const firstDiagonalChecker = (symbol) => {
    let firstLineX = true;
    let firstLineSquares = [];
    const firstLineSquaresNum = [0, 4, 8];
    for (const i of firstLineSquaresNum) {
        const element = squares[i].firstChild;
        firstLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                firstLineX = false;   
            }
        }
    }
    firstLineSquares.forEach(square => {
        if (!square) {
            firstLineX = false;
        }
    });

    if (firstLineX) {
        const line = lMaker(symbol);
        line.style.top = "50%";
        line.style.transform = "rotate(225deg) scale(1.3)";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }
    
    return firstLineX;
}

const secondDiagonalChecker = (symbol) => {
    let secondLineX = true;
    let secondLineSquares = [];
    const secondLineSquaresNum = [2, 4, 6];
    for (const i of secondLineSquaresNum) {
        const element = squares[i].firstChild;
        secondLineSquares.push(element);
        if (element) {
            if (!element.classList.contains(symbol)) {
                secondLineX = false;   
            }
        }
    }
    secondLineSquares.forEach(square => {
        if (!square) {
            secondLineX = false;
        }
    });

    if (secondLineX) {
        const line = lMaker(symbol);
        line.style.top = "50%";
        line.style.transform = "rotate(135deg) scale(1.3)";
        line.style.transformOrigin = "center";
        board.appendChild(line);
        setTimeout(() => {
            line.style.opacity = "1";
        }, 750);
    }

    return secondLineX;
}

function countDown() {
    heading.classList.remove("hidden");
    board.style.transform = "scale(0.7)";
    let t = 5;
    heading.innerHTML = "Reloading in " + t + " secs...";
    const timeinterval = setInterval(() => {
        heading.innerHTML = "Reloading in " + t-- + " secs...";
        if (t === 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

const checkForXThreeInRow = () => {
    const fL = firstLineChecker("x-symbol");
    const sL = secondLineChecker("x-symbol");
    const tL = thirdLineChecker("x-symbol");
    const fC = firstColumnChecker("x-symbol")
    const sC = secondColumnChecker("x-symbol");
    const tC = thirdColumnChecker("x-symbol");
    const fD = firstDiagonalChecker("x-symbol");
    const sD = secondDiagonalChecker("x-symbol");

    if (fL || sL || tL || fC || sC || tC || fD || sD) {
        dialogX.style.opacity = "1";
        dialogX.style.zIndex = "20";

        board.removeEventListener("click", clickFunc);

        setTimeout(() => {
            window.location.reload();
        }, 7750);
        
        setTimeout(() => {
            countDown();
        }, 1750);
    }
}

const checkForOThreeInRow = () => {
    const fL =firstLineChecker("o-symbol");
    const sL =secondLineChecker("o-symbol");
    const tL =thirdLineChecker("o-symbol");
    const fC =firstColumnChecker("o-symbol")
    const sC =secondColumnChecker("o-symbol");
    const tC =thirdColumnChecker("o-symbol");
    const fD =firstDiagonalChecker("o-symbol");
    const sD =secondDiagonalChecker("o-symbol");

    if (fL || sL || tL || fC || sC || tC || fD || sD) {
        dialogO.style.opacity = "1";
        dialogO.style.zIndex = "20";
        
        board.removeEventListener("click", clickFunc);

        setTimeout(() => {
            window.location.reload();
        }, 7750);

        setTimeout(() => {
            countDown();
        }, 1750);
    }
}

board.addEventListener("click", clickFunc = (e) => {
    if (!heading.classList.contains("hidden")) {
        heading.classList.add("hidden");
    }

    if (board.style.transform !== "scale(1)") {
        board.style.transform = "scale(1)";
    }

    const square = e.target;
    let adder;

    if (square.hasChildNodes()) {
        return;
    }
    
    if (clickCount % 2 === 0) {
        adder = xMaker();
    } else {
        adder = oMaker();
    }

    symbolAdder(adder, square);
    if (clickCount % 2 === 0) {
        checkForXThreeInRow();
    } else {
        checkForOThreeInRow();
    }

    clickCount++;
    console.log(clickCount);

    if (clickCount === 9) {
        dialogCat.style.opacity = "1";
        dialogCat.style.zIndex = "20";

        board.removeEventListener("click", clickFunc);

        setTimeout(() => {
            window.location.reload();
        }, 7750);
        
        setTimeout(() => {
            countDown();
        }, 1750);
    }
});
