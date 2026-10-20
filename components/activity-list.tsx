import { activities, type Activity } from "@/lib/mock-data/activities";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";
import { EllipsisVerticalIcon } from "lucide-react";
import { type VariantProps } from "class-variance-authority";
import Link from "next/link";

function ActivityCard({
  id,
  name,
  is_active: isActive,
  updated_at: updatedAt,
}: Activity) {
  let badgeVariant: VariantProps<typeof badgeVariants>["variant"] = isActive
    ? "success"
    : "destructive";
  let badgeTitle = isActive ? "Aktif" : "Nonaktif";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 justify-between">
          <h2>{name}</h2>
          <Badge variant={badgeVariant} className="w-20">
            {badgeTitle}
          </Badge>
        </CardTitle>
        <CardDescription>
          5 Kelompok - Dibuat {updatedAt.toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardFooter className="gap-2">
        <Link className="grow" href={`/activities/${id}`}>
          <Button className="w-full">Kelola Aktivitas</Button>
        </Link>
        <Button variant="outline" size="icon">
          <EllipsisVerticalIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}

function ActivityList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {activities.map((activity, index) => (
        <ActivityCard key={activity.id} {...activity} />
      ))}
    </div>
  );
}

export { ActivityCard, ActivityList };
