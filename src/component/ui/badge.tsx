import { cn } from "@/lib/utils";

function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
