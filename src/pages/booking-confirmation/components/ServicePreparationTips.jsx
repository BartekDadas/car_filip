import React from 'react';
import Icon from '../../../components/AppIcon';

const ServicePreparationTips = () => {
  const preparationTips = [
    {
      icon: "MapPin",
      title: "Vehicle Location",
      description: "Park your vehicle in an easily accessible area with at least 10 feet of clearance on all sides"
    },
    {
      icon: "Zap",
      title: "Power Access",
      description: "Ensure access to a standard electrical outlet within 100 feet of your vehicle\'s location"
    },
    {
      icon: "Droplets",
      title: "Water Source",
      description: "We\'ll need access to a water spigot or hose connection for our eco-friendly cleaning process"
    },
    {
      icon: "Package",
      title: "Remove Personal Items",
      description: "Please remove all personal belongings, valuables, and loose items from your vehicle"
    },
    {
      icon: "Shield",
      title: "Secure Area",
      description: "Choose a location away from heavy foot traffic for the safety of our team and your vehicle"
    },
    {
      icon: "Sun",
      title: "Weather Considerations",
      description: "Service can be performed in light rain, but we'll reschedule for severe weather conditions"
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 luxury-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="CheckSquare" size={20} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">
          Service Preparation Tips
        </h2>
      </div>
      
      <p className="text-text-secondary mb-6">
        To ensure the best possible service experience, please review these preparation guidelines before your appointment.
      </p>

      <div className="space-y-4">
        {preparationTips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 smooth-transition">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={tip.icon} size={18} color="var(--color-primary)" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-success)" className="mt-0.5" />
          <div>
            <h4 className="font-semibold text-success mb-1">Pro Tip</h4>
            <p className="text-sm text-text-secondary">
              Our team will arrive 15 minutes early to assess the location and set up equipment. This ensures we can start your service exactly on time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePreparationTips;