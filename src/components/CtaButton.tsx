import Link from 'next/link'
import { clsx } from 'clsx'

interface CtaButtonProps {
  label: string
  href: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'ghost'
  className?: string
}

export default function CtaButton({
  label,
  href,
  size = 'md',
  variant = 'primary',
  className,
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-md font-medium transition-colors duration-200 inline-block text-center',
        {
          'bg-teal text-white hover:bg-teal-hover': variant === 'primary',
          'border border-[var(--border-md)] text-[var(--text-2)] hover:border-teal hover:text-teal-text': variant === 'ghost',
          'text-sm px-4 py-2': size === 'sm',
          'text-base px-6 py-3': size === 'md',
          'text-lg px-8 py-4': size === 'lg',
        },
        className
      )}
    >
      {label}
    </Link>
  )
}
