/* Sample config for the public example. The real page reads its notes from an
   encrypted Google Sheet (see the original setup); this one uses a made-up
   family instead, and nothing it changes is saved anywhere. */
window.FAMILY_TABLE = {
  demo: {
    people: [
      { id: "ah-ma",  name: "Ah Ma",  relation: "The heart of the table", order: 1, household: "Ah Ma", bdayDay: 12, bdayMonth: 3,
        avoid: ["Bitter gourd"], likes: ["Steamed fish", "Kaya toast"], medical: ["Less salt, please"], cakes: ["Pandan chiffon"] },
      { id: "daniel", name: "Daniel", relation: "Eldest son", order: 2, household: "Daniel's", bdayDay: 4, bdayMonth: 7,
        allergies: ["Prawns"], likes: ["Char kway teow", "Satay"], cakes: ["Chocolate"] },
      { id: "sarah",  name: "Sarah",  relation: "Daniel's wife", order: 3, household: "Daniel's", bdayDay: 19, bdayMonth: 11,
        avoid: ["Coriander"], likes: ["Laksa", "Mango"], notes: ["Prefers less spicy"] },
      { id: "lily",   name: "Lily",   relation: "Daniel and Sarah's daughter", order: 4, household: "Daniel's", bdayDay: 2, bdayMonth: 1,
        allergies: ["Peanuts"], likes: ["Fried rice", "Strawberries"], cakes: ["Strawberry shortcake"] },
      { id: "grace",  name: "Grace",  relation: "Youngest daughter", order: 5, household: "Grace's", bdayDay: 28, bdayMonth: 5,
        avoid: ["Durian"], likes: ["Dim sum", "Ice kacang"], notes: ["Vegetarian on the first and fifteenth"] },
      { id: "marcus", name: "Marcus", relation: "Grace's husband", order: 6, household: "Grace's", bdayDay: 9, bdayMonth: 9,
        likes: ["Nasi lemak", "Teh tarik"], medical: ["Watching his sugar"] }
    ],
    dates: [
      { id: "cny",   label: "Reunion dinner", day: 16, month: 2 },
      { id: "anniv", label: "Ah Ma and Ah Kong's anniversary", day: 21, month: 6 }
    ]
  }
};
