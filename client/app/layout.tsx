import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar/page";
import MainHeader from "@/components/layout/MainHeader/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Sidebar />
        <div className="main-wrapper">
          <MainHeader />
        </div>
        <main className="px-4 py-5"> {children}</main>
      </body>
    </html>
  );
}
