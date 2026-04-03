type PropsContainer = {
  children: React.ReactNode;
};

export default function Container({ children }: PropsContainer) {
  return (
    <section className="mx-auto max-w-xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      {children}
    </section>
  );
}
