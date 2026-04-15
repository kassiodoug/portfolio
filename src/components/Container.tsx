import { cn } from "@/lib/utils";

type PropsContainer = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"section">;

export default function Container({
  children,
  className,
  ...props
}: PropsContainer) {
  return (
    <section
      {...props}
      className={cn("mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
}
