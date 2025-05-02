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

export default function CulturalExhibitionCenterPage() {
  const { t } = useLanguage();
  
  return (
    <TranslatedProjectLayout title="culturalExhibitionCenter" subtitle="istanbulHistorical">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("targetGroup")}</h3>
          <p className="text-gray-900">{t("localInternationalTourists")}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("year")}</h3>
          <p className="text-gray-900">2024</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("location")}</h3>
          <p className="text-gray-900">{t("yedikuleLocation")}</p>
        </div>
      </div>
      
      <div className="mb-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/projects/Project 2/Model Render 1.jpg"
            alt={t("culturalCenterMainView")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
      
      <TranslatedSection title="introduction">
        <p className="text-xl mb-6 text-gray-600 leading-relaxed">
          {t("culturalExhibitionIntro1")}
        </p>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("culturalExhibitionIntro2")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("culturalExhibitionIntro3")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("culturalExhibitionIntro4")}
          </p>
        </div>
      </TranslatedSection>
      
      <div className="mb-16 p-8 rounded-xl bg-gray-50">
        <TranslatedHeading title="concept" />
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("culturalExhibitionConcept")}
        </p>
      </div>

      {/* Concept Diagrams */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("conceptDevelopment")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Concept Diagram 1.jpg"
              alt={t("initialConceptDiagram")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Concept Diagram 2.jpg"
              alt={t("conceptDevelopmentAlt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Concept Diagram 3.jpg"
              alt={t("finalConceptDiagram")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("historicalGardens")}
          </p>
        </div>
      </div>
      
      {/* Mass Diagrams */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("massingStudies")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Mass Diagram.jpg"
              alt={t("massDiagram")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Mass-Environment Diagram.jpg"
              alt={t("massEnvironmentIntegration")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
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
              src="/projects/Project 2/Elevations.jpg"
              alt={t("buildingElevations")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Sections.jpg"
              alt={t("buildingSections")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>

      {/* Exploded Diagram */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("explodedDiagram")}</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Exploded Diagram.jpg"
              alt={t("buildingExplodedDiagram")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>

      {/* Section Details */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("sectionDetails50")}</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Dystem Details Section.jpg"
              alt={t("sectionDetails50Alt")}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
      
      {/* 3D Renders */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">{t("threeDRenderings")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Model Render 2.jpg"
              alt={t("exteriorView")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Model Render 3.jpg"
              alt={t("mainEntrance")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Model Render 4.jpg"
              alt={t("perspectiveView")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 2/Model Render 5.jpg"
              alt={t("nightView")}
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
            { key: "animationRoom" },
            { key: "conferenceHall" },
            { key: "storageArea" },
            { key: "restorationLaboratory" },
            { key: "temporaryExhibition" },
            { key: "artifactsExhibition" },
            { key: "administration" },
            { key: "restaurantCafe" },
            { key: "shop" }
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
              slug: "language-center",
              titleKey: "languageCenter",
              image: "/projects/Project 1/Model Render 1.jpg"
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