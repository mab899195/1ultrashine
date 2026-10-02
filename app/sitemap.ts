import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Removed — these are sections of the single homepage, not separate pages.
    // Re-add properly (with real URLs) if the site ever moves to separate pages per service.
    // {
    //   url: `${base}/#services`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: `${base}/#reviews`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
    // {
    //   url: `${base}/#contact`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
  ];
}