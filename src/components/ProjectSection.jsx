import { useState } from "react";

const CATEGORY_DATA = [
  { title: "All" },
  { title: "UIUX" },
  { title: "DESIGN" },
  { title: "DEVELOPMENT" },
];

const CARD_DATA = [
  {
    id: 1,
    img: "project-list-thumb-1.png",
    title: "타이틀이 들어갑니다.",
    desc: "서브타이틀이 들어갑니다. 서브타이틀이 들어갑니다.",
    alt: "썸네일 이미지",
    category: "UIUX",
  },
  {
    id: 2,
    img: "project-list-thumb-2.png",
    title: "타이틀이 들어갑니다.",
    desc: "서브타이틀이 들어갑니다. 서브타이틀이 들어갑니다.",
    alt: "썸네일 이미지",
    category: "UIUX",
  },
  {
    id: 3,
    img: "project-list-thumb-3.png",
    title: "타이틀이 들어갑니다.",
    desc: "서브타이틀이 들어갑니다. 서브타이틀이 들어갑니다.",
    alt: "썸네일 이미지",
    category: "DESIGN",
  },
  {
    id: 4,
    img: "project-list-thumb-4.png",
    title: "타이틀이 들어갑니다.",
    desc: "서브타이틀이 들어갑니다. 서브타이틀이 들어갑니다.",
    alt: "썸네일 이미지",
    category: "DEVELOPMENT",
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="subpage-section">
      <div className="container">
        <div className="inner">
          <h2 className="section-title">PROJECT</h2>

          <div className="category-list">
            {CATEGORY_DATA.map((category) => (
              <button
                type="button"
                className={`tag-btn tag-btn--tab 
                  ${activeCategory === category.title ? "active" : ""}`}
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
              >
                #{category.title}
              </button>
            ))}
          </div>

          <div className="grid-container">
            {CARD_DATA.map((item) => (
              <article
                className={`card ${activeCategory === "All" || item.category === activeCategory ? "active" : ""}`}
                key={item.id}
              >
                <figure className="card-thumb">
                  <img src={`./images/${item.img}`} alt={item.alt} />
                </figure>
                <div className="card-info">
                  <h3 className="sub-title">{item.title}</h3>
                  <p className="sub-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="btn-wrap">
            <button type="button" className="btn-view-more">
              VIEW MORE
              <span className="icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 32 32"
                  height="30px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
