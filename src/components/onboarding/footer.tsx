import { ChevronLeft, ChevronRight } from "lucide-react"

interface FooterProps {
  currentPage: number
  totalPages: number
  pageTitles: string[]
  onPrev: () => void
  onNext: () => void
}

export default function Footer({
  currentPage,
  totalPages,
  pageTitles,
  onPrev,
  onNext,
}: FooterProps) {
  const hasPrev = currentPage > 1
  const isLast = currentPage === totalPages

  return (
    <footer className="w-full flex items-center justify-between">
      
      {/* PREVIOUS */}
      {hasPrev ? (
        <div
          onClick={onPrev}
          role="button"
          tabIndex={0}
          className="flex items-center gap-1 cursor-pointer"
        >
          <ChevronLeft size={28} />
          <span className="text-muted-foreground text-sm lg:text-base hover:text-foreground transition">{pageTitles[currentPage - 2]}</span>
        </div>
      ) : (
        <div />
      )}

      {/* NEXT / HOME */}
      <div
        onClick={onNext}
        role="button"
        tabIndex={0}
        className="flex items-center gap-1 cursor-pointer"
      >
        <span className="text-muted-foreground text-sm lg:text-base hover:text-foreground transition">{isLast ? "Home Page" : pageTitles[currentPage]}</span>
        <ChevronRight size={28} />
      </div>
    </footer>
  )
}
