// The NeevHR mobile app is built but not yet published to either store (checked
// 03 Nov 2026, Doc/PENDING-ITEMS.md REL-013 to REL-015). Until it is listed, this is a
// plain status line, not store-style badges that read as a download link (audit WEB-017).
// Swap in real store badges and links at launch.
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold text-ink">NeevHR mobile app</p>
      <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted">
        Built for Android and iPhone, coming to Google Play and the App Store. Today employees use self-service on
        the web, including from a phone browser.
      </p>
    </div>
  );
}
