import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Navigation = ({ title }: { title?: React.ReactNode }) => {
  return (
    <nav className="fixed left-1/2 top-2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900/90 px-6 py-3 shadow-2xl backdrop-blur-md">
        <Link href="/" className="text-xl font-bold text-white">
          K.
        </Link>
        <div className="h-4 w-px bg-gray-700" />
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        {title && (
          <>
            <div className="h-4 w-px bg-gray-700" />
            {title}
          </>
        )}
      </div>
    </nav>
  );
};
