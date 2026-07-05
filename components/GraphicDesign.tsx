"use client";
import Masonry from "./Masonry";

const designProjects = [
  {
    id: "1",
    img: "/images/pahlawan-lingkungan.png",
    url: "https://canva.link/u766zqnnfvzb7s8",
    height: 400,
  },
  {
    id: "2",
    img: "/images/VB Knowledge Sharing.png",
    url: "https://canva.link/xvi4ae9e550skcv",
    height: 250,
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
  },
];

export default function GraphicDesign() {
  return (
    <Masonry
      items={designProjects}
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover
      hoverScale={0.95}
      blurToFocus
      colorShiftOnHover={false}
    />
  );
}