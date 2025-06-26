'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const testimonials = [
  {
    name: 'Wade Warren',
    company: 'Logistics Corp',
    text: 'BitNautic shipping services have been invaluable to the success of our company. They guided us through all of our shipping options in detail and with complete openness.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Morgot Whitney',
    company: 'Global Trade Ltd',
    text: 'I would and have recommended the BitNautic shipping and logistics firm to other importers. I send the documentation for marine shipments, and everything is taken care of right away.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Devon Lane',
    company: 'Maritime Solutions',
    text: 'Their blockchain documentation service has saved us countless hours. Everything is transparent and verifiable—truly a modern solution to an age-old problem.',
    rating: 4,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Brooklyn Simmons',
    company: 'EcoFreight Co.',
    text: 'BitNautic’s transport booking has been a game-changer for our logistics department. Super easy interface, reliable tracking, and timely deliveries every time.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Testimonials() {
  useEffect(() => {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 32,
      loop: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 4px !important;
          border-radius: 9999px !important;
          background: #94a3b8;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Client Reviews
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="swiper mySwiper">
          <div className="swiper-wrapper py-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide px-2 flex justify-center h-full">
                <div className=" bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl p-6 w-full max-w-md h-full flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400">
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.176a1 1 0 00.95.69h4.397c.969 0 1.371 1.24.588 1.81l-3.561 2.584a1 1 0 00-.364 1.118l1.357 4.176c.3.921-.755 1.688-1.54 1.118l-3.561-2.584a1 1 0 00-1.176 0l-3.561 2.584c-.784.57-1.838-.197-1.539-1.118l1.356-4.176a1 1 0 00-.364-1.118L2.707 9.603c-.783-.57-.38-1.81.588-1.81h4.396a1 1 0 00.951-.69l1.357-4.176z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-blue-100 text-base leading-relaxed mb-6">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-blue-300">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-8 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
}
