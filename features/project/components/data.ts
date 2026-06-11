export type ProjectData = {
  id: number;
  image: string;
  title: string;
  date: string;
  dateTime: string;
  href: string;
};

export const projectsData: ProjectData[] = [
  {
    id: 1,
    image: "/images/discover-projects/photo-1.png",
    title: "ვიზუალური პროგრამირების ვორკშოპი",
    date: "12 ივნ 2026",
    dateTime: "2026-06-12",
    href: "#",
  },
  {
    id: 2,
    image: "/images/discover-projects/photo-2.jpg",
    title: "პროექტის მოკლე აღწერა",
    date: "15 ივნ 2026",
    dateTime: "2026-06-15",
    href: "#",
  },
  {
    id: 3,
    image: "/images/discover-projects/photo-3.jpg",
    title: "პროექტის მოკლე აღწერა პროექტის მოკლე აღწერა",
    date: "18 ივნ 2026",
    dateTime: "2026-06-18",
    href: "#",
  },
];
