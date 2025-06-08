"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { portfolioData } from "@/data/portfolio-data";
import { logEvent } from "firebase/analytics";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  Github,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { analytics } from "../utils/firebase";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const categories = [
    "All",
    ...Array.from(new Set(portfolioData.projects.map((p) => p.category))),
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.technologies &&
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase()),
        ));
    return matchesCategory && matchesSearch;
  });

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 transform">
        <div className="rounded-full border border-gray-700 bg-gray-900/80 px-6 py-3 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg font-bold text-white">
              K.
            </Link>
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
          </div>
        </div>
      </nav>

      {/* Projects Page Content */}
      <div className="relative z-10 px-4 pb-20 pt-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              All Projects
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-400">
              A comprehensive showcase of my work across different technologies
              and domains
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-gray-700 bg-gray-900/50 pl-10 text-white placeholder-gray-400"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-slate-200 font-medium text-black hover:bg-gray-200"
                      : "border-gray-600 text-gray-500 transition-all duration-300 hover:bg-white hover:text-gray-800"
                  }
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => {
              const projectImages = project.images || [
                "/placeholder.svg?height=300&width=500",
              ];
              const currentImg = currentImageIndex[project.id] || 0;

              return (
                <Card
                  key={project.id}
                  className="group border-gray-700 bg-gray-900/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    {/* Image Carousel for Multiple Images */}
                    <div className="relative">
                      <Image
                        src={projectImages[currentImg] || "/placeholder.svg"}
                        alt={`${project.title} - Image ${currentImg + 1}`}
                        width={500}
                        height={300}
                        className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Image Navigation - Only show if multiple images */}
                      {projectImages.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              prevImage(project.id, projectImages.length)
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/70"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() =>
                              nextImage(project.id, projectImages.length)
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/70"
                            aria-label="Next image"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>

                          {/* Image Indicators */}
                          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-1">
                            {projectImages.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() =>
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [project.id]: imgIndex,
                                  }))
                                }
                                className={`h-2 w-2 rounded-full transition-colors ${
                                  imgIndex === currentImg
                                    ? "bg-white"
                                    : "bg-white/50"
                                }`}
                                aria-label={`Go to image ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Status and Featured Badges */}
                    <div className="absolute right-4 top-4 flex flex-col gap-2">
                      {project.status && (
                        <Badge className="flex items-center justify-center bg-blue-600 text-center text-white">
                          {project.status}
                        </Badge>
                      )}
                      {project.featured && (
                        <Badge className="flex items-center justify-center bg-cyan-600 text-center text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-white">
                        {project.title}
                      </CardTitle>
                      {project.year && (
                        <span className="text-sm text-gray-400">
                          {project.year}
                        </span>
                      )}
                    </div>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Technologies - Only show if technologies exist */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="border-gray-600 bg-gray-800 text-xs text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}

                      {/* Highlights - Only show if highlights exist */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-white">
                            Key Features:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Buttons - Only show if URLs exist */}
                      {(project.githubUrl || project.liveUrl) && (
                        <div className="flex space-x-3 pt-4">
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-white transition-all duration-300 hover:bg-white hover:text-black"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="bg-white font-medium text-black hover:bg-gray-200"
                              onClick={() => {
                                if (analytics) {
                                  logEvent(
                                    analytics,
                                    "live_demo_button_click",
                                    {
                                      label: "Live Demo Button",
                                      project: project.title,
                                      location: "Projects Page",
                                    },
                                  );
                                }
                                window.open(project.liveUrl, "_blank");
                              }}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-400">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
