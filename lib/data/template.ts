export interface TemplateMetadata {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  fields: string[];
  defaults: Record<string, string | number>;
}

export const TEMPLATES: Record<string, Record<string, TemplateMetadata>> = {
  anniversary: {
    "annv-001": {
      id: "annv-001",
      name: "Golden Elegance",
      image: "/images/templates/anniversary/annv-001.png",
      description:
        "A classic golden themed anniversary card with elegant typography.",
      price: 15.0,
      fields: ["names", "date", "message"],
      defaults: {
        names: "Sarah & John",
        date: "June 24, 2024",
        message: "Wishing you both a lifetime of love and happiness.",
      },
    },
    "annv-002": {
      id: "annv-002",
      name: "Modern Minimalist",
      image: "/images/templates/anniversary/annv-002.png",
      description:
        "Clean lines and modern fonts for a sophisticated celebration.",
      price: 12.0,
      fields: ["names", "year", "years"],
      defaults: {
        names: "Emily & David",
        year: "2024",
        years: 10,
      },
    },
  },
  valentine: {
    "val-001": {
      id: "val-001",
      name: "Romantic Roses",
      image: "/images/templates/valentine/val-001.png",
      description: "Deep red roses and gold accents for your special someone.",
      price: 18.0,
      fields: ["name", "message"],
      defaults: {
        name: "Beloved",
        message:
          "You're the center of my world, the highlight of my day, and the love of my life.",
      },
    },
  },
  wedding: {
    "wed-001": {
      id: "wed-001",
      name: "Classic White",
      image: "/images/templates/wedding/wed-001.png",
      description: "Timeless white and silver invitation for a perfect day.",
      price: 25.0,
      fields: ["names", "date", "time", "location", "venue", "city"],
      defaults: {
        names: "Charlotte & Arthur",
        date: "September 14, 2024",
        time: "4:00 PM",
        location: "Elmwood Manor",
        venue: "The Gardens",
        city: "Oakwood, CT",
      },
    },
  },
  birthday: {
    "bday-001": {
      id: "bday-001",
      name: "Party Popper",
      image: "/images/templates/birthday/bday-001.png",
      description: "vibrant colors and confetti to celebrate a fun birthday.",
      price: 10.0,
      fields: ["name", "age", "message"],
      defaults: {
        name: "Alex",
        age: 25,
        message:
          "Hope your day is as amazing as you are! Wishing you the best year yet.",
      },
    },
  },
  "thank-you": {
    "ty-001": {
      id: "ty-001",
      name: "Botanical Gratitude",
      image: "/images/templates/thank_you/ty-001.png",
      description: "Natural eucalyptus branch for a thoughtful thank you.",
      price: 8.0,
      fields: ["name", "message"],
      defaults: {
        name: "Friend",
        message: "Just wanted to say a heartfelt thank you for your support.",
      },
    },
  },
  congratulations: {
    "cong-001": {
      id: "cong-001",
      name: "Golden Success",
      image: "/images/templates/congratulations/cong-001.png",
      description: "Sparkling gold elements for a major achievement.",
      price: 14.0,
      fields: ["name", "achievement", "message"],
      defaults: {
        name: "Winner",
        achievement: "Your Graduation",
        message: "So incredibly proud of everything you've achieved.",
      },
    },
  },
  seasonal: {
    "sea-001": {
      id: "sea-001",
      name: "Winter Wonderland",
      image: "/images/templates/seasonal/sea-001.png",
      description: "Snowy pines and a warm seasonal message.",
      price: 12.0,
      fields: ["season", "message"],
      defaults: {
        season: "Winter",
        message:
          "Wishing you warmth, peace, and many joyful moments this season.",
      },
    },
  },
  "baby-shower": {
    "baby-001": {
      id: "baby-001",
      name: "Sweet Arrival",
      image: "/images/templates/baby_shower/baby-001.png",
      description: "Soft pastels and cute nursery illustrations.",
      price: 15.0,
      fields: ["name", "parents", "date", "time", "location"],
      defaults: {
        name: "Baby Johnson",
        parents: "Mary & Mark",
        date: "October 20, 2024",
        time: "2:00 PM",
        location: "The Tea Garden, Elmwood",
      },
    },
  },
  graduation: {
    "grad-001": {
      id: "grad-001",
      name: "Next Adventure",
      image: "/images/templates/graduation/grad-001.png",
      description: "Bold fonts for a bright and successful future.",
      price: 13.0,
      fields: ["name", "degree", "classYear", "message"],
      defaults: {
        name: "James Wilson",
        degree: "Bachelor of Architecture",
        classYear: "Class of 2024",
        message: "Dream big, work hard, and never stop growing.",
      },
    },
  },
  sympathy: {
    "symp-001": {
      id: "symp-001",
      name: "Quiet Moments",
      image: "/images/templates/sympathy/symp-001.png",
      description: "Muted tones and calming imagery for support.",
      price: 9.0,
      fields: ["name", "message"],
      defaults: {
        name: "Recipient",
        message: "Wishing you strength and comfort during this difficult time.",
      },
    },
  },
};
