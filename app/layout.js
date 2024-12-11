import "./globals.css";

export const metadata = {
  title: "emildave",
  description: "Personal Portfolio by Emil Dave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
