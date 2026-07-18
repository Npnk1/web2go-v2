import type { Messages } from "@/i18n/types";
import { StructuredProfile } from "@/components/visuals/structured-profile";

export function VisibilityFlow({ visuals }: { visuals: Messages["visuals"] }) {
  return <StructuredProfile copy={visuals.profile} tone="dark" />;
}
