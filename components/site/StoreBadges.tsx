// The NeevHR mobile app is not yet published to either store (verified
// 24 Sep 2026), so the badges are static "coming soon" labels, not links or
// buttons that imply availability. Swap in real store links at launch.
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.417 2.2-1.11 3.03-.79.94-2.07 1.66-3.13 1.58-.13-1.1.43-2.27 1.1-3.02.77-.87 2.12-1.53 3.14-1.59zM20.5 17.02c-.56 1.3-.83 1.88-1.55 3.02-1 1.6-2.42 3.6-4.18 3.61-1.56.02-1.96-1.02-4.08-1-2.12.01-2.56 1.02-4.12 1.01-1.76-.01-3.1-1.8-4.1-3.4-2.8-4.48-3.1-9.74-1.37-12.53 1.23-1.98 3.17-3.14 4.99-3.14 1.86 0 3.02 1.02 4.56 1.02 1.49 0 2.4-1.02 4.55-1.02 1.62 0 3.34.88 4.56 2.4-4.01 2.2-3.36 7.92.32 9.96z"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path d="M3.6 2.2a1 1 0 0 0-.6.92v17.76a1 1 0 0 0 .6.92l10.3-9.8L3.6 2.2z" fill="#34d399"/>
      <path d="M17.9 9.06 14.8 7.2l-2.9 2.76 2.9 2.76 3.14-1.88a1 1 0 0 0 0-1.78z" fill="#fbbf24"/>
      <path d="M3.6 2.2 13.9 12l3.1-2.94L4.9 1.83a1.02 1.02 0 0 0-1.3.37z" fill="#38bdf8"/>
      <path d="M3.6 21.8 13.9 12l3.14 2.98L4.9 22.17a1.02 1.02 0 0 1-1.3-.37z" fill="#f87171"/>
    </svg>
  );
}

function Badge({ icon, store }: { icon: React.ReactNode; store: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-ink px-3.5 py-2 text-left text-white opacity-90">
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium text-white/70">Coming soon on</span>
        <span className="text-sm font-semibold">{store}</span>
      </span>
    </span>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="mb-2 text-xs font-semibold text-ink">Mobile App: Coming Soon</p>
      <div className="flex flex-wrap gap-3">
        <Badge icon={<AppleIcon />} store="App Store" />
        <Badge icon={<PlayIcon />} store="Google Play" />
      </div>
    </div>
  );
}
