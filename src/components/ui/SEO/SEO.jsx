import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { routesMetadata } from "./routesMetadata";

export default function SEO() {
  const location = useLocation();

  const { title, description, keywords, ogImage, ogUrl } = routesMetadata.find(
    (route) => route.path === location.pathname
  );

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
