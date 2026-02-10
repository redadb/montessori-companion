import { AssessmentQuiz } from "@/components/assessment-quiz";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 bg-stone-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-stone-200 bg-white/50 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-white lg:p-4">
          The Montessori Companion &trade;
        </p>
      </div>

      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Text */}
        <div className="text-center lg:text-left space-y-6"> 
          <h1 className="text-5xl md:text-6xl font-serif text-stone-800 tracking-tight leading-tight">
            Independent Play.<br/>
            <span className="text-amber-600 italic">Naturally.</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-md mx-auto lg:mx-0">
            Stop guessing what your child needs. Answer 10 questions and get a personalized activity plan instantly.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start pt-4 text-sm text-stone-400">
            <span>✨ Scientific (AMI)</span>
            <span>✨ 12-24 Months</span>
          </div>
        </div>

        {/* Right: The App Interface */}
        <div className="w-full">
          <AssessmentQuiz />
        </div>
      </div>
    </main>
  );
}
