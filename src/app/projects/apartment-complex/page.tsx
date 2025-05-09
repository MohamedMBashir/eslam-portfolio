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

export default function ApartmentComplexPage() {
  const { t } = useLanguage();
  
  return (
    <TranslatedProjectLayout title="apartmentComplex" subtitle="residentialBuilding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-xl bg-gray-50">
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("company")}</h3>
          <p className="text-gray-900">{t("kapadokyaMimarlik")}</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("year")}</h3>
          <p className="text-gray-900">2024</p>
        </div>
        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 mb-1">{t("location")}</h3>
          <p className="text-gray-900">{t("istanbulMetropolitan")}</p>
        </div>
      </div>
      
      {/* Hero Image - Full Width Showcase */}
      <div className="mb-12">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/projects/Project 4/Silivri Model Front Elevation Morning, The best one.jpg"
            alt={t("apartmentComplexSilivri")}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
      
      <TranslatedSection title="introduction">
        <p className="text-xl mb-6 text-gray-600 leading-relaxed">
          {t("apartmentIntro1")}
        </p>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("apartmentIntro2")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("apartmentIntro3")}
          </p>
        </div>
      </TranslatedSection>
      
      {/* Silivri Model Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("silivriModel")}</h2>
        <p className="text-lg text-gray-600 mb-8">{t("silivriDesc")}</p>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">{t("frontElevationViews")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 4/Silivri Model Front Elevation Morning 2.jpg"
                alt={t("silivriMorning")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 4/Silivri Model Front Elevation Morning 3.jpg"
                alt={t("silivriDetail")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 4/Silivri Model Front Elevation Morning 4.jpg"
                alt={t("silivriCloseUp")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/projects/Project 4/Silivri Model Front Elevation Night.jpg"
                alt={t("silivriNight")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900">{t("backElevation")}</h3>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 4/Silivri Model Back Elevation Morning.jpg"
              alt={t("silivriBackElevation")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
      
      {/* Esenyurt Model Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("esenyurtModel")}</h2>
        <p className="text-lg text-gray-600 mb-8">{t("alternativeDesign")}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 4/Esenyurt Model Front Elevation Morning 2.jpg"
              alt={t("esenyurtFront")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/projects/Project 4/Esenyurt Model Front Elevation Night.jpg"
              alt={t("esenyurtNight")}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg md:col-span-2">
            <Image
              src="/projects/Project 4/Esenyurt Model Back Elevation Morning.jpg"
              alt={t("esenyurtBack")}
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
                alt={t("esenyurtMorning")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("approach")}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          {t("apartmentApproach1")}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("apartmentApproach2")}
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{t("keyFeatures")}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: "distinctiveFacades" },
            { key: "multipleConfigurations" },
            { key: "balconiesOutdoor" },
            { key: "qualityMaterials" },
            { key: "contextResponsive" }
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
              slug: "cultural-exhibition-center",
              titleKey: "culturalExhibitionCenter",
              image: "/projects/Project 2/Model Render 1.jpg"
            },
            {
              slug: "bungalow-site",
              titleKey: "bungalowSite",
              image: "/projects/Project 3/Bungalow Site, the best photo.jpg"
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