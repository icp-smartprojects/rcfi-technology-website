import Link from 'next/link'

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-600">
      {items?.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-neutral-400">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-primary-600 hover:text-primary-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
