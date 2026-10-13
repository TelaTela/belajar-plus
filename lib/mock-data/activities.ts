type Activity = {
  name: string;
  isActive: boolean;
  updatedAt: Date;
};

const activities: Activity[] = [
  {
    name: "Aktivitas 1",
    isActive: true,
    updatedAt: new Date(2026, 9, 11, 10, 25, 13),
  },
  {
    name: "Aktivitas 2",
    isActive: true,
    updatedAt: new Date(2026, 9, 10, 11, 2, 39),
  },
  {
    name: "Aktivitas 3",
    isActive: false,
    updatedAt: new Date(2026, 9, 8, 15, 3, 57),
  },
  {
    name: "Aktivitas 4",
    isActive: false,
    updatedAt: new Date(2026, 9, 7, 15, 3, 57),
  },
  {
    name: "Aktivitas 5",
    isActive: false,
    updatedAt: new Date(2026, 9, 6, 15, 3, 57),
  },
];

function getRecent(limit: number = 3) {
  return activities.slice(0, limit);
}

export { activities, getRecent };

export type { Activity };
