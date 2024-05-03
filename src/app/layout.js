import "./ui/globals.css";

export const metadata = {
  title: "Wesii Project",
  description: "Wesii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
