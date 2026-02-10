"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SKILL_MATRIX, RECOMMENDATIONS, type Skill } from "@/lib/curriculum"
import { Check, ChevronRight, RotateCcw } from "lucide-react"

export function AssessmentQuiz() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [observations, setObservations] = useState<string[]>([]) // Array of skill IDs observed
  const [completed, setCompleted] = useState(false)

  const currentSkill = SKILL_MATRIX[currentIndex]

  const handleAnswer = (isObserving: boolean) => {
    if (isObserving) {
      setObservations([...observations, currentSkill.id])
    }

    if (currentIndex < SKILL_MATRIX.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCompleted(true)
    }
  }

  const restart = () => {
    setStarted(false)
    setCurrentIndex(0)
    setObservations([])
    setCompleted(false)
  }

  if (!started) {
    return (
      <div className="text-center space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border">
        <h2 className="text-2xl font-serif text-stone-800">The Discovery Log</h2>
        <p className="text-stone-600">
          We will ask 10 simple questions to understand exactly where your child is in their development.
        </p>
        <Button onClick={() => setStarted(true)} size="lg" className="w-full">
          Start Observation
        </Button>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif text-stone-800">Your Personal Plan</h2>
          <p className="text-stone-600">Based on your observations, here is what your child needs <b>right now</b>.</p>
        </div>

        <div className="grid gap-6">
          {observations.length === 0 ? (
            <div className="p-6 bg-stone-50 rounded-xl text-center">
              <p>No specific skills observed yet! Keep watching.</p>
            </div>
          ) : (
            observations.map(skillId => {
              const rec = RECOMMENDATIONS[skillId]
              if (!rec) return null
              return (
                <div key={skillId} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-2">
                    <div className="text-xs font-bold tracking-wider text-amber-600 uppercase">
                      Sensitive Period Detected
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800">{rec.activity}</h3>
                    <p className="text-stone-600">{rec.why}</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg min-w-[200px]">
                    <span className="text-sm text-stone-500 block mb-1">Recommended Tool:</span>
                    <span className="font-medium text-stone-900">{rec.toy}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="text-center pt-8">
          <Button onClick={restart} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" /> Start Over
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-stone-100 min-h-[400px] flex flex-col justify-between">
      <div className="space-y-2">
        <div className="text-xs font-medium text-stone-400 uppercase tracking-widest">
          Question {currentIndex + 1} / {SKILL_MATRIX.length}
        </div>
        <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / SKILL_MATRIX.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6 py-8">
        <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold">
          {currentSkill.category}
        </span>
        <h3 className="text-2xl font-medium text-stone-800 leading-tight">
          {currentSkill.prompt}
        </h3>
        <p className="text-sm text-stone-500 italic">
          (Look for: {currentSkill.description})
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="h-14 text-stone-500 hover:text-stone-700 hover:bg-stone-50 border-2"
          onClick={() => handleAnswer(false)}
        >
          Not yet
        </Button>
        <Button 
          size="lg" 
          className="h-14 bg-stone-800 text-white hover:bg-stone-900 text-lg"
          onClick={() => handleAnswer(true)}
        >
          Yes <Check className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}
