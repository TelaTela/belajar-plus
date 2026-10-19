import { ActivityForm } from "@/components/activity-form";
import { PageSectionTitle } from "@/components/page-section-title";
import { Button } from "@/components/ui/button";

export default function NewActivityPage() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <PageSectionTitle
          title="Builder Aktivitas"
          description="Susun informasi dasar dan materi untuk aktivitas."
          actions={
            <>
              <Button
                variant="outline"
                className="border-primary text-primary h-12"
              >
                Simpan draf
              </Button>
              <Button type="submit" form="new-activity-form" className="h-12">
                Lanjut ke kuis
              </Button>
            </>
          }
        />

        <ActivityForm id="new-activity-form" />
      </div>
    </>
  );
}
