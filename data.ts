export const navItems: { href: string; label: string }[] = [
    { href: "/", label: "HOME" },
    { href: "/classes", label: "CLASSES" },
    { href: "/trainers", label: "TRAINERS" },
    { href: "/workout-plan", label: "WORKOUT PLAN" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/contact-us", label: "CONTACT US" },
];

export const stats: { number: string; label: string }[] = [
    { number: "15", label: "TRAINERS" },
    { number: "240", label: "MEMBERS" },
    { number: "10", label: "YEARS" },
    { number: "10K", label: "HOURS" },
];

export const scheduleData: { time: string; monday: string; tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; sunday: string }[] = [
    {
        time: "6:30AM",
        monday: "CROSSFIT",
        tuesday: "",
        wednesday: "CROSSFIT",
        thursday: "",
        friday: "CROSSFIT",
        saturday: "",
        sunday: "",
    },
    {
        time: "10:30AM",
        monday: "",
        tuesday: "CROSSFIT",
        wednesday: "",
        thursday: "CROSSFIT",
        friday: "",
        saturday: "CROSSFIT",
        sunday: "",
    },
    {
        time: "2:30PM",
        monday: "",
        tuesday: "",
        wednesday: "CROSSFIT",
        thursday: "",
        friday: "CROSSFIT",
        saturday: "",
        sunday: "",
    },
    {
        time: "4:30PM",
        monday: "CROSSFIT",
        tuesday: "",
        wednesday: "",
        thursday: "CROSSFIT",
        friday: "",
        saturday: "",
        sunday: "",
    },
    {
        time: "6:30PM",
        monday: "",
        tuesday: "CROSSFIT",
        wednesday: "",
        thursday: "",
        friday: "CROSSFIT",
        saturday: "",
        sunday: "",
    },
];

export const trainers: { name: string; title: string; image: string; bio: string }[] = [
    {
        name: "CHRISTOPHER MORGAN",
        title: "Cross Fit / Strength / Cardio",
        image: "male1.jpg",
        bio: "Christopher is a certified CrossFit trainer with a passion for helping people achieve their fitness goals. He has a background in strength and conditioning and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "SAMANTHA PAUL",
        title: "Yoga / Pilates / Cardio",
        image: "female.jpg",
        bio: "Samantha is a certified yoga and Pilates instructor with a passion for helping people achieve their fitness goals. She has a background in yoga and Pilates and is dedicated to helping her clients reach their full potential.",
    },
    {
        name: "MICHAEL JOHNSON",
        title: "Boxing / MMA / Strength",
        image: "male2.jpg",
        bio: "Michael is a certified boxing and MMA trainer with a passion for helping people achieve their fitness goals. He has a background in boxing and MMA and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "ROBERT SMITH",
        title: "Yoga / Pilates / Cardio",
        image: "male3.jpg",
        bio: "Robert is a certified yoga and Pilates instructor with a passion for helping people achieve their fitness goals. He has a background in yoga and Pilates and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "EMILY CLARK",
        title: "HIIT / Functional Training",
        image: "female2.jpg",
        bio: "Emily is a certified HIIT and functional training instructor with a passion for helping people achieve their fitness goals. She has a background in HIIT and functional training and is dedicated to helping her clients reach their full potential.",
    },
    {
        name: "JESSICA LEE",
        title: "Zumba / Dance Fitness",
        image: "female3.jpg",
        bio: "Jessica is a certified Zumba and dance fitness instructor with a passion for helping people achieve their fitness goals. She has a background in Zumba and dance fitness and is dedicated to helping her clients reach their full potential.",
    },
    {
        name: "DAVID WILSON",
        title: "Bodybuilding / Nutrition",
        image: "male4.jpg",
        bio: "David is a certified bodybuilding and nutrition instructor with a passion for helping people achieve their fitness goals. He has a background in bodybuilding and nutrition and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "ALEXANDER BROWN",
        title: "Strength / Powerlifting",
        image: "male5.jpg",
        bio: "Alexander is a certified strength and powerlifting instructor with a passion for helping people achieve their fitness goals. He has a background in strength and powerlifting and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "OLIVIA MARTIN",
        title: "Pilates / Flexibility",
        image: "female4.jpg",
        bio: "Olivia is a certified Pilates and flexibility instructor with a passion for helping people achieve their fitness goals. She has a background in Pilates and flexibility and is dedicated to helping her clients reach their full potential.",
    },
    {
        name: "SOPHIA DAVIS",
        title: "Cardio / Endurance",
        image: "female5.jpg",
        bio: "Sophia is a certified cardio and endurance instructor with a passion for helping people achieve their fitness goals. She has a background in cardio and endurance and is dedicated to helping her clients reach their full potential.",
    },
    {
        name: "JAMES TAYLOR",
        title: "CrossFit / Conditioning",
        image: "male6.jpg",
        bio: "James is a certified CrossFit and conditioning instructor with a passion for helping people achieve their fitness goals. He has a background in CrossFit and conditioning and is dedicated to helping his clients reach their full potential.",
    },
    {
        name: "LUCAS WHITE",
        title: "Strength / Functional Training",
        image: "male7.jpg",
        bio: "Lucas is a certified strength and functional training instructor with a passion for helping people achieve their fitness goals. He has a background in strength and functional training and is dedicated to helping his clients reach their full potential.",
    },
];

export const workoutPlans: { beginner: { day: string; workout: string }[]; intermediate: { day: string; workout: string }[]; advanced: { day: string; workout: string }[] } = {
    beginner: [
      { day: "Monday", workout: "Full Body Circuit: Squats, Push-ups, Lunges, Plank (3x10)" },
      { day: "Wednesday", workout: "Upper Body: Dumbbell Press, Rows, Bicep Curls (3x12)" },
      { day: "Friday", workout: "Lower Body: Goblet Squats, Glute Bridges, Calf Raises (3x12)" },
    ],
    intermediate: [
      { day: "Monday", workout: "Push Day: Bench Press, Shoulder Press, Triceps Dips (4x8-10)" },
      { day: "Wednesday", workout: "Pull Day: Pull-ups, Barbell Rows, Face Pulls (4x8-10)" },
      { day: "Friday", workout: "Leg Day: Deadlifts, Lunges, Leg Curls (4x8-10)" },
      { day: "Saturday", workout: "Core & Cardio: Hanging Leg Raises, Russian Twists, HIIT (3x15)" },
    ],
    advanced: [
      { day: "Monday", workout: "Chest & Triceps: Incline Bench, Weighted Dips, Skullcrushers (5x5-8)" },
      { day: "Tuesday", workout: "Back & Biceps: Weighted Pull-ups, T-Bar Row, Hammer Curls (5x5-8)" },
      { day: "Thursday", workout: "Legs: Squats, Romanian Deadlifts, Leg Press (5x5-8)" },
      { day: "Friday", workout: "Shoulders & Core: Overhead Press, Lateral Raises, Planks (5x8-12)" },
      { day: "Saturday", workout: "Full Body HIIT: Kettlebell Swings, Burpees, Sprints (4 rounds)" },
    ],
  };
