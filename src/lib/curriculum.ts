export type Category = "Gross Motor" | "Fine Motor" | "Language" | "Independence";

export interface Skill {
  id: string;
  title: string;
  category: Category;
  description: string;
  prompt: string; // The question asked to the parent
  thresholdMonths: number; // Approx age (just for sorting)
}

export interface Recommendation {
  skillId: string;
  activity: string;
  toy: string;
  why: string;
  description: string;
  image?: string;
}

export const SKILL_MATRIX: Skill[] = [
  // GROSS MOTOR
  {
    id: "gm-running",
    title: "Running with Control",
    category: "Gross Motor",
    description: "Child runs without falling and can stop or turn easily.",
    prompt: "Does your child run confidently and can they stop themselves without falling?",
    thresholdMonths: 24,
  },
  {
    id: "gm-jumping",
    title: "Jumping Off",
    category: "Gross Motor",
    description: "Jumping off a low step with both feet together.",
    prompt: "Can your child jump off a low step landing with both feet at once?",
    thresholdMonths: 28,
  },
  {
    id: "gm-stairs",
    title: "Alternating Feet (Stairs)",
    category: "Gross Motor",
    description: "Going up stairs using one foot per step.",
    prompt: "Does your child try to go up stairs using alternating feet (not both feet on one step)?",
    thresholdMonths: 32,
  },

  // FINE MOTOR
  {
    id: "fm-scissors",
    title: "Using Scissors",
    category: "Fine Motor",
    description: "Opening and closing scissors to make a snip.",
    prompt: "Does your child show interest in using scissors or can they make a small snip in paper?",
    thresholdMonths: 30,
  },
  {
    id: "fm-beads",
    title: "Stringing Large Beads",
    category: "Fine Motor",
    description: "Threading a large bead onto a stiff cord.",
    prompt: "Can your child thread a large bead onto a string or stiff lace?",
    thresholdMonths: 26,
  },
  {
    id: "fm-circles",
    title: "Drawing Circles",
    category: "Fine Motor",
    description: "Making a circular motion with a crayon.",
    prompt: "When drawing, does your child make circular marks rather than just scribbles?",
    thresholdMonths: 34,
  },

  // INDEPENDENCE / PRACTICAL LIFE
  {
    id: "pl-dressing",
    title: "Independent Dressing",
    category: "Independence",
    description: "Putting on simple clothing items like shoes or pants.",
    prompt: "Does your child try to put on their own shoes or pull up their pants independently?",
    thresholdMonths: 24,
  },
  {
    id: "pl-table-set",
    title: "Setting the Table",
    category: "Independence",
    description: "Placing a plate or cup in a designated spot.",
    prompt: "Does your child enjoy helping to set the table by placing items in their spots?",
    thresholdMonths: 30,
  },
  {
    id: "pl-toileting",
    title: "Toileting Interest",
    category: "Independence",
    description: "Showing awareness of bodily functions or interest in the potty.",
    prompt: "Does your child tell you when they have a wet diaper or show interest in using the potty?",
    thresholdMonths: 26,
  },

  // LANGUAGE
  {
    id: "lan-sentences",
    title: "Two-Word Sentences",
    category: "Language",
    description: "Combining two words to express a thought (e.g., 'More milk').",
    prompt: "Does your child consistently combine two words together like 'Mama go' or 'Big truck'?",
    thresholdMonths: 24,
  },
];

export const RECOMMENDATIONS: Record<string, Recommendation> = {
  "gm-running": {
    skillId: "gm-running",
    activity: "The Color Run",
    toy: "Balance Bike",
    why: "Running requires balance and spatial awareness. The bike helps refine this.",
    description: "Create 'islands' of color using mats or cushions. Call out a color for them to run to. This builds cardiovascular health and listening skills.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "gm-jumping": {
    skillId: "gm-jumping",
    activity: "Line Jumping",
    toy: "Stepping Stones",
    why: "Jumping builds core strength and coordination between the two sides of the brain.",
    description: "Tape a line on the floor. Practice jumping over the 'river'. Keep the landing surface soft and safe.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "gm-stairs": {
    skillId: "gm-stairs",
    activity: "Handrail Support",
    toy: "Low Step Ladder",
    why: "Alternating feet is a major milestone in motor planning and balance.",
    description: "Place a small object on the third step. Encourage them to climb up without putting both feet on the same step. Use a low, safe indoor climber.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "fm-scissors": {
    skillId: "fm-scissors",
    activity: "Playdough Cutting",
    toy: "Toddler-Safe Scissors",
    why: "Cutting is the ultimate test of hand-eye coordination and finger isolation.",
    description: "Roll playdough into 'snakes'. Let your child snip them into pieces. Using playdough instead of paper provides more resistance and is easier to control.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "fm-beads": {
    skillId: "fm-beads",
    activity: "The Necklace Factory",
    toy: "Large Wooden Beads",
    why: "Stringing requires the hand to work in opposition while the eyes track the cord.",
    description: "Use a stiff lace (tip taped) and large wooden beads. Show them how to poke the string through the hole and 'catch' it on the other side.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "fm-circles": {
    skillId: "fm-circles",
    activity: "Chalk Circles",
    toy: "Easel / Chalkboard",
    why: "Drawing circular shapes prepares the hand for writing letters like 'o' and 'c'.",
    description: "Draw a big circle and ask them to draw 'bubbles' inside. The vertical surface of an easel helps build shoulder and arm strength.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "pl-dressing": {
    skillId: "pl-dressing",
    activity: "The Dressing Chair",
    toy: "Dressing Frames",
    why: "Dressing themselves builds self-esteem and independence (Practical Life).",
    description: "Provide a low chair for them to sit on while putting on pants. Choose elastic waistbands and large openings to ensure success.",
    image: "/montessori_icon_independence_1770759814501.png"
  },
  "pl-table-set": {
    skillId: "pl-table-set",
    activity: "The Serving Station",
    toy: "Child-Sized Utensils",
    why: "Contributing to the family meal builds a sense of belonging and order.",
    description: "Use a placemat with outlines of a plate, fork, and cup. Show them where each item goes. Let them carry one unbreakable item at a time.",
    image: "/montessori_icon_independence_1770759814501.png"
  },
  "pl-toileting": {
    skillId: "pl-toileting",
    activity: "Bathroom Independence",
    toy: "Step Stool & Faucet Extender",
    why: "Toileting is a natural biological progression. Accessibility is key.",
    description: "Ensure they can reach the sink and the potty independently. Use a small basket for clean underwear nearby to encourage self-care after 'misses'.",
    image: "/montessori_icon_independence_1770759814501.png"
  },
  "lan-sentences": {
    skillId: "lan-sentences",
    activity: "Story Extension",
    toy: "Sequence Cards",
    why: "Grammar starts with connecting actions to objects. 'Mama go' is a full thought.",
    description: "Repeat their two-word phrases back to them as a full sentence. If they say 'Big truck', you say 'Yes, that is a big red truck'. This expands their vocabulary naturally.",
    image: "/montessori_icon_language_1770759802364.png"
  }
};
