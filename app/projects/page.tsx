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

// Extended projects data with multiple images and nullable fields
const allProjectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard for business insights.",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Docker",
      "AWS",
    ],
    category: "Full-Stack",
    year: "2024",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Real-time inventory",
      "Payment processing",
      "Admin dashboard",
      "Analytics",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Machine learning dashboard for business intelligence with predictive analytics, custom ML models, and real-time data visualization.",
    images: ["/placeholder.svg?height=300&width=500"],
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    category: "AI/ML",
    year: "2023",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Predictive analytics",
      "Real-time data",
      "Custom ML models",
      "Data visualization",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive security compliance.",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Biometrics",
      "AWS",
    ],
    category: "Mobile",
    year: "2023",
    // status: null, // Example of nullable field
    githubUrl: "https://github.com",
    // liveUrl: null, // Example of nullable field
    highlights: [
      "Biometric auth",
      "Real-time transactions",
      "Security compliance",
      "Cross-platform",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Microservices Architecture",
    description:
      "Scalable microservices platform handling 1M+ requests daily with auto-scaling, monitoring, and high availability infrastructure.",
    // images: null, // Example of nullable field
    technologies: [
      "Go",
      "Kubernetes",
      "Docker",
      "gRPC",
      "Prometheus",
      "Grafana",
      "Redis",
    ],
    category: "DevOps",
    year: "2022",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Auto-scaling",
      "1M+ requests/day",
      "High availability",
      "Monitoring",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Blockchain DeFi Platform",
    description:
      "Decentralized finance platform with smart contracts, yield farming, and comprehensive DeFi protocols for cryptocurrency trading.",
    images: ["/placeholder.svg?height=300&width=500"],
    technologies: [
      "Solidity",
      "Web3.js",
      "React",
      "Hardhat",
      "IPFS",
      "MetaMask",
    ],
    category: "Blockchain",
    year: "2022",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Smart contracts",
      "Yield farming",
      "DeFi protocols",
      "Cryptocurrency",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Real-time Chat Platform",
    description:
      "Scalable chat platform with video calls, file sharing, end-to-end encryption, and support for thousands of concurrent users.",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["Socket.io", "WebRTC", "Node.js", "Redis", "MongoDB", "AWS"],
    category: "Real-time",
    year: "2021",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "End-to-end encryption",
      "Video calls",
      "File sharing",
      "Scalable",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Task Management System",
    description:
      "Comprehensive project management tool with team collaboration, time tracking, and advanced reporting features.",
    // images: null, // Example of nullable field
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    category: "Full-Stack",
    year: "2021",
    // status: null, // Example of nullable field
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Team collaboration",
      "Time tracking",
      "Advanced reporting",
      "Real-time updates",
    ],
    featured: false,
  },
  {
    id: 8,
    title: "IoT Monitoring Dashboard",
    description:
      "Internet of Things monitoring system for industrial equipment with real-time sensor data and predictive maintenance.",
    images: ["/placeholder.svg?height=300&width=500"],
    // technologies: null, // Example of nullable field
    category: "IoT",
    year: "2020",
    status: "Live",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    highlights: [
      "Real-time monitoring",
      "Predictive maintenance",
      "Sensor integration",
      "Industrial IoT",
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const categories = [
    "All",
    ...Array.from(new Set(allProjectsData.map((p) => p.category))),
  ];

  const filteredProjects = allProjectsData.filter((project) => {
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
                      ? "bg-white font-medium text-black hover:bg-gray-200"
                      : "border-gray-600 text-white transition-all duration-300 hover:bg-white hover:text-black"
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
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
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
                        <Badge className="bg-blue-600 text-white">
                          {project.status}
                        </Badge>
                      )}
                      {project.featured && (
                        <Badge className="bg-cyan-600 text-white">
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
