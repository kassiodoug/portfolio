import { cn } from "@/lib/utils";

export default function Card({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="card"
      className={cn(
        "text-card-foreground flex flex-col gap-6 rounded-md px-4 border border-gray-700/90 py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
