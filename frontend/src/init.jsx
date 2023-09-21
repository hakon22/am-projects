import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import Home from './pages/Home.jsx';
import resources from './locales/index.js';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      lng: 'ru',
      resources,
      fallbackLng: 'ru',
    });

  return (
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  );
};

export default init;
