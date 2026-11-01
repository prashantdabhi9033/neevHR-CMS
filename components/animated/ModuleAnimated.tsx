import type { ComponentType } from "react";
import { Container } from "@/components/ui/Container";
import { ApprovalChannelsFlow } from "./ApprovalChannelsFlow";
import { GoalCascadeTree } from "./GoalCascadeTree";
import { MobileAttendanceScreen } from "./MobileAttendanceScreen";
import { StatutoryChecks } from "./StatutoryChecks";

// The animated sample shown on a module page, under the hero, where seeing it move explains more than a paragraph.
const bySlug: Record<string, { eyebrow: string; title: string; sub: string; Visual: ComponentType }> = {
  attendance: {
    eyebrow: "On the phone",
    title: "A punch from the phone, inside your boundary",
    sub: "Employees punch from the web or the NeevHR mobile app, within the geofence you set, or scan a QR code at the site. Biometric devices keep working alongside.",
    Visual: MobileAttendanceScreen,
  },
  compliance: {
    eyebrow: "Checked before it is filed",
    title: "PF, ESI, PT, LWF and TDS, checked along the way",
    sub: "Checks run before compute, after compute, on the ECR and before filing, so a problem shows up while it is still easy to fix.",
    Visual: StatutoryChecks,
  },
  "goal-cascade": {
    eyebrow: "See it roll up",
    title: "One goal moves, and the objectives above it follow",
    sub: "Each person's goal links to a team or company objective, so progress is visible at every level of the review cycle.",
    Visual: GoalCascadeTree,
  },
  "approval-channels": {
    eyebrow: "See it work",
    title: "The same decision, from wherever the approver is",
    sub: "A leave or attendance request can be decided in the app your company connects. Money and pay requests carry no details and only open in NeevHR.",
    Visual: ApprovalChannelsFlow,
  },
};

export function ModuleAnimated({ slug }: { slug: string }) {
  const entry = bySlug[slug];
  if (!entry) return null;
  const { Visual } = entry;
  return (
    <section className="border-b border-line bg-surface-soft py-14 lg:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">{entry.eyebrow}</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{entry.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-body">{entry.sub}</p>
        </div>
        <Visual />
      </Container>
    </section>
  );
}
