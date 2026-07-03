import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../main-landing-page/components/Footer';
import Icon from '../../components/AppIcon';

const ItemDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-12 pb-20 lg:pt-16 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center space-x-2 text-text-secondary hover:text-primary smooth-transition mb-8 group">
            <Icon name="ArrowLeft" size={20} className="group-hover:-translate-x-1 smooth-transition" />
            <span className="font-medium tracking-wide uppercase text-sm">Powrót</span>
          </Link>

          <div className="bg-card rounded-3xl p-8 md:p-12 luxury-gradient-border relative overflow-hidden">
            
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="lux-divider mb-6"></div>
              <p className="text-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4 font-sans">
                Szczegóły Usługi
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight uppercase">
                Usługa <span className="text-transparent bg-gradient-to-r from-primary via-white to-secondary bg-clip-text">{id}</span>
              </h1>

              <div className="prose prose-invert prose-lg max-w-none text-text-secondary font-sans space-y-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-white mt-12 mb-4 font-serif">Proces Realizacji</h3>
                
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                  <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</li>
                  <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</li>
                  <li>Consectetur adipisci velit sed quia non numquam eius modi</li>
                  <li>Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</li>
                </ul>
                
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
                <a
                  href="tel:+48123456789"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-secondary smooth-transition rounded-xl w-full sm:w-auto"
                >
                  Zadzwoń i zarezerwuj
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ItemDetails;
