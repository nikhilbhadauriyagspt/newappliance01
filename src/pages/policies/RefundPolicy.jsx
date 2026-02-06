import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Refund Policy - Appliance Vista</title>
        <meta name="description" content="Refund Policy for Appliance Vista." />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p>Effective Date: January 1, 2026</p>
          
          <h3>1. Service Satisfaction</h3>
          <p>We strive for 100% customer satisfaction. If you are not satisfied with our service, please contact us within 24 hours.</p>
          
          <h3>2. Refund Eligibility</h3>
          <p>Refunds are considered on a case-by-case basis. Labor charges are generally non-refundable once the work has been performed.</p>
          
          <h3>3. Parts Warranty</h3>
          <p>Defective parts will be replaced under warranty. Refunds for parts are subject to the manufacturer's return policy.</p>
          
          <h3>4. Cancellation Policy</h3>
          <p>You may cancel your appointment up to 24 hours before the scheduled time without penalty. Late cancellations may incur a fee.</p>
          
          <h3>5. Contact Us</h3>
          <p>To request a refund or discuss a billing issue, please contact our billing department at info@appliancevista.shop.</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

