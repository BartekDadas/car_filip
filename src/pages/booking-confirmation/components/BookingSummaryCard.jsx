import React from 'react';
import Icon from '../../../components/AppIcon';

const BookingSummaryCard = () => {
  const bookingDetails = {
    bookingId: "GR-2025-0725-8451",
    date: "August 15, 2025",
    timeSlot: "10:00 AM - 12:00 PM",
    service: "Deluxe Detail Package",
    extras: ["Interior Deep Clean", "Tire Shine"],
    totalPrice: 189.99,
    customerName: "Michael Rodriguez",
    email: "michael.rodriguez@email.com",
    phone: "(555) 123-4567",
    address: "1234 Oak Street, Beverly Hills, CA 90210"
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 luxury-shadow mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">
          Booking Summary
        </h2>
        <div className="bg-primary/10 px-3 py-1 rounded-full">
          <span className="text-primary text-sm font-semibold">
            #{bookingDetails.bookingId}
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Service Details */}
        <div className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Service Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Calendar" size={20} color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Date</p>
                <p className="font-semibold text-foreground">{bookingDetails.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-sm text-text-secondary">Time</p>
                <p className="font-semibold text-foreground">{bookingDetails.timeSlot}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Package & Extras */}
        <div className="border-b border-border pb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Package & Extras</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Star" size={18} color="var(--color-primary)" />
                <span className="font-medium text-foreground">{bookingDetails.service}</span>
              </div>
              <span className="text-primary font-semibold">$149.99</span>
            </div>
            {bookingDetails.extras.map((extra, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon name="Plus" size={16} color="var(--color-text-secondary)" />
                  <span className="text-text-secondary">{extra}</span>
                </div>
                <span className="text-text-secondary">$20.00</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-foreground">Total Amount</span>
              <span className="text-2xl font-bold text-primary">${bookingDetails.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Customer Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Icon name="User" size={18} color="var(--color-text-secondary)" />
              <span className="text-foreground">{bookingDetails.customerName}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Mail" size={18} color="var(--color-text-secondary)" />
              <span className="text-foreground">{bookingDetails.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={18} color="var(--color-text-secondary)" />
              <span className="text-foreground">{bookingDetails.phone}</span>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="MapPin" size={18} color="var(--color-text-secondary)" className="mt-1" />
              <span className="text-foreground">{bookingDetails.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummaryCard;