const webTitle = document.getElementsByTagName("title")[0];

let titlesList = [
    "⠀⠀⠀breath",
    "b⠀⠀⠀reath",
    "br⠀⠀⠀lax",
    "bre⠀⠀⠀ax",
    "brea⠀⠀⠀x",
    "breat⠀⠀⠀",
    "breath⠀⠀⠀",
    "reath⠀⠀⠀",
    "eath⠀⠀⠀",
    "ath⠀⠀⠀",
    "th⠀⠀⠀",
    "h⠀⠀⠀",
    "⠀⠀⠀",
    "⠀⠀⠀b",
    "⠀⠀⠀br",
    "⠀⠀⠀bre",
    "⠀⠀⠀brea",
    "⠀⠀⠀breath",
];

let onTitleNum = 0;
let allowed = true;
setInterval(() => {
    webTitle.innerText = titlesList[onTitleNum];
    if (onTitleNum < titlesList.length - 1) {
        onTitleNum++;
    } else {
        onTitleNum = 0;
    }
}, 1000);

document.onmousemove = (e) => {
    if (!allowed) {
        return;
    }
    let x = e.clientX;
    let y = e.clientY;
    let elem = document.createElement("div");
    elem.setAttribute("class", "cursorFollower");
    elem.style.backgroundColor =
        "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    elem.style.left = x + "px";
    elem.style.top = y + "px";
    document.body.appendChild(elem);
    setTimeout(() => {
        document.body.removeChild(elem);
    }, 1900);
    allowed = false;
};

document.onclick = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let elem = document.createElement("div");
    elem.setAttribute("class", "cursorClicked");
    elem.style.backgroundColor =
        "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
    elem.style.left = x + "px";
    elem.style.top = y + "px";
    document.body.appendChild(elem);
    setTimeout(() => {
        document.body.removeChild(elem);
    }, 1900);
};

setInterval(() => {
    if (allowed) {
        return;
    }
    allowed = true;
}, 5);
