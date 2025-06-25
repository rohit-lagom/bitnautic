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
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Morgot Whitney',
    company: 'Global Trade Ltd',
    text: 'I would and have recommended the BitNautic shipping and logistics firm to other importers. I send the documentation for marine shipments, and everything is taken care of right away.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Devon Lane',
    company: 'Maritime Solutions',
    text: 'Their blockchain documentation service has saved us countless hours. Everything is transparent and verifiable—truly a modern solution to an age-old problem.',
    rating: 4,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Brooklyn Simmons',
    company: 'EcoFreight Co.',
    text: 'BitNautic’s transport booking has been a game-changer for our logistics department. Super easy interface, reliable tracking, and timely deliveries every time.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

export default function TestimonialsSwiper() {
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
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 4px !important;
          border-radius: 9999px !important;
          background: #d1d5db;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important; /* blue-600 */
        }
        .swiper-slide-active .glass-card {
          border-color: #2563eb !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Client Reviews
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="swiper mySwiper">
          <div className="swiper-wrapper pb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide px-2 flex justify-center h-full">
                <div className="glass-card bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-md w-full max-w-md flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02] hover:border-blue-500 group h-full">
                  <div>
                    <div className="flex items-center gap-2 text-amber-500 mb-4">
                      <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                      </svg>
                      <span className="font-semibold text-indigo-600">{testimonial.rating}.0</span>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 text-base leading-relaxed mb-6 transition-colors duration-300">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img src={testimonial.image} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-4 flex justify-center"></div>
        </div>
      </div>
    </section>
  );
}
