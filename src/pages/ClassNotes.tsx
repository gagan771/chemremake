import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card-description";
import { format } from "date-fns";
import { BookOpen } from "lucide-react";

export default function ClassNotes() {
  const notes = [
    {
      title: "MODULE 1",
      description: "Introduction",
      date: "2023-05-15",
      content: "Introduction to the course and overview of the topics to be covered in the semester.",
      link: "https://drive.google.com/file/d/1c-aHyrpSzBti3F0O_4dLBl2Iugf0MPaa/view?usp=sharing"
    },
    {
      title: "MODULE 2",
      description: "Quantum Chemistry",
      date: "2023-05-22",
      content: "We discussed the quantum chemistry.",
      link: "https://drive.google.com/drive/folders/1VGXVbh_P75pv5b86FekqIVjC4S5k13oW?usp=sharing"
    },
    {
      title: "MODULE 3",
      description: "Thermodynamics",
      date: "2023-05-29",
      content: ".....",
      link: "https://drive.google.com/file/d/13D39M6X8l93SF0voKmlJVqcjijKXu7X9/view"
    },
    {
      title: "MODULE 4",
      description: "",
      date: "2023-06-05",
      content: "....",
      link: ""
    },
    {
      title: "MODULE 5",
      description: "....",
      date: "2023-06-12",
      content: "This lecture covered topics in astrophysics, including stellar evolution, galaxies, and cosmology.",
      link: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-teal-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary">Class Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {note.title}
                </CardTitle>
                <CardDescription>{note.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{note.content}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {format(new Date(note.date), "MMM d, yyyy")}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto"
                  onClick={() => window.open(note.link, "_blank")}
                >
                  View Full Notes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
