import Image from "next/image";
import Link from "next/link";

export default function LanguageCenterPage() {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Language Center</h1>
          <p className="text-xl text-gray-600 mb-8">Etiler District Educational Facility</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Client</h3>
              <p className="text-gray-900">Educational Institution</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Year</h3>
              <p className="text-gray-900">2023</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Location</h3>
              <p className="text-gray-900">Etiler, Istanbul</p>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/projects/Project 1/Model Render 1.jpg"
                alt="Language Center - Main View"
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
              A language center designed in Etiler, a district known for its affluent community and a significant number of young residents studying abroad.
            </p>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                This language center is designed to provide a dynamic learning environment that fosters multilingual education and cultural exchange. Recognizing the area's international outlook, the facility caters to the needs of students preparing for international education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The architectural approach emphasizes open, collaborative spaces that encourage interaction between students of different languages and cultures. The design incorporates flexible classrooms that can be reconfigured for various teaching methodologies and group sizes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Careful consideration was given to acoustics, lighting, and spatial flow to create an optimal learning environment. The building integrates technology throughout, supporting digital learning tools and connected education.
              </p>
            </div>
          </div>
          
          <div className="mb-16 p-8 rounded-xl bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Concept</h2>
            <p className="text-gray-600 leading-relaxed">
              The concept revolves around creating spaces that facilitate language immersion and cultural exchange, with areas designed to simulate different global environments.
            </p>
          </div>

          {/* Diagrams Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Concept Diagrams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Concept Diagram.jpg"
                  alt="Concept diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Mass-Terrain Diagram.jpg"
                  alt="Mass and terrain diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
          
          {/* Plans Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Floor Plans</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="font-medium mb-3 text-gray-900">First Floor Plan</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 1/Plan 1.jpg"
                    alt="First floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Second Floor Plan</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 1/Plan 2.jpg"
                    alt="Second floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              {/* Add additional plan if available */}
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Third Floor Plan</h3>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 1/Plan 3.jpg"
                    alt="Third floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Elevations and Sections */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Elevations & Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/East elevation 1-50.jpg"
                  alt="East elevation"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Sout Elevtion 1-50.jpg"
                  alt="South elevation"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Section Details 1-50.jpg"
                  alt="Section details"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Terrain Section.jpg"
                  alt="Terrain section"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
          
          {/* 3D Renders */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">3D Renders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Model Render 2.jpg"
                  alt="3D render view 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 1/Model Render 3.jpg"
                  alt="3D render view 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Flexible classrooms for different teaching methodologies",
                "Cultural immersion spaces",
                "Multimedia language labs",
                "Student collaboration areas",
                "Outdoor learning terraces"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  slug: "cultural-exhibition-center",
                  title: "Cultural Exhibition Center",
                  image: "/projects/Project 2/Model Render 1.jpg"
                },
                {
                  slug: "bungalow-site",
                  title: "Bungalow Site",
                  image: "/projects/Project 3/Bungalow Site, the best photo.jpg"
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