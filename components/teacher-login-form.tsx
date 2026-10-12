"use client";

import { cn } from "cn";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Badge } from "./ui/badge";
import z from "zod";
import { useForm } from "@tanstack/react-form-nextjs";

const passwordValidationRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
);

const formSchema = z.object({
  email: z.email("Email tidak valid").nonempty({ error: "Email wajib diisi." }),
  password: z
    .string("Sandi tidak valid")
    .nonempty({ error: "Sandi wajib diisi." }),
  // .min(6, "Panjang sandi minimal 6 karakter")
  // .regex(passwordValidationRegex, {
  //   error:
  //     "Sandi harus terdiri dari setidaknya satu huruf kapital, satu huruf kecil, dan satu karakter spesial.",
  // }),
});

export function TeacherLoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="box-content px-8 py-10">
        <CardHeader className="gap-4">
          <CardTitle className="flex flex-col items-center gap-2">
            <Badge className="bg-primary/20 text-primary">Portal Guru</Badge>
            <h1 className="text-3xl font-semibold">Login Guru</h1>
          </CardTitle>
          <CardDescription className="text-center">
            Masuk untuk mengelola aktivitas belajar dan akun kelompok.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup className="gap-6">
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        className="px-4 py-5"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="user@mail.com"
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <div className="flex items-center">
                        <FieldLabel htmlFor={field.name}>Sandi</FieldLabel>
                      </div>
                      <Input
                        id={field.name}
                        name={field.name}
                        className="px-4 py-5"
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Kata sandi anda"
                      />

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <Field className="gap-6">
                <Button
                  className="px-4 py-5 hover:cursor-pointer"
                  type="submit"
                >
                  Masuk
                </Button>
                <FieldDescription className="text-center">
                  Akun dikelola oleh administrator sekolah
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
