import clsx from "clsx";

export function LogoIcon({ className }: { className?: string }) {
  const clases = clsx("mr-[69px]", className);

  return (
    <div className={clases}>
      <h2 className="font-[700] text-[32px]">Logo</h2>
    </div>
  );
}
