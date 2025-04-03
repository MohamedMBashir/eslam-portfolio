import Image from "next/image";
import Link from "next/link";

export default function BungalowSitePage() {
  return (
    <article className="pt-28 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center mb-8 text-gray-600 hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Bungalow Site</h1>
          <p className="text-xl text-gray-600 mb-8">Resort and Recreation Complex</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Client</h3>
              <p className="text-gray-900">Resort Development Group</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Year</h3>
              <p className="text-gray-900">2022</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Location</h3>
              <p className="text-gray-900">Coastal Region</p>
            </div>
          </div>
          
          {/* Hero Image - Full Width Showcase */}
          <div className="mb-12">
            <div className="relative w-full h-[70vh] overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/projects/Project 3/Bungalow Site, the best photo.jpg"
                alt="Bungalow Site Overview"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          
          <div className="mb-16 text-gray-900">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              A comprehensive resort development featuring single and two-story bungalows with supporting amenities in a natural setting.
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                This 3D model realistically represents a bungalow site, emphasizing accurate terrain, lighting, and materials. It captures the layout of single and two-story bungalows, along with key spaces like the restaurant, pool, and café.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The design prioritizes harmony with the natural landscape, positioning buildings to maximize views and natural ventilation while minimizing environmental impact. Careful consideration was given to the flow between private accommodations and public amenities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With detailed textures and natural lighting, the model enhances realism, providing a clear and immersive visualization of the site. The architectural language maintains consistency throughout the development while allowing for variations that respond to specific site conditions.
              </p>
            </div>
          </div>
          
          <div className="mb-16 p-8 rounded-xl bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Concept</h2>
            <p className="text-gray-600 leading-relaxed">
              The concept focuses on creating a resort experience that balances privacy with community, integrating built forms with the natural environment.
            </p>
          </div>
          
          {/* Full Site Overview Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Site Overview</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/All the Site.jpg"
                  alt="Complete site layout"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/All Bungalows.jpg"
                  alt="Overview of all bungalows"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/Some Bungalows.jpg"
                  alt="Bungalow grouping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
          
          {/* Bungalows Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Bungalow Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/Single Bungalow.jpg"
                  alt="Single bungalow detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/Single Bungalow 2.jpg"
                  alt="Alternative single bungalow view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
          
          {/* Restaurant Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Restaurant & Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/RESTORAN +.jpg"
                  alt="Restaurant and amenities"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 3/Restoran 1.jpg"
                  alt="Restaurant interior view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              {/* Include another restaurant image if available */}
              {true && (
                <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg md:col-span-2">
                  <Image
                    src="/projects/Project 3/Restoran 2.jpg"
                    alt="Restaurant exterior view"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The 3D modeling approach focused on realistic representation of materials, lighting, and spatial relationships to provide an accurate visualization of the completed project.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The models show how natural materials like wood and stone integrate with the landscape, while thoughtful placement of structures preserves views and creates private outdoor spaces for each bungalow.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Single and two-story private bungalows",
                "Central restaurant and dining facilities",
                "Swimming pool and recreational areas",
                "Café and social spaces",
                "Integrated landscape design",
                "Sustainable site planning"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-100 pt-12 mt-12">
            <h3 className="text-xl font-bold mb-8 text-gray-900">Explore Other Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  slug: "language-center",
                  title: "Language Center",
                  image: "/projects/Project 1/Model Render 1.jpg"
                },
                {
                  slug: "cultural-exhibition-center",
                  title: "Cultural Exhibition Center",
                  image: "/projects/Project 2/Model Render 1.jpg"
                },
                {
                  slug: "apartment-complex",
                  title: "Apartment Complex",
                  image: "/projects/Project 4/Silivri Model Front Elevation Morning, The best one.jpg"
                }
              ].map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md mb-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="font-medium group-hover:opacity-75 transition-opacity text-gray-900">
                    {project.title}
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