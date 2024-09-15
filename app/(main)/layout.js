import "bootstrap/dist/css/bootstrap.min.css";
import UserNavBar from "@/components/userNavbar";

export const metadata = {
  title: "FundMePls",
  description: "Comienza a innovar el mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <UserNavBar />
        </header>{" "}
        {children}
      </body>
    </html>
  );
}
