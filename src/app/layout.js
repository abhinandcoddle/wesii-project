import "./ui/globals.css";

export const metadata = {
  title: "Wesii Project",
  description: "Wesii",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
