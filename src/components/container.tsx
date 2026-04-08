type PropsContainer = {
  children: React.ReactNode;
};

export default function Container({ children }: PropsContainer) {
  return (
    <section className="mx-auto min-h-screen  max-w-7xl  px-4 py-18 sm:px-6 lg:px-8">
      {children}
    </section>
  );
}
