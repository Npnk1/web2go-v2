type EmphasisTextProps = {
  text: string;
  emphasis?: string;
  className?: string;
};

export function EmphasisText({ text, emphasis, className = "text-cobalt-600" }: EmphasisTextProps) {
  if (!emphasis) {
    return <>{text}</>;
  }

  const start = text.indexOf(emphasis);
  if (start === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, start)}
      <span className={className}>{emphasis}</span>
      {text.slice(start + emphasis.length)}
    </>
  );
}
