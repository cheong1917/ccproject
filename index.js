//图片
const headerEl = document.querySelector("header")
const scrollToTop = document.querySelector(".scrollToTop");



/*AboutUs div块生成*/
const featuresContainer = document.getElementById("features-container");
const AboutUsClassNames =
    [
        "fa-brands ",
        "fa-html5 ",
        "fa-microsoft ",
        "fa-github ",
        "fa-google-plus ",
        "fa-instalod ",
        "fa-docker "
    ];
const titles = "lorem ipsum";
const contents = "Lorem ipsum dolor sit amet, consectetur.";

const createMode3Div = (IntoClassName,
                        num,
                        firstDivName,
                        iconClassName,
                        titleType,
                        titleClassName,
                        titles,
                        pClassName,
                        pContents) => {
    for (let i = 0; i <= num; i++) {
        const creatDiv = document.createElement("div");
        creatDiv.className = firstDivName;

        const icon = document.createElement("i");
        icon.className = "fas-1 " + iconClassName[0] + iconClassName[i + 1];

        const title = document.createElement(titleType);
        title.className = titleClassName;
        title.textContent = titles;

        const content = document.createElement("p");
        content.className = pClassName;
        content.textContent = pContents;

        creatDiv.appendChild(icon);
        creatDiv.appendChild(title);
        creatDiv.appendChild(content);
        IntoClassName.appendChild(creatDiv);
    }
}
createMode3Div(
    featuresContainer,
    5,
    "feature",
    AboutUsClassNames,
    "h4",
    "feature-title",
    titles,
    "feature-content",
    contents
)
const cases = document.getElementById("Cases");
const Classification = [
    "Classification1",
    "Classification2",
    "Classification3",
];
const imgSrc = "https://picsum.photos/600/40";
const usedRandomNums = [];

function getRandomNum(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    if (arr.length === 0 || arr.indexOf(randomNum) === -1) {
        return randomNum;
    }
    return getRandomNum(arr);
}

for (let i = 0; i <= 7; i++) {
    const caseDiv = document.createElement("div");
    caseDiv.className = "case-item";

    const randomIndex = Math.floor(Math.random() * 2) + 1;

    for (let j = 0; j < randomIndex; j++) {
        const randomNum = getRandomNum(Classification);
        usedRandomNums.push(randomNum);

        const className = Classification[randomNum];
        caseDiv.classList.add(className);
    }

    const img = document.createElement("img");
    img.src = imgSrc + i;
    img.alt = "";

    caseDiv.appendChild(img);
    cases.appendChild(caseDiv);
}

const servicesContainer = document.getElementById("services-container");
const Into3IconClassName =
    [
        "fa-brands ",
        "fa-java ",
        "fa-linux ",
        "fa-node ",
        "fa-python ",
        "fa-apple ",
        "fa-dev "
    ]

createMode3Div(
    servicesContainer,
    5,
    "service-item",
    Into3IconClassName,
    "h4",
    "service-title",
    titles,
    "service-content",
    contents
)
// -------------------------------------------------------

window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;
    if (window.pageYOffset - height > 800) {
        if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky");
        }
    } else {
        headerEl.classList.remove("sticky");
    }

    if (window.pageYOffset > 1000) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
});
const glide = new Glide(".glide");

const captionsEL = document.querySelectorAll(".slide-caption");
glide.on(["mount.after", "run.after"], () => {
    const caption = captionsEL[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "spring(1, 80, 10, 0)",
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0],
    });
});
glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach((el) => {
        el.style.opacity = 0;
    });
});
glide.mount();

const isotope = new Isotope(".cases",{
    // 行模式布局
    layoutMode: "fitRows",
    itemSelector: ".case-item",
});

const filterBtns = document.querySelector(".filter-btns")

filterBtns.addEventListener("click",e=>{
    let {target} = e;
    const filterOption = target.getAttribute("data-filter");
    if(filterOption){
        document.querySelectorAll(".filter-btn.active").forEach(btn=>btn.classList.remove("active"));
        target.classList.add("active");
        isotope.arrange({filter:filterOption});
    }
})

const staggeringOption ={
    delay:300,
    distance: "50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom",
}

ScrollReveal().reveal(".feature",{ ...staggeringOption,interval:350});
ScrollReveal().reveal(".service-item",{ ...staggeringOption,interval:350});
const dataSectionEl = document.querySelector(".data-section");

ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: ".data-piece .num",
            innerHTML: (el) => {
                return [0, el.innerHTML];
            },
            duration: 1500,
            round: 1,
            easing: "easeInExpo",
        });
        dataSectionEl.style.backgroundPosition =
            "center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom/5}px)";
    },
});

window.addEventListener("scroll", () => {
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect.top;
    if (bottom >= 0 && top <= window.innerHeight) {
        dataSectionEl.style.backgroundPosition = "center calc(50% - ${bottom/5}px)";
    }
});

const scroll = new SmoothScroll('nav a[href*="#"],.scrollToTop a[href*="#"]',{
    header:"header",
    offset:80,
})
document.addEventListener("scrollStart",()=>{
    if (headerEl.classList.contains("open")){
        headerEl.classList.remove("open")
    }
})
const exploreBtnEls = document.querySelectorAll(".explore-btn");
exploreBtnEls.forEach((exploreBtnEl) => {
    exploreBtnEl.addEventListener("click", () => {
        scroll.animateScroll(document.querySelector("#into1"));
    });
});

// 折叠按钮
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",() =>{
    headerEl.classList.toggle("open")
})