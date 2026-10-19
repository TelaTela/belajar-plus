import { ActivityList } from "@/components/activity-list";
import { PageSectionTitle } from "@/components/page-section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDownIcon, EllipsisVerticalIcon } from "lucide-react";
import Link from "next/link";

export default function ActivityListPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PageSectionTitle
          title="Daftar Aktivitas"
          description="Kelola aktivitas, status publikasi, dan materi kerja kelompok."
          actions={
            <Link href="/activities/new">
              <Button size="lg" className="h-12">
                Buat Aktivitas
              </Button>
            </Link>
          }
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="font-semibold">3 aktivitas</span>
          <span className="text-muted-foreground text-sm flex gap-1 justify-between items-center">
            Terbaru
            <ChevronDownIcon />
          </span>
        </div>

        <ActivityList />
      </div>
    </>
  );
}
