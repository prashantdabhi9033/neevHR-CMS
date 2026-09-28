import { ReactNode } from "react";

export function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** Wider track for sections that pair copy with a product scene, so the scene can show larger. */
  wide?: boolean;
}) {
  return (
    <div className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-6xl"} px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
