// Wspólne dane firmy — używane w kontakcie, podstronach usług, polityce prywatności i SEO.

// Docelowy adres strony (np. 'https://velor-detailing.pl'). Dopóki jest pusty,
// skrypt SEO pomija canonical i sitemap.xml (wymagają pełnego adresu).
export const SITE_URL = '';

export const BUSINESS = {
  name: 'Velor Detailing & Protection',
  phoneLabel: '+48 534 992 730',
  phoneHref: 'tel:+48534992730',
  email: 'velor@onet.pl',
  street: 'ul. Ofiar Oświęcimskich 26b',
  city: 'Świdnica',
  cityIn: 'w Świdnicy',
  hours: 'Pon–Pt: 10:00–18:00, Sob: 11:00–16:00',
  instagram: 'https://www.instagram.com/velor_swidnica/',
  facebook: 'https://www.facebook.com/profile.php?id=61579226108714',
};

// Dane administratora do polityki prywatności — uzupełnij przed publikacją strony
// (pełna nazwa z CEIDG/KRS — przy JDG zawiera imię i nazwisko właściciela — oraz NIP).
// Puste pola są wyświetlane na stronie jako "do uzupełnienia".
export const LEGAL = {
  companyName: '',
  nip: '',
  policyDate: '2026-10-25',
};

const mapsQuery =encodeURIComponent(`Ofiar Oświęcimskich 26b, ${BUSINESS.city}`);
export const MAPS = {
  embed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  open: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
};

// Podstrony usług pod lokalne wyszukiwania ("usługa + Świdnica"). Klucz = id z services.js.
export const SERVICE_SEO = {
  1: {
    slug: 'korekta-lakieru-swidnica',
    heading: 'Korekta lakieru w Świdnicy',
    title: 'Korekta lakieru Świdnica — od 900 zł | Velor Detailing',
    description: 'Jedno- i dwuetapowa korekta lakieru w Świdnicy. Usuwamy rysy i hologramy, przywracamy głębię koloru i połysk. Ceny od 900 zł.',
  },
  2: {
    slug: 'folia-ppf-swidnica',
    heading: 'Folia PPF w Świdnicy',
    title: 'Folia PPF Świdnica — ochrona lakieru | Velor Detailing',
    description: 'Montaż folii ochronnej PPF w Świdnicy — od pojedynczych elementów po pełny front. Ochrona przed odpryskami i rysami. Od 50 zł za element.',
  },
  3: {
    slug: 'wosk-samochodowy-swidnica',
    heading: 'Wosk samochodowy w Świdnicy',
    title: 'Woskowanie auta Świdnica — od 500 zł | Velor Detailing',
    description: 'Dekontaminacja lakieru i wosk w Świdnicy. Większy połysk, głębia koloru i łatwiejsza pielęgnacja auta. Ceny od 500 zł.',
  },
  4: {
    slug: 'regeneracja-reflektorow-swidnica',
    heading: 'Regeneracja reflektorów w Świdnicy',
    title: 'Regeneracja reflektorów Świdnica | Velor Detailing',
    description: 'Polerowanie i zabezpieczenie reflektorów w Świdnicy. Usuwamy zmatowienia i zażółcenia, chronimy lampy folią PPF lub powłoką ceramiczną.',
  },
  5: {
    slug: 'detailing-wnetrza-swidnica',
    heading: 'Detailing wnętrza w Świdnicy',
    title: 'Detailing wnętrza Świdnica — od 250 zł | Velor Detailing',
    description: 'Kompleksowe czyszczenie wnętrza auta w Świdnicy — deska, plastiki, fotele, podsufitka i dywaniki. Ceny od 250 zł.',
  },
  6: {
    slug: 'powloka-ceramiczna-swidnica',
    heading: 'Powłoka ceramiczna w Świdnicy',
    title: 'Powłoka ceramiczna Świdnica — od 700 zł | Velor Detailing',
    description: 'Powłoki ceramiczne na lakier w Świdnicy — warianty na 1,5, 3 i 5 lat. Głębszy kolor, efekt hydrofobowy i łatwiejsze mycie. Od 700 zł.',
  },
  7: {
    slug: 'impregnacja-skor-swidnica',
    heading: 'Impregnacja skór w Świdnicy',
    title: 'Impregnacja skór Świdnica — od 200 zł | Velor Detailing',
    description: 'Oczyszczenie i zabezpieczenie skórzanej tapicerki w Świdnicy. Zachowaj miękkość i naturalny wygląd skóry. Ceny od 200 zł.',
  },
  8: {
    slug: 'pranie-tapicerki-swidnica',
    heading: 'Pranie tapicerki w Świdnicy',
    title: 'Pranie tapicerki Świdnica — od 250 zł | Velor Detailing',
    description: 'Pranie foteli i tapicerki materiałowej w Świdnicy. Usuwamy nagromadzony brud i nieprzyjemne zapachy. Ceny od 250 zł.',
  },
};

export const servicePath = (id) => `/uslugi/${SERVICE_SEO[id].slug}`;
