import React from 'react';
import Icon from '../../../components/AppIcon';

const NextStepsGuide = () => {
  const nextSteps = [
    {
      icon: "Mail",
      title: "Email Confirmation",
      description: "Check your inbox for detailed booking confirmation and service preparation tips",
      status: "completed"
    },
    {
      icon: "Phone",
      title: "24-Hour Confirmation",
      description: "Our team will call you 24 hours before your appointment to confirm details",
      status: "pending"
    },
    {
      icon: "Car",
      title: "Service Day Preparation",
      description: "Move your vehicle to an accessible location with water and power access",
      status: "upcoming"
    },
    {
      icon: "Sparkles",
      title: "Enjoy Your Clean Car",
      description: "Relax while our professionals transform your vehicle to showroom condition",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'pending':
        return 'text-primary';
      default:
        return 'text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'pending':
        return 'Clock';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 luxury-shadow">
      <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
        What Happens Next?
      </h2>
      
      <div className="space-y-6">
        {nextSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                step.status === 'completed' 
                  ? 'bg-success/10' 
                  : step.status === 'pending' ?'bg-primary/10' :'bg-muted'
              }`}>
                <Icon 
                  name={step.icon} 
                  size={20} 
                  color={step.status === 'completed' 
                    ? 'var(--color-success)' 
                    : step.status === 'pending' ?'var(--color-primary)' :'var(--color-text-secondary)'
                  } 
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <Icon 
                  name={getStatusIcon(step.status)} 
                  size={16} 
                  className={getStatusColor(step.status)} 
                />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary mb-1">Important Note</h4>
            <p className="text-sm text-text-secondary">
              Please ensure your vehicle is accessible and that water and electrical outlets are available at your location. Our team will arrive with all necessary equipment and eco-friendly products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsGuide;