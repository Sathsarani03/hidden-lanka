// Demo imagery: these are illustrative Unsplash images, not verified photographs of the named locations.
const photo=(id,w=1400)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const destinations = [
  {
    slug: 'riverston',
    name: 'Riverston',
    region: 'Matale',
    category: 'Mountains',
    tag: 'Above the clouds',
    image: '/images/riverston.jpg',
    description: 'Winding mountain roads, sweeping grasslands and cool highland air make Riverston an unforgettable escape.',
    duration: '1–2 days',
    difficulty: 'Moderate',
    lat: 7.516,
    long: 80.735
  },
  {
    slug: 'diyaluma-falls',
    name: 'Diyaluma Falls',
    region: 'Badulla',
    category: 'Waterfalls',
    tag: 'Chasing waterfalls',
    image: '/images/diyaluma.jpg',
    description: 'An extraordinary cascade set among the dramatic landscapes of Sri Lanka’s hill country. Follow local safety guidance around cliffs and pools.',
    duration: 'Half day',
    difficulty: 'Moderate',
    lat: 6.733,
    long: 81.033
  },
  {
    slug: 'hiriketiya',
    name: 'Hiriketiya',
    region: 'Matara',
    category: 'Beaches',
    tag: 'Salt & serenity',
    image: '/images/hiriketiya.jpg',
    description: 'A crescent-shaped coastal bay known for its laid-back atmosphere, cafés and surfing culture.',
    duration: '1–3 days',
    difficulty: 'Easy',
    lat: 5.962,
    long: 80.707
  },
  {
    slug: 'meemure',
    name: 'Meemure',
    region: 'Kandy',
    category: 'Villages',
    tag: 'Beyond the road',
    image: '/images/meemure.jpg',
    description: 'A remote village surrounded by the Knuckles mountain landscape, with a strong connection to local heritage and nature.',
    duration: '1–2 days',
    difficulty: 'Moderate',
    lat: 7.434,
    long: 80.845
  },
  {
    slug: 'bambarakanda-falls',
    name: 'Bambarakanda Falls',
    region: 'Badulla',
    category: 'Waterfalls',
    tag: 'Into the wild',
    image: '/images/bambarakanda falls.jpg',
    description: 'Sri Lanka’s tallest waterfall plunges through pine-fringed highland scenery near Kalupahana.',
    duration: 'Half day',
    difficulty: 'Easy–Moderate',
    lat: 6.773,
    long: 80.831
  },
  {
    slug: 'ritigala',
    name: 'Ritigala',
    region: 'Anuradhapura',
    category: 'Heritage',
    tag: 'Echoes of time',
    image: '/images/ritigala.jpg',
    description: 'Explore the atmosphere of an ancient forest monastery and the remarkable natural landscape surrounding it.',
    duration: 'Half day',
    difficulty: 'Easy–Moderate',
    lat: 8.116,
    long: 80.654
  }
];

export const categories = [
  'All',
  'Mountains',
  'Waterfalls',
  'Beaches',
  'Villages',
  'Heritage'
];


