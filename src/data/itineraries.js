import Manali from "../assets/itinerariesImages/Manali.jpg"
import Goa from "../assets/itinerariesImages/Goa.jpg"
import Kerala from "../assets/itinerariesImages/Kerala.jpg"
import Andaman from "../assets/itinerariesImages/Andaman.jpg"
import thailand from "../assets/itinerariesImages/thailand.jpg"
import malaysia from "../assets/itinerariesImages/malaysia.jpg"
import singapore from "../assets/itinerariesImages/singapore.jpg"
import dubai from "../assets/itinerariesImages/dubai.jpg"
import Bali from "../assets/itinerariesImages/Bali.jpg"
import GoldenTriangle from "../assets/itinerariesImages/GoldenTriangle.jpg"


const itineraries = [
  // Thailand
  {
    id: "thailand",
    title: "Thailand",
    type: "international",
    image: thailand,
    days: [
      {
        day: "Day 1: Arrive Bangkok – Pattaya",
        description: [
          "Upon arrival, transfer to Pattaya. Check-in and relax.",
          "Evening enjoy Alcazar Show."
        ]
      },
      {
        day: "Day 2: Coral Island Tour",
        description: [
          "Speedboat ride to Coral Island, enjoy water sports and beach activities with Thai lunch."
        ]
      },
      {
        day: "Day 3: Pattaya – Bangkok City Tour",
        description: [
          "Transfer to Bangkok. Visit Golden Buddha, Marble Temple and enjoy shopping."
        ]
      },
      {
        day: "Day 4: Departure",
        description: [
          "Breakfast, check-out and transfer to airport."
        ]
      }
    ]
  },

  // Malaysia
  {
    id: "malaysia",
    title: "Malaysia",
    type: "international",
    image: malaysia,
    days: [
      {
        day: "Day 1: Arrive Kuala Lumpur",
        description: [
          "Meet our representative and transfer to hotel.",
          "Evening panoramic night city tour."
        ]
      },
      {
        day: "Day 2: Batu Caves & Genting Highlands",
        description: [
          "Visit Batu Caves, proceed to Genting Highlands, enjoy cable car and theme park."
        ]
      },
      {
        day: "Day 3: Kuala Lumpur City Tour",
        description: [
          "Explore Petronas Twin Towers, King’s Palace, Independence Square."
        ]
      },
      {
        day: "Day 4: Departure",
        description: [
          "Check-out and proceed to airport."
        ]
      }
    ]
  },

  // Singapore
  {
    id: "singapore",
    title: "Singapore",
    type: "international",
    image: singapore,
    days: [
      {
        day: "Day 1: Arrive Singapore",
        description: [
          "Arrive at Changi Airport, hotel transfer.",
          "Evening Night Safari experience."
        ]
      },
      {
        day: "Day 2: City Tour + Sentosa",
        description: [
          "City highlights in morning, then Sentosa – cable car, SEA Aquarium, Wings of Time."
        ]
      },
      {
        day: "Day 3: Universal Studios",
        description: [
          "Full-day fun at Universal Studios with rides & shows."
        ]
      },
      {
        day: "Day 4: Gardens by the Bay + Marina Bay",
        description: [
          "Visit Gardens by the Bay domes. Evening at Marina Bay Sands SkyPark."
        ]
      },
      {
        day: "Day 5: Departure",
        description: [
          "Breakfast, check-out and airport transfer."
        ]
      }
    ]
  },

  // Dubai
  {
    id: "dubai",
    title: "Dubai",
    type: "international",
    image: dubai,
    days: [
      {
        day: "Day 1: Arrive Sharjah/Dubai",
        description: [
          "Check-in and relax.",
          "Evening Dhow Cruise at Dubai Marina with dinner & entertainment."
        ]
      },
      {
        day: "Day 2: Dubai City Tour",
        description: [
          "Visit Burj Al Arab, Palm Jumeirah, Jumeirah Mosque & Gold Souk."
        ]
      },
      {
        day: "Day 3: Desert Safari",
        description: [
          "Evening desert safari with dune bashing, camel ride, BBQ dinner & cultural show."
        ]
      },
      {
        day: "Day 4: Abu Dhabi Tour",
        description: [
          "Excursion to Abu Dhabi – Sheikh Zayed Grand Mosque, Corniche & Ferrari World."
        ]
      },
      {
        day: "Day 5: Departure",
        description: [
          "Check-out and transfer to airport."
        ]
      }
    ]
  },

  // Bali
  {
    id: "bali",
    title: "Bali",
    type: "international",
    image: Bali,
    days: [
      {
        day: "Day 1: Arrive Bali – Tanah Lot",
        description: [
          "Meet guide, hotel check-in.",
          "Evening sunset at Tanah Lot Temple."
        ]
      },
      {
        day: "Day 2: Ubud & Kintamani",
        description: [
          "Explore Ubud village, Monkey Forest and Kintamani Volcano."
        ]
      },
      {
        day: "Day 3: Water Sports & Uluwatu",
        description: [
          "Enjoy parasailing, banana boat & jet ski.",
          "Sunset at Uluwatu Temple."
        ]
      },
      {
        day: "Day 4: Nusa Penida",
        description: [
          "Day trip to Nusa Penida with beach visits."
        ]
      },
      {
        day: "Day 5: Departure",
        description: [
          "Breakfast, check-out and airport transfer."
        ]
      }
    ]
  },

  // Domestic Example: Golden Triangle
  {
    id: "golden-triangle",
    title: "Golden Triangle",
    type: "domestic",
    image: GoldenTriangle,
    days: [
      {
        day: "Day 1: Arrive Delhi",
        description: [
          "City tour covering India Gate, Lotus Temple & Qutub Minar."
        ]
      },
      {
        day: "Day 2: Delhi → Agra",
        description: [
          "Drive to Agra, visit Taj Mahal & Agra Fort."
        ]
      },
      {
        day: "Day 3: Agra → Jaipur",
        description: [
          "Stop at Fatehpur Sikri, continue to Jaipur."
        ]
      },
      {
        day: "Day 4: Jaipur Sightseeing",
        description: [
          "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar."
        ]
      },
      {
        day: "Day 5: Departure",
        description: [
          "Check-out and proceed to Delhi airport."
        ]
      }
    ]
  },
  {
    id: "manali-5d4n",
    title: "Manali",
    type: "domestic",
    image: Manali,
    days: [
      {
        day: "Day 1: Arrive Manali",
        description: ["Check-in and leisure at Mall Road."]
      },
      {
        day: "Day 2: Solang Valley / Rohtang Pass",
        description: ["Snow activities & adventure sports."]
      },
      {
        day: "Day 3: Manali Local Tour",
        description: ["Hadimba Temple, Club House, Tibetan Monastery."]
      },
      {
        day: "Day 4: Naggar / Kullu Excursion",
        description: ["Day trip to Kullu valley & Naggar Castle."]
      },
      {
        day: "Day 5: Departure",
        description: ["Breakfast, check-out and departure."]
      }
    ]
  },
  {
    id: "goa-3d2n",
    title: "Goa",
    type: "domestic",
    image: Goa,
    days: [
      {
        day: "Day 1: Arrive Goa",
        description: ["Relax at beach resort."]
      },
      {
        day: "Day 2: North & South Goa Sightseeing",
        description: ["Explore churches, beaches & forts."]
      },
      {
        day: "Day 3: Departure",
        description: ["Check-out and airport transfer."]
      }
    ]
  },
  {
    id: "kerala-4d3n",
    title: "Kerala",
    type: "domestic",
    image: Kerala,
    days: [
      {
        day: "Day 1: Arrive Cochin – Munnar",
        description: ["Drive to Munnar, en route waterfalls."]
      },
      {
        day: "Day 2: Munnar Sightseeing",
        description: ["Tea gardens, Eravikulam National Park & Mattupetty Dam."]
      },
      {
        day: "Day 3: Alleppey Houseboat",
        description: ["Stay in houseboat with backwater cruise."]
      },
      {
        day: "Day 4: Departure",
        description: ["Breakfast and transfer to airport."]
      }
    ]
  },
  {
    id: "andaman-5d4n",
    title: "Andaman",
    type: "domestic",
    image: Andaman,
    days: [
      {
        day: "Day 1: Arrive Port Blair",
        description: ["Visit Cellular Jail & Light & Sound Show."]
      },
      {
        day: "Day 2: Havelock Island",
        description: ["Excursion to Radhanagar Beach."]
      },
      {
        day: "Day 3: Neil Island",
        description: ["Explore Bharatpur Beach & Natural Bridge."]
      },
      {
        day: "Day 4: Ross & North Bay Islands",
        description: ["Boat excursion to Ross & North Bay."]
      },
      {
        day: "Day 5: Departure",
        description: ["Check-out and airport transfer."]
      }
    ]
  }
];

export default itineraries;
