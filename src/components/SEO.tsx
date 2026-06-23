import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export default function SEO({ 
  title = "DeepVision Technologies | Internship Programs & Tech Solutions", 
  description = "DeepVision Technologies provides internship programs, AI solutions, software development, data analytics, career advancement programs, and placement support.", 
  keywords = "internship programs, tech talent, software development, DeepVision Technologies", 
  canonicalUrl = "https://deep-vision-technologies-web.vercel.app" 
}: SEOProps) {
  
  const siteUrl = "https://deep-vision-technologies-web.vercel.app";
  const url = canonicalUrl.startsWith("http") ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />
      
      {/* Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DeepVision Technologies",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "description": "DeepVision Technologies provides internship programs, AI solutions, software development, data analytics, career advancement programs, and placement support for students and businesses.",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "com.deepvisiontechnologies@gmail.com",
            "contactType": "customer support"
          }
        })}
      </script>
    </Helmet>
  );
}
