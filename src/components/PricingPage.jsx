import React, { useState } from 'react';
import BillingCycleRadio from './BillingCycleRadio';
import PricingTable from './PricingTable';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import ContactCard from './ContactCard';
import { FaRegCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
  // const [selectedCycle, setSelectedCycle] = useState(false);
  const [selectedCycle, setSelectedCycle] =
    useState('annual');

  const [billingCycle, setBillingCycle] = useState(
    'monthly',
  );

  return (
    <div className="container  px-10 lg:mx-auto lg:px-24">
      <h1 className=" text-center text-3xl font-normal md:mt-6 md:text-4xl md:font-medium lg:text-6xl lg:font-bold">
   Simple, fair and transparent Pricing
      </h1>

      <p className="text-center lg:px-[18%] mt-6">
       Our pricing is based on the filter groups you select. For example, if you choose a filter from the "B2B Regional ©" group, you'll receive all associated data fields at a fixed price per record.
      </p>

      <BillingCycleRadio
        selectedCycle={selectedCycle}
        onChange={setSelectedCycle}
        className="mb-40 flex justify-center md:mb-70"
        size="lg"
      />

        <PricingTable selectedCycle={selectedCycle} />
  


      <Testimonials />
      <ContactCard />
    </div>
  );
};

export default PricingPage; 