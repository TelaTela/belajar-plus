"use client";

import { PlusIcon, TriangleAlertIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress, ProgressLabel, ProgressValue } from "./ui/progress";
import { Quiz } from "@/lib/mock-data/activities";

function QuizIsEmpty() {
  return (
    <div className="flex flex-col justify-center items-center text-center border rounded-lg gap-3 px-6 py-8 border-dashed">
      <span className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <TriangleAlertIcon className="size-8" />
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-sm font-medium">Tidak Ada Kuis Ditemukan</span>
        <span id="file-upload-help" className="text-xs text-muted-foreground">
          Mulai membuat kuis dengan menekan tombol di bawah.
        </span>
      </span>
      <Button variant="outline">
        <PlusIcon data-icon="inline-start" /> Tambah Kuis
      </Button>
    </div>
  );
}

function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{quiz.title}</CardTitle>
        <CardDescription>5 Soal - Total skor 100</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={3} max={5}>
          <ProgressLabel>Progress Pengerjaan</ProgressLabel>
          <ProgressValue>
            {(formattedValue, value) => (
              <span>
                {value} dari {5} kelompok telah menyelesaikan
              </span>
            )}
          </ProgressValue>
        </Progress>
      </CardContent>
      <CardFooter className="flex">
        <Button className="grow">Kelola Kuis</Button>
      </CardFooter>
    </Card>
  );
}

function QuizList({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {quizzes?.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}

export { QuizIsEmpty, QuizCard, QuizList };
