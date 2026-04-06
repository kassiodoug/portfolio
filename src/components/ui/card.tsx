import { cn } from "@/lib/utils";

export default function Card({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 border border-gray-800 py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
