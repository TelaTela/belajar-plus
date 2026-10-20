import {
  QuizCard,
  QuizIsEmpty,
  QuizList,
} from "@/components/activity-quiz-list";
import { PageSectionTitle } from "@/components/page-section-title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { getActivity } from "@/lib/mock-data/activities";
import { CircleAlertIcon, PlusIcon, TriangleAlertIcon } from "lucide-react";

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const activity = getActivity(id);

  if (!activity) {
    return (
      <>
        <Card>
          <CardContent>Not Found</CardContent>
        </Card>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <PageSectionTitle
          title={activity.name}
          description={`Diperbarui tanggal ${activity.updated_at.toDateString()}`}
          actions={
            <>
              <Button className="h-12">Perbarui Informasi</Button>
            </>
          }
        />

        <Card>
          <CardHeader>
            <CardTitle>Daftar Kuis</CardTitle>
            <CardDescription>
              Kuis formatif yang dikerjakan peserta sebelum ujian.
            </CardDescription>
            <CardAction>
              <Button>
                <PlusIcon data-icon="inline-start" /> Tambah Kuis
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {activity.quizzes ? (
              <QuizList quizzes={activity.quizzes} />
            ) : (
              <QuizIsEmpty />
            )}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ujian</CardTitle>
            <CardDescription>
              Evaluasi akhir setelah seluruh kuis selesai.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Kuis</CardTitle>
            <CardDescription>
              Akun kelompok yang akan mengakses aktivitas.
            </CardDescription>
            <CardAction>
              <Button>
                <PlusIcon data-icon="inline-start" /> Tambah Kelompok
              </Button>
            </CardAction>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
