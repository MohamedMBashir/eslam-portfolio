"use client";

import Image from "next/image";
import Link from "next/link";
import TranslatedProjectLayout from "@/components/ui/TranslatedProjectLayout";
import { useLanguage } from "@/i18n/LanguageContext";

// Helper components for translation
function TranslatedHeading({ title }: { title: string }) {
  const { t } = useLanguage();
  return <h2 className="text-2xl font-bold mb-8 text-gray-900">{t(title)}</h2>;
}

function TranslatedSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16 text-gray-900">
      <TranslatedHeading title={title} />
      {children}
    </div>
  );
}

export default function LanguageCenterPage() {
  const { t } = useLanguage();
  
  return (
    <TranslatedProjectLayout title="languageCenter" subtitle="etilerDistrict">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("targetGroup")}</h3>
          <p className="text-gray-900">{t("etilerYoungPopulation")}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("year")}</h3>
          <p className="text-gray-900">2024</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("location")}</h3>
          <p className="text-gray-900">{t("etilerLocation")}</p>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/projects/Project 1/Model Render 1.jpg"
            alt={t("languageCenterMainView")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
      
      <TranslatedSection title="introduction">
        <p className="text-xl mb-6 text-gray-600 leading-relaxed">
          {t("languageCenterIntro1")}
        </p>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("languageCenterIntro2")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("languageCenterIntro3")}
          </p>
        </div>
      </TranslatedSection>
      
      <div className="mb-16 p-8 rounded-xl bg-gray-50">
        <TranslatedHeading title="concept" />
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("languageCenterConcept")}
        </p>
      </div>

      {/* Diagrams Section */}
      <div className="mb-16">
        <TranslatedHeading title="conceptDiagrams" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Concept Diagram.jpg"
              alt={t("conceptDiagramAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Mass-Terrain Diagram.jpg"
              alt={t("massTerrainDiagramAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
      
      {/* Plans Section */}
      <div className="mb-16">
        <TranslatedHeading title="floorPlans" />
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 1/Plan 1.jpg"
                alt={t("firstFloorPlanAlt")}
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 1/Plan 2.jpg"
                alt={t("secondFloorPlanAlt")}
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 1/Plan 3.jpg"
                alt={t("thirdFloorPlanAlt")}
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Detailed Floor Plan Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("firstFloorDetailedPlan")}</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Plan Details 1-50.jpg"
              alt={t("firstFloorDetailedAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
      
      {/* Elevations and Sections */}
      <div className="mb-16">
        <TranslatedHeading title="elevationsAndSections" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/East elevation 1-50.jpg"
              alt={t("eastElevationAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Sout Elevtion 1-50.jpg"
              alt={t("southElevationAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Section Details 1-50.jpg"
              alt={t("sectionDetailsAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Terrain Section.jpg"
              alt={t("terrainSectionAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
      
      {/* Section Details */}
      <div className="mb-16">
        <TranslatedHeading title="sectionDetails" />
        <div className="grid grid-cols-1 gap-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Section Details 1-20.jpg"
              alt={t("sectionDetailsScaleAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
      
      {/* 3D Renders */}
      <div className="mb-16">
        <TranslatedHeading title="renders" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Model Render 2.jpg"
              alt={t("renderView1Alt")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 1/Model Render 3.jpg"
              alt={t("renderView2Alt")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <TranslatedHeading title="buildingProgram" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "classrooms" },
            { key: "computerRoom" },
            { key: "library" },
            { key: "reception" },
            { key: "teachersRoom" },
            { key: "storage" },
            { key: "cafeteria" },
            { key: "openAirClass" }
          ].map((feature, i) => (
            <li key={i} className="flex items-start text-lg text-gray-600">
              <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t(feature.key)}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t border-gray-100 pt-12 mt-12">
        <h3 className="text-xl font-bold mb-8 text-gray-900">{t("exploreOtherProjects")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              slug: "cultural-exhibition-center",
              titleKey: "culturalExhibitionCenter",
              image: "/projects/Project 2/Model Render 1.jpg"
            },
            {
              slug: "bungalow-site",
              titleKey: "bungalowSite",
              image: "/projects/Project 3/Bungalow Site, the best photo.jpg"
            },
            {
              slug: "apartment-complex",
              titleKey: "apartmentComplex",
              image: "/projects/Project 4/Silivri Model Front Elevation Morning, The best one.jpg"
            }
          ].map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md mb-3">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h4 className="font-medium group-hover:opacity-75 transition-opacity text-gray-900">
                {t(project.titleKey)}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </TranslatedProjectLayout>
  );
} 