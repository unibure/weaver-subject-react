import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function IntroHero() {
  const swiperRef = useRef(null);
  const [isPause, setIsPause] = useState(false); // true면 정지

  function handleToggle() {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.autoplay.running) {
      console.log("정지버튼누름");
      swiper.autoplay.stop();
      setIsPause(true);
    } else {
      console.log("재생버튼누름");
      swiper.autoplay.start();
      setIsPause(false);
    }
    // 상태 변경 후 인스턴스 업데이트
    swiper.update();
  }

  return (
    <Swiper
      className="intro-hero"
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      navigation={{
        prevEl: ".intro-hero .prev",
        nextEl: ".intro-hero .next",
      }}
      pagination={{
        clickable: true,
        type: "fraction",
        el: ".intro-hero .pagination-inner",
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;

        // navigation, pagination 재연결
        if (swiper.params.navigation) {
          swiper.navigation.init();
          swiper.navigation.update();
        }
        if (swiper.params.pagination) {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }
      }}
    >
      {[1, 2, 3, 4].map((index) => (
        <SwiperSlide className="inner" key={index}>
          <img
            src="./images/intro-hero-bg.png"
            alt="intro-hero-bg"
            className="intro-hero-bg"
          />
          <div className="content container">
            <span className="tag">Event</span>
            <h2 className="title">메인타이틀 문구가 들어갑니다.</h2>
            <p className="desc">
              서브 타이틀 내용이 들어갑니다. 서브 타이틀 내용이 들어갑니다.
              <br /> 서브 타이틀 내용이 들어갑니다.
            </p>
          </div>
        </SwiperSlide>
      ))}

      <div className="slide-controls container">
        <button type="button" className="prev">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button type="button" className="next">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      <div className="slide-pagination container">
        <div className="pagination-inner"></div>
        <button
          type="button"
          onClick={handleToggle}
          className={`swiper-toggle ${isPause ? "pause" : ""}`}
          aria-label={`${isPause ? "재생" : "일시정지"}`}
        >
          <span className="icon icon-pause">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M199.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8zM375.9 416h-63.8c-4.5 0-8.1-3.6-8.1-8V104c0-4.4 3.6-8 8.1-8h63.8c4.5 0 8.1 3.6 8.1 8v304c0 4.4-3.6 8-8.1 8z"></path>
            </svg>
          </span>
          <span className="icon icon-play">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="15px"
              width="15px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440z"></path>
            </svg>
          </span>
        </button>
      </div>
    </Swiper>
  );
}
