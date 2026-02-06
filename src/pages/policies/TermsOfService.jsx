import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Terms of Service - Appliance Vista</title>
        <meta name="description" content="Terms of Service for Appliance Vista." />
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p>Effective Date: January 1, 2026</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h3>2. Service Booking</h3>
          <p>All bookings are subject to technician availability. We reserve the right to reschedule or cancel appointments.</p>
          
          <h3>3. Pricing and Payment</h3>
          <p>Prices are estimates and may vary based on the actual repair required. Payment is due upon completion of the service.</p>
          
          <h3>4. Warranty</h3>
          <p>We provide a warranty on parts and labor for a specific period as stated on your invoice. This warranty covers the specific repair performed.</p>
          
          <h3>5. Limitation of Liability</h3>
          <p>Appliance Vista shall not be liable for any indirect, incidental, special, consequential or punitive damages.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

