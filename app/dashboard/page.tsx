import { RecentActivityList } from "@/components/recent-activity";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold">
              Selamat datang, nama user
            </h1>
            <span className="text-sm text-muted-foreground">
              Pantau aktivitas terbaru dan kelola pembelajaran kelompok dari
              satu tempat.
            </span>
          </div>

          <div>
            <Button size="lg" className="h-12">
              Buat Aktivitas Baru
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Aktivitas Terbaru</h1>
            <span className="text-sm text-muted-foreground">
              Perubahan terbaru dari seluruh kelas yang Anda kelola.
            </span>
          </div>

          <div>
            <Button size="lg" variant="link" className="h-12">
              <Link href="/activities">Lihat semua aktivitas</Link>
            </Button>
          </div>
        </div>

        <RecentActivityList />
      </div>
    </>
  );
}
