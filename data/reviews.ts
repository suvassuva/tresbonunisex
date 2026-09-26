export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: "Google Review";
  text: string;
  serviceMentioned?: string;
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "r-1",
    author: "Arjun Venkat",
    rating: 5,
    date: "2 weeks ago",
    source: "Google Review",
    text: "Kamala is an absolute magician with hair. Finding a salon in South Bangalore that understands how hair behaves without forcing generic salon looks has been a struggle. The attention to detail, scalp prep, and the precise cut was world-class. The space opposite Kuvempu Park is peaceful and very chic.",
    serviceMentioned: "Creative Haircut & Styling",
    verified: true,
  },
  {
    id: "r-2",
    author: "Pooja Hegde",
    rating: 5,
    date: "1 month ago",
    source: "Google Review",
    text: "Got my balayage done here and I am obsessed! Kamala took 20 minutes just discussing shades that would suit my undertone before even touching my hair. The champagne tones came out so subtle and luminous. Zero brassiness, and my hair still feels healthy and soft.",
    serviceMentioned: "Balayage & Hair Spa",
    verified: true,
  },
  {
    id: "r-3",
    author: "Rohit Krishnan",
    rating: 5,
    date: "3 weeks ago",
    source: "Google Review",
    text: "Best beard sculpting and haircut experience in BTM Layout. The hot eucalyptus towel and straight razor finish are top tier. Calm music, no loud chatter or sales push, just pure craftsmanship.",
    serviceMentioned: "Precision Beard Grooming",
    verified: true,
  },
  {
    id: "r-4",
    author: "Shreya Sen",
    rating: 5,
    date: "1 month ago",
    source: "Google Review",
    text: "TRÈS BON is genuinely gender-inclusive. As someone with short textured hair, most salons either treat me like a traditional women's cut or a rushed barbershop. Here, they listened carefully and gave me the best textured crop of my life.",
    serviceMentioned: "Textured Crop Haircut",
    verified: true,
  },
  {
    id: "r-5",
    author: "Deepika & Sandeep",
    rating: 5,
    date: "2 months ago",
    source: "Google Review",
    text: "Kamala and her team handled our pre-wedding cocktail styling. She worked wonders with hair setting that held throughout 6 hours of dancing! Beautiful ambiance and welcoming hospitality.",
    serviceMentioned: "Bridal & Occasion Styling",
    verified: true,
  },
  {
    id: "r-6",
    author: "Vikramaditya Nair",
    rating: 5,
    date: "2 months ago",
    source: "Google Review",
    text: "The hair spa with the ozone mist and head massage was worth every rupee. Super clean, aesthetic warm interior, and genuine professionalism. My regular go-to salon in Bengaluru now.",
    serviceMentioned: "Restorative Hair Spa",
    verified: true,
  },
];
