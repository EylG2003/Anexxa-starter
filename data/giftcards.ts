export type GiftCard = {
  slug: string
  brand: string
  image: string
  denominations: number[]
  codes: string[]        // masked or real codes as needed
}

export const giftCards: GiftCard[] = [
  {
    slug: "nike",
    brand: "Nike",
    image: "/giftcards/nike.png",
    denominations: [25, 50, 100, 200],
    codes: ["NIKE-ABCD-1234", "NIKE-EFGH-5678"]
  },
  {
    slug: "hm",
    brand: "H&M",
    image: "/giftcards/hm.png",
    denominations: [25, 50, 100, 200],
    codes: []
  },
  {
    slug: "mango",
    brand: "Mango",
    image: "/giftcards/mango.png",
    denominations: [25, 50, 100, 200],
    codes: []
  },
  {
    slug: "sephora",
    brand: "Sephora",
    image: "/giftcards/sephora.png",
    denominations: [25, 50, 100, 200],
    codes: []
  },
  {
    slug: "mediamarkt",
    brand: "MediaMarkt",
    image: "/giftcards/mediamarkt.png",
    denominations: [25, 50, 100, 200],
    codes: []
  },
  {
    slug: "amazon",
    brand: "Amazon",
    image: "/giftcards/amazon.png",
    denominations: [25, 50, 100, 200],
    codes: []
  },
]
