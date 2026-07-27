import MainHeader from "@/components/layout/MainHeader/page";
// import Footer from "@/components/layout/Footer/page";
import BootstrapClient from "../bootstrapClient";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BootstrapClient />

      <MainHeader />

      <main className="px-4 py-5">{children}</main>
    </>
  );
}
