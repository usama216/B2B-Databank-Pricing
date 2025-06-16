import React from 'react';

const BillingCycleRadio = ({ selectedCycle, onChange, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-11',
    md: 'h-7 w-14',
    lg: 'h-8 w-16'
  };

  const dotSizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    
    <>




<div className="mb-20 mt-30 flex flex-col items-center">
  <div className="z-50 flex rounded-full border-2 bg-[#E1E1E1] dark:bg-black p-1">
    <button
      className={`rounded-full px-6 py-1 font-semibold transition ${
        selectedCycle === 'month' ? 'bg-[#ffffff] text-black shadow' : 'text-gray-500'
      }`}
      onClick={() => onChange('month')}
    >
      Monthly
    </button>
    <button
      className={`rounded-full px-6 py-1 font-semibold transition ${
        selectedCycle === 'annual' ? 'bg-[#ffffff] text-black shadow' : 'text-gray-500'
      }`}
      onClick={() => onChange('annual')}
    >
 Unique
    </button>
  </div>


</div>

    </>
  );
};

export default BillingCycleRadio; 