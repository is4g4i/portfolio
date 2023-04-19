import type { Project } from "../../types";
import sitesData from "./sites.json";
import designsData from "./designs.json";


const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

async function loadShowcase(type: string): Promise<Array<Project>> {
  let data = type === 'projects' ? sitesData : designsData;
  const sites = await Promise.all(
    data.map(async (site) => {
      if (!(site.image in allImages)) {
        console.error(
          `Image for "${site.title}" not found (provided: "${site.image}")`
        );
      }

      const image = await allImages[site.image];

      return {
        ...site,
        image,
      };
    })
  );

  return sites;
}

export async function getShowcase(type: 'projects' | 'designs') {
  return loadShowcase(type);
}