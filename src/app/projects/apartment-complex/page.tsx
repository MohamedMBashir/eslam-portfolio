import Image from "next/image";
import Link from "next/link";

export default function ApartmentComplexPage() {
  return (
    <article className="pt-28 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center mb-8 text-gray-600 hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Apartment Complex</h1>
          <p className="text-xl text-gray-600 mb-8">Residential Building Design</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-white shadow-sm">
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Client</h3>
              <p className="text-gray-900">Real Estate Developer</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Year</h3>
              <p className="text-gray-900">2022</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Location</h3>
              <p className="text-gray-900">Istanbul Metropolitan Area</p>
            </div>
          </div>
          
          {/* Hero Image - Full Width Showcase */}
          <div className="mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/projects/Project 4/Silivri Model Front Elevation Morning, The best one.jpg"
                alt="Apartment Complex - Silivri Model"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          
          <div className="mb-16 text-gray-900">
            <h2 className="text-2xl font-bold mb-6">Introduction</h2>
            <p className="text-xl mb-6 text-gray-600 leading-relaxed">
              A detailed apartment complex design featuring carefully crafted elevations and thoughtfully selected materials for urban residential living.
            </p>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                This project showcases a detailed apartment design, featuring carefully crafted elevations and thoughtfully selected materials. The design addresses the need for quality urban housing with attention to both aesthetic appeal and functional living spaces.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Two distinct models were developed for different locations - one for Esenyurt and another for Silivri, each responding to their specific urban contexts and target demographics. The architectural expression balances contemporary design with timeless elements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Realistic textures, natural and interior lighting, and precise detailing bring the design to life, highlighting the building's form and materiality. The facades incorporate rhythmic elements and material variations to create visual interest while maintaining a cohesive overall appearance.
              </p>
            </div>
          </div>
          
          <div className="mb-16 p-8 rounded-xl bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Concept</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The concept emphasizes creating distinctive residential buildings that establish a sense of place and identity within their respective neighborhoods, while providing comfortable and appealing living spaces for residents.
            </p>
          </div>
          
          {/* Silivri Model Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Silivri Model</h2>
            <p className="text-lg text-gray-600 mb-8">A modern residential development with balconies and terraced facades.</p>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Front Elevation Views</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 4/Silivri Model Front Elevation Morning 2.jpg"
                    alt="Silivri front view - morning"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 4/Silivri Model Front Elevation Morning 3.jpg"
                    alt="Silivri front view - detail"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 4/Silivri Model Front Elevation Morning 4.jpg"
                    alt="Silivri front view - close up"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 4/Silivri Model Front Elevation Night.jpg"
                    alt="Silivri front view - night"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Back Elevation</h3>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 4/Silivri Model Back Elevation Morning.jpg"
                  alt="Silivri back elevation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
          
          {/* Esenyurt Model Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Esenyurt Model</h2>
            <p className="text-lg text-gray-600 mb-8">An alternative design approach for a different urban context.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 4/Esenyurt Model Front Elevation Morning 2.jpg"
                  alt="Esenyurt front view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 4/Esenyurt Model Front Elevation Night.jpg"
                  alt="Esenyurt night view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg md:col-span-2">
                <Image
                  src="/projects/Project 4/Esenyurt Model Back Elevation Morning.jpg"
                  alt="Esenyurt back elevation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              {/* Add another Esenyurt image if available */}
              {true && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg md:col-span-2">
                  <Image
                    src="/projects/Project 4/Esenyurt Model front Elevation morning.jpg"
                    alt="Esenyurt front elevation morning"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              The detailed 3D modeling approach allowed for exploration of different material options, lighting conditions, and viewing angles to refine the design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By creating photorealistic renderings in various lighting conditions, including both daytime and nighttime views, the models provide a comprehensive preview of how the buildings will appear and function in their environments.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Distinctive facade treatments",
                "Multiple unit configurations",
                "Balconies and outdoor spaces",
                "High-quality material selections",
                "Context-responsive design",
                "Optimized natural lighting"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-lg text-gray-600">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-gray-200 pt-12 mt-12">
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
                  slug: "bungalow-site",
                  title: "Bungalow Site",
                  image: "/projects/Project 3/Bungalow Site, the best photo.jpg"
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