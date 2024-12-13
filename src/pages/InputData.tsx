
import { Button } from "@/components/ui/button";  // Assuming you have a Button component

export default function RedirectButton() {
  const handleRedirect = () => {
    // Redirect to the specified URL
    window.location.href = 'https://keen-empanada-bd4bf5.netlify.app/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Button that triggers redirection */}
          <Button onClick={handleRedirect} className="w-full">
            Go to Input Builder Site
          </Button>
        </div>
      </div>
    </div>
  );
}
