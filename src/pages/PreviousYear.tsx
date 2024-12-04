import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card-description"
import { FileText } from "lucide-react"

export default function PreviousYear() {
  const papers = [
    {
      title: "CHY1005",
      description: "Final examination paper with solutions",
      link: "https://drive.google.com/drive/folders/1hcHRldl1vmyyQRekhSMxcapO7UhIF-vF?usp=sharing",
      subject: "CHEMISTRY"
    },
    {
      title: "CHY1005",
      description: "Complete question paper with marking scheme",
      link: "https://drive.google.com/drive/folders/1hcHRldl1vmyyQRekhSMxcapO7UhIF-vF?usp=sharing",
      subject: "CHEMISTRY"
    },
    {
      title: "CHY1005",
      description: "Previous year questions and answers",
      link: "https://drive.google.com/drive/folders/1hcHRldl1vmyyQRekhSMxcapO7UhIF-vF?usp=sharing",
      subject: "CHEMISTRY"
    },
    {
      title: "CHY1005",
      description: "Solved examination paper with explanations",
      link: "https://drive.google.com/drive/folders/1hcHRldl1vmyyQRekhSMxcapO7UhIF-vF?usp=sharing",
      subject: "CHEMISTRY"
    },
    {
      title: "CHY1005",
      description: "Past paper with detailed solutions",
      link: "https://drive.google.com/drive/folders/1hcHRldl1vmyyQRekhSMxcapO7UhIF-vF?usp=sharing",
      subject: "CHEMISTRY"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-orange-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Previous Year Papers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {paper.title}
                </CardTitle>
                <CardDescription>{paper.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Subject: {paper.subject}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="ml-auto">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    Download Paper
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}