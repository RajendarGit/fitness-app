export const navItems: { href: string; label: string }[] = [
    { href: "/", label: "HOME" },
    { href: "/classes", label: "CLASSES" },
    { href: "/trainers", label: "TRAINERS" },
    { href: "/about", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
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

export const trainers: { name: string; title: string; image: string }[] = [
    {
        name: "CHRISTOPHER MORGAN",
        title: "Cross Fit / Strength / Cardio",
        image: "male1.jpg",
    },
    {
        name: "SAMANTHA PAUL",
        title: "Yoga / Pilates / Cardio",
        image: "female.jpg",
    },
    {
        name: "MICHAEL JOHNSON",
        title: "Boxing / MMA / Strength",
        image: "male2.jpg",
    },
];
