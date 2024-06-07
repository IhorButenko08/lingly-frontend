import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import flashcard from "@/app/interfaces/flashcard";
import { useState, useRef } from "react";

interface SetSwiperProps {
  set: flashcard[];
}

const SetSwiper: React.FC<SetSwiperProps> = ({ set }) => {
  return (
    <div className="w-full font-gilory">
      <div className="w-full flex justify-between items-center">
        <div className="previous-arrow mx-16 p-2 bg-black rounded-full cursor-pointer hover:opacity-85">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <Swiper
          grabCursor={true}
          modules={[Navigation, EffectCreative]}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".previous-arrow",
          }}
          slidesPerView={1}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -300],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -300],
            },
          }}
        >
          {set.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="h-80 border border-Border/Primary rounded-md flex flex-col justify-center">
                <span className="text-Text/Black w-full text-center text-main font-semibold">
                  {card.term}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next-arrow mx-16 p-2 bg-black rounded-full cursor-pointer hover:opacity-85">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SetSwiper;
