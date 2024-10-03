import DevCarouselV1Usage from "./(dev-carousel-v1)/page";

const CarouselsInfo = [
  {
    title: "Dev Carousel V1",
    component: DevCarouselV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A responsive carousel component using Embla Carousel, supporting multiple views and navigation dots.",
      features: [
        "Responsive design with adjustable perView",
        "Supports looping through slides",
        "Infinite scrolling between slides",
        "Customizable navigation buttons",
        "Dots navigation with active dot indicator",
        "Smooth scrolling animation",
        "Supports keyboard navigation",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[<p>1</p>, <p>2</p>, <p>3</p>]`,
          propDetail: "Array of React elements representing the slides in the carousel.",
        },
        {
          propName: "perView",
          propExample: `2`,
          propDetail: "Number of slides to display at once. Defaults to 1.",
        },
      ],
      packages: [
        {
          pckg_name: "embla-carousel-react embla-carousel",
          pckg_link: "https://github.com/benleung/embla-carousel-react",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons/",
        },
      ],
    },
  },
  
];

export default CarouselsInfo;