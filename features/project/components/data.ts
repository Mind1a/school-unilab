export type ProjectData = {
  id: number;
  image: string;
  title: string;
  date: string;
  dateTime: string;
  href: string;
};

const baseProjects = [
  {
    image: "/images/discover-projects/photo-1.png",
    title: "ვიზუალური პროგრამირების ვორკშოპი",
    date: "12 ივნ 2026",
    dateTime: "2026-06-12",
    href: "#",
  },
  {
    image: "/images/discover-projects/photo-2.jpg",
    title: "პროექტის მოკლე აღწერა",
    date: "15 ივნ 2026",
    dateTime: "2026-06-15",
    href: "#",
  },
  {
    image: "/images/discover-projects/photo-3.jpg",
    title: "პროექტის მოკლე აღწერა პროექტის მოკლე აღწერა",
    date: "18 ივნ 2026",
    dateTime: "2026-06-18",
    href: "#",
  },
];

export const projectsData: ProjectData[] = Array.from(
  { length: 180 },
  (_, index) => {
    const project = baseProjects[index % baseProjects.length];

    return {
      id: index + 1,
      ...project,
    };
  },
);
