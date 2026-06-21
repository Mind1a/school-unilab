export type FilterOption = {
  id: number;
  label: string;
  value: string;
  icons: {
    default: string;
    hovered: string;
    checked: string;
  };
};

export const projectFilters: FilterOption[] = [
  {
    id: 1,
    label: "ციფრული პროექტი",
    value: "digital-project",
    icons: {
      default: "/images/project/checkbox.svg",
      hovered: "/images/project/checkbox-hovered.svg",
      checked: "/images/project/checkbox-marked.svg",
    },
  },
  {
    id: 2,
    label: "კონკურსი",
    value: "contest",
    icons: {
      default: "/images/project/checkbox.svg",
      hovered: "/images/project/checkbox-hovered.svg",
      checked: "/images/project/checkbox-marked.svg",
    },
  },
  {
    id: 3,
    label: "ჰაკათონი",
    value: "hackathon",
    icons: {
      default: "/images/project/checkbox.svg",
      hovered: "/images/project/checkbox-hovered.svg",
      checked: "/images/project/checkbox-marked.svg",
    },
  },
  {
    id: 4,
    label: "ვორქშოპი",
    value: "workshop",
    icons: {
      default: "/images/project/checkbox.svg",
      hovered: "/images/project/checkbox-hovered.svg",
      checked: "/images/project/checkbox-marked.svg",
    },
  },
  {
    id: 5,
    label: "კონფერენცია",
    value: "conference",
    icons: {
      default: "/images/project/checkbox.svg",
      hovered: "/images/project/checkbox-hovered.svg",
      checked: "/images/project/checkbox-marked.svg",
    },
  },
];
