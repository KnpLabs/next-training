'use client';

import { useParams } from 'next/navigation'

const translations = {
  en: {
    message: 'Unable to load best-seller products at the moment.',
  },
  fr: {
    message: 'Impossible de charger les meilleures ventes en soldes pour le moment.',
  },
}

export default function Error() {
  const params = useParams();
  const t = translations[params.lang] || translations.en;

  return <p>{t.message}</p>
}
