const cards = Array.from(
    document.querySelectorAll(".modal-card"),
);

let modalSlider = new Splide("#modalSlider", {
    type: "loop",
    classes: {
        pagination: "splide__pagination d-none",
    },
    perPage: 2,
    perMove: 1,
    focus: 0,
    pagination: false,
    autoWidth: true,
    drag: false,
    breakpoints: {
        1200: {
            drag: true,
        },
    },
});

modalSlider.mount();

cards.forEach((courseCard) => {
    courseCard.addEventListener("click", () => {
        setTimeout(() => modalSlider.refresh(), 200);
    });
});
