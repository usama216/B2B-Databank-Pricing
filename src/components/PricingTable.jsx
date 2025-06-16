import React, { Fragment } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const opacityAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

const annualPlans = [
  {
    id: 'regional',
    name: 'B2B Regional ©',
    description: 'Perfect for specifically searching for potential customers or collaborations in a particular industry or region.',
    color: 'bg-[#1A219B] text-white',
    price: { amount: 0.20, currency: 'EUR' },
    unit: '/ record',

    features: [
      'Industries + Codes',
      'Exclude sectors',
      'Location information',
      'Local search',
      'Unlimited downloads'
    ]
  },
  {
    id: 'datadive',
    name: 'B2B Data Dive ©',
    description: 'Perfect for tailoring your sales strategies and reaching the right contacts.',
    color: 'bg-[#D21C5A] text-white',
    price: { amount: 0.30, currency: 'EUR' },
    unit: '/ record',

    features: [
      'Services',
      'Legal form',
      'contact person',
      'Employee class',
      'Sales class'
    ]
  },
  {
    id: 'visibleweb',
    name: 'B2B Visible Web ©',
    description: 'Perfect for effective targeting and targeted marketing of your own solutions.',
    color: 'bg-[#1AC29A] text-white',
    price: { amount: 0.31, currency: 'EUR' },
    unit: '/ record',

    features: [
      'WEB CMS system',
      'WEB Keywords',
      'WEB Insights',
      'WEB technology',
      'Online reviews'
    ]
  },
  {
    id: 'combo',
    name: 'B2B Data Dive ©\nB2B Visible Dive ©',
    description: `The power of combination: Imagine being able to combine all filter options.`,
    color: 'bg-[#D21C5A] text-white',
    price: { amount: 0.41, currency: 'EUR' },
    unit: '/ record',
    Exampledescription:`\n\nFor example, by filtering by WEB CMS systems used such as Wordpress, website technologies used such as HubSpot, legal form, contact persons from the first management level and current need for employees.\n\nIt is hardly possible to get a more comprehensive picture of potential customers.\n\nThis powerful combination enables you to identify highly relevant target customers.`,
    features: []
  }
];

const PricingTable = ({ selectedCycle, className }) => {
  const plans = selectedCycle === 'annual'
    ? annualPlans
    : [
        {
          id: 'basic',
          name: 'Basic',
          description: 'Corresponds to a unit price of only 0.13€ for each filter group used',
          recommended: false,
          free: false,
          prices: {
            monthly: { amount: 29, currency: 'USD' },
            annual: { amount: 290, currency: 'USD' }
          },
          features: [
            '5 Projects',
            '10GB Storage',
            'Basic Support',
            '1 User',
            'Basic Analytics'
          ]
        },
        {
          id: 'Per',
          name: 'Per',
          description: 'Corresponds to a unit price of only 0.12€ for each filter group used',
          recommended: true,
          free: false,
          prices: {
            monthly: { amount: 79, currency: 'USD' },
            annual: { amount: 790, currency: 'USD' }
          },
          features: [
            '15 Projects',
            '50GB Storage',
            'Priority Support',
            '5 Users',
            'Advanced Analytics'
          ]
        },
        {
          id: 'Premium',
          name: 'Premium',
          description: 'Corresponds to a unit price of only 0.10€ for each filter group used',
          recommended: false,
          free: false,
          prices: {
            monthly: { amount: 199, currency: 'USD' },
            annual: { amount: 1990, currency: 'USD' }
          },
          features: [
            'Unlimited Projects',
            '200GB Storage',
            '24/7 Support',
            'Unlimited Users',
            'Custom Analytics'
          ]
        }
      ];

  return (
    <div
      className={clsx(
        'flex flex-col items-start gap-4  lg:flex-row md:justify-center',
        className
      )}
    >
      <AnimatePresence initial={false} mode="wait">
        <PlanList key="plan-list" plans={plans} selectedPeriod={selectedCycle} />
      </AnimatePresence>
    </div>
  );
};

