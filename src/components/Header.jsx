import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isDropBox, setIsDropBox] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [isTag, setIsTag] = useState("");

  function selectTag(e, item) {
    e.stopPropagation();
    setIsTag(item);
    setIsDropBox(false);
    inputRef.current?.focus();
  }

  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropBox(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header id="header" className="header">
      <div className="inner">
        <h1 className="logo">
          <a href="#">
            <span className="hidden">WEAVER LOFT</span>
            <svg
              version="1.1"
              id="Layer_1"
              className="logo_svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              style={{ enableBackground: "new 0 0 500 500" }}
              xmlSpace="preserve"
            >
              <g>
                <polygon
                  className="logo_svg_g"
                  points="214.5,183.2 170.2,316 133.8,420.9 206.8,420.9 286.3,183.1 	"
                ></polygon>
                <polygon
                  className="logo_svg_b"
                  points="91,79.6 19.8,79.6 133.8,420.9 170.2,316 	"
                ></polygon>
                <polygon
                  className="logo_svg_g"
                  points="407.5,79.1 328.4,315.4 292.8,420.9 365.7,420.9 480.2,79.1 	"
                ></polygon>
                <polygon
                  className="logo_svg_b"
                  points="295.5,214.9 295.3,214.1 258.7,322.9 292.8,420.9 328.4,315.4 	"
                ></polygon>
              </g>
            </svg>
          </a>
        </h1>

        <nav className="gnb">
          <ul>
            <li>
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">주요사업</a>
            </li>
            <li>
              <a href="#">매거진</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
            <li>
              <a href="#">채용공고</a>
            </li>
          </ul>
        </nav>

        <div className="header-utils">
          <div className="search-box" ref={searchRef}>
            <input
              ref={inputRef}
              type="text"
              placeholder="키워드를 입력하세요."
              value={isTag}
              onClick={() => setIsDropBox(true)}
              onChange={(e) => setIsTag(e.target.value)}
            />
            <button type="button" className="btn-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className={`search-dropdown ${isDropBox ? "active" : ""}`}>
              <p className="search-tit">추천 검색어</p>
              <ul className="drop-list">
                {[
                  "디자인",
                  "기획",
                  "퍼블리셔",
                  "코딩테스트",
                  "백엔드개발자",
                ].map((item) => (
                  <li
                    className="tag-btn tag-btn--search"
                    onClick={(e) => selectTag(e, item)}
                    key={item}
                  >
                    #{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button type="button" className="sitemap-btn">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
