import { clsx } from 'clsx'

interface TerminalBlockProps {
  lines: string[]
  title: string
}

export default function TerminalBlock({ lines, title }: TerminalBlockProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[#050c17] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c940]" />
        <span className="ml-2 font-mono text-xs text-[var(--text-3)]">{title}</span>
      </div>
      <div className="p-5 space-y-1">
        {lines.map((line, i) => {
          const isLast = i === lines.length - 1
          return (
            <div key={i} className="flex items-center">
              <span
                className={clsx('font-mono text-sm', {
                  'text-teal-text': line.startsWith('✓'),
                  'text-red-400': line.startsWith('✗'),
                  'text-amber-400': line.startsWith('⚠'),
                  'text-[var(--text-2)]': line.startsWith('→'),
                  'text-[var(--text-3)]': !line.startsWith('✓') && !line.startsWith('✗') && !line.startsWith('⚠') && !line.startsWith('→'),
                })}
              >
                {line}
              </span>
              {isLast && (
                <span className="inline-block w-2 h-4 bg-teal-text ml-1 cursor-blink" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
