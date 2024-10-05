import BrandCarouselUsage from "./(brand-carousel)/page";
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
  {
    title: "Brand Carousel",
    component: BrandCarouselUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A responsive brand carousel component that displays brands in a marquee-like animation.",
      features: [
        "Seamless looping animation",
        "Customizable brand content",
        "Responsive design",
        "Accessibility-focused",
        "Integration with Tailwind CSS",
      ],
      props: [
        {
          propName: "brands",
          propExample: `[<p>Brand 1</p>, <p>Brand 2</p>, ...]`,
          propDetail: "Array of React nodes representing the brands to be displayed in the carousel.",
        },
      ],
      packages: [],
    },
  },
];

export default CarouselsInfo;