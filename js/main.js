// faq

const faqlis = document.querySelectorAll("#faq-li");

for (const faqli of faqlis) {
    faqli.addEventListener("click", function () {
        faqli.classList.toggle("faq-show");
    });
}


// Services
const services = [
    {
        id: 1,
        img: "./img/sv-1.png 2x",
        name: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        img: "./img/sv-2.png 2x",
        name: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        img: "./img/sv-3.png 2x",
        name: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        img: "./img/sv-4.png 2x",
        name: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const svElm = document.getElementById("em");

// const showSv = (services) => {
//     let result = "";
//     services.forEach(service => {
//         result += `
//         <div class="col text-center bg-white px-[26.5px] py-[57.5px] rounded shadow-main-shadow">
//             <div class="flex justify-center items-center">
//                 <img class="mb-[16px]" srcset="${service.img}" alt="" />
//             </div>
//             <h3 class="font-bold text-[32px] mb-[24px]">${service.name}</h3>
//             <p class="font-normal text-sm">
//                 ${service.description}
//             </p>
//         </div>`
//     });
//     // return result;
//     svElm.innerHTML = result;
// }
// // svElm.innerHTML = showSv(services);
// showSv(services);

const showSv = (services) => {
    let ar = services.map(service => {
        return `
        <div class="col text-center bg-white px-[26.5px] py-[57.5px] rounded shadow-main-shadow">
            <div class="flex justify-center items-center">
                <img class="mb-[16px]" srcset="${service.img}" alt="" />
            </div>
            <h3 class="font-bold text-[32px] mb-[24px]">${service.name}</h3>
            <p class="font-normal text-sm">
                ${service.description}
            </p>
        </div>`
    });
    // return result;
    svElm.innerHTML = ar.join('');
}

showSv(services);




// MENU
const menuIcon = document.querySelector('.mobile-menu-icon');
menuIcon.addEventListener("click", function(){ menuIcon.classList.toggle('show')});





