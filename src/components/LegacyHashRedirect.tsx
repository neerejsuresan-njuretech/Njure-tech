import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HASH_MAP: Record<string, string> = {
  '#home': '/',
  '#/': '/',
  '#about': '/about',
  '#/about': '/about',
  '#services': '/services',
  '#/services': '/services',
  '#future-tech': '/technology',
  '#/future-tech': '/technology',
  '#technology': '/technology',
  '#/technology': '/technology',
  '#delivery-center': '/operations',
  '#/delivery-center': '/operations',
  '#operations': '/operations',
  '#/operations': '/operations',
  '#careers': '/careers',
  '#/careers': '/careers',
  '#contact': '/contact',
  '#/contact': '/contact',
};

export const LegacyHashRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.toLowerCase().trim();
    if (hash && HASH_MAP[hash]) {
      navigate(HASH_MAP[hash], { replace: true });
    }
  }, [navigate]);

  return null;
};
