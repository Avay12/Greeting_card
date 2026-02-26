
export interface MenuItem {
  label: string;
  href?: string;
  submenu?: {
    columns: {
      title?: string;
      items: {
        label: string;
        href: string;
        isHighlighted?: boolean;
      }[];
      image?: {
          src: string;
          alt: string;
          width: number;
          height: number;
          caption: string;
          href: string;
      }
    }[];
  };
}

export const NAVIGATION_LINKS: MenuItem[] = [
  {
    label: "Birthdays",
    submenu: {
      columns: [
        {
          title: "Trending Now",
          items: [
            { label: "Belated Birthdays", href: "https://www.americangreetings.com/ecards/belated" },
            { label: "Milestone Birthdays", href: "https://www.americangreetings.com/milestone-birthday" },
            { label: "Type Any Name", href: "https://www.americangreetings.com/ecards/birthday/smashups/type-any-name" },
            { label: "SmashUps™", href: "https://www.americangreetings.com/ecards/birthday/smashups" },
            { label: "Celebrities", href: "https://www.americangreetings.com/ecards/birthday/celebrity" },
            { label: "Funny Birthday", href: "https://www.americangreetings.com/ecards/birthday/funny" },
            { label: "Creatacard™", href: "https://www.americangreetings.com/ecards/birthday/creatacard" },
            { label: "Popular Songs", href: "https://www.americangreetings.com/ecards/birthday/music" },
            { label: "Seasonal Birthdays", href: "https://www.americangreetings.com/ecards/birthday/seasons" },
            { label: "Cats", href: "https://www.americangreetings.com/ecards/birthday/cats" },
            { label: "Dogs", href: "https://www.americangreetings.com/ecards/birthday/dogs" },
          ],
        },
        {
          title: "Tones",
          items: [
            { label: "Funny", href: "https://www.americangreetings.com/ecards/birthday/funny" },
            { label: "Heartfelt", href: "https://www.americangreetings.com/ecards/birthday/heartfelt" },
            { label: "Cute", href: "https://www.americangreetings.com/ecards/birthday/cute" },
            { label: "Inspirational", href: "https://www.americangreetings.com/ecards/birthday/inspirational" },
            { label: "Religious", href: "https://www.americangreetings.com/ecards/birthday/religious" },
            { label: "Romantic", href: "https://www.americangreetings.com/ecards/birthday/romantic" },
            { label: "Spiritual", href: "https://www.americangreetings.com/ecards/birthday/spiritual" },
            { label: "Browse all Birthday", href: "https://www.americangreetings.com/ecards/birthday", isHighlighted: true },
          ],
        },
        {
            title: "For Her",
            items: [
                { label: "Granddaughter", href: "https://www.americangreetings.com/ecards/birthday/for-granddaughter" },
                { label: "Daughter", href: "https://www.americangreetings.com/ecards/birthday/for-daughter" },
                { label: "Mother", href: "https://www.americangreetings.com/ecards/birthday/for-mother" },
                { label: "Grandma", href: "https://www.americangreetings.com/ecards/birthday/for-grandmother" },
                { label: "Aunt", href: "https://www.americangreetings.com/ecards/birthday/for-aunt" },
                { label: "Niece", href: "https://www.americangreetings.com/ecards/birthday/for-niece" },
                { label: "Sister", href: "https://www.americangreetings.com/ecards/birthday/for-sister" },
                { label: "Wife", href: "https://www.americangreetings.com/ecards/birthday/for-wife" },
                { label: "Browse For Her", href: "https://www.americangreetings.com/ecards/birthday/for-her", isHighlighted: true },
            ]
        },
        {
            title: "For Him",
            items: [
                { label: "Grandson", href: "https://www.americangreetings.com/ecards/birthday/for-grandson" },
                { label: "Son", href: "https://www.americangreetings.com/ecards/birthday/for-son" },
                { label: "Father", href: "https://www.americangreetings.com/ecards/birthday/for-father" },
                { label: "Grandpa", href: "https://www.americangreetings.com/ecards/birthday/for-grandfather" },
                { label: "Uncle", href: "https://www.americangreetings.com/ecards/birthday/for-uncle" },
                { label: "Nephew", href: "https://www.americangreetings.com/ecards/birthday/for-nephew" },
                { label: "Brother", href: "https://www.americangreetings.com/ecards/birthday/for-brother" },
                { label: "Husband", href: "https://www.americangreetings.com/ecards/birthday/for-husband" },
                { label: "Browse For Him", href: "https://www.americangreetings.com/ecards/birthday/for-him", isHighlighted: true },
            ]
        },
        {
            title: "For Anyone",
            items: [
                { label: "Family Members", href: "https://www.americangreetings.com/ecards/birthday/for-family" },
                { label: "Co-Workers", href: "https://www.americangreetings.com/ecards/birthday/for-co-worker" },
                { label: "Friends", href: "https://www.americangreetings.com/ecards/birthday/for-friend" },
                { label: "Kids", href: "https://www.americangreetings.com/ecards/birthday/for-kids" },
                { label: "Spanish", href: "https://www.americangreetings.com/ecards/birthday/spanish" },
                { label: "Astrology", href: "https://www.americangreetings.com/ecards/birthday/astrology" },
                { label: "Interactive", href: "https://www.americangreetings.com/ecards/birthday/interactive" },
                { label: "Games & Quizzes", href: "https://www.americangreetings.com/ecards/birthday/game-quiz" },
                { label: "Browse For Anyone", href: "https://www.americangreetings.com/ecards/birthday/for-anyone", isHighlighted: true },
            ]
        },
        {
            items: [],
             image: {
                src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt04fc8412b05e56fd/676199dee72011ff9e0308da/MRCH.011_FY25_Everyday_AG_January_Merchandising_3446448_Dropdown_Image.jpg",
                alt: "❄️Because everyone deserves a birthday card! image",
                width: 450,
                height: 360,
                caption: "❄️Because everyone deserves a birthday card!",
                href: "https://www.americangreetings.com/ecards/birthday"
            }
        }
      ],
    },
  },
  {
    label: "Occasions",
    submenu: {
        columns: [
            {
                title: "Popular Occasions",
                items: [
                    { label: "Happy Birthday", href: "https://www.americangreetings.com/ecards/birthday" },
                    { label: "Belated Birthday", href: "https://www.americangreetings.com/ecards/belated" },
                    { label: "Anniversary", href: "https://www.americangreetings.com/ecards/anniversary" },
                    { label: "Thank You", href: "https://www.americangreetings.com/ecards/thank-you" },
                    { label: "Thinking of You", href: "https://www.americangreetings.com/ecards/thinking-of-you" },
                    { label: "Wedding & Engagement", href: "https://www.americangreetings.com/ecards/wedding-and-engagement" },
                    { label: "Browse all Ecards", href: "https://www.americangreetings.com/ecards", isHighlighted: true },
                ]
            },
            {
                title: "Other Occasions",
                items: [
                    { label: "Pet Sympathy", href: "https://www.americangreetings.com/ecards/sympathy/pets" },
                    { label: "Sorry", href: "https://www.americangreetings.com/ecards/sorry" },
                    { label: "Belated Birthday", href: "https://www.americangreetings.com/ecards/belated" },
                    { label: "Encouragement", href: "https://www.americangreetings.com/ecards/encouragement" },
                    { label: "Goodbye & Good Luck", href: "https://www.americangreetings.com/ecards/good-bye-and-good-luck" },
                    { label: "Friendship", href: "https://www.americangreetings.com/ecards/friendship" },
                    { label: "Get Well Soon", href: "https://www.americangreetings.com/ecards/get-well" },
                    { label: "Love You", href: "https://www.americangreetings.com/ecards/love" },
                    { label: "I Miss You", href: "https://www.americangreetings.com/ecards/miss-you" },
                    { label: "Just Because", href: "https://www.americangreetings.com/ecards/just-because" },
                    { label: "Sympathy", href: "https://www.americangreetings.com/ecards/sympathy" },
                ]
            },
            {
                title: "Say Congrats",
                items: [
                    { label: "New Pet", href: "https://www.americangreetings.com/ecards/new-pet" },
                    { label: "New Baby & Gender Reveal", href: "https://www.americangreetings.com/ecards/baby" },
                    { label: "New Job", href: "https://www.americangreetings.com/ecards/new-job" },
                    { label: "Graduation", href: "https://www.americangreetings.com/ecards/graduation" },
                    { label: "New Home", href: "https://www.americangreetings.com/ecards/new-home" },
                    { label: "Work Anniversary", href: "https://www.americangreetings.com/ecards/anniversary" },
                    { label: "Bar & Bat Mitzvah", href: "https://www.americangreetings.com/ecards/bar-and-bat-mitzvah" },
                    { label: "First Communion & Confirmation", href: "https://www.americangreetings.com/ecards/communion-and-confirmation" },
                    { label: "Retirement", href: "https://www.americangreetings.com/ecards/retirement" },
                    { label: "Browse all Congrats", href: "https://www.americangreetings.com/ecards/congrats", isHighlighted: true },
                ]
            },
            {
                title: "Collections",
                items: [
                    { label: "SmashUps™", href: "https://www.americangreetings.com/ecards/smashups" },
                    { label: "Creatacard™", href: "https://www.americangreetings.com/ecards/creatacard" },
                    { label: "Postcards", href: "https://www.americangreetings.com/ecards/postcards" },
                    { label: "JustWink", href: "https://www.americangreetings.com/ecards/just-wink" },
                    { label: "Peanuts", href: "https://www.americangreetings.com/ecards/peanuts" },
                    { label: "Dolly Parton", href: "https://www.americangreetings.com/ecards/dolly-parton" },
                    { label: "Kathy Davis", href: "https://www.americangreetings.com/kathy-davis-cards" },
                    { label: "Browse all Ecards", href: "https://www.americangreetings.com/ecards", isHighlighted: true },
                ]
            },
            {
                items: [],
                image: {
                    src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/bltd8d2caea6874b1e5/689a1f3428f7ab49f2d275c1/MRCH.011_FY26_Everyday_AG_August_Merchandising_Ecards_Dropdown_Image.jpg",
                    alt: "✨ Just added: Browse our latest ecards! image",
                    width: 450,
                    height: 360,
                    caption: "✨ Just added: Browse our latest ecards!",
                    href: "https://www.americangreetings.com/new/ecards"
                }
            }
        ]
    }
  },
  {
      label: "Holidays",
      submenu: {
          columns: [
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt624da7619de4b277/696fcade595a2759c2af657d/image_170.png",
                      alt: "✨Celebrate the Year of the Horse image",
                      width: 803,
                      height: 642,
                      caption: "✨Celebrate the Year of the Horse",
                      href: "https://www.americangreetings.com/ecards/chinese-new-year"
                  }
              },
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt4a0947fc48f388c4/67b49b03984202f3d0636f0a/HC.002_FY26_St_Pat_s_Day_AG_Merchandising_3553380_Dropdown_Image.jpg",
                      alt: "🍀 Lucky you! Send a little green today. image",
                      width: 450,
                      height: 360,
                      caption: "🍀 Lucky you! Send a little green today.",
                      href: "https://www.americangreetings.com/ecards/st-patricks-day"
                  }
              },
              {
                  title: "Upcoming Holidays",
                  items: [
                      { label: "Black History Month", href: "https://www.americangreetings.com/ecards/black-history-month" },
                      { label: "Chinese New Year (2/17-3/3)", href: "https://www.americangreetings.com/ecards/chinese-new-year" },
                      { label: "Mardi Gras (2/17)", href: "https://www.americangreetings.com/ecards/mardi-gras" },
                      { label: "Ramadan (2/17)", href: "https://www.americangreetings.com/ecards/ramadan" },
                      { label: "Purim (3/2-3/3)", href: "https://www.americangreetings.com/ecards/purim" },
                      { label: "Holi (3/4)", href: "https://www.americangreetings.com/ecards/holi" },
                      { label: "IWD (3/8)", href: "https://www.americangreetings.com/ecards/international-womens-day" },
                      { label: "St. Patrick's Day (3/17)", href: "https://www.americangreetings.com/ecards/st-patricks-day" },
                      { label: "Eid (3/19-3/20)", href: "https://www.americangreetings.com/ecards/eid" },
                      { label: "April Fools' Day (4/1)", href: "https://www.americangreetings.com/ecards/april-fools-day" },
                      { label: "Easter (4/5)", href: "https://www.americangreetings.com/ecards/easter" },
                      { label: "Earth Day (4/22)", href: "https://www.americangreetings.com/ecards/earth-day" },
                      { label: "Celebrate the Date | National Days", href: "https://www.americangreetings.com/ecards/celebrate-the-date" },
                      { label: "Browse all Holidays", href: "https://www.americangreetings.com/ecards/holidays", isHighlighted: true },
                  ]
              }
          ]
      }
  },
  {
      label: "Celebrities",
      href: "https://www.americangreetings.com/artists",
      submenu: {
          columns: [
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blted7e43db7e5c6fef/68b73d1a79acbba27a65b9d4/PC.021_Rob_Lowe_AG_Launch_Merchandising_AG_Rob_Lowe_Dropdown_Feature.jpg",
                      alt: "Just provide a name, and Rob Lowe will literally deliver a hilarious birthday wish. image",
                      width: 856,
                      height: 640,
                      caption: "Just provide a name, and Rob Lowe will literally deliver a hilarious birthday wish.",
                      href: "https://www.americangreetings.com/ecards/birthday/rob-lowe-birthday-smashup-personalize/card-3560697"
                  }
              },
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blta6fd11efa1244169/66fcc1ee762d3a1c0a5ab5bb/PC.017_Kevin_Bacon_AG_Launch_Merchandising_AG_Kevin_Bacon_Dropdown_Feature.jpg",
                      alt: "Pick a name and age, and let Kevin do the rest! image",
                      width: 856,
                      height: 640,
                      caption: "Pick a name and age, and let Kevin do the rest!",
                      href: "https://www.americangreetings.com/ecards/birthday/kevin-bacon-birthday-smashup-personalize/card-3553382"
                  }
              },
              {
                  title: "Celebrities",
                  items: [
                      { label: "Kevin Bacon", href: "https://www.americangreetings.com/ecards/birthday/kevin-bacon-birthday-smashup-personalize/card-3553382" },
                      { label: "Rob Lowe", href: "https://www.americangreetings.com/ecards/birthday/rob-lowe-birthday-smashup-personalize/card-3560697" },
                      { label: "Kevin Nealon", href: "https://www.americangreetings.com/ecards/birthday/kevin-nealon-breaking-news-personalize/card-3501549" },
                      { label: "Lainey Wilson", href: "https://www.americangreetings.com/ecards/birthday/lainey-wilson-smell-like-smoke-birthday-smashup/card-3552122" },
                      { label: "Donny Osmond", href: "https://www.americangreetings.com/ecards/birthday/donny-osmond-birthday-song-personalize-lyrics/card-3479946" },
                      { label: "Martin Short", href: "https://www.americangreetings.com/ecards/birthday/martin-short-birthday-smashup-personalize/card-3545895" },
                      { label: "Weird Al", href: "https://www.americangreetings.com/ecards/birthday/weird-al-yankovic-birthday-smashup/card-3534209" },
                      { label: "William Shatner", href: "https://www.americangreetings.com/ecards/birthday/william-shatner-shout-out-song-personalize-lyrics/card-3438084" },
                      { label: "Meghan Trainor", href: "https://www.americangreetings.com/ecards/birthday/meghan-trainor-all-about-that-cake-birthday-smashup/card-3532769" },
                      { label: "Marlee Matlin", href: "https://www.americangreetings.com/ecards/birthday/marlee-matlin-when-youre-smiling-personalize/card-3521869" },
                      { label: "Dolly Parton", href: "https://www.americangreetings.com/ecards/birthday/dolly-parton-birthday-time-song-personalize-lyrics/card-3499578" },
                      { label: "Cookie Monster", href: "https://www.americangreetings.com/ecards/birthday/sesame-street-birthday-personalize/card-3538251" },
                      { label: "Ice T", href: "https://www.americangreetings.com/ecards/birthday/ice-t-birthday-smashup-personalize/card-3553375" },
                      { label: "Michael Bolton", href: "https://www.americangreetings.com/ecards/birthday/michael-bolton-fun-birthday-song-ecard-personalize-lyrics/card-3465608" },
                      { label: "Idina Menzel", href: "https://www.americangreetings.com/ecards/birthday/idina-menzel-birthday-smashup-personalize/card-3540945" },
                      { label: "Christina Aguilera", href: "https://www.americangreetings.com/ecards/birthday/christina-aguilera-candyman-birthday-song-personalize-lyrics/card-3526729" },
                      { label: "Alicia Keys", href: "https://www.americangreetings.com/ecards/birthday/alicia-keys-your-day-song-personalize-lyrics/card-3523471" },
                      { label: "Ross Mathews", href: "https://www.americangreetings.com/ecards/birthday/ross-mathews-birthday-smashup-personalize/card-3552114" },
                      { label: "Browse all Celebrities", href: "https://www.americangreetings.com/ecards/smashups/celebrity", isHighlighted: true },
                  ]
              }
          ]
      }
  },
  {
      label: "Gifts",
      submenu: {
          columns: [
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt84bcf6735a4a6957/66391a92e5f2140750ee0615/MRCH.001_AmericanGreetings.com_AGR_Gift_Card_Dropdown_Feature.jpg",
                      alt: "Gift Cards image",
                      width: 856,
                      height: 640,
                      caption: "Gift Cards",
                      href: "https://www.americangreetings.com/gift-cards"
                  }
              },
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt13aff4cab8976865/66391cbce5f214cb60ee062f/MRCH.001_AmericanGreetings.com_AGR_Songfinch_Dropdown_Feature.jpg",
                      alt: "Songfinch image",
                      width: 856,
                      height: 640,
                      caption: "Songfinch",
                      href: "https://www.americangreetings.com/digital-gifts/songfinch"
                  }
              },
              {
                  items: [],
                  image: {
                      src: "https://images.contentstack.io/v3/assets/bltcbd0de6834ffd7a9/blt317781790a7703d7/6908c4caccb2170019c58841/Dropdown_428x320.png",
                      alt: "Virgin Gifts image",
                      width: 428,
                      height: 321,
                      caption: "Virgin Gifts",
                      href: "https://www.americangreetings.com/digital-gifts/virgin-gifts"
                  }
              },
              {
                  title: "More Digital Gifts",
                  items: [
                      { label: "Gipht", href: "https://www.americangreetings.com/digital-gifts/gipht" },
                      { label: "Cameo", href: "https://www.americangreetings.com/digital-gifts/cameo" },
                      { label: "Browse all Digital Gifts", href: "https://www.americangreetings.com/digital-gifts", isHighlighted: true },
                  ]
              }
          ]
      }
  },
  {
      label: "Apps",
      href: "https://www.americangreetings.com/apps"
  }
];
