let number = 0;

const table_body = document.getElementById("table_body");
const diagram = document.getElementById("diagram");
const tooltiptext = document.getElementById("tooltiptext");

diagram.onmouseenter = () => {

    let str = "";
    for (let row of table_body.rows) {
        str += `${row.cells[1].lastChild.value} : ${row.cells[2].lastChild.value};\n`;
    }

    tooltiptext.innerHTML = `${str}`;
    tooltiptext.style.visibility = "visible";

}

diagram.onmouseleave = () => {
    tooltiptext.style.visibility = "hidden";
}

document.getElementById("submit").addEventListener( 'click', () => {
    if (number < 10) {
        let new_data = Math.floor(Math.random() * (100 - 0) + 0);
        let new_name = `KP-${number}`;
        add_diagram_el(new_data, new_name);
        add_row(new_data, new_name);
    }
});

function add_row(data, name) {
    let row = table_body.insertRow(0);
    row.id = `r${number}`;
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let a_el = document.createElement("a");
    a_el.appendChild(document.createTextNode("Видалити"));
    a_el.href = "#";
    a_el.addEventListener("click", () => {
        document.getElementById(`r${number - 1}`).remove();
        document.getElementById(`d${number - 1}`).remove();
        number--;
    });
    cell1.appendChild(a_el);

    let el_for_cell2 = document.createElement("input");
    el_for_cell2.type = "text";
    el_for_cell2.value = `${name}`;
    el_for_cell2.id = `${number}`;
    el_for_cell2.addEventListener("change", () => {
        let my_diag = document.getElementById(`d${row.id.substr(1)}`);
        my_diag.children[1].innerHTML = `${el_for_cell2.value}`;
    });
    cell2.appendChild(el_for_cell2);

    let el_for_cell3 = document.createElement("input");
    el_for_cell3.type = "number";
    el_for_cell3.value = `${data}`;
    el_for_cell3.addEventListener("change", () => {
        let my_diag = document.getElementById(`d${row.id.substr(1)}`);
        my_diag.style.height = `${el_for_cell3.value*3}px`;
        my_diag.children[0].style.height = `${el_for_cell3.value*3}px`;
    });
    cell3.appendChild(el_for_cell3);

    number++;
}

function add_diagram_el(data, name) {
    let main_div_el = document.createElement("div");
    main_div_el.id = `d${number}`;
    main_div_el.style.height = `${(data*3)}px`;
    main_div_el.classList.add("width60");

    let rect_div_el = document.createElement("div");
    rect_div_el.style.height = `${(data*3)}px`;
    rect_div_el.classList.add("width60");
    rect_div_el.style.backgroundColor = `rgb(${Math.random() * (100 - 0) + 0}, ${Math.random() * (100 - 0) + 0}, ${Math.random() * (100 - 0) + 0})`;

    let p_el = document.createElement("div");
    p_el.innerHTML = `${name}`;
    p_el.classList.add("center");

    main_div_el.appendChild(rect_div_el);
    main_div_el.appendChild(p_el);

    diagram.appendChild(main_div_el);

}

















































// function getRGB(str) {
//     var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
//     return match ? {
//         red: match[1],
//         green: match[2],
//         blue: match[3]
//     } : {};
// }

// if (image && wi && hi && bwi && bci && alti && submit)
//     setInfo();
// function setInfo() {
//     submit.addEventListener("click", check);
//     // wi.addEventListener("input", checkWI);
//     // hi.addEventListener("input", checkHI);
//     // bwi.addEventListener("input", checkBWi);
//     // bci.addEventListener("input", checkBCI);
//     // alti.addEventListener("input", checkALT);
//     wi.value = image.width;
//     hi.value = image.height;
//     bwi.value = parseInt(style.borderWidth);
//     bci.value = style.borderColor;
//     alti.value = image.alt;

// }
// function check(e) {
//     e.preventDefault();
//     checkWI();
//     checkHI();
//     checkBWi();
//     checkBCI();
//     checkALT();
// }
// function checkWI() {

//     if (parseInt(wi.value) <= 1920 && wi.value.isEmpty) {
//         image.style.width = wi.value + "px";
//         wi.style.borderColor = "green";
//     } else {
//         wi.style.borderColor = "red";
//         console.log("wi red");
//     }
//     console.log("img w= " + image.width);
//     console.log("input w =" + wi.value);
// }
// function checkHI() {
//     if (parseInt(hi.value) <= 1080 && hi.value.isEmpty) {
//         image.style.height = hi.value + "px";
//         hi.style.borderColor = "green";

//     } else {
//         hi.style.borderColor = "red";

//     }
//     console.log("img h= " + image.height);
//     console.log("input h =" + hi.value);
// }
// function checkBWi() {
//     if (parseInt(bwi.value) <= 100 && bwi.value.isEmpty) {
//         image.style.borderWidth = bwi.value + "px";
//         bwi.style.borderColor = "green";

//     } else {
//         bwi.style.borderColor = "red";

//     }
//     console.log("img bwi= " + image.width);
//     console.log("input bwi =" + wi.value);
// }
// function checkBCI() {
//     const rgb = getRGB(bci.value);
//     if ((!rgb.isEmpty() || !checkRGB(rgb)) && bci.value.isEmpty) {
//         console.log(rgb);
//         image.style.borderColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
//         bci.style.borderColor = "green";

//     } else {
//         bci.style.borderColor = "red";

//     }
// }
// function checkALT() {
//     console.log(typeof alti.value + " " + alti.value);
//     if (/^[a-zA-Z][a-zA-Z\s]*$/.test(alti.value) && alti.value.isEmpty) {
//         image.alt = alti.value;
//         console.log(image.alt);
//         alti.style.borderColor = "green";

//     } else {
//         alti.style.borderColor = "red";

//     }
// }
// function checkRGB(obj) {
//     for (let color in obj) {
//         if (parseInt(color) > 255)
//             return false;
//     }
//     return true;
// }
// Object.prototype.isEmpty = function () {
//     for (var key in this) {
//         if (this.hasOwnProperty(key))
//             return false;
//     }
//     return true;
// }