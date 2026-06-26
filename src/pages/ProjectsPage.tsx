import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <section className="flex-1 pt-20 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Retour à l'accueil
            </Link>
          </div>
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Nos Projets
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Toutes nos réalisations
            </h1>
            <p className="text-muted-foreground">
              Un aperçu complet de nos chantiers récents en résidentiel, commercial et industriel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-background mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-background/80 text-sm">
                    <span>{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-background/50" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
