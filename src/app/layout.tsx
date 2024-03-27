import "./globals.css";
import NavBar from "../components/header/NavBar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Purrfect Hire",
  description: "Culture-driven hiring for high-impact results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
