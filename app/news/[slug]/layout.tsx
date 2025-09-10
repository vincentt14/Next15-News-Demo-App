type NewsDetailPageProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function NewsDetailLayout({ children, modal }: NewsDetailPageProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
