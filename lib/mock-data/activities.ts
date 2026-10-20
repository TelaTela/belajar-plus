type Activity = {
  id: string;
  name: string;
  description?: string;
  is_active: boolean;
  quizzes?: Quiz[];
  created_at: Date;
  updated_at: Date;
};

type Quiz = {
  id: string;
  activity_id: string;
  title: string;
  practice_video_url?: string;
  created_at: Date;
  updated_at: Date;
};

const activities: Activity[] = [
  {
    id: "56a647eb-05cb-4542-bc01-b26d61646cac",
    name: "Aktivitas 1",
    description: "Contoh aktivitas",
    is_active: true,
    quizzes: [
      {
        id: "df4dace9-4d8a-4333-abf8-2ac5d3b8d8d7",
        activity_id: "56a647eb-05cb-4542-bc01-b26d61646cac",
        title: "Kuis 1",
        created_at: new Date(2026, 9, 11, 10, 25, 13),
        updated_at: new Date(2026, 9, 11, 10, 25, 13),
      },
    ],
    created_at: new Date(2026, 9, 11, 10, 25, 13),
    updated_at: new Date(2026, 9, 11, 10, 25, 13),
  },
  {
    id: "971231e1-2815-4b35-b5f6-ad5d52372172",
    name: "Aktivitas 2",
    is_active: true,
    created_at: new Date(2026, 9, 10, 11, 2, 39),
    updated_at: new Date(2026, 9, 10, 11, 2, 39),
  },
  {
    id: "c540b6c1-018a-4f3a-9a03-30fbd3b20697",
    name: "Aktivitas 3",
    is_active: false,
    created_at: new Date(2026, 9, 8, 15, 3, 57),
    updated_at: new Date(2026, 9, 8, 15, 3, 57),
  },
  {
    id: "93fcced8-8048-4bd5-ba64-8f7be481345a",
    name: "Aktivitas 4",
    is_active: false,
    created_at: new Date(2026, 9, 7, 15, 3, 57),
    updated_at: new Date(2026, 9, 7, 15, 3, 57),
  },
  {
    id: "1a4958c5-3ba9-44cc-8fcb-d3b55be54d97",
    name: "Aktivitas 5",
    is_active: false,
    created_at: new Date(2026, 9, 6, 15, 3, 57),
    updated_at: new Date(2026, 9, 6, 15, 3, 57),
  },
];

function getRecent(limit: number = 3) {
  return activities.slice(0, limit);
}

function getActivity(id: string) {
  return activities.find((activity) => activity.id === id);
}

export { activities, getRecent, getActivity };

export type { Activity, Quiz };
