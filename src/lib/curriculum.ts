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
    id: "gm-pull-stand",
    title: "Pulling to Stand",
    category: "Gross Motor",
    description: "Child pulls themselves up on furniture but cannot let go yet.",
    prompt: "Does your child pull themselves up to stand on furniture?",
    thresholdMonths: 9,
  },
  {
    id: "gm-cruising",
    title: "Cruising",
    category: "Gross Motor",
    description: "Walking while holding onto furniture.",
    prompt: "Does your child walk sideways while holding onto the sofa or table?",
    thresholdMonths: 11,
  },
  {
    id: "gm-walking",
    title: "Independent Walking",
    category: "Gross Motor",
    description: "Taking first independent steps without support.",
    prompt: "Has your child taken their first steps without holding onto anything?",
    thresholdMonths: 12,
  },
  {
    id: "gm-heavy-work",
    title: "Maximum Effort",
    category: "Gross Motor",
    description: "Carrying heavy objects or pushing heavy things.",
    prompt: "Does your child enjoy carrying heavy things or pushing heavy boxes?",
    thresholdMonths: 15,
  },

  // FINE MOTOR
  {
    id: "fm-pincer",
    title: "Pincer Grasp",
    category: "Fine Motor",
    description: "Using thumb and index finger to pick up small items.",
    prompt: "Can your child pick up a tiny crumb using just their thumb and pointer finger?",
    thresholdMonths: 10,
  },
  {
    id: "fm-posting",
    title: "Posting (Insertion)",
    category: "Fine Motor",
    description: "Putting an object into a hole.",
    prompt: "Does your child enjoy dropping objects into holes or slots?",
    thresholdMonths: 12,
  },
  {
    id: "fm-wrist",
    title: "Wrist Rotation",
    category: "Fine Motor",
    description: "Turning the wrist (unscrewing, turning knobs).",
    prompt: "Does your child try to turn door knobs or unscrew jar lids?",
    thresholdMonths: 14,
  },
  {
    id: "fm-stacking",
    title: "Precision Stacking",
    category: "Fine Motor",
    description: "Stacking 3+ objects with control.",
    prompt: "Can your child stack 3 blocks on top of each other without them falling?",
    thresholdMonths: 15,
  },

  // INDEPENDENCE
  {
    id: "pl-drinking",
    title: "Drinking from Glass",
    category: "Independence",
    description: "Drinking from an open cup.",
    prompt: "Can your child drink from a small open glass (not a sippy cup)?",
    thresholdMonths: 12,
  },
  {
    id: "pl-cleaning",
    title: "Interest in Cleaning",
    category: "Independence",
    description: "Imitating cleaning behaviors.",
    prompt: "Does your child try to sweep or wipe up spills when they see you doing it?",
    thresholdMonths: 14,
  },
];

export const RECOMMENDATIONS: Record<string, Recommendation> = {
  "gm-pull-stand": {
    skillId: "gm-pull-stand",
    activity: "Furniture Placement",
    toy: "Heavy Stool / Pull-up Bar",
    why: "They need stable surfaces to pull up on. Ensure furniture is heavy and won't tip.",
    description: "Create a safe 'pull-up station' by placing a heavy ottoman or low shelf against a wall. Ensure it is sturdy enough to support their weight without tipping. Place a favorite toy on top to motivate them.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "gm-cruising": {
    skillId: "gm-cruising",
    activity: "The Gap Setup",
    toy: "Push Wagon",
    why: "Place two chairs slightly apart to encourage them to 'bridge the gap'.",
    description: "Arrage furniture (like a sofa and a chair) with a small gap in between. Place a toy on the second piece of furniture. Watch as your child learns to let go of one to reach the other.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "gm-walking": {
    skillId: "gm-walking",
    activity: "Carry the Heavy Bottle",
    toy: "Heavy Objects",
    why: "Carrying weight helps them feel their center of gravity and improves balance.",
    description: "Fill a small plastic bottle with water (seal it tight!). The added weight provides proprioceptive feedback, helping them steady their wobble as they walk.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "gm-heavy-work": {
    skillId: "gm-heavy-work",
    activity: "Milk Jug Carry",
    toy: "Push Wagon (Weighted)",
    why: "At this stage, they crave 'Maximum Effort'. Let them carry laundry baskets or water jugs.",
    description: "Give your child a job! Ask them to carry a heavy (but safe) bag of groceries or a jug of water to the kitchen. They will feel immense pride and satisfaction.",
    image: "/montessori_icon_gross_motor_1770759775644.png"
  },
  "fm-pincer": {
    skillId: "fm-pincer",
    activity: "Coin Posting",
    toy: "Imbucare Box (Coin)",
    why: "The coin requires them to align their wrist and use a refined grasp.",
    description: "Cut a thin slit in the lid of a shoe box. Provide large coins or poker chips. The act of orienting the coin to fit the slot is a major neurological workout.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "fm-posting": {
    skillId: "fm-posting",
    activity: "Pasta Threading",
    toy: "Imbucare Box (Coin)",
    why: "They are fascinated by objects disappearing. This builds object permanence.",
    description: "Stick a dry spaghetti noodle into playdough so it stands up. Challenge your child to thread penne pasta onto the 'tower'. This builds incredible hand-eye coordination.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "fm-wrist": {
    skillId: "fm-wrist",
    activity: "Opening Jars (Loosened)",
    toy: "Horizontal Dowel",
    why: "The wrist rotation is a precursor to writing. The Horizontal Dowel isolates this movement.",
    description: "Collect clean jars of different sizes. Loosen the lids slightly. Let your child finish unscrewing them to find a small surprise inside.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "fm-stacking": {
    skillId: "fm-stacking",
    activity: "Block Tower",
    toy: "Vertical Stacker",
    why: "Stacking requires controlled release. The Vertical Stacker guides this movement.",
    description: "Start with just 3 blocks. Model how to place one on top of the other slowly. If they knock it down, laugh! Destruction is part of the learning process too.",
    image: "/montessori_icon_fine_motor_1770759790815.png"
  },
  "pl-drinking": {
    skillId: "pl-drinking",
    activity: "Weaning Glass",
    toy: "Small Pitcher and Glass",
    why: "Drinking from an open glass teaches cause-and-effect (spilling) and lip control.",
    description: "Use a very small, heavy shot glass (thick glass is best). Fill it only with a sip of water. Teach them to hold it with two hands.",
    image: "/montessori_icon_independence_1770759814501.png"
  },
  "pl-cleaning": {
    skillId: "pl-cleaning",
    activity: "Window Washing",
    toy: "Spray Bottle",
    why: "They love to imitate you. Spraying strengthens hand muscles.",
    description: "Give them a small spray bottle with water and a squeegee. Show them how to spray the window and wipe. It's purposeful work that builds grip strength.",
    image: "/montessori_icon_independence_1770759814501.png"
  }
};
