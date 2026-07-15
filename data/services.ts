export const serviceDefinitions = [
  { index: 0, slug: "ai-visibility", type: "visibility" },
  { index: 4, slug: "ai-ready-websites", type: "website" },
  { index: 2, slug: "technical-seo", type: "schema" }
] as const;

export type ServiceDefinition = (typeof serviceDefinitions)[number];
export type ServiceSlug = ServiceDefinition["slug"];

export function getServiceDefinition(slug: string) {
  return serviceDefinitions.find((service) => service.slug === slug);
}
