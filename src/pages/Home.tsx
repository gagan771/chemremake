export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="text-center space-y-4 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-12 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Welcome to My Workspace
        </h1>
        <p className="text-lg text-muted-foreground">
          Your one-stop destination for academic resources and information
        </p>
      </div>
    </div>
  )
}