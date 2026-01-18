import { Button } from "@/components/ui/button"
import { CornerUpRight } from 'lucide-react';
import {MessageCircle} from "lucide-react"

interface HeaderProps {
  onSkip?: () => void
}

export default function Header({ onSkip }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      
      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2">
        {/* <img
          src="/icons/message.svg"
          alt="ButterChat"
          className="w-7 h-7"
        /> */}
        <MessageCircle className="text-primary text-2xl"/>
        <span className="text-primary text-2xl font-medium">
          ButterChat
        </span>
      </div>

      {/* RIGHT: SKIP BUTTON */}
      {onSkip && (
        <Button
          variant="outline"
          onClick={onSkip}
        >
          Skip Now
          <CornerUpRight />
        </Button>
      )}
    </header>
  )
}
