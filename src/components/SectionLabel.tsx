interface SectionLabelProps {
  text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-3)] border-l-2 border-teal pl-3 mb-4">
      {text}
    </p>
  )
}
