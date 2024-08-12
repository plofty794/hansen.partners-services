export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Meet the Team",
    href: "/#",
    description:
      "This section highlights the real estate professionals and staff members. It helps build trust by showcasing the experience and qualifications of the team.",
  },
  {
    title: "Testimonials",
    href: "/#",
    description:
      "This section features feedback from clients, serving as social proof of the company’s credibility and service quality.",
  },
  {
    title: "Our Communities",
    href: "/#",
    description:
      "This section provides information about the various communities or neighborhoods where the real estate company operates, helping potential buyers explore different areas.",
  },
];

export const LOCATIONS = [
  {
    name: "New York",
    areas: [
      "New York, NY, USA",
      "New York State, USA",
      "New York Mills, MN, USA",
      "New York Mills, NY, USA",
      "New York County, NY, USA",
    ],
    listings: ["New York, 1276", "New York, 1750", , "New York, 244"],
  },
  {
    name: "California",
    areas: [
      "California, USA",
      "California City, CA, USA",
      "California, MD, USA",
      "California, MO, USA",
      "California, PA, USA",
    ],
    listings: [" California, 6053", "  California, 237", " California, 291,"],
  },
  {
    name: "Miami",
    areas: [
      "Miami, FL, USA",
      "Miami Beach, FL, USA",
      "Miami Gardens, FL, USA",
      "Miamisburg, OH, USA",
      "Miami, OK, USA",
    ],
    listings: ["MIAMI, 27676", "Miami, 7112", "Miami Road, 15085"],
  },
];

type PROCESS = {
  title: string;
  description: string;
  imageUrl: string;
};

export const SELLING_PROCESS: PROCESS[] = [
  {
    title: "Initial Consultation & Planning",
    description:
      "Meet with our real estate experts to discuss your goals, evaluate your property, and create a tailored selling strategy that maximizes your home's value. This first step sets the foundation for a successful sale.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027",
  },
  {
    title: "Devise & Execute Marketing Plan",
    description:
      "Develop a customized marketing strategy to showcase your property, utilizing professional photography, online listings, and targeted advertising. We’ll execute the plan to attract the right buyers and maximize exposure.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004",
  },
  {
    title: "Review Offers & Reach Agreement with Buyer",
    description:
      "Evaluate incoming offers with expert guidance, considering both price and terms. We’ll help you negotiate and finalize an agreement that meets your goals and secures the best deal with the buyer.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027",
  },
  {
    title: "Complete Transaction Process",
    description:
      "Finalize all the legal and financial details, ensuring a smooth closing. We’ll guide you through the paperwork, coordinate with all parties, and ensure that the transaction is completed successfully.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004",
  },
  {
    title: "After - Sale Service",
    description:
      "Receive continued support even after the sale is complete. We’re here to assist with any post-sale needs, from finalizing paperwork to answering questions and ensuring a seamless transition for you and the buyer.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027",
  },
];

export const BUYING_PROCESS: PROCESS[] = [
  {
    title: "Initial Consultation & Planning",
    description:
      "Meet with our real estate experts to discuss your goals, assess your property, and create a personalized plan to maximize your sale's success.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004",
  },
  {
    title: "Search for a Home & Get Pre-Approved",
    description:
      "Explore available properties with our guidance and secure a mortgage pre-approval to streamline your buying process and strengthen your offer",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027",
  },
  {
    title: "Submit an Offer",
    description:
      "Work with your agent to craft a competitive offer, considering market conditions and property value, to increase your chances of securing your desired home.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/nhcjbdzbycjvfcks0nqe/image-004",
  },
  {
    title: "Complete Settlement Process",
    description:
      "Finalize the transaction by reviewing contracts, completing inspections, and ensuring all legal and financial details are in order before closing on your new home.",
    imageUrl:
      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gihsg13plfsb8xfbzmlf/image-027",
  },
];

type SPONSORS = {
  imageUrl: string;
};

export const SPONSORS: SPONSORS[] = [
  {
    imageUrl: "https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg",
  },
  {
    imageUrl:
      "https://www.zillowstatic.com/bedrock/app/uploads/sites/19/2019/06/2019_Trulia_Logo_RGB_Black-e06237-500x262.jpg",
  },
  {
    imageUrl:
      "https://s.zillowstatic.com/pfs/static/z-logo-default-visual-refresh.svg",
  },
];
