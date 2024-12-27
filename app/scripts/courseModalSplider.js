const courseCards = Array.from(document.querySelectorAll(".course-card"));

let courseModalSlider = new Splide("#courseModalSlider", {
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

courseModalSlider.mount();

courseCards.forEach((courseCard) => {
    courseCard.addEventListener("click", () => {
        setTimeout(() => courseModalSlider.refresh(), 200);
    });
});
