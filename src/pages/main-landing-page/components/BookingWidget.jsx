import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const BookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock unavailable dates
  const unavailableDates = [
    '2025-07-26', '2025-07-27', '2025-08-03', '2025-08-10', '2025-08-17'
  ];

  // Service options
  const serviceOptions = [
    { value: 'basic', label: 'Podstawowe Mycie - 199zł', price: 199 },
    { value: 'deluxe', label: 'Deluxe Detail - 359zł', price: 359 },
    { value: 'ceramic', label: 'Ceramic Coat - 799zł', price: 799 }
  ];

  // Extra services
  const extraServices = [
    { id: 'interior', label: 'Głębokie Czyszczenie Wnętrza', price: 99 },
    { id: 'wax', label: 'Wosk Premium', price: 139 },
    { id: 'tires', label: 'Nabłyszczanie i Ochrona Opon', price: 59 },
    { id: 'engine', label: 'Czyszczenie Komory Silnika', price: 179 }
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dateString = date.toISOString().split('T')[0];
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isUnavailable = unavailableDates.includes(dateString);
      const isSelected = selectedDate === dateString;

      days.push({
        date,
        dateString,
        isCurrentMonth,
        isPast,
        isUnavailable,
        isSelected,
        day: date.getDate()
      });
    }

    return days;
  };

  // Calculate total price
  useEffect(() => {
    let total = 0;
    
    if (selectedService) {
      const service = serviceOptions.find(s => s.value === selectedService);
      if (service) total += service.price;
    }

    selectedExtras.forEach(extraId => {
      const extra = extraServices.find(e => e.id === extraId);
      if (extra) total += extra.price;
    });

    setTotalPrice(total);
  }, [selectedService, selectedExtras]);

  const handleDateSelect = (dateString) => {
    setSelectedDate(dateString);
  };

  const handleServiceChange = (value) => {
    setSelectedService(value);
  };

  const toggleExtra = (extraId) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedService) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Rezerwacja potwierdzona na ${selectedDate} - Suma: ${totalPrice}zł`);
    setIsLoading(false);
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const calendarDays = generateCalendarDays();

  return (
    <section id="booking" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Zarezerwuj Usługę
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Wybierz preferowaną datę i pakiet usług. Przyjedziemy do Ciebie w dogodnym czasie.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl luxury-shadow-lg overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Calendar Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Wybierz Datę
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigateMonth(-1)}
                    className="p-2 rounded-lg hover:bg-muted smooth-transition"
                  >
                    <Icon name="ChevronLeft" size={20} color="var(--color-text-secondary)" />
                  </button>
                  <span className="text-lg font-medium text-foreground min-w-[140px] text-center">
                    {currentMonth.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    onClick={() => navigateMonth(1)}
                    className="p-2 rounded-lg hover:bg-muted smooth-transition"
                  >
                    <Icon name="ChevronRight" size={20} color="var(--color-text-secondary)" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Ndz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'].map(day => (
                  <div key={day} className="p-3 text-center text-sm font-medium text-text-secondary">
                    {day}
                  </div>
                ))}
                {calendarDays?.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => !day.isPast && !day.isUnavailable && day.isCurrentMonth && handleDateSelect(day.dateString)}
                    disabled={day.isPast || day.isUnavailable || !day.isCurrentMonth}
                    className={`
                      p-3 text-sm font-medium rounded-lg smooth-transition
                      ${day.isCurrentMonth ? 'text-foreground' : 'text-text-secondary opacity-50'}
                      ${day.isPast || day.isUnavailable ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'}
                      ${day.isSelected ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/20'}
                      ${!day.isPast && !day.isUnavailable && day.isCurrentMonth ? 'hover:bg-primary/10' : ''}
                    `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            {selectedDate && (
              <div className="mb-8 animate-in slide-in-from-top duration-300">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Wybierz Usługę
                </h3>
                <Select
                  options={serviceOptions.map(service => ({
                    value: service.value,
                    label: service.label
                  }))}
                  value={selectedService}
                  onChange={handleServiceChange}
                  placeholder="Wybierz pakiet usług"
                  className="mb-6"
                />

                {/* Extra Services */}
                {selectedService && (
                  <div className="animate-in slide-in-from-top duration-300">
                    <h4 className="text-lg font-medium text-foreground mb-4">
                      Dodaj Usługi Dodatkowe
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {extraServices.map(extra => (
                        <label
                          key={extra.id}
                          className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer smooth-transition"
                        >
                          <input
                            type="checkbox"
                            checked={selectedExtras.includes(extra.id)}
                            onChange={() => toggleExtra(extra.id)}
                            className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-medium text-foreground">{extra.label}</span>
                            <span className="text-sm text-primary ml-2">+{extra.price}zł</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price Summary */}
                {totalPrice > 0 && (
                  <div className="bg-muted rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-foreground">Cena Całkowita:</span>
                      <span className="text-2xl font-bold text-primary">{totalPrice}zł</span>
                    </div>
                  </div>
                )}

                {/* Confirm Button */}
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={handleBooking}
                  loading={isLoading}
                  disabled={!selectedService}
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-primary hover:bg-secondary text-primary-foreground font-semibold"
                >
                  {isLoading ? 'Przetwarzanie...' : 'Potwierdź i Zapłać'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;