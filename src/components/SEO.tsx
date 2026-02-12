import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_URL = "https://royalgraphics.co.ke";
const DEFAULT_TITLE = "Royal Graphics Solutions - Digital Marketing Agency";
const DEFAULT_DESCRIPTION = "Elevate your digital presence with Royal Graphics Solutions. Expert graphic design, SEO services, and social media management for businesses.";
const DEFAULT_IMAGE = "/images/og-home.jpg";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
}: SEOProps) => {
  const fullTitle = title ? `${title} | Royal Graphics Solutions` : DEFAULT_TITLE;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Royal Graphics Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
