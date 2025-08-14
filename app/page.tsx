"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioData, yearsOfExperience } from "@/data/portfolio-data";
import { logEvent } from "firebase/analytics";
import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Building,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Target,
  Trophy,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { analytics } from "./utils/firebase";

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) => (
  <div className="mb-8 text-center">
    <div className="mb-4 flex justify-center">
      <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-3">
        <Icon className="h-8 w-8 text-white" />
      </div>
    </div>
    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{title}</h2>
    <p className="mx-auto max-w-3xl text-xl text-gray-400">{subtitle}</p>
  </div>
);

type Section =
  | "Hero"
  | "About"
  | "Experience"
  | "Projects"
  | "Skills"
  | "Achievements"
  | "Contact";

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  const featuredProjects = portfolioData.projects.filter(
    (project) => project.featured,
  );

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = portfolioData.navigation.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
  };

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Account for floating navigation height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      router.push(`#${sectionId}`);
    }
  };

  const onGithubButtonClicked = (section: Section) => {
    if (analytics) {
      logEvent(analytics, "github_button_click", {
        label: "Github Button",
        location: `${section} Section`,
      });
    }
    window.open(portfolioData.personalInfo.github, "_blank");
  };

  const onEmailButtonClicked = (section: Section) => {
    if (analytics) {
      logEvent(analytics, "email_button_click", {
        label: "Email Button",
        location: `${section} Section`,
      });
    }
    window.open(`mailto:${portfolioData.personalInfo.email}`);
  };

  const onLinkedinButtonClicked = (section: Section) => {
    if (analytics) {
      logEvent(analytics, "linkedin_button_click", {
        label: "Linkedin Button",
        location: `${section} Section`,
      });
    }
    window.open(portfolioData.personalInfo.linkedin, "_blank");
  };

  const onMediumButtonClicked = (section: Section) => {
    if (analytics) {
      logEvent(analytics, "medium_button_click", {
        label: "Medium Button",
        location: `${section} Section`,
      });
    }
    window.open(portfolioData.personalInfo.medium, "_blank");
  };

  return (
    <div className="relative z-0 min-h-screen overflow-x-hidden bg-black pt-32 md:pt-0">
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-2000 absolute right-1/4 top-3/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500 mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-4000 absolute bottom-1/4 left-1/2 h-96 w-96 animate-pulse rounded-full bg-gray-500 mix-blend-multiply blur-xl filter"></div>
        </div>
      </div>

      {/* Floating Navigation Bar - Centered */}
      <nav className="fixed left-1/2 top-2 z-50 w-full -translate-x-1/2 transform px-2 md:w-auto md:px-0">
        <div className="scrollbar-hide overflow-x-auto rounded-full border border-gray-700 bg-gray-900/90 px-2 py-2 shadow-2xl backdrop-blur-md md:px-6 md:py-3">
          <div className="flex min-w-max items-center space-x-1">
            <div className="mr-2 flex-shrink-0 text-xl font-bold text-white md:mr-4">
              K.
            </div>
            {portfolioData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 md:px-4 md:py-2 md:text-sm ${
                  activeSection === item.id
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full border border-gray-700 bg-gray-900/80 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-gray-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex h-screen items-center justify-center px-4"
      >
        <div
          className={`z-10 text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mb-8">
            <Image
              src={
                portfolioData.personalInfo.profileImage || "/placeholder.svg"
              }
              alt={`${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.title}`}
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-blue-400 shadow-2xl"
            />
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            {portfolioData.personalInfo.name.split(" ")[0]}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              {portfolioData.personalInfo.name.split(" ")[1]}
            </span>
          </h1>
          <h2 className="mb-4 text-xl text-gray-300 md:text-2xl">
            {portfolioData.personalInfo.title}
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg text-gray-400 md:text-xl">
            {portfolioData.personalInfo.subtitle}
          </p>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Badge
              variant="secondary"
              className="border-gray-600 bg-gray-800 px-4 py-2 text-lg text-gray-300"
            >
              <GraduationCap className="mr-2 h-4 w-4" />
              MS Computer Science
            </Badge>
            <Badge
              variant="secondary"
              className="border-gray-600 bg-gray-800 px-4 py-2 text-lg text-gray-300"
            >
              <Code className="mr-2 h-4 w-4" />
              Lead Software Engineer
            </Badge>
            <Badge
              variant="secondary"
              className="border-gray-600 bg-gray-800 px-4 py-2 text-lg text-gray-300"
            >
              <Award className="mr-2 h-4 w-4" />
              {yearsOfExperience()}+ Years Experience
            </Badge>
            <button
              type="button"
              className="group inline-block transition"
              onClick={() => {
                if (analytics) {
                  logEvent(analytics, "techgrity_badge_click", {
                    label: "Founder, Techgrity Badge",
                    location: "Hero Section",
                  });
                }
                window.open("https://techgrity.github.io", "_blank");
              }}
            >
              <Badge
                variant="secondary"
                className="border-gray-600 bg-gray-800 px-4 py-2 text-lg text-blue-300 transition-all duration-200 group-hover:scale-105 group-hover:border-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-lg"
              >
                <Code className="mr-2 h-4 w-4 transition group-hover:text-white" />
                Founder, Techgrity
              </Badge>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 md:flex md:flex-row md:justify-center">
            <Button
              size="lg"
              className="w-full bg-white font-medium text-black transition-all duration-300 hover:bg-gray-200 md:w-auto"
              onClick={() => onGithubButtonClicked("Hero")}
            >
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-white font-medium text-black transition-all duration-300 hover:bg-gray-200 md:w-auto"
              onClick={() => onEmailButtonClicked("Hero")}
            >
              <Mail className="h-5 w-5" />
              Contact Me
            </Button>
            <Button
              size="lg"
              className="w-full bg-white font-medium text-black transition-all duration-300 hover:bg-gray-200 md:w-auto"
              onClick={() => onLinkedinButtonClicked("Hero")}
            >
              <Linkedin className="h-5 w-5" />
              Linkedin
            </Button>
            <Button
              size="lg"
              className="w-full bg-white font-medium text-black transition-all duration-300 hover:bg-gray-200 md:w-auto"
              onClick={() => onMediumButtonClicked("Hero")}
            >
              Medium Blog
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={User}
            title="About Me"
            subtitle="Lead software engineer with global experience and academic excellence"
          />

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Card className="border-gray-700 bg-gray-900/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  {portfolioData.education.map((edu, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-400 pl-4"
                    >
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-blue-400">{edu.school}</p>
                      <p className="text-sm text-gray-400">{edu.period}</p>
                      {edu.honors && (
                        <p className="text-sm text-cyan-400">{edu.honors}</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-6 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  {portfolioData.expertise.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-white">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={Briefcase}
            title="Professional Experience"
            subtitle="Building scalable solutions at leading technology companies"
          />

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <Card
                  key={index}
                  className="border-gray-700 bg-gray-900/50 backdrop-blur-md"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center text-lg text-white md:text-2xl">
                          <Building className="mr-3 hidden h-5 w-5 text-blue-400 md:block" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-blue-400 md:text-lg">
                          {exp.company}
                        </CardDescription>
                        {/* <p className="text-gray-400 text-sm flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </p> */}
                      </div>
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap border-gray-600 text-xs text-gray-300"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
                          <div className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={Sparkles}
            title="Featured Projects"
            subtitle="Innovative solutions with real-world impact"
          />

          {/* Featured Projects Carousel */}
          <div className="relative mx-auto mb-12 max-w-5xl">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project) => {
                  const projectImages = project.images || [
                    "/placeholder.svg?height=300&width=500",
                  ];
                  const currentImg = currentImageIndex[project.id] || 0;

                  return (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <Card
                        className="mx-4 flex h-full max-h-[80vh] flex-col justify-center border-gray-700 bg-gray-900/50 backdrop-blur-md"
                        style={{ maxHeight: "80vh" }}
                      >
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="relative flex flex-col justify-center overflow-hidden rounded-l-lg">
                            <div className="relative">
                              <Image
                                src={
                                  projectImages[currentImg] ||
                                  "/placeholder.svg"
                                }
                                alt={`${project.title} - Image ${currentImg + 1}`}
                                width={500}
                                height={300}
                                className="h-64 w-full rounded-md object-contain md:h-full"
                              />

                              {projectImages.length > 1 && (
                                <>
                                  <button
                                    onClick={() =>
                                      prevImage(
                                        project.id,
                                        projectImages.length,
                                      )
                                    }
                                    className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/70"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft className="h-4 w-4" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      nextImage(
                                        project.id,
                                        projectImages.length,
                                      )
                                    }
                                    className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/70"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                  </button>

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

                            {project.status && (
                              <div className="absolute right-4 top-4">
                                <Badge className="bg-blue-600 text-white">
                                  {project.status}
                                </Badge>
                              </div>
                            )}
                          </div>
                          <div className="p-6">
                            <div className="mb-4 flex items-start justify-between">
                              <h3 className="text-2xl font-bold text-white">
                                {project.title}
                              </h3>
                              {project.year && (
                                <span className="text-sm text-gray-400">
                                  {project.year}
                                </span>
                              )}
                            </div>
                            <p
                              className="mb-6 line-clamp-3 text-gray-300 md:line-clamp-6"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {project.description}
                            </p>
                            <div className="space-y-4">
                              {project.technologies &&
                                project.technologies.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies
                                      .slice(0, 4)
                                      .map((tech) => (
                                        <Badge
                                          key={tech}
                                          variant="secondary"
                                          className="border-gray-600 bg-gray-800 text-gray-300"
                                        >
                                          {tech}
                                        </Badge>
                                      ))}
                                    {project.technologies.length > 4 && (
                                      <Badge
                                        variant="secondary"
                                        className="border-gray-600 bg-gray-800 text-gray-300"
                                      >
                                        +{project.technologies.length - 4} more
                                      </Badge>
                                    )}
                                  </div>
                                )}

                              {project.highlights &&
                                project.highlights.length > 0 && (
                                  <div className="space-y-2">
                                    <h4 className="font-semibold text-white">
                                      Key Impact:
                                    </h4>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                      {project.highlights.map(
                                        (highlight, idx) => (
                                          <li
                                            key={idx}
                                            className="flex items-center"
                                          >
                                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                            {highlight}
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                )}

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
                                              location: "Projects Section",
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
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800/80 p-2 text-white transition-colors hover:bg-gray-700"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800/80 p-2 text-white transition-colors hover:bg-gray-700"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="mt-6 flex justify-center space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentProject ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-white font-medium text-black hover:bg-gray-200"
                onClick={() => {
                  if (analytics) {
                    logEvent(analytics, "view_all_projects_click", {
                      label: "View All Projects Button",
                      location: "Projects Section",
                    });
                  }
                }}
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - 3x3 Grid */}
      <section id="skills" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={Target}
            title="Technical Skills"
            subtitle="Expertise across the full technology stack"
          />

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {portfolioData.skillCategories.map((category) => (
              <Card
                key={category.name}
                className="border-gray-700 bg-gray-900/50 backdrop-blur-md"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex justify-between text-white">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-700">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={Trophy}
            title="Achievements & Recognition"
            subtitle="Awards, certifications, and recognition from industry leaders"
          />

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-gray-700 bg-gray-900/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="mb-2 text-3xl">{achievement.icon}</div>
                    <Badge
                      variant="outline"
                      className={`border-gray-600 text-xs ${
                        achievement.type === "Competition"
                          ? "border-yellow-400 text-yellow-400"
                          : achievement.type === "Certification"
                            ? "border-blue-400 text-blue-400"
                            : achievement.type === "Leadership"
                              ? "border-green-400 text-green-400"
                              : "text-gray-400"
                      }`}
                    >
                      {achievement.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight text-white">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-blue-400">
                    {achievement.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-sm text-gray-300">
                    {achievement.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    {achievement.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Resume Preview */}
      <section id="contact" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            icon={Mail}
            title="Let's Work Together"
            subtitle="Ready to bring your next project to life? Let's discuss how we can collaborate to achieve your goals."
          />

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Resume Preview */}
            <div className="space-y-6">
              <Card className="border-gray-700 bg-gray-900/50 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <FileText className="mr-3 h-6 w-6 text-blue-400" />
                    Resume
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    View my complete resume online
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-semibold text-white">
                        Ken Wuttisasiwat - Resume
                      </h4>
                      <Badge className="bg-blue-600 text-white">
                        Google Doc
                      </Badge>
                    </div>
                    <p className="mb-4 text-sm text-gray-300">
                      Lead Software Engineer with {yearsOfExperience()}+ years
                      of experience, and proven track record in scaling global
                      platforms.
                    </p>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="bg-white font-medium text-black hover:bg-gray-200"
                        onClick={() => {
                          if (analytics) {
                            logEvent(analytics, "resume_view_online_click", {
                              label: "Resume View Online Button",
                              location: "Contact Section",
                            });
                          }

                          // Open the resume
                          window.open(
                            portfolioData.personalInfo.resumeUrl,
                            "_blank",
                          );
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card
                  className="border-gray-700 bg-gray-900/50 backdrop-blur-md transition hover:cursor-pointer hover:bg-gray-800/80"
                  onClick={() => onEmailButtonClicked("Contact")}
                >
                  <CardContent className="p-6 text-center">
                    <Mail className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                    <h3 className="mb-2 font-semibold text-white">Email</h3>
                    <p className="text-sm text-gray-400">
                      {portfolioData.personalInfo.email}
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="border-gray-700 bg-gray-900/50 backdrop-blur-md transition hover:cursor-pointer hover:bg-gray-800/80"
                  onClick={() => onLinkedinButtonClicked("Contact")}
                >
                  <CardContent className="p-6 text-center">
                    <Linkedin className="mx-auto mb-4 h-12 w-12 text-blue-500" />
                    <h3 className="mb-2 font-semibold text-white">LinkedIn</h3>
                    <p className="text-sm text-gray-400">
                      {portfolioData.personalInfo.linkedin}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-700 bg-gray-900/50 backdrop-blur-md">
                  <CardContent className="p-6 text-center">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-green-400" />
                    <h3 className="mb-2 font-semibold text-white">Location</h3>
                    <p className="text-sm text-gray-400">
                      {portfolioData.personalInfo.location}
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="border-gray-700 bg-gray-900/50 backdrop-blur-md transition hover:cursor-pointer hover:bg-gray-800/80"
                  onClick={() => onGithubButtonClicked("Contact")}
                >
                  <CardContent className="p-6 text-center">
                    <Github className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h3 className="mb-2 font-semibold text-white">Github</h3>
                    <p className="text-sm text-gray-400">
                      {portfolioData.personalInfo.github}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 px-4 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} {portfolioData.personalInfo.name}.
            Built with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
