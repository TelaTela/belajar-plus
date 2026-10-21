import { PageSectionTitle } from "@/components/page-section-title";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuiz } from "@/lib/mock-data/activities";

export default async function QuizBuilderPage({
  params,
}: {
  params: Promise<{ id: string; quizId: string }>;
}) {
  const { id, quizId } = await params;
  const quiz = getQuiz(id, quizId);
  return (
    <>
      <div className="flex flex-col gap-6">
        <PageSectionTitle
          title={`Builder Kuis - ${quiz?.title}`}
          description={`Susun rangkaian pertanyaan untuk "${quiz?.title}"`}
        />

        <div className="grid grid-cols-4 gap-4">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Daftar Soal</CardTitle>
            </CardHeader>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Soal #</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
}
