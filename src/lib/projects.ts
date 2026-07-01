import { products } from "./products";
import type { ProductCategory } from "./categories";

export type Project = {
  slug: string;
  category: ProductCategory;
  image: string;
  productSlug: string;
  variant: "stage" | "effect";
  placeholder?: boolean;
};

export const projects: Project[] = products.flatMap((p) =>
  p.gallery.slice(0, 2).map((img, i) => ({
    slug: `${p.slug}-${i + 1}`,
    category: p.category,
    image: img,
    productSlug: p.slug,
    variant: (i === 0 ? "stage" : "effect") as "stage" | "effect",
    placeholder: true,
  })),
);

export const projectCategoryFilters = Array.from(
  new Set(projects.map((p) => p.category)),
) as ProductCategory[];
