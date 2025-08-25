export type GiftCardProduct = {
  slug: string;
  name: string;
  prices?: number[];
  denominations?: number[];
  codes?: string[];
  logo?: string;
  brandColor?: string;
};

export const giftCards: GiftCardProduct[] = [
  {
    slug: 'nike',
    name: 'Nike',
    description: 'Digital gift card redeemable at Nike online and stores.',
    prices: [25, 50, 100, 200],
    codes: [
      'NIKE-100-ABCD-001','NIKE-100-ABCD-002','NIKE-100-ABCD-003','NIKE-50-EFGH-001','NIKE-50-EFGH-002',
      'NIKE-200-IJKL-001','NIKE-200-IJKL-002','NIKE-25-MNOP-001','NIKE-25-MNOP-002','NIKE-150-QRST-001'
    ],
  },
  {
    slug: 'zara',
    name: 'Zara',
    description: 'Zara eGift for fashion and accessories.',
    prices: [25, 50, 100, 200],
    codes: [
      'ZARA-200-AAAA-001','ZARA-100-BBBB-001','ZARA-50-CCCC-001','ZARA-25-DDDD-001','ZARA-200-EEEE-002',
      'ZARA-100-FFFF-002','ZARA-50-GGGG-002','ZARA-25-HHHH-002','ZARA-150-IIII-001','ZARA-75-JJJJ-001'
    ],
  },
  {
    slug: 'hm',
    name: 'H&M',
    description: 'H&M digital gift card for apparel and home.',
    prices: [25, 50, 100, 200],
    codes: [
      'HM-100-AAAA-001','HM-50-BBBB-001','HM-25-CCCC-001','HM-200-DDDD-001','HM-100-EEEE-002',
      'HM-50-FFFF-002','HM-25-GGGG-002','HM-150-HHHH-001','HM-75-IIII-001','HM-120-JJJJ-001'
    ],
  },
  {
    slug: 'mango',
    name: 'Mango',
    description: 'Mango eGift card for fashion and accessories.',
    prices: [25, 50, 100, 200],
    codes: [
      'MANGO-150-AAAA-001','MANGO-100-BBBB-001','MANGO-50-CCCC-001','MANGO-25-DDDD-001','MANGO-200-EEEE-001',
      'MANGO-150-FFFF-002','MANGO-100-GGGG-002','MANGO-50-HHHH-002','MANGO-25-IIII-002','MANGO-120-JJJJ-001'
    ],
  },
  {
    slug: 'sephora',
    name: 'Sephora',
    description: 'Sephora eGift for beauty products.',
    prices: [25, 50, 100, 200],
    codes: [
      'SEPH-100-AAAA-001','SEPH-50-BBBB-001','SEPH-25-CCCC-001','SEPH-200-DDDD-001','SEPH-150-EEEE-001',
      'SEPH-100-FFFF-002','SEPH-50-GGGG-002','SEPH-25-HHHH-002','SEPH-75-IIII-001','SEPH-120-JJJJ-001'
    ],
  },
  {
    slug: 'mediamarkt',
    name: 'MediaMarkt',
    description: 'Electronics and appliances eGift card.',
    prices: [25, 50, 100, 200],
    codes: [
      'MM-200-AAAA-001','MM-100-BBBB-001','MM-50-CCCC-001','MM-25-DDDD-001','MM-150-EEEE-001',
      'MM-200-FFFF-002','MM-100-GGGG-002','MM-50-HHHH-002','MM-25-IIII-002','MM-120-JJJJ-001'
    ],
  },
  {
    slug: 'amazon',
    name: 'Amazon',
    description: 'Amazon eGift card usable across categories.',
    prices: [25, 50, 100, 200],
    codes: [
      'AMZ-120-AAAA-001','AMZ-50-BBBB-002','AMZ-25-CCCC-001','AMZ-200-DDDD-001','AMZ-150-EEEE-001',
      'AMZ-100-FFFF-002','AMZ-50-GGGG-003','AMZ-25-HHHH-004','AMZ-75-IIII-001','AMZ-90-JJJJ-001'
    ],
  },
];
