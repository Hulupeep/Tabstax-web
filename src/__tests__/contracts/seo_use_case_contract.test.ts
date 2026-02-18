/**
 * Contract tests for feature_seo_use_case.yml
 * Scans source files to verify SEO invariants I-SEO-001 through I-SEO-009.
 * Run with: npm test -- seo_use_case_contract
 */

import { readFileSync } from "fs";
import { join } from "path";
import { useCases } from "../../data/use-cases";

const root = join(__dirname, "../../..");

function readSrc(relPath: string) {
  return readFileSync(join(root, "src", relPath), "utf-8");
}

describe("Contract: feature_seo_use_case", () => {
  // ── I-SEO-001: Interface declares all 5 new fields ─────────────────────
  describe("I-SEO-001: UseCase interface declares SEO fields", () => {
    const useCasesFile = readSrc("data/use-cases.ts");

    it("declares seoTitle", () => {
      expect(useCasesFile).toMatch(/seoTitle/);
    });

    it("declares metaDescription", () => {
      expect(useCasesFile).toMatch(/metaDescription/);
    });

    it("declares keywords", () => {
      expect(useCasesFile).toMatch(/keywords/);
    });

    it("declares faq", () => {
      expect(useCasesFile).toMatch(/\bfaq\b/);
    });

    it("declares relatedSlugs", () => {
      expect(useCasesFile).toMatch(/relatedSlugs/);
    });
  });

  // ── I-SEO-002 through I-SEO-008: Page template ─────────────────────────
  describe("I-SEO-002..008: use-case page template", () => {
    const pageFile = readSrc("app/use-cases/[slug]/page.tsx");

    it("I-SEO-002: renders FAQPage JSON-LD", () => {
      expect(pageFile).toMatch(/FAQPage/);
    });

    it("I-SEO-003: renders BreadcrumbList JSON-LD", () => {
      expect(pageFile).toMatch(/BreadcrumbList/);
    });

    it("I-SEO-004: renders Article JSON-LD", () => {
      expect(pageFile).toMatch(/Article/);
    });

    it("I-SEO-005: generateMetadata uses useCase.seoTitle", () => {
      expect(pageFile).toMatch(/useCase\.seoTitle/);
    });

    it("I-SEO-006: generateMetadata uses useCase.metaDescription", () => {
      expect(pageFile).toMatch(/useCase\.metaDescription/);
    });

    it("I-SEO-007: renders at least one <h2> element", () => {
      expect(pageFile).toMatch(/<h2/);
    });

    it("I-SEO-008: renders related use cases from relatedSlugs", () => {
      expect(pageFile).toMatch(/relatedSlugs/);
    });
  });

  // ── I-SEO-009: Index page CollectionPage ───────────────────────────────
  describe("I-SEO-009: /use-cases index page", () => {
    const indexFile = readSrc("app/use-cases/page.tsx");

    it("renders CollectionPage JSON-LD", () => {
      expect(indexFile).toMatch(/CollectionPage/);
    });
  });

  // ── Data completeness (Wave 2 gates) ───────────────────────────────────
  describe("Data completeness (Wave 2)", () => {
    useCases.forEach((uc) => {
      describe(`use case: ${uc.slug}`, () => {
        it("has seoTitle ≤60 chars", () => {
          expect(uc.seoTitle).toBeDefined();
          expect(uc.seoTitle.length).toBeGreaterThan(0);
          expect(uc.seoTitle.length).toBeLessThanOrEqual(60);
        });

        it("seoTitle differs from title", () => {
          expect(uc.seoTitle).not.toBe(uc.title);
        });

        it("has metaDescription ≤155 chars", () => {
          expect(uc.metaDescription).toBeDefined();
          expect(uc.metaDescription.length).toBeGreaterThan(0);
          expect(uc.metaDescription.length).toBeLessThanOrEqual(155);
        });

        it("has ≥5 keywords", () => {
          expect(uc.keywords).toBeDefined();
          expect(uc.keywords.length).toBeGreaterThanOrEqual(5);
        });

        it("has ≥3 FAQ entries", () => {
          expect(uc.faq).toBeDefined();
          expect(uc.faq.length).toBeGreaterThanOrEqual(3);
          uc.faq.forEach((entry) => {
            expect(entry.q.length).toBeGreaterThan(0);
            expect(entry.a.length).toBeGreaterThan(0);
          });
        });

        it("has exactly 3 relatedSlugs pointing to valid entries", () => {
          expect(uc.relatedSlugs).toBeDefined();
          expect(uc.relatedSlugs.length).toBe(3);
          const validSlugs = new Set(useCases.map((u) => u.slug));
          uc.relatedSlugs.forEach((slug) => {
            expect(validSlugs.has(slug)).toBe(true);
            expect(slug).not.toBe(uc.slug); // can't link to itself
          });
        });
      });
    });
  });
});
