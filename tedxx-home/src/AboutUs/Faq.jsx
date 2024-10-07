import React, { useState } from 'react';

const FAQItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-white rounded-lg shadow-md my-5 bg-gradient-to-b from-[rgba(47,46,46,0.44)] to-[rgba(50,50,50,0.11)] backdrop-blur-md">
      <div
        className={`flex items-center relative cursor-pointer p-5 pr-20 font-semibold text-lg transition-all duration-200 ${isActive ? 'active' : ''}`}
        onClick={() => setIsActive(!isActive)}
      >
        <p>{props.question}</p>
        <span
          className={`absolute right-5 text-red-600 text-3xl transition-transform duration-200 ${isActive ? 'rotate-45' : ''
            }`}
        >
          +
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40' : 'max-h-0'
          }`}
      >
        <div className="p-5 pt-0 font-semibold text-opacity-60 leading-relaxed">
          <p className='text-red-500'>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;