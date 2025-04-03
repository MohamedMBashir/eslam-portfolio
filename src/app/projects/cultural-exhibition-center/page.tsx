import Image from "next/image";
import Link from "next/link";

export default function CulturalExhibitionCenterPage() {
  return (
    <article className="pt-28 pb-24 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center mb-8 text-gray-600 hover:opacity-75 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Cultural Exhibition Center</h1>
          <p className="text-xl text-gray-600 mb-8">Istanbul Historical Artifacts Showcase</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Client</h3>
              <p className="text-gray-900">Istanbul Municipality</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Year</h3>
              <p className="text-gray-900">2023</p>
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">Location</h3>
              <p className="text-gray-900">Yedikule, Istanbul</p>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/projects/Project 2/Model Render 1.jpg"
                alt="Cultural Exhibition Center - Main View"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Introduction</h2>
            <p className="text-xl mb-6 text-gray-600 leading-relaxed">
              A cultural and exhibition center designed to showcase Istanbul's vast collection of historical artifacts, with over 700,000 pieces currently stored away.
            </p>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Located in a historically rich area overlooking the city's ancient walls and Yedikule, this center goes beyond a traditional museum. It offers an immersive experience with 3D animation rooms, interactive exhibitions, and a conference hall for cultural events.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The architectural design respects the historical context while introducing contemporary elements that enhance the visitor experience. The building's form creates a dialogue with the ancient city walls, framing views and creating a visual connection to Istanbul's past.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By bringing Turkish, Ottoman, and Byzantine history to life, the project serves as both a preservation space and a vibrant hub for education and engagement. The exhibition spaces are designed with flexibility in mind, allowing for changing displays and different curatorial approaches.
              </p>
            </div>
          </div>
          
          <div className="mb-16 p-8 rounded-xl bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Concept</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The concept integrates historical preservation with contemporary exhibition techniques, creating a bridge between past and present through architectural expression.
            </p>
          </div>

          {/* Concept Diagrams */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Concept Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Concept Diagram 1.jpg"
                  alt="Initial concept diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Concept Diagram 2.jpg"
                  alt="Concept development"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Concept Diagram 3.jpg"
                  alt="Final concept diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
          
          {/* Mass Diagrams */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Massing Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Mass Diagram.jpg"
                  alt="Mass diagram"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Mass-Environment Diagram.jpg"
                  alt="Mass and environment integration"
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
            <div className="grid grid-cols-1 gap-10">
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Ground Floor Plan</h3>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 2/Plan 1.jpg"
                    alt="Ground floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900">First Floor Plan</h3>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 2/Plan 2.jpg"
                    alt="First floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Second Floor Plan</h3>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 2/Plan 3.jpg"
                    alt="Second floor plan"
                    fill
                    className="object-contain bg-white"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3 text-gray-900">Third Floor Plan</h3>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/projects/Project 2/Plan 4.jpg"
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
                  src="/projects/Project 2/Elevations.jpg"
                  alt="Building elevations"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Sections.jpg"
                  alt="Building sections"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg col-span-1 md:col-span-2">
                <Image
                  src="/projects/Project 2/Dystem Details Section.jpg"
                  alt="System detail section"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </div>
          </div>
          
          {/* 3D Renders */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">3D Renderings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Model Render 2.jpg"
                  alt="Exterior view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Model Render 3.jpg"
                  alt="Main entrance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Model Render 4.jpg"
                  alt="Perspective view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/projects/Project 2/Model Render 5.jpg"
                  alt="Night view"
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
                "Interactive exhibition spaces",
                "3D animation rooms",
                "Conference and event hall",
                "Artifact preservation facilities",
                "Historical context integration",
                "Educational workshop areas"
              ].map((feature, i) => (
                <li key={i} className="flex items-start text-lg text-gray-600">
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
                  slug: "language-center",
                  title: "Language Center",
                  image: "/projects/Project 1/Model Render 1.jpg"
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