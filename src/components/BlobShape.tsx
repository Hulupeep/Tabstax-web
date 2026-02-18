export function BlobShape({
  className = "",
  color = "amber",
}: {
  className?: string;
  color?: "amber" | "pink" | "terracotta";
}) {
  const colorMap = {
    amber: "bg-amber/10",
    pink: "bg-pink-glow/10",
    terracotta: "bg-terracotta/10",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl animate-blob ${colorMap[color]} ${className}`}
      aria-hidden="true"
    />
  );
}
