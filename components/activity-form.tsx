"use client";

import { useForm } from "@tanstack/react-form-nextjs";
import z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Field, FieldDescription, FieldError, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { ComponentProps, useRef } from "react";
import { ActivityFileUpload } from "./activity-file-upload";

const formSchema = z.object({
  name: z.string().min(1, { error: "Nama aktivitas wajib diisi." }),
  description: z.string().min(1, { error: "Deskripsi aktivitas wajib diisi." }),
  slide_material: z
    .file({ error: "Slide material pembelajaran wajib diisi." })
    .max(500 * 1024 * 1024, {
      error: "Ukuran berkas melebihi batas maksimum 500MB.",
    })
    .mime(["application/pdf"], {
      error: "Tipe berkas tidak sesuai. Slide materi harus bertipe PDF.",
    }),
  video_material: z
    .file({ error: "Video material pembelajaran wajib diisi." })
    .max(500 * 1024 * 1024, {
      error: "Ukuran berkas melebihi batas maksimum 500MB.",
    })
    .mime(["video/mp4"], {
      error: "Tipe berkas tidak sesuai. Video materi harus bertipe MP4.",
    }),
});

type ActivityFormValues = z.infer<typeof formSchema>;

function ActivityForm(props: ComponentProps<"form">) {
  const form = useForm({
    validators: {
      onSubmit: formSchema,
      onChange: formSchema,
    },
    defaultValues: {
      name: "",
      description: "",
      slide_material: null as unknown as File,
      video_material: null as unknown as File,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const slideMaterialRef = useRef<HTMLInputElement>(null);
  const videoMaterialRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      {...props}
    >
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Informasi Aktivitas</CardTitle>
          <CardDescription>
            Berikan nama yang mudah dikenali dan jelaskan tujuan pembelajaran
            aktivitas.
          </CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          <div className="grid grid-cols-2">
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Nama Aktivitas</FieldLabel>
                    <Input
                      className="w-full max-w-sm"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Isi nama aktivitas"
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Deskripsi</FieldLabel>
                    <Input
                      className="w-full max-w-sm"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Isi deskripsi aktivitas"
                      aria-invalid={isInvalid}
                    />
                    {!isInvalid ? (
                      <FieldDescription>
                        Ditampilkan pada halaman aktivitas peserta.
                      </FieldDescription>
                    ) : (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materi Pembelajaran</CardTitle>
          <CardDescription>Unggah materi pembelajaran utama.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <form.Field
              name="slide_material"
              children={(field) => (
                <ActivityFileUpload field={field} ref={slideMaterialRef} />
              )}
            />

            <form.Field
              name="video_material"
              children={(field) => (
                <ActivityFileUpload field={field} ref={videoMaterialRef} />
              )}
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export { ActivityForm };
export type { ActivityFormValues };
