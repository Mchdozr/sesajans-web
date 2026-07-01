import { homeFaqs } from "./content";
import { products } from "./products";

export function getSssFaqs() {
  const productFaqs = products.flatMap((p) =>
    p.faqs.slice(0, 1).map((f) => ({
      q: `${p.name}: ${f.q}`,
      a: f.a,
    })),
  );
  return [...homeFaqs, ...productFaqs];
}
