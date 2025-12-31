import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Nos Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projets Récents qui Témoignent de Notre{" "}
              <span className="text-secondary">Excellence</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              Voir Tous les Projets
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-background mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-background/80 text-sm">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-background/50" />
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary">
                <ArrowUpRight className="h-5 w-5 text-background" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
