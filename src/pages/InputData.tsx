import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card-description"
import { Database } from "lucide-react"

export default function InputData() {
  const { register, handleSubmit } = useForm()
  const [file, setFile] = useState<File | null>(null)

  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('energy', data.energy)
    formData.append('spin', data.spin)
    formData.append('charge', data.charge)
    if (file) {
      formData.append('geometry', file)
    }

    console.log('Form data:', Object.fromEntries(formData))

    const content = `Energy: ${data.energy}\nSpin: ${data.spin}\nCharge: ${data.charge}\nGeometry File: ${file ? file.name : 'Not provided'}`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'data.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Input Data
              </CardTitle>
              <CardDescription>Enter calculation parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium text-foreground">Energy Type</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register('energy')}
                        value="RHF"
                        className="form-radio text-primary"
                      />
                      <span className="ml-2">RHF</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register('energy')}
                        value="UHF"
                        className="form-radio text-primary"
                      />
                      <span className="ml-2">UHF</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="spin" className="block mb-1 font-medium text-foreground">Spin</label>
                  <input 
                    type="number" 
                    id="spin" 
                    {...register('spin')} 
                    className="w-full p-2 border rounded bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="charge" className="block mb-1 font-medium text-foreground">Charge</label>
                  <input 
                    type="number" 
                    id="charge" 
                    {...register('charge')} 
                    className="w-full p-2 border rounded bg-background text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="geometry" className="block mb-1 font-medium text-foreground">Geometry File</label>
                  <input 
                    type="file" 
                    id="geometry" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)} 
                    className="w-full p-2 border rounded bg-background text-foreground"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubmit(onSubmit)}
                className="w-full"
                variant="default"
              >
                Submit and Download TXT
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}