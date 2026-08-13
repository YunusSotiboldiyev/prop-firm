import "./globals.css";
import Providers from "./providers.jsx";

export const metadata = {
  title: "EkvatorProp",
  description: "Ekvator prop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}