import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type Project = {
  id: string;
  image: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "residence-les-jardins",
    image: project1,
    title: "Résidence Les Jardins",
    category: "Résidentiel",
    location: "Paris 15ème",
    year: "2024",
    description:
      "Construction d'une résidence contemporaine de 48 logements avec espaces verts, finitions premium et optimisation énergétique.",
  },
  {
    id: "tour-horizon-business",
    image: project2,
    title: "Tour Horizon Business",
    category: "Commercial",
    location: "La Défense",
    year: "2023",
    description:
      "Réalisation d'une tour de bureaux de 18 étages intégrant des plateaux modulables et des solutions techniques haute performance.",
  },
  {
    id: "centre-logistique-nord",
    image: project3,
    title: "Centre Logistique Nord",
    category: "Industriel",
    location: "Roissy CDG",
    year: "2023",
    description:
      "Création d'un hub logistique de 12 000 m² avec quais de chargement, zones de stockage et circuit de circulation optimisé.",
  },
  {
    id: "terrasses-d-anfa",
    image: project1,
    title: "Les Terrasses d'Anfa",
    category: "Résidentiel",
    location: "Casablanca",
    year: "2022",
    description:
      "Programme résidentiel de standing avec terrasses panoramiques, matériaux durables et services partagés.",
  },
  {
    id: "campus-innovation",
    image: project2,
    title: "Campus Innovation",
    category: "Commercial",
    location: "Rabat",
    year: "2022",
    description:
      "Développement d'un campus d'entreprises avec espaces collaboratifs, salles de conférence et aménagements paysagers.",
  },
  {
    id: "unite-logistique-atlantique",
    image: project3,
    title: "Unité Logistique Atlantique",
    category: "Industriel",
    location: "Tanger",
    year: "2021",
    description:
      "Construction d'une unité logistique multi-flux avec gestion des accès, sécurité renforcée et zones techniques intégrées.",
  },
];
