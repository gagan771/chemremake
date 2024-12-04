import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-rose-900">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
          <CardHeader>
            <CardTitle className="text-3xl text-center">About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary">Dr. Satyam Ravi</h2>
              <p className="text-lg text-muted-foreground mt-2">Assistant Professor</p>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Dr. Satyam Ravi completed his Ph.D. in Computational chemistry and Theoretical chemistry from IISER Mohali, India. 
                Before joining VIT Bhopal as an assistant professor, he worked as a postdoctoral research associate for two years 
                in India Association for the Cultivation of Science Kolkata.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                He has many publications in reputed International journals. His research focuses on:
              </p>
              
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>Application of Computational Photochemistry of small molecules</li>
                <li>Specific application of multi-reference electronic structure methods</li>
                <li>Application of non-adiabatic dynamics methods</li>
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <Button  variant="outline" size="lg" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

<a href="https://www.example.com" target="_blank" rel="noopener noreferrer"></a>