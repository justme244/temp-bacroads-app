import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const dataLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    target: "_blank",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    target: "_blank",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    img: img1,
    title: "Tibet Adventure",
    dates: "august 26th, 2020",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    paraTitle: "china",
    paraDate: "6 days",
    paraprices: "from $2100",
  },
  {
    img: img2,
    title: "best of java",
    dates: "october 1th, 2020",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    paraTitle: "indonesia",
    paraDate: "11 days",
    paraprices: "from $1400",
  },
  {
    img: img3,
    title: "explore hong kong",
    dates: "september 15th, 2020",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    paraTitle: "hong kong",
    paraDate: "8 days",
    paraprices: "from $5000",
  },
  {
    img: img4,
    title: "kenya highlights",
    dates: "december 5th, 2019",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    paraTitle: "kenya",
    paraDate: "20 days",
    paraprices: "from $3300",
  },
];
