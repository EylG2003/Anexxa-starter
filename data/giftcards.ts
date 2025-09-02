export type GiftCard = {
  slug: string;
  name: string;
  logo: string;
  denominations: number[];
  codes?: string[];
};

export const giftCards: GiftCard[] = [
  {
    slug: "nike",
    name: "Nike",
    logo: "/giftcards/nike.png",
    denominations: [25, 50, 100, 200],
    codes: ["NIKE-ABCD-1234", "NIKE-EFGH-5678"],
  },
  {
    slug: "hm",
    name: "H&M",
    logo: "/giftcards/hm.png",
    denominations: [25, 50, 100, 200],
    codes: [],
  },
  {
    slug: "mango",
    name: "Mango",
    logo: "/giftcards/mango.png",
    denominations: [25, 50, 100, 200],
    codes: [],
  },
  {
    slug: "sephora",
    name: "Sephora",
    logo: "/giftcards/sephora.png",
    denominations: [25, 50, 100, 200],
    codes: [],
  },
  {
    slug: "mediamarkt",
    name: "MediaMarkt",
    logo: "/giftcards/mediamarkt.png",
    denominations: [25, 50, 100, 200],
    codes: [],
  },
  {
    slug: "amazon",
    name: "Amazon",
    logo: "/giftcards/amazon.png",
    denominations: [25, 50, 100, 200],
    codes: [],
  },
];

