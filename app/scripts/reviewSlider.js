let reviewSlider = new Splide("#reviewSlider", {
    type: "loop",
    classes: {
        pagination: "splide__pagination dots-container",
        page: "splide__pagination__page dot",
    },
    perPage: 4,
    perMove: 1,
    focus: 0,
    autoWidth: true,
    drag: false,
    breakpoints: {
        1200: {
            drag: true,
        },
    },
});

reviewSlider.mount();
