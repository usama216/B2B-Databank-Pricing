import React from 'react';

const ContactCard = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-8">
          Our team is here to help you choose the right plan and answer any questions you may have.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Contact Sales
          </button>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-blue-50 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard; 