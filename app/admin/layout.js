import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavBar from "@/components/adminNavbar";
export const metadata = {
  title: "FundMePls",
  description: "Comienza a innovar el mundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminNavBar></AdminNavBar>
        {children}
      </body>
    </html>
  );
}
