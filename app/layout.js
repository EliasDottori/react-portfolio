import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio by Elias Dottori",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
