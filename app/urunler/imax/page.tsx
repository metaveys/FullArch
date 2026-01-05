import { Metadata } from "next";
import { productDetails, type ProductSlug } from "../../../content/site";
import { ProductPageTemplate } from "../../../components/sections/product-page-template";

const slug: ProductSlug = "imax";
const product = productDetails[slug];

export const metadata: Metadata = {
  title: product.pageTitle,
  description: product.metaDescription
};

export default function ImaxPage() {
  return (
    <ProductPageTemplate
      title={product.hero.title}
      subtitle={product.hero.subtitle}
      bullets={product.hero.bullets}
      usage={product.usage}
      advantages={product.advantages}
      cadCam={product.cadCam}
      delivery={product.delivery}
      support={product.support}
      heroImage="/E-Max.jpg"
      heroImageAlt="EMAX implant destekli protez - Full arch yüksek stabilite platform çözümleri"
    />
  );
}


