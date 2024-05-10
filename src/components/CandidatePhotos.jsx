"use client";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class HeroCarousal extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      centerPadding: "100px",
      swipe: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            centerMode: true,
            centerPadding: "80px",
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            centerMode: true,
            centerPadding: "60px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "40px",
          },
        },
      ],
    };

    return (
      <div className="bg-[#ffffff] py-10  ml-auto mt-6">
        <Slider {...settings}>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Mac */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Iphone */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Ipad */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Apple Watch */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Airpods */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Airtags */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Apple TV 4K */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* HomePod */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Accessories */}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <img className="w-full" src="assets/cover1.jpg" alt="carousal" />
            <p className="text-center pt-3 hover:underline cursor-pointer">
              {/* Apple GiftCard */}
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
