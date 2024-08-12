import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
