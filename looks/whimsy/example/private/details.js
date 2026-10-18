/* Sample party details for the public example. Every name, address and
   letter here is made up. For a real party, replace this file with your own
   and keep it out of any public repository. */
window.PARTY_DETAILS = {
  address: {
    lines: ["12 Example Lane", "Somewhere Lovely"],
    note: "Ring the bell twice and come straight up."
  },

  overcooked: "only with the best players",

  guests: [
    { name: "Amelia",  status: "yes" },
    { name: "Ben",     status: "yes" },
    { name: "Clara",   status: "no" },
    { name: "Daniel",  status: "yes" },
    { name: "Evie",    status: "pending" },
    { name: "Felix",   status: "yes" },
    { name: "Grace",   status: "no" },
    { name: "Hannah",  status: "yes" },
    { name: "Isaac",   status: "yes" },
    { name: "Jade",    status: "pending" },
    { name: "Someone special", status: "heart" }
  ],

  guestNote: "Clara and Grace are overseas this year. Wanted them here all the same.",

  letters: {
    "Amelia": [
      "Dear Amelia,",
      "Thank you for coming, and for every little thing you did to make the day feel like a party.",
      "With so much love."
    ],
    "Ben": [
      "Dear Ben,",
      "Thank you for the laughs, the snacks, and staying until the very end.",
      "Love, always."
    ]
  },

  wishlist: [
    { id: "card",     group: "made", name: "A nice card, or anything handmade",
      note: "Genuinely the top of the list. Made beats bought." },
    { id: "playlist", group: "made", name: "A playlist I can play",
      note: "One for the drive to work and one for slow mornings." },
    { id: "drawing",  group: "made", name: "A drawing", note: "Of anything at all." },
    { id: "coffee",   group: "buy",  name: "Nice coffee beans", note: "Berry or fruity notes." },
    { id: "candle",   group: "buy",  name: "A candle that smells like a bakery" },
    { id: "flowers",  group: "buy",  name: "Fresh flowers", voucher: true }
  ],

  wishlistNote: "No pressure at all. Coming is the gift.",

  /* No claims store in the example: claims stay in this browser only. */
  claimsEndpoint: "",
  claimsCheck: "",
  passphrase: "wishlist",
  viewPassphrase: "mira"
};
