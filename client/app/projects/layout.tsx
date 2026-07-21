export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <main>{children}</main>
    </body>
  );
}
