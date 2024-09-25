import { clientReviews } from '../constants/index.js';
import React, { memo } from 'react';

const Clients = () => {
  return (
    <section className="c-space my-20" id='reviews'>
      <h3 className="head-text font-custom">Hear from Our Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`${item.name}'s review`} // More descriptive alt text
                    className="w-12 h-12 rounded-full"
                    width={48} // 12 * 4px (assuming Tailwind's 12 is 3rem)
                    height={48} // 12 * 4px
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      loading="lazy"
                      key={index}
                      src="/assets/star.png" // Use WebP format if possible
                      alt="star"
                      className="w-5 h-5"
                      width={20} // Assuming star size is 5 * 4px
                      height={20} // 5 * 4px
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Clients); // Wrap in memo for optimization
