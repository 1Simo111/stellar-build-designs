import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">Retour aux projets</Link>
              </Button>
              <Button variant="default" size="lg" asChild>
                <Link to="/">Retour à l'accueil</Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <span>{project.location}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span>{project.year}</span>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
