import React from 'react';
import Button from '../../../components/ui/Button';

const ActionButtons = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: 'GoldenRide Mobile Detailing - Deluxe Detail Package',
      start: '2025-08-15T10:00:00',
      end: '2025-08-15T12:00:00',
      description: 'Premium mobile car detailing service at your location'
    };

    // Create calendar URL for different platforms
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.replace(/[-:]/g, '').replace('.000', '')}Z/${event.end.replace(/[-:]/g, '').replace('.000', '')}Z&details=${encodeURIComponent(event.description)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleViewEditBooking = () => {
    // Navigate to booking management or show edit modal
    console.log('View/Edit booking functionality');
  };

  const handleContactSupport = () => {
    window.location.href = 'tel:+1-555-GOLDEN';
  };

  return (
    <div className="space-y-4">
      {/* Primary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="default"
          fullWidth
          onClick={handleAddToCalendar}
          iconName="Calendar"
          iconPosition="left"
          className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
        >
          Add to Calendar
        </Button>
        
        <Button
          variant="outline"
          fullWidth
          onClick={handleViewEditBooking}
          iconName="Edit"
          iconPosition="left"
          className="border-primary text-primary hover:bg-primary/10"
        >
          View/Edit Booking
        </Button>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="ghost"
          fullWidth
          onClick={handleContactSupport}
          iconName="Phone"
          iconPosition="left"
          className="text-text-secondary hover:text-primary hover:bg-primary/5"
        >
          Contact Support
        </Button>
        
        <Button
          variant="ghost"
          fullWidth
          onClick={() => window.open('/faq', '_blank')}
          iconName="HelpCircle"
          iconPosition="left"
          className="text-text-secondary hover:text-primary hover:bg-primary/5"
        >
          View FAQ
        </Button>
      </div>

      {/* Email Confirmation Notice */}
      <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-primary text-sm font-bold">✓</span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">Email Confirmation Sent</h4>
            <p className="text-sm text-text-secondary">
              A detailed confirmation email has been sent to <span className="font-medium text-foreground">michael.rodriguez@email.com</span> with your booking details and service preparation instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;