let image = document.getElementById("image");

document.getElementById("submit").addEventListener( 'click', () => {

    check_num_data("width");
    check_num_data("height");
    check_num_data("border_width");
    check_border_color();
    check_alt();

})


function check_num_data(id) {
    const el = document.getElementById(id);
    if (el.value == "") {
        unsuccessful_border(id)
        return false;
    }

    let el_num_val = parseInt(el.value, 10);
    if (el_num_val == NaN) {
        unsuccessful_border(id)
        return false;
    }

    switch(id) {
        case "width" :
            image.style.width = `${el_num_val}px`;
            break;
        case "height" :
            image.style.height = `${el_num_val}px`;
            break;
        case "border_width" :
            image.style.borderWidth = `${el_num_val}px`;
            break;
        default:
            alert("Error");
    }

    successful_border(id);
    return true;
}

function check_border_color() {

    const border_color_el = document.getElementById("border_color");
    if (border_color_el.value == "") {
        unsuccessful_border("border_color")
        return false;
    }

    const rgb = get_rgb(border_color_el.value);

    if (!check_rgb(rgb)) {
        unsuccessful_border("border_color")
        return false;
    }

    image.style.borderColor = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
    successful_border("border_color");
    return true;
}

function check_alt() {
    const alt_el = document.getElementById("alt");
    if (alt_el.value == "" || !/^[a-zA-Z][a-zA-Z\s]*$/.test(alt_el.value))  {
        unsuccessful_border("alt")
        return false;
    }

    image.alt = alt_el.value;
    successful_border("alt");
    return true;
}

function unsuccessful_border(name) {
    document.getElementById(name).style.borderColor = "red";
}

function successful_border(name) {
    document.getElementById(name).style.borderColor = "green";
}

//baga
function check_rgb(obj) {
    for (let color in obj) {
        if (parseInt(obj[color]) > 255)
            return false;
    }
    return true;
}

function get_rgb(str){
    let match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}
