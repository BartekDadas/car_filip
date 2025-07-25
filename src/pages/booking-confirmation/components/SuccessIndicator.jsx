import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessIndicator = () => {
  return (
    <div className="text-center mb-8">
      <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4 luxury-shadow-lg">
        <Icon name="Check" size={32} color="var(--color-background)" strokeWidth={3} />
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Booking Confirmed!
      </h1>
      <p className="text-lg text-text-secondary">
        Your premium car detailing service has been successfully scheduled
      </p>
    </div>
  );
};

export default SuccessIndicator;