import MainHeader from "@/components/layout/MainHeader/page";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {" "}
      <MainHeader />
      <main>{children}</main>
    </div>
  );
}
