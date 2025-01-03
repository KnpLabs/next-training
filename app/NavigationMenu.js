'use client';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
  <nav>
    <ul>
      <li>
        <Link
          className={pathname === '/' ? 'active' : ''}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={pathname === '/shop' ? 'active' : ''}
          href="/shop"
        >
          Shop
        </Link>
      </li>
      <li>
        <Link
          className={pathname === '/contact' ? 'active' : ''}
          href="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className={pathname === '/refunds' ? 'active' : ''}
          href="/refunds"
        >
          Refunds
        </Link>
      </li>
      <li>
        <Link
          className={pathname === '/about' ? 'active' : ''}
          href="/about"
        >
          About
        </Link>
      </li>
    </ul>
  </nav>
  );
}
