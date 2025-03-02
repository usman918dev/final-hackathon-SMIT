import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import "./Carousel.css";
const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1573497019700-5f16e3f9e979",
        "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        "https://images.unsplash.com/photo-1550439062-609e1531270e",
        "https://images.unsplash.com/photo-1527685125746-3a9e6c6f0bf1",
    ];

    const events = useSelector((state) => state.events.events);
    const imgUrls = events.map((event) => event.imageUrl);
    console.log(imgUrls);
    
    // const filteredImgUrls = imgUrls.filter((img) => img !== undefined);

    return (
        <div className="with2">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="shadow-lg"
            >
                {imgUrls.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} className="with" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
