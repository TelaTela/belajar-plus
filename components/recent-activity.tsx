import { VariantProps } from "class-variance-authority";
import { Badge, badgeVariants } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  type Activity,
  getRecent as getRecentActivities,
} from "@/lib/mock-data/activities";
import { Button } from "./ui/button";
import { EllipsisVerticalIcon, SquarePenIcon, TrashIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function RecentActivityCard({ name, isActive, updatedAt }: Activity) {
  let badgeVariant: VariantProps<typeof badgeVariants>["variant"] = isActive
    ? "success"
    : "destructive";
  let badgeTitle = isActive ? "Aktif" : "Nonaktif";

  const diffInMs = Math.abs(Date.now() - updatedAt.valueOf());
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <Card>
      <CardContent className="grid grid-cols-5 items-center">
        <div className="col-span-4">
          <div className="flex justify-between">
            <h1 className="font-semibold">{name}</h1>
            <div className="flex justify-between gap-2">
              <Badge variant={badgeVariant} className="w-24 text-sm">
                {badgeTitle}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {diffInDays <= 7
                  ? `Diperbarui ${diffInDays} hari yang lalu`
                  : updatedAt.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-row justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon-lg" />}
            >
              <EllipsisVerticalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <SquarePenIcon />
                Kelola
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TrashIcon />
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}

function RecentActivityList() {
  return (
    <div className="flex flex-col gap-3">
      {getRecentActivities().map((activity, index) => (
        <RecentActivityCard key={index} {...activity} />
      ))}
    </div>
  );
}

export { RecentActivityCard, RecentActivityList };
