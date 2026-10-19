import { AnyFieldApi } from "@tanstack/react-form-nextjs";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Field, FieldDescription, FieldError, FieldLabel } from "./ui/field";
import {
  FileTextIcon,
  FileVideoCameraIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type ActivityFileUploadProps = {
  field: AnyFieldApi;
};

function formatFileSize(bytes: number) {
  const ONE_MB = 1024 * 1024;
  if (bytes < ONE_MB) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / ONE_MB).toFixed(1)} MB`;
}

const ActivityFileUpload = forwardRef<
  HTMLInputElement,
  ActivityFileUploadProps
>(({ field, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const setRefs = (node: HTMLInputElement) => {
    inputRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  const name = field.name as "slide_material" | "video_material";

  const file = field.state.value as unknown as File;

  const label = name === "slide_material" ? "Slide (PDF)" : "Video (MP4)";

  function selectFile(nextFile: File | undefined) {
    if (!nextFile) return;

    field.handleChange(nextFile);
  }

  function clearFile() {
    field.setValue(null);
    field.setMeta((prev) => ({
      ...prev,
      isTouched: false,
      isBlurred: false,
    }));
    field.handleChange(null);
  }

  function openFilePicker() {
    inputRef.current?.click();
  }

  return (
    <Field data-invalid={isInvalid}>
      <div className="flex flex-col gap-1">
        <FieldLabel htmlFor={name}>{label}</FieldLabel>
        {isInvalid ? (
          <FieldError id="file-upload-error" errors={field.state.meta.errors} />
        ) : (
          <FieldDescription>
            Berkas {name === "slide_material" ? "PDF" : "MP4"} - Maksimum 500MB
          </FieldDescription>
        )}
      </div>

      <div
        className={`rounded-xl border border-dashed p-1 transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-border"}`}
        onDragEnter={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={(e) => {
          e.preventDefault();
          if (e.currentTarget === e.target) setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          selectFile(e.dataTransfer.files[0]);
        }}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={openFilePicker}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openFilePicker();
            }
          }}
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg px-6 py-8 text-center outline-none transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-describedby={
            isInvalid ? "file-upload-error" : "file-upload-help"
          }
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <UploadCloudIcon aria-hidden="true" className="size-5" />
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-sm font-medium">
              {isDragging
                ? "Lepas berkas anda di sini"
                : "Pilih berkas atau tarik dan lepas di sini"}
            </span>
            <span
              id="file-upload-help"
              className="text-xs text-muted-foreground"
            >
              Berkas {name === "slide_material" ? "PDF" : "MP4"} - Maksimum
              500MB
            </span>
          </span>

          <input
            ref={inputRef}
            id={field.name}
            name={field.name}
            type="file"
            className="sr-only"
            onChange={(e) => field.handleChange(e.target.files?.[0])}
            aria-invalid={isInvalid}
          />
        </div>
      </div>

      {file && (
        <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-background text-muted-foreground">
            {file.type === "application/pdf" ? (
              <FileTextIcon aria-hidden="true" className="size-4" />
            ) : (
              <FileVideoCameraIcon aria-hidden="true" className="size-4" />
            )}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium">
              {file.name}
            </span>
            <span className="block text-xs text-muted-foreground">
              {formatFileSize(file.size)}
            </span>
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={clearFile}
            aria-label={`Remove ${file.name}`}
          >
            <XIcon aria-hidden="true" />
          </Button>
        </div>
      )}
    </Field>
  );
});

export { ActivityFileUpload };