const PlanList = ({ plans, selectedPeriod }) => {
  return (
    <Fragment>
      {plans.map((plan, index) => {
        const isFirst = index === 0;
        const isLast = index === plans.length - 1;
        const isAnnual = plan.price && plan.unit;
        const price = isAnnual
          ? plan.price
          : selectedPeriod === 'annual'
            ? plan.prices.annual
            : plan.prices.monthly;
        const unit = isAnnual ? plan.unit : (selectedPeriod === 'annual' ? '/year' : '/month');
        const cardColor = '';
        const description = plan.description;
        const name = plan.name;
        const features = plan.features || [];
        const exampledescription = plan.Exampledescription || '';

        return (
          <motion.div
            key={plan.id}
            {...opacityAnimation}
            className={clsx(
              'w-full rounded-8xl bg-paper shadow-lg md:min-w-20 md:max-w-125 relative h-[100%]',
              plan.recommended
                ? 'rounded-tr-3xl rounded-tl-3xl min-h-[730px] rounded-3xl border-5 border-[#3a31c8] dark:border-[#3B82F6]'
                : 'border rounded-3xl min-h-[650px]',
              isFirst && 'ml-auto',
              isLast && 'mr-auto',
              cardColor
            )}
          >
            <div className="rounded-t-2xl bg-[#3a31c8] py-6 text-center font-bold uppercase text-white dark:bg-[#3B82F6]">
              {name}
            </div>

            <motion.div
              key={plan.id}
              {...opacityAnimation}
              className={clsx(
                'w-full rounded-lg px-10'
              )}
            >
              <div className="mb-1">
                <div className="text-xs text-gray-400 mt-6 text-muted whitespace-pre-line">
                  {description}
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold">
                  {isAnnual ? (
                    <span className="text-green-400">€{price.amount.toFixed(2)}</span>
                  ) : (
                    <>${price.amount}</>
                  )}
                  <span className="text-muted text-xs"> {unit}</span>
                </div>

                {features.length > 0 && (
                  <ul className="mt-8 space-y-4">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_903_400)">
                            <path d="M7.01424 2.74904C7.54318 2.16829 8.45691 2.16829 8.98584 2.74904L9.66598 3.49586C9.93324 3.78937 10.3174 3.94851 10.714 3.92997L11.723 3.88282C12.5076 3.84615 13.1538 4.4923 13.1172 5.27695L13.07 6.28595C13.0514 6.68251 13.2106 7.06669 13.5041 7.334L14.2509 8.01412C14.8317 8.54306 14.8317 9.45679 14.2509 9.98572L13.5041 10.6659C13.2106 10.9331 13.0514 11.3173 13.07 11.7139L13.1172 12.7229C13.1538 13.5075 12.5076 14.1537 11.723 14.1171L10.714 14.0699C10.3174 14.0513 9.93324 14.2105 9.66598 14.504L8.98584 15.2508C8.45691 15.8316 7.54318 15.8316 7.01424 15.2508L6.33412 14.504C6.06682 14.2105 5.68263 14.0513 5.28608 14.0699L4.27706 14.1171C3.49242 14.1537 2.84627 13.5075 2.88294 12.7229L2.9301 11.7139C2.94863 11.3173 2.7895 10.9331 2.49598 10.6659L1.74916 9.98572C1.16841 9.45679 1.16841 8.54306 1.74916 8.01412L2.49598 7.334C2.7895 7.06669 2.94863 6.68251 2.9301 6.28595L2.88294 5.27694C2.84627 4.4923 3.49242 3.84615 4.27707 3.88282L5.28608 3.92997C5.68263 3.94851 6.06682 3.78937 6.33412 3.49586L7.01424 2.74904Z" fill="#06C280" fillOpacity="0.1" stroke="#06C280" strokeWidth="1.06667"/>
                            <path d="M6 8.99984L7.33333 10.3332L10 7.6665" stroke="#06C280" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_903_400">
                              <rect width="16" height="16" fill="white" transform="translate(0 1)"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exampledescription && (
                  <div className="text-xs text-gray-400 mt-6 text-muted whitespace-pre-line">
                    {exampledescription}
                  </div>
                )}

                <div className='absolute px-16 bottom-10 items-center left-0 px-50 w-full'>
                  <div className="mt-50 rounded-full w-full flex items-end">
                    <Link
                      to="#"
                      className={clsx(
                        "w-full rounded-full items-center flex justify-center text-white py-3",
                        plan.recommended ? "bg-[#3a31c8] dark:bg-[#3B82F6] hover:bg-[#3a31c8]" : "bg-black hover:!bg-black"
                      )}
                    >
                      {plan.free ? 'Try for free' : 'Select Plan'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </Fragment>
  );
};

export default PricingTable; 