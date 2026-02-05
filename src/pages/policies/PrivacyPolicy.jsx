import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Privacy Policy - Felona Repair</title>
        <meta name="description" content="Privacy Policy for Felona Appliance Repair." />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p>Effective Date: January 1, 2026</p>
          
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us when you book a service, contact us, or subscribe to our newsletter. This includes your name, email address, phone number, and service address.</p>
          
          <h3>2. How We Use Your Information</h3>
          <p>We use your information to provide appliance repair services, communicate with you about your booking, and improve our services.</p>
          
          <h3>3. Information Sharing</h3>
          <p>We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our business (e.g., payment processors).</p>
          
          <h3>4. Security</h3>
          <p>We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
          
          <h3>5. Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at info@felonarepair.com.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
