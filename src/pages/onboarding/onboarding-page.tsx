import { useState } from "react"
import Header from "@/components/onboarding/header"
import PaginationDots from "@/components/onboarding/pagination-dots"
import ProfileUpdateCard from "@/components/profile/profile-update-card"
import ConnectResourcesCard from "@/components/connect/connect-resources-card"
import CreateAgentCard from "@/components/agent/create-agent-card"
import { useNavigate } from "react-router-dom"


interface OnboardingStepProps {
  isFirst: boolean
  isLast: boolean
}



export default function Onboarding() {
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  const pages: React.ComponentType<OnboardingStepProps>[] = [
    ProfileUpdateCard,
    ConnectResourcesCard,
    CreateAgentCard,
  ]

  const handleSkip = () => {
    if (currentPage < pages.length) {
      setCurrentPage(p => p + 1)
    } else {
      navigate("/")
    }
  }
  const CurrentPage = pages[currentPage - 1]
  return (
    <div className="min-h-screen flex flex-col p-6 lg:p-8">
      <Header onSkip={handleSkip} />

      <main className="flex-1 flex items-center justify-center lg:p-8 py-4">
        <div className="w-full max-w-md">
          <CurrentPage
            isFirst={currentPage === 1}
            isLast={currentPage === pages.length}
          />
        </div>
      </main>
      <PaginationDots
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
