export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[var(--text-3)] font-mono text-xs">
        <span>© 2026 Velraq Ltd · velraq.com</span>
        <span>UK Data Residency: eu-west-2 · FCA SYSC 9.1</span>
      </div>
    </footer>
  )
}
