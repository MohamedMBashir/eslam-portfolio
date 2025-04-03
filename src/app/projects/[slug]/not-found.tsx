import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8">
          The project you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/#projects"
          className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Return to Projects
        </Link>
      </div>
    </div>
  );
} 