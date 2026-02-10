"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SKILL_MATRIX, RECOMMENDATIONS, type Skill } from "@/lib/curriculum"
import { Check, RotateCcw } from "lucide-react"
import { useTranslations } from "next-intl"

export function AssessmentQuiz() {
  const t = useTranslations('Quiz');
  const tCurriculum = useTranslations('Curriculum');
  const tCategories = useTranslations('Categories');

  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [observations, setObservations] = useState<string[]>([]) // Array of skill IDs observed
  const [completed, setCompleted] = useState(false)

  const currentSkill = SKILL_MATRIX[currentIndex]

  // Helper to get translated skill data
  const getTranslatedSkill = (id: string) => {
    return {
      title: tCurriculum(`${id}.title`),
      prompt: tCurriculum(`${id}.prompt`),
      description: tCurriculum(`${id}.description`),
      activity: tCurriculum(`${id}.activity`),
      why: tCurriculum(`${id}.why`),
      details: tCurriculum(`${id}.details`),
      toy: tCurriculum(`${id}.toy`),
      // We need to fetch the image from the original logic or hardcode map since it's not in JSON (or it could be)
      // For now, let's look it up from the RECOMMENDATIONS object in lib, 
      // BUT we need to be careful mixing data sources. 
      // Actually, since we stripped the text from lib, we should just keep the structure in lib and use translation for text.
    }
  }

  // To support images, we need to import RECOMMENDATIONS to get the image path
  // We already imported structure from @/lib/curriculum
  
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
      <div className="text-center space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-sm border border-stone-100">
        <h2 className="text-2xl font-serif text-stone-800">{t('discoveryLog')}</h2>
        <p className="text-stone-600">
          {t('introText', {count: SKILL_MATRIX.length})}
        </p>
        <Button onClick={() => setStarted(true)} size="lg" className="w-full bg-stone-800 hover:bg-stone-700">
          {t('startBtn')}
        </Button>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="space-y-8 max-w-2xl mx-auto pb-24">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif text-stone-800">{t('personalPlan')}</h2>
          <p className="text-stone-600">{t('planSubtitle')}</p>
        </div>

        <div className="grid gap-6">
          {observations.length === 0 ? (
            <div className="p-6 bg-stone-50 rounded-xl text-center border border-stone-100">
              <p className="text-stone-600">{t('noSkills')}</p>
            </div>
          ) : (
            observations.map(skillId => {
              const trans = getTranslatedSkill(skillId);
              const originalRec = RECOMMENDATIONS[skillId]; // For image path

              return (
                <div key={skillId} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm flex flex-col gap-6 overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6">
                     {originalRec?.image && (
                        <div className="flex-shrink-0 w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center p-4">
                          <img src={originalRec.image} alt={trans.activity} className="w-full h-full object-contain opacity-80" />
                        </div>
                      )}
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold tracking-wider text-amber-600 uppercase bg-amber-50 px-2 py-1 rounded-full">
                            {t('sensitivePeriod')}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-stone-800">{trans.activity}</h3>
                        <p className="text-stone-600 italic">&quot;{trans.why}&quot;</p>
                        <p className="text-stone-700 mt-2 text-sm leading-relaxed">{trans.details}</p>
                      </div>
                  </div>

                  <div className="bg-stone-50 p-4 rounded-lg flex items-center justify-between border border-stone-100">
                    <span className="text-sm text-stone-500">{t('recommendedTool')}</span>
                    <span className="font-medium text-stone-900">{trans.toy}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className="text-center pt-8">
          <Button onClick={restart} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" /> {t('startOver')}
          </Button>
        </div>
      </div>
    )
  }

  const translatedCategory = tCategories(currentSkill.category as any);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-stone-100 min-h-[400px] flex flex-col justify-between">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
            <div className="text-xs font-medium text-stone-400 uppercase tracking-widest">
                {t('questionCount', {current: currentIndex + 1, total: SKILL_MATRIX.length})}
            </div>
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                {translatedCategory}
            </span>
        </div>
        
        <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-500 ease-out rtl:origin-right ltr:origin-left"
            style={{ width: `${((currentIndex + 1) / SKILL_MATRIX.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-6 py-8">
        <h3 className="text-2xl font-medium text-stone-800 leading-tight">
           {tCurriculum(`${currentSkill.id}.prompt`)}
        </h3>
        <p className="text-sm text-stone-500 italic bg-stone-50 p-3 rounded-lg border border-stone-100">
           {t('lookFor', {desc: tCurriculum(`${currentSkill.id}.description`)})}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="h-14 text-stone-500 hover:text-stone-700 hover:bg-stone-50 border-2"
          onClick={() => handleAnswer(false)}
        >
          {t('notYet')}
        </Button>
        <Button 
          size="lg" 
          className="h-14 bg-stone-800 text-white hover:bg-stone-700 text-lg shadow-md hover:shadow-lg transition-all"
          onClick={() => handleAnswer(true)}
        >
           {t('yes')} <Check className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0" />
        </Button>
      </div>
    </div>
  )
}
