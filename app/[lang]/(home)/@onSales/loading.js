'use client';

import { useParams } from 'next/navigation'

const translations = {
  en: {
    loading: 'Loading...',
  },
  fr: {
    loading: 'Chargement en cours...',
  },
}

export default function Loading() {
  const params = useParams();
  const t = translations[params.lang] || translations.en;

  return <p>{t.loading}</p>
}
