import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "FundMePls",
  description: "Comienza a innovar el mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
