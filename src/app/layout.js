import "./ui/globals.css";

export const metadata = {
  manifest: "/manifest.json",
  title: "Wesii Project",
  description: "Wesii",
};

export const viewport = {
  themeColor : "FFD420",
}

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
