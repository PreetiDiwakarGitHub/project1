const menu = [
    {
        id: 1,
        title: "fruits ",
        category: "breakfast",
        price: 15.99,
        img: "img/food.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",
    },
    {
        id: 2,
        title: "Kachori",
        category: "lunch",
        price: 13.99,
        img: "img/kachori.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",
    },
    {
        id: 3,
        title: "French fries",
        category: "snack",
        price: 14.67,
        img: "img/food2.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",
    },
    {
        id:4,
        title:"Idli",
        category: "breakfast",
        price:20.34,
        img:"img/Idli.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",

    },
    {
        id:5,
        title:"Poha",
        category:"breakfast",
        price:12.23,
        img:"img/poha.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",
    },
    {
        id:6,
        title:"Maggi",
        category:"snack",
        price:23.12,
        img:"img/Maggi.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt"
    },
    {
        id:7,
        title:"Samosa",
        category:"snack",
        price:34,
        img:"img/samosa.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt",

    },
    {
        id:8,
        title:"Jeera Rice",
        category:"lunch",
        price:34,
        img:"img/jeerarice.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt a",
    },
    {
        id:9,
        title:"matarpulao",
        category:"Dinner",
        price:34,
        img:"img/matarpulao.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt a",
    },
    {
        id:10,
        title:"Paneerpoori",
        category:"Dinner",
        price:34,
        img:"img/paneerpoori.jpeg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis, incidunt a",
    }
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    

    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item menu-item-custom">
        <img src="${item.img}" class="photo" alt="${item.title}">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;

}


