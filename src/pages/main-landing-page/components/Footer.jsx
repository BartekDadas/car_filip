import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex justify-center items-center">
            <div className="text-text-secondary text-xs font-sans">
              © {currentYear} Velor Detailing & Protection. Wszelkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;