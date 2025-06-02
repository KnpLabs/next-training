'use client';

import { useParams } from 'next/navigation'

const translations = {
  en: {
    message: 'Unable to load on-sale products at the moment.',
  },
  fr: {
    message: 'Impossible de charger les produits en soldes pour le moment.',
  },
}

export default function Error() {
  const params = useParams();
  const t = translations[params.lang] || translations.en;

  return <p>{t.message}</p>
}
