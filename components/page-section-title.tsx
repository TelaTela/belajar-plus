type PageSectionTitleProps = {
  title: string;
  description?: string;
  actions?: React.JSX.Element;
};

function PageSectionTitle({
  title,
  description,
  actions,
}: PageSectionTitleProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </div>

      {actions ?? <div>{actions}</div>}
    </div>
  );
}

export { PageSectionTitle };
export type { PageSectionTitleProps };
