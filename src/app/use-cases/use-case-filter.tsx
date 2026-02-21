"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";
import { useCases, workCategories, lifeCategories } from "@/data/use-cases";
import { USE_CASE_TAGS, INDUSTRIES, ROLES, type Industry, type Role } from "@/data/use-case-tags";

const personaColors: Record<string, string> = {
  work: "bg-amber/10 text-amber",
  life: "bg-pink-glow/10 text-pink-glow",
};

function getSection(slug: string): "work" | "life" {
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return "work";
  return lifeCategories.includes(uc.category) ? "life" : "work";
}

function UseCaseCard({ slug }: { slug: string }) {
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return null;
  const section = getSection(slug);
  return (
    <Link
      href={`/use-cases/${uc.slug}`}
      className="group block bg-cream-dark rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-amber-light"
    >
      <span
        className={`inline-block text-xs font-semibold font-body px-2.5 py-1 rounded-full mb-3 ${personaColors[section]}`}
      >
        {uc.persona}
      </span>
      <h4 className="font-heading text-lg font-bold text-charcoal mb-2 group-hover:text-amber transition-colors">
        {uc.title}
      </h4>
      <p className="text-warm-gray text-sm leading-relaxed font-body">
        {uc.summary}
      </p>
    </Link>
  );
}

function CategorySection({
  category,
  section,
}: {
  category: string;
  section: "work" | "life";
}) {
  const cases = useCases.filter((uc) => uc.category === category);
  if (cases.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
        {category}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((uc) => (
          <Link
            key={uc.id}
            href={`/use-cases/${uc.slug}`}
            className="group block bg-cream-dark rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200 border border-transparent hover:border-amber-light"
          >
            <span
              className={`inline-block text-xs font-semibold font-body px-2.5 py-1 rounded-full mb-3 ${personaColors[section]}`}
            >
              {uc.persona}
            </span>
            <h4 className="font-heading text-lg font-bold text-charcoal mb-2 group-hover:text-amber transition-colors">
              {uc.title}
            </h4>
            <p className="text-warm-gray text-sm leading-relaxed font-body">
              {uc.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FilterContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedIndustry = searchParams.get("industry") as Industry | null;
  const selectedRole = searchParams.get("role") as Role | null;
  const isFiltered = selectedIndustry !== null || selectedRole !== null;

  function navigate(industry: Industry | null, role: Role | null) {
    const params = new URLSearchParams();
    if (industry) params.set("industry", industry);
    if (role) params.set("role", role);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function toggleIndustry(industry: Industry) {
    navigate(selectedIndustry === industry ? null : industry, selectedRole);
  }

  function toggleRole(role: Role) {
    navigate(selectedIndustry, selectedRole === role ? null : role);
  }

  // Build filtered slug list
  const filteredSlugs = Object.entries(USE_CASE_TAGS)
    .filter(([, tags]) => {
      const matchesIndustry = !selectedIndustry || tags.industries.includes(selectedIndustry);
      const matchesRole = !selectedRole || tags.roles.includes(selectedRole);
      return matchesIndustry && matchesRole;
    })
    .map(([slug]) => slug)
    // Preserve order from useCases array
    .sort((a, b) => {
      const ai = useCases.findIndex((u) => u.slug === a);
      const bi = useCases.findIndex((u) => u.slug === b);
      return ai - bi;
    });

  return (
    <div>
      {/* Filter UI */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="bg-cream-dark rounded-2xl p-6 mb-2">
          {/* Industry row */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-warm-gray uppercase tracking-wide mb-3">
              Industry
            </p>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <button
                  key={industry}
                  onClick={() => toggleIndustry(industry)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    selectedIndustry === industry
                      ? "bg-charcoal text-cream"
                      : "bg-cream text-warm-gray hover:bg-charcoal/10 hover:text-charcoal"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Role row */}
          <div>
            <p className="text-xs font-semibold text-warm-gray uppercase tracking-wide mb-3">
              Role
            </p>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((role) => (
                <button
                  key={role}
                  onClick={() => toggleRole(role)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    selectedRole === role
                      ? "bg-charcoal text-cream"
                      : "bg-cream text-warm-gray hover:bg-charcoal/10 hover:text-charcoal"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active filter summary + clear */}
        {isFiltered && (
          <div className="flex items-center justify-between py-3 px-1">
            <p className="text-sm text-warm-gray">
              <span className="font-semibold text-charcoal">{filteredSlugs.length}</span>{" "}
              use case{filteredSlugs.length !== 1 ? "s" : ""} matching
              {selectedIndustry && (
                <> &ldquo;{selectedIndustry}&rdquo;</>
              )}
              {selectedIndustry && selectedRole && " + "}
              {selectedRole && (
                <> &ldquo;{selectedRole}&rdquo;</>
              )}
            </p>
            <button
              onClick={() => navigate(null, null)}
              className="text-sm font-semibold text-amber hover:text-terracotta transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Results */}
      {isFiltered ? (
        <section className="max-w-6xl mx-auto px-6 pb-16">
          {filteredSlugs.length === 0 ? (
            <p className="text-warm-gray text-center py-16">
              No use cases match those filters. Try removing one.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSlugs.map((slug) => (
                <UseCaseCard key={slug} slug={slug} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Work Section */}
          <section className="max-w-6xl mx-auto px-6 pb-16">
            <div className="flex items-center gap-3 mb-10">
              <h2 className="font-heading text-3xl font-bold text-charcoal">
                Work
              </h2>
              <span className="text-sm font-body text-warm-gray bg-cream-dark px-3 py-1 rounded-full">
                {workCategories.length} categories
              </span>
            </div>
            {workCategories.map((cat) => (
              <CategorySection key={cat} category={cat} section="work" />
            ))}
          </section>

          {/* Life Section */}
          <section className="max-w-6xl mx-auto px-6 pb-16">
            <div className="flex items-center gap-3 mb-10">
              <h2 className="font-heading text-3xl font-bold text-charcoal">
                Life
              </h2>
              <span className="text-sm font-body text-warm-gray bg-cream-dark px-3 py-1 rounded-full">
                {lifeCategories.length} categories
              </span>
            </div>
            {lifeCategories.map((cat) => (
              <CategorySection key={cat} category={cat} section="life" />
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export function UseCaseFilter() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <div className="bg-cream-dark rounded-2xl p-6 animate-pulse h-32" />
        </div>
      }
    >
      <FilterContent />
    </Suspense>
  );
}
