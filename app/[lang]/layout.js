import { Inter, Bagel_Fat_One } from "next/font/google";
import Image from "next/image";
import "../globals.css";
import NavigationMenu from "./NavigationMenu";

export const metadata = {
  title: 'KanapéShop',
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bagelFatOne.variable}`}>
        <header>
          <div className="logo-container">
            <Image
              className="logo-image"
              src="/images/couch-logo.svg"
              alt="KanapéShop logo"
              width={97}
              height={91}
            />
            <div className="logo-title">KanapéShop</div>
          </div>
          <div className="buttons-container">
            <a href="/login">
              <Image
                src="/images/user.svg"
                alt="Log In"
                width={27}
                height={30}
              />
            </a>
            <a href="/cart">
              <Image
                src="/images/cart.svg"
                alt="See cart"
                width={33}
                height={30}
              />
            </a>
          </div>
        </header>
        <NavigationMenu />
        {children}
        <footer>
          <div>Copyright © 2025 KanapéShop. Tous droits réservés.</div>
        </footer>
      </body>
    </html>
  );
}
