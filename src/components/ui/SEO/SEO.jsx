import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { routesMetadata } from "./routesMetadata";

export default function SEO() {
  const location = useLocation();

  const {
    title,
    description,
    keywords,
    ogImage,
    ogImageAlt,
    ogUrl,
    twitterImage,
    twitterImageAlt,
  } = routesMetadata.find((route) => route.path === location.pathname);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Og */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content={twitterImageAlt} />
    </Helmet>
  );
}
