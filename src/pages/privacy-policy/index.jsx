import React from 'react';
import { Helmet } from 'react-helmet';
import StickyNavigationBar from '../../components/ui/StickyNavigationBar';
import Footer from '../main-landing-page/components/Footer';
import { BUSINESS, LEGAL } from '../../data/site';

// Puste dane prawne są widoczne jako znacznik do uzupełnienia, zamiast zmyślonych wartości
const Fill = ({ value, label }) =>
  value ? <>{value}</> : <mark className="bg-warning/20 text-warning px-1 rounded">[do uzupełnienia: {label}]</mark>;

const Section = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4">{title}</h2>
    <div className="text-text-secondary leading-relaxed space-y-3">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Polityka prywatności | {BUSINESS.name}</title>
        <meta name="description" content={`Polityka prywatności strony ${BUSINESS.name} — jakie dane zbieramy, w jakim celu i jakie masz prawa.`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <StickyNavigationBar />
      <main className="flex-1 pt-28 sm:pt-32 pb-16 lg:pb-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">Polityka prywatności</h1>
          <p className="mt-3 text-sm text-text-secondary">Obowiązuje od: {LEGAL.policyDate}</p>

          <Section title="1. Administrator danych">
            <p>
              Administratorem Twoich danych osobowych jest <Fill value={LEGAL.companyName} label="pełna nazwa firmy" />,
              prowadzący działalność pod marką {BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city},
              NIP: <Fill value={LEGAL.nip} label="NIP" />.
            </p>
            <p>
              Kontakt w sprawach danych osobowych: <a className="text-primary underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>,
              tel. <a className="text-primary underline" href={BUSINESS.phoneHref}>{BUSINESS.phoneLabel}</a>.
            </p>
          </Section>

          <Section title="2. Jakie dane zbieramy i po co">
            <p><strong className="text-foreground">Formularz „Bezpłatna wycena”</strong> — imię, adres e-mail, model auta i treść wiadomości. Używamy ich wyłącznie, aby odpowiedzieć na zapytanie i przygotować wycenę (art. 6 ust. 1 lit. b RODO — działania przed zawarciem umowy na Twoje żądanie).</p>
            <p><strong className="text-foreground">Kontakt telefoniczny i e-mail</strong> — numer telefonu, adres e-mail i treść korespondencji, w celu obsługi zapytania lub umówienia usługi (art. 6 ust. 1 lit. b i f RODO).</p>
            <p><strong className="text-foreground">Realizacja usługi</strong> — dane potrzebne do wykonania usługi i wystawienia dokumentu sprzedaży, w tym wymagane przepisami podatkowymi (art. 6 ust. 1 lit. b i c RODO).</p>
            <p>Podanie danych jest dobrowolne, ale bez nich nie odpowiemy na zapytanie.</p>
          </Section>

          <Section title="3. Jak długo przechowujemy dane">
            <p>Dane z zapytań przechowujemy przez czas potrzebny do odpowiedzi i ewentualnego umówienia usługi, a jeśli do niej nie dojdzie — nie dłużej niż 12 miesięcy. Dane związane z wykonaną usługą przechowujemy przez okres wymagany przepisami podatkowymi i przedawnienia roszczeń.</p>
          </Section>

          <Section title="4. Komu przekazujemy dane">
            <p>Nie sprzedajemy danych. Mogą mieć do nich dostęp wyłącznie podmioty, które technicznie obsługują naszą stronę i komunikację: dostawca hostingu strony, dostawca poczty e-mail oraz — jeśli korzystamy — biuro rachunkowe. Każdy z nich przetwarza dane tylko na nasze polecenie.</p>
          </Section>

          <Section title="5. Usługi zewnętrzne na stronie">
            <p><strong className="text-foreground">Czcionki Google Fonts</strong> — przy wczytaniu strony Twoja przeglądarka pobiera czcionki z serwerów Google, które otrzymują przy tym m.in. Twój adres IP.</p>
            <p><strong className="text-foreground">Mapa Google</strong> — mapa w sekcji kontakt wczytuje się dopiero po kliknięciu „Pokaż mapę”. Od tego momentu Google może zapisywać pliki cookies i otrzymuje Twój adres IP. Link „Nawiguj” otwiera Mapy Google w nowej karcie.</p>
            <p><strong className="text-foreground">Facebook i Instagram</strong> — na stronie są wyłącznie linki do naszych profili. Dane przetwarza Meta dopiero po przejściu na jej serwis, na zasadach jej polityki prywatności.</p>
          </Section>

          <Section title="6. Pliki cookies i pamięć przeglądarki">
            <p>Strona nie używa plików cookies do analityki ani reklam. W pamięci Twojej przeglądarki (localStorage) zapisujemy jedynie informację, czy wyświetliłeś już animację powitalną, aby nie pokazywać jej ponownie. Możesz ją usunąć, czyszcząc dane strony w ustawieniach przeglądarki.</p>
          </Section>

          <Section title="7. Twoje prawa">
            <p>Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia oraz do wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie. Aby skorzystać z tych praw, napisz na <a className="text-primary underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
            <p>Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</p>
          </Section>

          <Section title="8. Zmiany polityki">
            <p>Możemy aktualizować tę politykę, np. po dodaniu nowych funkcji strony. Aktualna wersja jest zawsze dostępna pod tym adresem.</p>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
