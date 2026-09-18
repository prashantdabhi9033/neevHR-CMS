import { categoryOf } from "@/lib/blog";

// Branded, category-coloured cover used when a post has no uploaded image.
export function BlogCover({
  category,
  title,
  banner = false,
}: {
  category?: string | null;
  title?: string;
  banner?: boolean;
}) {
  const c = categoryOf(category);
  return (
    <div
      className={`relative flex items-end overflow-hidden ${
        banner ? "aspect-[21/9] rounded-2xl" : "aspect-[16/10]"
      }`}
      style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}
    >
      {/* faint grid + mark */}
      <div className="bg-grid absolute inset-0 opacity-20" />
      <span
        className="absolute -right-6 -top-10 select-none text-[9rem] font-black leading-none opacity-10"
        style={{ color: c.fg }}
      >
        N
      </span>
      <div className="relative p-5">
        <span
          className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur"
          style={{ color: c.fg }}
        >
          {c.label}
        </span>
        {banner && title && (
          <h1 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
}
