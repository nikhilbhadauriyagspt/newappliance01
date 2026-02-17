import React from 'react';
import { FaTools, FaSnowflake, FaTv, FaCoffee, FaPlug, FaWind, FaMicrochip, FaBurn, FaWater, FaTshirt, FaFan } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1,
    iconName: "FaTools",
    title: "Washing Machine Repair",
    shortDesc: "We fix all kinds of washing machines quickly.",
    longDesc: "Our team helps with all washing machine problems, from leaks to motor issues. We work on front-load and top-load machines to get your laundry day back on track.",
    features: ["Drum check", "Motor repair", "Fixing leaks", "Panel fix"],
    image: "/service-1.jpg",
    slug: "washing-machine"
  },
  {
    id: 2,
    iconName: "FaSnowflake",
    title: "Refrigerator Repair",
    shortDesc: "Keep your food fresh with our fridge repair help.",
    longDesc: "If your fridge isn't cooling or making strange noises, we can help. We fix cooling systems and compressors for all major brands.",
    features: ["Cooling check", "Fridge parts fix", "Gas refills", "Door seal fix"],
    image: "/service-2.jpg",
    slug: "refrigerator"
  },
  {
    id: 3,
    iconName: "FaPlug",
    title: "Dishwasher Repair",
    shortDesc: "Get your dishwasher cleaning perfectly again.",
    longDesc: "We fix dishwashers that won't drain or clean well. Our team checks everything from the pump to the spray arms to make sure your dishes come out sparkling.",
    features: ["Pump check", "Cleaning arms", "Heating fix", "Leak fix"],
    image: "/service-3.jpg",
    slug: "dishwasher"
  },
  {
    id: 4,
    iconName: "FaTv",
    title: "Television Repair",
    shortDesc: "Expert help for screen and sound issues.",
    longDesc: "We fix all types of TVs, including LED and Smart TVs. Whether it's a blank screen or no sound, we'll find the problem and fix it fast.",
    features: ["Screen fix", "Board repair", "Sound check", "Port fix"],
    image: "/service-4.jpg",
    slug: "television"
  },
  {
    id: 5,
    iconName: "FaCoffee",
    title: "Coffee Maker Repair",
    shortDesc: "Get your morning coffee back with our repair service.",
    longDesc: "We fix coffee machines that won't heat up or have leaks. Our team can clean and repair internal parts to keep your coffee tasting great.",
    features: ["Heater check", "Pump fix", "Deep cleaning", "Seal fix"],
    image: "/service-5.jpg",
    slug: "coffee-maker"
  },
  {
    id: 7,
    iconName: "FaWind",
    title: "Air Conditioner Repair",
    shortDesc: "Stay cool with our expert AC repair and service.",
    longDesc: "We help with AC cooling issues, gas leaks, and noisy units. Our team cleans filters and checks all parts to keep your home cool and comfortable.",
    features: ["Gas check", "Board fix", "Filter cleaning", "AC testing"],
    image: "/service-7.jpg",
    slug: "air-conditioner"
  },
  {
    id: 8,
    iconName: "FaMicrochip",
    title: "Microwave Oven Repair",
    shortDesc: "Fast and safe help for microwave problems.",
    longDesc: "We fix microwaves that won't heat or have broken buttons. Our team follows strict safety rules to make sure your microwave is safe to use.",
    features: ["Heating fix", "Buttons repair", "Part check", "Fuse fix"],
    image: "/service-8.jpg",
    slug: "microwave-oven"
  },
  {
    id: 9,
    iconName: "FaBurn",
    title: "Oven & Gas Stove Repair",
    shortDesc: "Safe repair for your kitchen cooking equipment.",
    longDesc: "We fix burners that won't light and ovens that don't heat evenly. We always check for gas leaks to keep your kitchen safe.",
    features: ["Burner fix", "Light check", "Gas safety test", "Heat check"],
    image: "/service-9.jpg",
    slug: "oven-stove"
  },
  {
    id: 10,
    iconName: "FaWater",
    title: "Water Purifier Repair",
    shortDesc: "Clean and safe water with our filter service.",
    longDesc: "We change filters and fix pumps in water purifiers. Our team makes sure your water is clean and safe for your whole family.",
    features: ["Filter change", "Pump fix", "Water check", "Lamp check"],
    image: "/service-10.jpg",
    slug: "water-purifier"
  },
  {
    id: 11,
    iconName: "FaTshirt",
    title: "Clothes Dryer Repair",
    shortDesc: "Get your clothes dry again with our repair help.",
    longDesc: "We fix dryers that don't heat up or won't spin. We also clean out lint paths to keep your dryer running safely and efficiently.",
    features: ["Heat check", "Belt fix", "Motor repair", "Vent cleaning"],
    image: "/service-11.jpg",
    slug: "clothes-dryer"
  },
  {
    id: 12,
    iconName: "FaFan",
    title: "Kitchen Chimney Repair",
    shortDesc: "Keep your kitchen fresh with our chimney service.",
    longDesc: "We provide deep cleaning and motor repair for kitchen chimneys. Our team makes sure your kitchen stays free of smoke and oil.",
    features: ["Motor check", "Fan cleaning", "Filter service", "Switch fix"],
    image: "/service-12.jpg",
    slug: "kitchen-chimney"
  },
  {
    id: 6,
    iconName: "FaTools",
    title: "Other Appliances",
    shortDesc: "Friendly help for any other home equipment.",
    longDesc: "If you have a home appliance that needs help, we're here for you. We fix many different small and large items to keep your home running.",
    features: ["Full checkup", "Part testing", "Safety check", "Finding issues"],
    image: "/service-6.jpg",
    slug: "other-appliances"
  }
];
