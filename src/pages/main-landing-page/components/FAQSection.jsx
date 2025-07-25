import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Jak długo trwa typowa usługa detailingu?",
      answer: `Czas trwania usługi różni się w zależności od pakietu:\n• Podstawowe Mycie: 45-60 minut\n• Deluxe Detail: 90-120 minut\n• Ceramic Coat: 3-4 godziny\n\nPodamy dokładny szacowany czas podczas rezerwacji, a nasz zespół będzie Cię informować o postępach podczas całego procesu.`
    },
    {
      id: 2,
      question: "Czy muszę zapewnić wodę lub prąd?",
      answer: `Nie! Przyjeżdżamy w pełni wyposażeni z własnym zapasem wody, generatorami energii i całym niezbędnym sprzętem. Potrzebujemy tylko dostępu do Twojego pojazdu i bezpiecznego miejsca pracy. To sprawia, że nasza usługa jest naprawdę mobilna i wygodna w każdym miejscu.`
    },
    {
      id: 3,
      question: "Co się stanie, jeśli nie będę zadowolony z rezultatów?",
      answer: `Oferujemy 100% gwarancję satysfakcji na wszystkie nasze usługi. Jeśli nie jesteś całkowicie zadowolony z rezultatów, wrócimy w ciągu 24 godzin, aby rozwiązać wszelkie problemy bez dodatkowych kosztów. Twoja satysfakcja to nasz najwyższy priorytet.`
    },
    {
      id: 4,
      question: "Czy Wasze produkty są bezpieczne dla lakieru i wnętrza mojego samochodu?",
      answer: `Absolutnie! Używamy tylko produktów premium, ekologicznych, które są specjalnie zaprojektowane do zastosowań motoryzacyjnych. Nasze produkty są o zrównoważonym pH, biodegradowalne i bezpieczne dla wszystkich typów lakieru, skóry, tkanin i powierzchni z tworzyw sztucznych.`
    },
    {
      id: 5,
      question: "Na jak długo z wyprzedzeniem powinienem zarezerwować wizytę?",
      answer: `Zalecamy rezerwację co najmniej 2-3 dni z wyprzedzeniem, aby zabezpieczyć preferowany termin. Jednak często mamy dostępność tego samego dnia dla pilnych próśb. Nasz system rezerwacji online pokazuje dostępność w czasie rzeczywistym na następne 60 dni.`
    },
    {
      id: 6,
      question: "Jakie metody płatności akceptujecie?",
      answer: `Akceptujemy wszystkie główne karty kredytowe (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay i płatności bezstykowe. Płatność jest przetwarzana bezpiecznie przez naszą aplikację mobilną po zakończeniu usługi.`
    },
    {
      id: 7,
      question: "Czy obsługujecie wszystkie typy pojazdów?",
      answer: `Tak! Obsługujemy samochody, SUV-y, ciężarówki, motocykle, kamery i łodzie. Nasz zespół ma doświadczenie z pojazdami luksusowymi, klasycznymi i codziennymi. Dostosowujemy nasze techniki i produkty do specyficznych potrzeb Twojego pojazdu.`
    },
    {
      id: 8,
      question: "Co się stanie, jeśli będzie padać w zaplanowanym dniu?",
      answer: `Uprowadzić monitorujemy warunki pogodowe i skontaktujemy się z Tobą, jeśli spodziewany jest deszcz. Możemy przełożyć termin bez opłat, lub jeśli masz zadaszony parking (garaż, wiata), nadal możemy świadczyć usługi wnętrza i przełożyć prace zewnętrzne.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Często Zadawane Pytania
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Masz pytania? Mamy odpowiedzi. Oto najczęstsze pytania, które zadają nasi klienci o nasze usługi mobilnego detailingu.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card rounded-2xl luxury-shadow overflow-hidden smooth-transition hover:luxury-shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 smooth-transition"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform smooth-transition ${
                  openFAQ === index ? 'rotate-180' : 'rotate-0'
                }`}>
                  <Icon 
                    name="ChevronDown" 
                    size={24} 
                    className="text-primary"
                  />
                </div>
              </button>

              <div className={`overflow-hidden smooth-transition ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Masz Jeszcze Pytania?
            </h3>
            <p className="text-text-secondary mb-6">
              Nasz przyjazny zespół obsługi klienta jest tutaj, aby pomóc. Skontaktuj się z nami, a odpowiemy na wszelkie pytania dotyczące naszych usług.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+1-555-GOLDEN"
                className="flex items-center space-x-2 bg-primary hover:bg-secondary text-primary-foreground px-6 py-3 rounded-lg font-semibold smooth-transition"
              >
                <Icon name="Phone" size={20} />
                <span>Zadzwoń (555) GOLDEN</span>
              </a>
              <a
                href="mailto:info@goldenjazda.com"
                className="flex items-center space-x-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold smooth-transition"
              >
                <Icon name="Mail" size={20} />
                <span>Napisz do Nas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;