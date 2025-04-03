import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define project data types
interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  introduction: string;
  client: string;
  year: string;
  location: string;
  fullDescription: string[];
  concept: string;
  mainImage: string;
  gallery: ProjectImage[];
  features?: string[];
  approach?: string;
  hasDiagrams?: boolean;
  hasPlans?: boolean;
  hasSections?: boolean;
  dark?: boolean;
}

type ProjectsData = Record<string, Project>;

// Real project data with actual images
const projectsData: ProjectsData = {
  "language-center": {
    title: "Language Center",
    description: "Etiler District Educational Facility",
    introduction: "A language center designed in Etiler, a district known for its affluent community and a significant number of young residents studying abroad.",
    client: "Educational Institution",
    year: "2023",
    location: "Etiler, Istanbul",
    fullDescription: [
      "This language center is designed to provide a dynamic learning environment that fosters multilingual education and cultural exchange. Recognizing the area's international outlook, the facility caters to the needs of students preparing for international education.",
      "The architectural approach emphasizes open, collaborative spaces that encourage interaction between students of different languages and cultures. The design incorporates flexible classrooms that can be reconfigured for various teaching methodologies and group sizes.",
      "Careful consideration was given to acoustics, lighting, and spatial flow to create an optimal learning environment. The building integrates technology throughout, supporting digital learning tools and connected education.",
    ],
    concept: "The concept revolves around creating spaces that facilitate language immersion and cultural exchange, with areas designed to simulate different global environments.",
    mainImage: "/projects/Project 1/Model Render 1.jpg",
    gallery: [
      {
        src: "/projects/Project 1/Model Render 2.jpg",
        alt: "Language center exterior view",
      },
      {
        src: "/projects/Project 1/Model Render 3.jpg",
        alt: "Language center perspective view",
      },
      {
        src: "/projects/Project 1/East elevation 1-50.jpg",
        alt: "East elevation detail",
      },
      {
        src: "/projects/Project 1/Sout Elevtion 1-50.jpg",
        alt: "South elevation detail",
      },
      {
        src: "/projects/Project 1/Plan 1.jpg",
        alt: "Floor plan - level 1",
      },
      {
        src: "/projects/Project 1/Plan 2.jpg",
        alt: "Floor plan - level 2",
      },
    ],
    features: [
      "Flexible classrooms for different teaching methodologies",
      "Cultural immersion spaces",
      "Multimedia language labs",
      "Student collaboration areas",
      "Outdoor learning terraces",
    ],
    hasDiagrams: true,
    hasPlans: true,
    hasSections: true,
  },
  "cultural-exhibition-center": {
    title: "Cultural Exhibition Center",
    description: "Istanbul Historical Artifacts Showcase",
    introduction: "A cultural and exhibition center designed to showcase Istanbul's vast collection of historical artifacts, with over 700,000 pieces currently stored away.",
    client: "Istanbul Municipality",
    year: "2023",
    location: "Yedikule, Istanbul",
    fullDescription: [
      "Located in a historically rich area overlooking the city's ancient walls and Yedikule, this center goes beyond a traditional museum. It offers an immersive experience with 3D animation rooms, interactive exhibitions, and a conference hall for cultural events.",
      "The architectural design respects the historical context while introducing contemporary elements that enhance the visitor experience. The building's form creates a dialogue with the ancient city walls, framing views and creating a visual connection to Istanbul's past.",
      "By bringing Turkish, Ottoman, and Byzantine history to life, the project serves as both a preservation space and a vibrant hub for education and engagement. The exhibition spaces are designed with flexibility in mind, allowing for changing displays and different curatorial approaches.",
    ],
    concept: "The concept integrates historical preservation with contemporary exhibition techniques, creating a bridge between past and present through architectural expression.",
    mainImage: "/projects/Project 2/Model Render 1.jpg",
    gallery: [
      {
        src: "/projects/Project 2/Model Render  2.jpg",
        alt: "Exhibition center exterior view",
      },
      {
        src: "/projects/Project 2/Model Render 3.jpg",
        alt: "Exhibition center main entrance",
      },
      {
        src: "/projects/Project 2/Model Render 4.jpg",
        alt: "Exhibition center perspective view",
      },
      {
        src: "/projects/Project 2/Model Render 5.jpg",
        alt: "Exhibition center night view",
      },
      {
        src: "/projects/Project 2/Plan 1.jpg",
        alt: "Floor plan - ground level",
      },
      {
        src: "/projects/Project 2/Elevations.jpg",
        alt: "Building elevations",
      },
    ],
    features: [
      "Interactive exhibition spaces",
      "3D animation rooms",
      "Conference and event hall",
      "Artifact preservation facilities",
      "Historical context integration",
      "Educational workshop areas",
    ],
    hasDiagrams: true,
    hasPlans: true,
    hasSections: true,
    dark: true,
  },
  "bungalow-site": {
    title: "Bungalow Site",
    description: "Resort and Recreation Complex",
    introduction: "A comprehensive resort development featuring single and two-story bungalows with supporting amenities in a natural setting.",
    client: "Resort Development Group",
    year: "2022",
    location: "Coastal Region",
    fullDescription: [
      "This 3D model realistically represents a bungalow site, emphasizing accurate terrain, lighting, and materials. It captures the layout of single and two-story bungalows, along with key spaces like the restaurant, pool, and café.",
      "The design prioritizes harmony with the natural landscape, positioning buildings to maximize views and natural ventilation while minimizing environmental impact. Careful consideration was given to the flow between private accommodations and public amenities.",
      "With detailed textures and natural lighting, the model enhances realism, providing a clear and immersive visualization of the site. The architectural language maintains consistency throughout the development while allowing for variations that respond to specific site conditions.",
    ],
    concept: "The concept focuses on creating a resort experience that balances privacy with community, integrating built forms with the natural environment.",
    mainImage: "/projects/Project 3/Bungalow Site, the best photo.jpg",
    gallery: [
      {
        src: "/projects/Project 3/All Bungalows.jpg",
        alt: "Overview of all bungalows",
      },
      {
        src: "/projects/Project 3/All the Site.jpg",
        alt: "Complete site layout",
      },
      {
        src: "/projects/Project 3/Single Bungalow.jpg",
        alt: "Single bungalow detail",
      },
      {
        src: "/projects/Project 3/Single Bungalow 2.jpg",
        alt: "Alternative single bungalow view",
      },
      {
        src: "/projects/Project 3/RESTORAN +.jpg",
        alt: "Restaurant and amenities",
      },
      {
        src: "/projects/Project 3/Restoran 1.jpg",
        alt: "Restaurant interior view",
      },
    ],
    features: [
      "Single and two-story private bungalows",
      "Central restaurant and dining facilities",
      "Swimming pool and recreational areas",
      "Café and social spaces",
      "Integrated landscape design",
      "Sustainable site planning",
    ],
    approach: "The 3D modeling approach focused on realistic representation of materials, lighting, and spatial relationships to provide an accurate visualization of the completed project.",
  },
  "apartment-complex": {
    title: "Apartment Complex",
    description: "Residential Building Design",
    introduction: "A detailed apartment complex design featuring carefully crafted elevations and thoughtfully selected materials for urban residential living.",
    client: "Real Estate Developer",
    year: "2022",
    location: "Istanbul Metropolitan Area",
    fullDescription: [
      "This project showcases a detailed apartment design, featuring carefully crafted elevations and thoughtfully selected materials. The design addresses the need for quality urban housing with attention to both aesthetic appeal and functional living spaces.",
      "Two distinct models were developed for different locations - one for Esenyurt and another for Silivri, each responding to their specific urban contexts and target demographics. The architectural expression balances contemporary design with timeless elements.",
      "Realistic textures, natural and interior lighting, and precise detailing bring the design to life, highlighting the building's form and materiality. The facades incorporate rhythmic elements and material variations to create visual interest while maintaining a cohesive overall appearance.",
    ],
    concept: "The concept emphasizes creating distinctive residential buildings that establish a sense of place and identity within their respective neighborhoods.",
    mainImage: "/projects/Project 4/Silivri Model Front Elevation Morning, The best one.jpg",
    gallery: [
      {
        src: "/projects/Project 4/Silivri Model Front Elevation Morning 2.jpg",
        alt: "Silivri model front view",
      },
      {
        src: "/projects/Project 4/Silivri Model Front Elevation Morning 3.jpg",
        alt: "Silivri model alternative angle",
      },
      {
        src: "/projects/Project 4/Silivri Model Front Elevation Morning 4.jpg",
        alt: "Silivri model detailed view",
      },
      {
        src: "/projects/Project 4/Silivri Model Back Elevation Morning.jpg",
        alt: "Silivri model back elevation",
      },
      {
        src: "/projects/Project 4/Esenyurt Model Front Elevation Morning 2.jpg",
        alt: "Esenyurt model front view",
      },
      {
        src: "/projects/Project 4/Esenyurt Model Front Elevation Night.jpg",
        alt: "Esenyurt model night view",
      },
    ],
    features: [
      "Distinctive facade treatments",
      "Multiple unit configurations",
      "Balconies and outdoor spaces",
      "High-quality material selections",
      "Context-responsive design",
    ],
    approach: "The detailed 3D modeling approach allowed for exploration of different material options, lighting conditions, and viewing angles to refine the design.",
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  const isDark = project.dark === true;
  const textColor = isDark ? "text-gray-100" : "text-gray-900";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const borderColor = isDark ? "border-gray-800" : "border-gray-100";
  const sectionBgColor = isDark ? "bg-gray-800" : "bg-gray-50";

  return (
    <article className={`pt-28 pb-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className={`inline-flex items-center mb-10 ${subTextColor} hover:opacity-75 transition-opacity text-lg md:text-xl`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${textColor}`}>{project.title}</h1>
          <p className={`text-3xl md:text-4xl ${subTextColor} mb-10`}>{project.description}</p>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 rounded-xl ${sectionBgColor}`}>
            <div>
              <h3 className={`font-bold text-lg md:text-xl uppercase ${isDark ? "text-gray-400" : "text-gray-500"} mb-2`}>Client</h3>
              <p className={`text-xl md:text-2xl ${textColor}`}>{project.client}</p>
            </div>
            <div>
              <h3 className={`font-bold text-lg md:text-xl uppercase ${isDark ? "text-gray-400" : "text-gray-500"} mb-2`}>Year</h3>
              <p className={`text-xl md:text-2xl ${textColor}`}>{project.year}</p>
            </div>
            <div>
              <h3 className={`font-bold text-lg md:text-xl uppercase ${isDark ? "text-gray-400" : "text-gray-500"} mb-2`}>Location</h3>
              <p className={`text-xl md:text-2xl ${textColor}`}>{project.location}</p>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          
          <div className={`mb-20 ${textColor}`}>
            <h2 className="text-4xl font-bold mb-8">Introduction</h2>
            <p className={`text-2xl md:text-3xl ${subTextColor} mb-8 leading-relaxed`}>{project.introduction}</p>
            
            <div className="space-y-8">
              {project.fullDescription.map((paragraph, i) => (
                <p key={i} className={`text-2xl md:text-3xl ${subTextColor} leading-relaxed`}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {project.concept && (
            <div className={`mb-20 p-10 rounded-xl ${sectionBgColor}`}>
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Concept</h2>
              <p className={`text-2xl md:text-3xl ${subTextColor} leading-relaxed`}>{project.concept}</p>
            </div>
          )}
          
          {project.features && (
            <div className="mb-20">
              <h2 className={`text-4xl font-bold mb-8 ${textColor}`}>Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <li key={i} className={`flex items-start ${subTextColor} text-xl md:text-2xl`}>
                    <svg className={`h-6 w-6 mr-3 mt-1.5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mb-20">
            <h2 className={`text-4xl font-bold mb-10 ${textColor}`}>Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {project.approach && (
            <div className="mb-20">
              <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>Approach</h2>
              <p className={`text-2xl md:text-3xl ${subTextColor} leading-relaxed`}>{project.approach}</p>
            </div>
          )}
          
          <div className={`border-t ${borderColor} pt-16 mt-16`}>
            <h3 className={`text-3xl md:text-4xl font-bold mb-10 ${textColor}`}>Explore Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(projectsData)
                .filter(([slug]) => slug !== params.slug)
                .map(([slug, projectInfo]) => (
                  <Link key={slug} href={`/projects/${slug}`} className="group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md mb-4">
                      <Image
                        src={projectInfo.mainImage}
                        alt={projectInfo.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <h4 className={`text-xl md:text-2xl font-medium group-hover:opacity-75 transition-opacity ${textColor}`}>
                      {projectInfo.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 