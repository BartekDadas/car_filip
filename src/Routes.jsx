import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate, useParams } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import MainLandingPage from "pages/main-landing-page";
import ItemDetails from "pages/item-details";
import PrivacyPolicy from "pages/privacy-policy";
import NotFound from "pages/NotFound";
import { SERVICE_SEO, servicePath } from "data/site";

// Stare adresy /item/:id przekierowują na nowe /uslugi/<usługa>-swidnica
const LegacyItemRedirect = () => {
  const { id } = useParams();
  return SERVICE_SEO[id] ? <Navigate to={servicePath(id)} replace /> : <NotFound />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/main-landing-page" element={<MainLandingPage />} />
          <Route path="/uslugi/:slug" element={<ItemDetails />} />
          <Route path="/item/:id" element={<LegacyItemRedirect />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
