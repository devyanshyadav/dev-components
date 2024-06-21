import EmblaCarouselUsage from "./embla-carousel-usage";
import ProductImgGalleryUsage from "./product-img-gallery-usage";

const CarouselsInfo = [
  {
    title: "Embla Carousel",
    component: EmblaCarouselUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A carousel component built with Embla Carousel for creating smooth, responsive carousels.",
      features: [
        "Supports looping through images",
        "Draggable and swipeable interface",
        "Customizable via props",
        "Includes navigation buttons and dot indicators",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[
              { title: "carousel1", element: <img src="/path/to/image1.jpg" /> },
              { title: "carousel2", element: <img src="/path/to/image2.jpg" /> },
              // More carousel items...
            ]`,
          propDetail:
            "An array of objects representing the carousel items, each containing a title and an element to be displayed.",
        },
        {
          propName: "perView",
          propExample: "{1}",
          propDetail:
            "A Number representing the number of elements to display per view. Defaults to 1.",
        },
      ],
      packages: [
        {
          pckg_name: "embla-carousel-react",
          pckg_link: "https://github.com/bvaughn/embla-carousel-react",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
      doc_links: ["https://www.embla-carousel.com/get-started/react/"],
    },
  },
  {
    title: "Product Img Gallery",
    component: ProductImgGalleryUsage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A responsive image gallery component using Embla Carousel for showcasing products.",
      features: [
        "Supports looping through images",
        "Draggable and swipeable interface",
        "Thumbnail previews with click-to-navigate",
        "Full-screen mode",
        "Customizable via props",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[
               "https://example.com/image1.jpg",
               ...
              ]`,
          propDetail:
            "An array of objects representing the carousel items, each containing a title and an image URL.",
        },
      ],
      packages: [
        {
          pckg_name: "embla-carousel-react",
          pckg_link: "https://github.com/bvaughn/embla-carousel-react",
        },
        {
          pckg_name: "react-icons",
          pckg_link: "https://react-icons.github.io/react-icons",
        },
        {
          pckg_name: "clsx",
          pckg_link: "https://www.npmjs.com/package/clsx",
        },
      ],
      doc_links: ["https://www.embla-carousel.com/get-started/react/"],
    },
  },
];

export default CarouselsInfo;
