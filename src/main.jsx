import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  Clock,
  Compass,
  Copy,
  Eye,
  Filter,
  Flame,
  Globe,
  Heart,
  HelpCircle,
  ImagePlus,
  Leaf,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Phone,
  Play,
  Plus,
  Printer,
  Search,
  SearchX,
  Send,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tag,
  ThumbsUp,
  Upload,
  User,
  Utensils,
  Video,
  X,
} from 'lucide-react';
import './styles.css';

const photo = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=86`;

const images = {
  butterChicken: photo('photo-1603894584373-5ac82b3ae398'),
  biryani: photo('photo-1563379091339-03246963d51a'),
  dumplings: photo('photo-1601050690597-df0568f70950'),
  curry: photo('photo-1547592180-85f173990554'),
  pasta: photo('photo-1551183053-bf91a1d81141'),
  pizza: photo('photo-1565299624946-b28f40a0ae38'),
  dessert: photo('photo-1578985545062-69928b1d9587'),
  pancakes: photo('photo-1484723091739-30a097e8f929'),
  greens: photo('photo-1512621776951-a57141f2eefd'),
  ingredients: photo('photo-1498837167922-ddd27525d352'),
  kitchen: photo('photo-1556910103-1c02745aae4d'),
  foodTable: photo('photo-1543353071-873f17a7a088'),
  salad: photo('photo-1540189549336-e6e99c3679fe'),
  toast: photo('photo-1482049016688-2d3e1b311543'),
  plate: photo('photo-1504674900247-0877df9cc836'),
};

const recipes = [
  {
    id: 'butter-chicken',
    title: 'Restaurant-Style Butter Chicken',
    shortTitle: 'Butter Chicken',
    description: 'Rich, creamy and layered with aromatic spices, this cozy classic tastes like a special night in.',
    image: images.butterChicken,
    category: 'Indian',
    cuisine: 'Indian',
    meal: 'Dinner',
    time: 50,
    prep: 15,
    cook: 35,
    servings: 4,
    difficulty: 'Medium',
    rating: 4.9,
    reviews: 182,
    author: 'Aarohi Mehta',
    authorRole: 'Recipe developer',
    date: 'Aug 18, 2026',
    tags: ['comfort food', 'chicken', 'weeknight'],
    nutrition: { calories: 482, protein: '32g', carbs: '18g', fat: '31g', fiber: '4g' },
    groups: [
      { name: 'Marinated chicken', items: ['700g boneless chicken thighs', '½ cup Greek yogurt', '1 tbsp lemon juice', '1 tbsp grated ginger', '3 garlic cloves, grated', '1 tsp smoked paprika', '1 tsp garam masala', '½ tsp turmeric', 'Sea salt'] },
      { name: 'Silky tomato sauce', items: ['2 tbsp ghee or butter', '1 small yellow onion, finely diced', '400g crushed tomatoes', '1 tsp ground cumin', '1 tsp garam masala', '½ cup double cream', '1 tbsp kasuri methi', 'Fresh coriander, to finish'] },
    ],
    steps: [
      { title: 'Marinate the chicken', text: 'Mix the yogurt, lemon, ginger, garlic and spices in a bowl. Coat the chicken well, cover and chill for at least 30 minutes, or overnight for deeper flavor.', image: images.ingredients },
      { title: 'Char until golden', text: 'Heat a large skillet until very hot. Cook the chicken in batches so each piece catches a little smoky color. It does not need to be cooked through yet.', image: images.kitchen },
      { title: 'Build the sauce', text: 'Melt the ghee and soften the onion. Stir in the tomatoes, cumin and garam masala, then simmer until glossy and reduced.', image: images.butterChicken },
      { title: 'Bring it together', text: 'Return the chicken to the pan and simmer gently until tender. Fold through the cream and kasuri methi. Taste, season and finish with coriander.', image: images.foodTable },
    ],
  },
  {
    id: 'chicken-biryani',
    title: 'Fragrant Chicken Biryani',
    shortTitle: 'Chicken Biryani',
    description: 'A generous, aromatic pot of fluffy rice, tender chicken and warm whole spices.',
    image: images.biryani,
    category: 'Indian', cuisine: 'Indian', meal: 'Dinner', time: 70, prep: 25, cook: 45, servings: 6, difficulty: 'Medium', rating: 4.8, reviews: 146, author: 'Neelam Kapoor', authorRole: 'Home cook', date: 'Aug 12, 2026', tags: ['rice', 'one pot', 'family'],
    nutrition: { calories: 536, protein: '28g', carbs: '59g', fat: '21g', fiber: '3g' },
    groups: [{ name: 'What you need', items: ['600g chicken thighs', '2 cups basmati rice', '1 cup plain yogurt', '2 onions, sliced', 'Whole spices', 'Saffron and warm milk', 'Fresh mint and coriander'] }],
    steps: [{ title: 'Season the chicken', text: 'Toss the chicken with yogurt, ginger, garlic and spices while the rice cooks halfway.', image: images.ingredients }, { title: 'Layer the pot', text: 'Add the chicken, par-cooked rice, saffron milk and herbs in distinct layers.', image: images.biryani }, { title: 'Steam and serve', text: 'Cover tightly and cook on low until the rice is fluffy and the chicken is tender.', image: images.foodTable }],
  },
  {
    id: 'palak-paneer',
    title: 'Velvety Palak Paneer',
    shortTitle: 'Palak Paneer',
    description: 'Silky spinach, golden paneer and a gentle hit of spice for a feel-good bowl.',
    image: images.greens,
    category: 'Indian', cuisine: 'Indian', meal: 'Lunch', time: 35, prep: 15, cook: 20, servings: 4, difficulty: 'Easy', rating: 4.8, reviews: 94, author: 'Aarohi Mehta', authorRole: 'Recipe developer', date: 'Aug 05, 2026', tags: ['vegetarian', 'green', 'quick'],
    nutrition: { calories: 318, protein: '17g', carbs: '13g', fat: '22g', fiber: '5g' },
    groups: [{ name: 'Ingredients', items: ['500g fresh spinach', '250g paneer, cubed', '1 onion, chopped', '2 tomatoes', '3 garlic cloves', '1 tsp cumin seeds', '¼ cup cream'] }],
    steps: [{ title: 'Blanch the greens', text: 'Blanch spinach briefly, then blend it with tomato, garlic and ginger into a bright green puree.', image: images.greens }, { title: 'Sear the paneer', text: 'Give the paneer golden edges in a hot pan before setting it aside.', image: images.kitchen }, { title: 'Simmer gently', text: 'Bloom the cumin, add the puree and simmer. Fold in paneer and a spoonful of cream.', image: images.foodTable }],
  },
  {
    id: 'momo',
    title: 'Steamed Nepali Chicken Momo',
    shortTitle: 'Chicken Momo',
    description: 'Juicy, pleated dumplings with a bright tomato-sesame achar for dipping.',
    image: images.dumplings,
    category: 'Nepali', cuisine: 'Nepali', meal: 'Snack', time: 45, prep: 25, cook: 20, servings: 4, difficulty: 'Medium', rating: 4.9, reviews: 211, author: 'Sanjay Gurung', authorRole: 'Kathmandu food guide', date: 'Jul 28, 2026', tags: ['dumplings', 'street food', 'shareable'],
    nutrition: { calories: 356, protein: '22g', carbs: '37g', fat: '13g', fiber: '3g' },
    groups: [{ name: 'Momo filling', items: ['500g minced chicken', '1 cup finely shredded cabbage', '2 spring onions', '1 tbsp ginger-garlic paste', '1 tsp toasted sesame', 'Momo wrappers'] }, { name: 'Achar', items: ['3 ripe tomatoes', '1 tbsp sesame seeds', '1 dried red chilli', '1 garlic clove', 'Lime juice and salt'] }],
    steps: [{ title: 'Make the achar', text: 'Char the tomatoes and chilli, then blend with toasted sesame, garlic, lime and salt until punchy.', image: images.curry }, { title: 'Fill and pleat', text: 'Place a teaspoon of filling in each wrapper. Fold, pleat and pinch the top closed.', image: images.dumplings }, { title: 'Steam until tender', text: 'Steam the momos in a lightly oiled basket until the wrappers look glossy and the filling is cooked.', image: images.foodTable }],
  },
  {
    id: 'chicken-tikka',
    title: 'Smoky Chicken Tikka',
    shortTitle: 'Chicken Tikka',
    description: 'Charred at the edges, juicy in the middle and ready for a squeeze of lime.',
    image: images.plate,
    category: 'Indian', cuisine: 'Indian', meal: 'Dinner', time: 40, prep: 20, cook: 20, servings: 4, difficulty: 'Easy', rating: 4.7, reviews: 76, author: 'Aarohi Mehta', authorRole: 'Recipe developer', date: 'Jul 20, 2026', tags: ['grill', 'chicken', 'high protein'],
    nutrition: { calories: 289, protein: '35g', carbs: '8g', fat: '12g', fiber: '2g' },
    groups: [{ name: 'Ingredients', items: ['700g chicken breast', '½ cup yogurt', 'Lemon juice', 'Tikka spice blend', 'Fresh coriander', 'Red onion and lime'] }],
    steps: [{ title: 'Mix the marinade', text: 'Whisk yogurt, lemon and spices together, then turn the chicken through the marinade.', image: images.ingredients }, { title: 'Cook over high heat', text: 'Thread onto skewers and cook under a hot grill or in an air fryer until deeply charred.', image: images.plate }],
  },
  {
    id: 'dal-makhani',
    title: 'Slow-Simmered Dal Makhani',
    shortTitle: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with tomato, butter and a whisper of smoke.',
    image: images.curry,
    category: 'Indian', cuisine: 'Indian', meal: 'Dinner', time: 90, prep: 15, cook: 75, servings: 5, difficulty: 'Easy', rating: 4.8, reviews: 118, author: 'Neelam Kapoor', authorRole: 'Home cook', date: 'Jul 11, 2026', tags: ['vegetarian', 'slow cook', 'comfort food'],
    nutrition: { calories: 374, protein: '16g', carbs: '42g', fat: '16g', fiber: '12g' },
    groups: [{ name: 'Ingredients', items: ['1 cup whole black lentils', '¼ cup kidney beans', '2 tomatoes, crushed', '1 onion, diced', 'Butter and cream', 'Garam masala'] }],
    steps: [{ title: 'Soak the lentils', text: 'Soak the lentils overnight, rinse well and simmer until completely tender.', image: images.ingredients }, { title: 'Make it glossy', text: 'Cook down the aromatics and tomatoes, fold in the lentils and finish slowly with butter and cream.', image: images.curry }],
  },
  {
    id: 'masala-dosa',
    title: 'Crisp Masala Dosa',
    shortTitle: 'Masala Dosa',
    description: 'Lacy, golden and crisp, with a warm potato masala tucked inside.',
    image: images.pancakes,
    category: 'Indian', cuisine: 'Indian', meal: 'Breakfast', time: 45, prep: 25, cook: 20, servings: 4, difficulty: 'Medium', rating: 4.7, reviews: 88, author: 'Aarohi Mehta', authorRole: 'Recipe developer', date: 'Jun 30, 2026', tags: ['breakfast', 'vegetarian', 'crispy'],
    nutrition: { calories: 294, protein: '7g', carbs: '49g', fat: '8g', fiber: '5g' },
    groups: [{ name: 'Ingredients', items: ['Dosa batter', '4 potatoes, boiled', '1 onion, sliced', 'Mustard seeds and curry leaves', 'Turmeric', 'Coconut chutney, to serve'] }],
    steps: [{ title: 'Prepare the masala', text: 'Temper mustard seeds, curry leaves and onion. Fold through the potatoes and turmeric.', image: images.ingredients }, { title: 'Spread the dosa', text: 'Swirl batter into a thin round on a hot skillet and cook until the edges are lacy and golden.', image: images.pancakes }],
  },
  {
    id: 'moong-dal-halwa',
    title: 'Cardamom Moong Dal Halwa',
    shortTitle: 'Moong Dal Halwa',
    description: 'A rich, fragrant sweet made slowly with toasted lentils, ghee and cardamom.',
    image: images.dessert,
    category: 'Desserts', cuisine: 'Indian', meal: 'Dessert', time: 55, prep: 15, cook: 40, servings: 6, difficulty: 'Medium', rating: 4.6, reviews: 62, author: 'Neelam Kapoor', authorRole: 'Home cook', date: 'Jun 22, 2026', tags: ['dessert', 'sweet', 'festival'],
    nutrition: { calories: 422, protein: '11g', carbs: '44g', fat: '24g', fiber: '5g' },
    groups: [{ name: 'Ingredients', items: ['1 cup split moong dal', '½ cup ghee', '¾ cup sugar', 'Cardamom powder', 'Saffron', 'Almonds and pistachios'] }],
    steps: [{ title: 'Toast the dal', text: 'Cook the soaked dal in ghee over low heat until nutty, golden and fragrant.', image: images.ingredients }, { title: 'Finish slowly', text: 'Add warm milk, sugar and saffron. Stir until thick, glossy and soft enough to spoon.', image: images.dessert }],
  },
  {
    id: 'nepali-chicken-curry',
    title: 'Easy Nepali Chicken Curry',
    shortTitle: 'Nepali Chicken Curry',
    description: 'A homestyle curry with toasted cumin, tomatoes and a gentle mountain warmth.',
    image: images.foodTable,
    category: 'Nepali', cuisine: 'Nepali', meal: 'Dinner', time: 55, prep: 15, cook: 40, servings: 4, difficulty: 'Easy', rating: 4.9, reviews: 133, author: 'Sanjay Gurung', authorRole: 'Kathmandu food guide', date: 'Jun 14, 2026', tags: ['homestyle', 'chicken', 'Nepal'],
    nutrition: { calories: 398, protein: '31g', carbs: '16g', fat: '22g', fiber: '4g' },
    groups: [{ name: 'Ingredients', items: ['700g chicken pieces', '2 onions, sliced', '3 tomatoes', 'Ginger and garlic', 'Cumin and coriander', 'Fresh coriander'] }],
    steps: [{ title: 'Toast the spices', text: 'Warm cumin and coriander until fragrant, then add onion and cook until deeply golden.', image: images.ingredients }, { title: 'Simmer the curry', text: 'Add tomatoes, chicken and a splash of water. Cover and simmer until tender and richly sauced.', image: images.foodTable }],
  },
  {
    id: 'thukpa',
    title: 'Himalayan Vegetable Thukpa',
    shortTitle: 'Vegetable Thukpa',
    description: 'A warming noodle bowl full of greens, ginger and just enough chilli.',
    image: images.pasta,
    category: 'Nepali', cuisine: 'Nepali', meal: 'Lunch', time: 30, prep: 10, cook: 20, servings: 3, difficulty: 'Easy', rating: 4.8, reviews: 57, author: 'Sanjay Gurung', authorRole: 'Kathmandu food guide', date: 'Jun 08, 2026', tags: ['noodles', 'vegetarian', 'quick'],
    nutrition: { calories: 302, protein: '11g', carbs: '48g', fat: '8g', fiber: '7g' },
    groups: [{ name: 'Ingredients', items: ['Rice noodles', 'Carrot and cabbage', 'Mushrooms', 'Ginger and garlic', 'Vegetable stock', 'Coriander and lime'] }],
    steps: [{ title: 'Start the broth', text: 'Sauté ginger, garlic and chilli, then pour in stock and bring to a gentle simmer.', image: images.ingredients }, { title: 'Add the noodles', text: 'Add the vegetables and noodles. Cook until just tender, then finish with lime and herbs.', image: images.pasta }],
  },
  {
    id: 'chicken-chili',
    title: 'Five-Minute Chicken Chili',
    shortTitle: 'Chicken Chili',
    description: 'Crispy chicken, sweet peppers and a glossy chilli sauce for busy evenings.',
    image: images.plate,
    category: 'Asian', cuisine: 'Asian', meal: 'Dinner', time: 25, prep: 10, cook: 15, servings: 3, difficulty: 'Easy', rating: 4.7, reviews: 71, author: 'Aarohi Mehta', authorRole: 'Recipe developer', date: 'May 29, 2026', tags: ['quick', 'chicken', 'spicy'],
    nutrition: { calories: 341, protein: '27g', carbs: '29g', fat: '14g', fiber: '4g' },
    groups: [{ name: 'Ingredients', items: ['500g chicken breast', 'Red and green peppers', 'Fresh red chilli', 'Soy sauce', 'Rice vinegar', 'Spring onions'] }],
    steps: [{ title: 'Get everything ready', text: 'Slice the chicken and peppers before you start. This one moves quickly once the pan is hot.', image: images.ingredients }, { title: 'Stir-fry', text: 'Sear the chicken, add peppers and toss through the sweet chilli glaze. Finish with spring onions.', image: images.plate }],
  },
  {
    id: 'creamy-pasta',
    title: 'Garlic Herb Creamy Pasta',
    shortTitle: 'Creamy Pasta',
    description: 'Silky, garlicky and ready in one pan — the weeknight bowl we return to.',
    image: images.pasta,
    category: 'Continental', cuisine: 'Continental', meal: 'Dinner', time: 25, prep: 5, cook: 20, servings: 2, difficulty: 'Easy', rating: 4.6, reviews: 49, author: 'Mia Santos', authorRole: 'Food stylist', date: 'May 18, 2026', tags: ['one pan', 'vegetarian', 'quick'],
    nutrition: { calories: 512, protein: '16g', carbs: '63g', fat: '22g', fiber: '4g' },
    groups: [{ name: 'Ingredients', items: ['200g rigatoni', '3 garlic cloves', '½ cup cream', 'Parmesan', 'Fresh parsley', 'Black pepper'] }],
    steps: [{ title: 'Cook the pasta', text: 'Boil the pasta until just shy of al dente, saving a cup of the starchy cooking water.', image: images.pasta }, { title: 'Make it silky', text: 'Sauté garlic, add cream and pasta, then loosen with cooking water and finish with Parmesan.', image: images.kitchen }],
  },
];

const categories = [
  { name: 'Indian', slug: 'indian', description: 'Curries, biryani, dosa, paneer and more.', count: 248, image: images.butterChicken, color: 'orange' },
  { name: 'Nepali', slug: 'nepali', description: 'Comforting classics from the hills and valleys.', count: 86, image: images.dumplings, color: 'green' },
  { name: 'Asian', slug: 'asian', description: 'Big flavors from across the continent.', count: 132, image: images.plate, color: 'gold' },
  { name: 'Continental', slug: 'continental', description: 'Italian, French, Mediterranean and beyond.', count: 104, image: images.pasta, color: 'blue' },
  { name: 'Desserts', slug: 'desserts', description: 'Sweet treats for every kind of day.', count: 97, image: images.dessert, color: 'pink' },
  { name: 'Drinks', slug: 'drinks', description: 'Smoothies, coolers, tea and slow sips.', count: 64, image: images.greens, color: 'mint' },
];

const videos = [
  { id: 'chicken-chili', title: '5-Minute Chicken Chili', description: 'A glossy, spicy stir-fry for nights when dinner needs to happen now.', thumbnail: images.plate, duration: '04:58', author: 'Aarohi Mehta', views: '18.4K', category: 'Quick & Easy', date: 'Aug 17, 2026' },
  { id: 'palak-paneer', title: 'How to Make Perfect Palak Paneer', description: 'The secret to that vivid green sauce and soft, golden paneer.', thumbnail: images.greens, duration: '08:21', author: 'Aarohi Mehta', views: '26.8K', category: 'Vegetarian', date: 'Aug 13, 2026' },
  { id: 'nepali-chicken-curry', title: 'Easy Nepali Chicken Curry', description: 'A homestyle recipe with a little Kathmandu in every spoonful.', thumbnail: images.foodTable, duration: '11:42', author: 'Sanjay Gurung', views: '31.2K', category: 'Nepali', date: 'Aug 09, 2026' },
  { id: 'chicken-tikka', title: 'Smoky Chicken Tikka', description: 'Big tandoor flavor, no tandoor required.', thumbnail: images.plate, duration: '06:35', author: 'Aarohi Mehta', views: '14.6K', category: 'Indian', date: 'Aug 04, 2026' },
  { id: 'momo', title: 'The Art of a Perfect Momo', description: 'Pleat, steam and dip your way to Nepal’s favorite bite.', thumbnail: images.dumplings, duration: '09:14', author: 'Sanjay Gurung', views: '42.7K', category: 'Nepali', date: 'Jul 27, 2026' },
  { id: 'butter-chicken', title: 'Butter Chicken, Three Ways', description: 'Our saucy weekend project, filmed from every delicious angle.', thumbnail: images.butterChicken, duration: '12:08', author: 'Neelam Kapoor', views: '54.1K', category: 'Indian', date: 'Jul 22, 2026' },
];

const blogPosts = [
  { slug: 'nepali-food-culture', category: 'Food Stories', title: 'A table in Kathmandu: why Nepali food feels like home', excerpt: 'From smoky achar to a shared plate of momos, discover the generous rituals behind Nepal’s most-loved dishes.', author: 'Sanjay Gurung', date: 'Aug 16, 2026', reading: '6 min read', image: images.dumplings },
  { slug: 'spices-to-know', category: 'Ingredients', title: 'The Orangee guide to a better spice drawer', excerpt: 'Nine everyday spices that can turn a simple dinner into something worth remembering.', author: 'Aarohi Mehta', date: 'Aug 08, 2026', reading: '4 min read', image: images.ingredients },
  { slug: 'weeknight-cooking', category: 'Kitchen Tips', title: 'How to make weeknight cooking feel unhurried', excerpt: 'A few small kitchen habits that make dinner calmer, faster and a lot more joyful.', author: 'Mia Santos', date: 'Jul 30, 2026', reading: '5 min read', image: images.kitchen },
  { slug: 'seasonal-table', category: 'Seasonal Recipes', title: 'The late-summer table: bright, juicy and a little messy', excerpt: 'Bring the best of the season to the table with salads, grilled favorites and cool drinks.', author: 'Aarohi Mehta', date: 'Jul 21, 2026', reading: '7 min read', image: images.salad },
  { slug: 'comfort-bowl', category: 'Food Stories', title: 'The comfort of a bowl you know by heart', excerpt: 'Why the recipes we repeat are often the ones that tell our stories best.', author: 'Neelam Kapoor', date: 'Jul 14, 2026', reading: '3 min read', image: images.curry },
  { slug: 'host-with-heart', category: 'Travel & Food', title: 'A generous table is the best kind of welcome', excerpt: 'Notes from the cooks, kitchens and little restaurants that feed a community.', author: 'Mia Santos', date: 'Jul 06, 2026', reading: '8 min read', image: images.foodTable },
];

const popularSearches = ['chicken', 'quick dinner', 'momo', 'vegetarian', 'dessert'];

function getRoute() {
  const legacy = window.location.hash.replace(/^#/, '');
  const raw = legacy || `${window.location.pathname}${window.location.search}` || '/';
  const [pathname, query] = raw.split('?');
  return { pathname: pathname || '/', query: new URLSearchParams(query || '') };
}

function Stars({ rating = 4.8, reviews, small = false }) {
  return (
    <span className={`rating ${small ? 'rating-small' : ''}`} aria-label={`${rating} out of 5 stars`}>
      <span className="stars" aria-hidden="true">★★★★★</span>
      <strong>{rating}</strong>
      {reviews !== undefined && <span className="review-count">({reviews})</span>}
    </span>
  );
}

function BrandMark({ compact = false }) {
  return <img className={`brand-logo ${compact ? 'brand-logo-compact' : ''}`} src="/orangee-logo.svg" alt="Orangee Food" />;
}

function AppLink({ to, className = '', children, onClick, ...props }) {
  const handleClick = (event) => {
    if (onClick) onClick(event);
    if (event.defaultPrevented || to.startsWith('http') || to.startsWith('mailto:') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const destination = to.startsWith('/#') ? '/' : to;
    window.history.pushState({}, '', destination);
    window.dispatchEvent(new Event('popstate'));
    if (to.startsWith('/#')) window.setTimeout(() => document.getElementById(to.slice(2))?.scrollIntoView({ behavior: 'smooth' }), 0);
  };
  return <a className={className} href={to.startsWith('/#') ? '/' : to} onClick={handleClick} {...props}>{children}</a>;
}

function Header({ pathname, navigate, favoritesCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const section = pathname === '/' ? 'home' : pathname.split('/')[1];
  const navItems = [
    ['/', 'Home', 'home'],
    ['/recipes', 'Recipes', 'recipes'],
    ['/videos', 'Videos', 'videos'],
    ['/categories', 'Categories', 'categories'],
    ['/blog', 'Blog', 'blog'],
    ['/about', 'About', 'about'],
  ];
  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };
  const go = (to) => {
    setMenuOpen(false);
    navigate(to);
  };
  return (
    <>
      <div className="announcement"><span><Sparkles size={13} /> Fresh recipes, thoughtful stories, every week.</span><AppLink to="/blog">Meet the cooks <ArrowRight size={13} /></AppLink></div>
      <header className="site-header">
        <div className="header-inner">
          <AppLink to="/" className="logo-link" aria-label="Orangee Food home"><BrandMark /></AppLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([to, label, key]) => <AppLink key={key} to={to} className={section === key ? 'nav-link active' : 'nav-link'}>{label}</AppLink>)}
          </nav>
          <div className="header-actions">
            <button className={`header-icon ${searchOpen ? 'active' : ''}`} onClick={() => setSearchOpen((value) => !value)} aria-label="Search"><Search size={19} /></button>
            <AppLink to="/favorites" className="header-icon favorite-link" aria-label={`Favorites, ${favoritesCount} saved`}><Heart size={19} /><span className="header-badge">{favoritesCount}</span></AppLink>
            <AppLink to="/profile" className="header-icon profile-link" aria-label="Your profile"><User size={19} /></AppLink>
            <button className="button button-primary header-submit" onClick={() => navigate('/submit')}><Plus size={17} /> Submit a recipe</button>
            <button className="mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
          </div>
        </div>
        {searchOpen && <form className="header-search" onSubmit={submitSearch}><Search size={18} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search recipes, ingredients, cuisines..." aria-label="Search recipes" /><button type="submit" className="button button-primary button-small">Search</button></form>}
      </header>
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="drawer-top"><BrandMark compact /><button className="header-icon" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={22} /></button></div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([to, label, key]) => <AppLink key={key} to={to} onClick={() => setMenuOpen(false)} className={section === key ? 'mobile-nav-link active' : 'mobile-nav-link'}><span>{label}</span><ChevronRight size={18} /></AppLink>)}
        </nav>
        <div className="drawer-links"><AppLink to="/favorites" onClick={() => setMenuOpen(false)}><Heart size={17} /> My favorites <span>{favoritesCount}</span></AppLink><AppLink to="/submit" onClick={() => setMenuOpen(false)}><Plus size={17} /> Submit a recipe</AppLink><AppLink to="/contact" onClick={() => setMenuOpen(false)}><Mail size={17} /> Contact the team</AppLink></div>
        <div className="drawer-note"><Leaf size={18} /><span>Good food is meant to be shared.</span></div>
      </div>
      {menuOpen && <button className="drawer-backdrop" onClick={() => setMenuOpen(false)} aria-label="Close menu" />}
    </>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand"><AppLink to="/" aria-label="Orangee Food home"><BrandMark /></AppLink><p>Delicious recipes.<br />Inspiring food.<br />Happy cooking.</p><div className="social-row"><a href="https://instagram.com" aria-label="Instagram"><span className="social-letter">◎</span></a><a href="https://youtube.com" aria-label="YouTube"><span className="social-letter">▶</span></a><a href="https://facebook.com" aria-label="Facebook"><span className="social-letter">f</span></a><a href="https://pinterest.com" aria-label="Pinterest"><span className="social-letter">P</span></a></div></div>
        <div className="footer-column"><h3>Explore</h3><AppLink to="/recipes">Recipes</AppLink><AppLink to="/videos">Videos</AppLink><AppLink to="/categories">Categories</AppLink><AppLink to="/recipes?sort=popular">Popular recipes</AppLink></div>
        <div className="footer-column"><h3>Company</h3><AppLink to="/about">About Orangee</AppLink><AppLink to="/contact">Contact us</AppLink><AppLink to="/blog">Food blog</AppLink><AppLink to="/submit">Submit a recipe</AppLink></div>
        <div className="footer-column"><h3>Support</h3><AppLink to="/privacy">Privacy policy</AppLink><AppLink to="/terms">Terms & conditions</AppLink><AppLink to="/contact">FAQ</AppLink><AppLink to="/contact">Help center</AppLink></div>
        <div className="footer-join"><span className="eyebrow eyebrow-green">A note from the kitchen</span><h3>Stay hungry<br />for good things.</h3><p>One lovely recipe and a little kitchen inspiration, in your inbox.</p><AppLink to="/#newsletter" className="text-link">Join the table <ArrowRight size={16} /></AppLink></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Orangee Food. All rights reserved.</span><span>Made for slow mornings & shared tables <span className="footer-heart">♥</span></span></div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, description, children, tone = 'cream' }) {
  return <section className={`page-intro page-intro-${tone}`}><div className="page-intro-shape shape-one" /><div className="page-intro-shape shape-two" /><div className="section-inner page-intro-inner"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}{children}</div></section>;
}

function SectionHeading({ eyebrow, title, description, link, onLink }) {
  return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>{link && <button className="text-link" onClick={onLink}>{link}<ArrowRight size={16} /></button>}</div>;
}

function FavoriteButton({ saved, onClick, label }) {
  return <button className={`favorite-button ${saved ? 'saved' : ''}`} onClick={onClick} aria-label={label || (saved ? 'Remove from favorites' : 'Save to favorites')} aria-pressed={saved}><Heart size={18} fill={saved ? 'currentColor' : 'none'} /></button>;
}

function RecipeCard({ recipe, favorites, toggleFavorite, compact = false }) {
  const saved = favorites.has(recipe.id);
  return <article className={`recipe-card ${compact ? 'recipe-card-compact' : ''}`}>
    <div className="recipe-image-wrap"><AppLink to={`/recipes/${recipe.id}`} aria-label={`View ${recipe.title}`}><img src={recipe.image} alt={recipe.title} loading="lazy" /></AppLink><span className="image-category">{recipe.category}</span><FavoriteButton saved={saved} onClick={() => toggleFavorite(recipe.id)} /></div>
    <div className="recipe-card-body"><div className="card-meta"><span><Clock size={14} /> {recipe.time} min</span><span className="dot-separator" /> <span>{recipe.difficulty}</span></div><AppLink to={`/recipes/${recipe.id}`}><h3>{recipe.title}</h3></AppLink>{!compact && <p>{recipe.description}</p>}<div className="card-footer"><Stars rating={recipe.rating} reviews={recipe.reviews} small /><AppLink to={`/recipes/${recipe.id}`} className="card-arrow" aria-label={`Open ${recipe.title}`}><ArrowRight size={17} /></AppLink></div></div>
  </article>;
}

function CategoryCard({ category }) {
  return <AppLink to={`/categories/${category.slug}`} className={`category-card category-${category.color}`}><img src={category.image} alt="" loading="lazy" /><div className="category-overlay" /><div className="category-content"><span>{category.count} recipes</span><h3>{category.name}</h3><p>{category.description}</p><span className="category-arrow"><ArrowRight size={17} /></span></div></AppLink>;
}

function VideoCard({ video, onOpen }) {
  return <article className="video-card"><AppLink to={`/videos/${video.id}`} className="video-thumb" aria-label={`Watch ${video.title}`}><img src={video.thumbnail} alt={video.title} loading="lazy" /><div className="video-shade" /><span className="duration">{video.duration}</span><span className="play-button"><Play size={18} fill="currentColor" /></span></AppLink><div className="video-card-body"><div className="card-meta"><span>{video.category}</span><span className="dot-separator" /><span>{video.views} views</span></div><AppLink to={`/videos/${video.id}`}><h3>{video.title}</h3></AppLink><div className="video-byline"><span className="avatar avatar-tiny">{video.author.charAt(0)}</span><span>By {video.author}</span><button onClick={onOpen} aria-label="More video actions"><MoreHorizontal size={18} /></button></div></div></article>;
}

function BlogCard({ post, featured = false }) {
  return <article className={`blog-card ${featured ? 'blog-card-featured' : ''}`}><AppLink to={`/blog/${post.slug}`} className="blog-image"><img src={post.image} alt={post.title} loading="lazy" /></AppLink><div className="blog-card-body"><span className="eyebrow eyebrow-orange">{post.category}</span><AppLink to={`/blog/${post.slug}`}><h3>{post.title}</h3></AppLink><p>{post.excerpt}</p><div className="blog-meta"><span>{post.author}</span><span className="dot-separator" /><span>{post.reading}</span></div></div></article>;
}

function Newsletter({ id = 'newsletter' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const submit = (event) => { event.preventDefault(); if (email.trim()) setSubscribed(true); };
  return <section className="newsletter-section" id={id}><div className="newsletter-orb orb-a" /><div className="newsletter-orb orb-b" /><div className="newsletter-inner"><div className="newsletter-leaf"><Leaf size={26} /></div><div><span className="eyebrow eyebrow-light">A little inspiration for your kitchen</span><h2>{subscribed ? 'You’re on the list.' : 'Get delicious recipes in your inbox.'}</h2><p>{subscribed ? 'Keep an eye on your inbox for something delicious.' : 'Join 40,000 home cooks discovering fresh recipes, clever tips and good food stories.'}</p></div>{subscribed ? <div className="subscribed-note"><Check size={19} /> Thanks for joining us!</div> : <form className="newsletter-form" onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" required /><button className="button button-dark" type="submit">Subscribe <ArrowRight size={16} /></button></form>}</div></section>;
}

function HomePage({ navigate, favorites, toggleFavorite }) {
  const [heroSearch, setHeroSearch] = useState('');
  const submit = (event) => { event.preventDefault(); navigate(`/search?q=${encodeURIComponent(heroSearch.trim())}`); };
  return <>
    <section className="hero-section"><div className="hero-pattern" /><div className="hero-inner section-inner"><div className="hero-copy"><span className="eyebrow eyebrow-orange"><span className="eyebrow-dot" /> Your new favorite food place</span><h1>Cook something <em>delicious</em> today.</h1><p>Discover recipes worth cooking, sharing and remembering — from cozy weeknight favorites to the dishes that make a celebration.</p><form className="hero-search" onSubmit={submit}><Search size={20} /><input aria-label="Search recipes" value={heroSearch} onChange={(event) => setHeroSearch(event.target.value)} placeholder="What are you craving today?" /><button className="button button-primary" type="submit">Search</button></form><div className="hero-chips"><span>Try searching:</span>{popularSearches.slice(0, 4).map((term) => <button key={term} onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}>{term}</button>)}</div><div className="hero-proof"><div className="avatar-stack"><span className="avatar" style={{ backgroundImage: `url(${images.toast})` }} /><span className="avatar" style={{ backgroundImage: `url(${images.greens})` }} /><span className="avatar" style={{ backgroundImage: `url(${images.dumplings})` }} /><span className="avatar avatar-more">+40k</span></div><div><div className="proof-stars"><span>★★★★★</span> <strong>4.9/5</strong></div><p>Loved by home cooks everywhere</p></div></div></div><div className="hero-visual"><div className="hero-image-frame"><img src={images.butterChicken} alt="A bowl of creamy butter chicken with herbs" /></div><div className="hero-floating-card"><div className="mini-dish"><img src={images.dumplings} alt="Steamed momo" /></div><div><span>Trending today</span><strong>Steamed Chicken Momo</strong><Stars rating={4.9} small /></div><Heart size={17} className="float-heart" fill="currentColor" /></div><div className="hero-stamp"><span>Made with</span><strong>♥</strong><span>good things</span></div><div className="hero-leaf leaf-one"><Leaf size={50} /></div><div className="hero-leaf leaf-two"><Leaf size={31} /></div></div></div><div className="hero-bottom section-inner"><div><span className="hero-stat-number">1,200<span>+</span></span><span>recipes to explore</span></div><div><span className="hero-stat-number">85<span>+</span></span><span>cook-along videos</span></div><div><span className="hero-stat-number">40k<span>+</span></span><span>happy home cooks</span></div><div className="hero-scroll"><span>Scroll to discover</span><span className="scroll-line" /></div></div></section>

    <section className="section section-white"><div className="section-inner"><SectionHeading eyebrow="The good kind of hungry" title="What everyone’s cooking" description="Recipes our community keeps coming back to." link="See all recipes" onLink={() => navigate('/recipes')} /><div className="recipe-grid recipe-grid-four">{recipes.slice(0, 4).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div></div></section>

    <section className="section section-cream categories-section"><div className="section-inner"><SectionHeading eyebrow="Find your flavor" title="Explore by cuisine" description="A little inspiration for every mood and moment." link="View all categories" onLink={() => navigate('/categories')} /><div className="category-grid">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div></div></section>

    <section className="section section-white feature-section"><div className="section-inner"><div className="feature-card"><div className="feature-image"><img src={images.butterChicken} alt="Creamy butter chicken in a copper bowl" /><span className="feature-image-label"><Flame size={14} /> Most loved this week</span></div><div className="feature-copy"><span className="eyebrow eyebrow-orange">Editor’s pick</span><h2>Comfort in<br /><em>every spoonful.</em></h2><p>Rich, creamy and packed with aromatic spices, this restaurant-style butter chicken is perfect for a comforting homemade meal.</p><Stars rating={4.9} reviews={182} /><div className="feature-facts"><div><span>Prep time</span><strong>15 min</strong></div><div><span>Cook time</span><strong>35 min</strong></div><div><span>Serves</span><strong>4 people</strong></div></div><button className="button button-primary" onClick={() => navigate('/recipes/butter-chicken')}>View the recipe <ArrowRight size={17} /></button><span className="feature-note"><Leaf size={15} /> Tested, tasted and loved by the Orangee kitchen</span></div></div></div></section>

    <section className="section section-cream latest-section"><div className="section-inner"><SectionHeading eyebrow="Just landed" title="Fresh from our kitchen" description="New ideas for your next delicious meal." link="Browse latest" onLink={() => navigate('/recipes')} /><div className="recipe-grid recipe-grid-four">{recipes.slice(4, 8).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div><div className="center-button"><button className="button button-secondary" onClick={() => navigate('/recipes')}>Load more recipes <Plus size={17} /></button></div></div></section>

    <section className="section video-section"><div className="video-decor decor-one" /><div className="video-decor decor-two" /><div className="section-inner"><SectionHeading eyebrow="Cook along with us" title="Watch. Cook. Enjoy." description="Shortcuts, secrets and step-by-step comfort — press play and meet us in the kitchen." link="See all videos" onLink={() => navigate('/videos')} /><div className="video-grid">{videos.slice(0, 3).map((video) => <VideoCard key={video.id} video={video} />)}</div><div className="video-bottom"><div className="video-bottom-mark"><CirclePlay size={20} fill="currentColor" /><span>New videos every week</span></div><button className="video-link" onClick={() => navigate('/videos')}>Explore the video kitchen <ArrowRight size={16} /></button></div></div></section>

    <section className="section section-white quick-section"><div className="section-inner quick-inner"><div className="quick-copy"><span className="eyebrow eyebrow-green">For busy, hungry days</span><h2>Good food<br /><em>in a hurry.</em></h2><p>Fast does not have to mean forgettable. These easy recipes bring a little more joy to your everyday.</p><button className="button button-secondary" onClick={() => navigate('/search?q=quick')}>Find quick recipes <ArrowRight size={17} /></button><div className="quick-list"><span><Check size={15} /> Under 30 minutes</span><span><Check size={15} /> Big on flavor</span><span><Check size={15} /> Weeknight friendly</span></div></div><div className="quick-collage"><div className="quick-main-image"><img src={images.pasta} alt="Creamy pasta with herbs" /></div><div className="quick-small-image"><img src={images.toast} alt="Avocado toast" /></div><div className="quick-recipe-tag"><span>Tonight’s idea</span><strong>Garlic herb<br />creamy pasta</strong><AppLink to="/recipes/creamy-pasta" className="arrow-circle"><ArrowRight size={15} /></AppLink></div></div></div></section>

    <section className="section section-cream spotlight-section"><div className="section-inner"><div className="spotlight-card"><div className="spotlight-copy"><span className="eyebrow eyebrow-green">A taste of home</span><h2>Meet the flavors<br />of <em>Nepal.</em></h2><p>From steaming momos to slow-simmered curries, discover the food, stories and generous spirit of the Himalayas.</p><button className="button button-dark" onClick={() => navigate('/categories/nepali')}>Explore Nepali food <ArrowRight size={17} /></button><div className="spotlight-signature"><span className="avatar avatar-small">S</span><span><strong>Sanjay Gurung</strong><small>Orangee food guide, Kathmandu</small></span></div></div><div className="spotlight-image"><img src={images.dumplings} alt="Nepali momo with dipping sauce" /><div className="spotlight-badge"><span>From our</span><strong>Himalayan<br />table</strong></div></div></div></div></section>

    <section className="section section-white blog-section"><div className="section-inner"><SectionHeading eyebrow="Stories behind the food" title="From the Orangee journal" description="A closer look at the people, places and ingredients around the table." link="Read the journal" onLink={() => navigate('/blog')} /><div className="blog-grid">{blogPosts.slice(0, 3).map((post, index) => <BlogCard key={post.slug} post={post} featured={index === 0} />)}</div></div></section>

    <Newsletter />
  </>;
}

function RecipesPage({ favorites, toggleFavorite, navigate }) {
  const [term, setTerm] = useState('');
  const [active, setActive] = useState('All');
  const cuisines = ['All', 'Indian', 'Nepali', 'Asian', 'Continental', 'Desserts'];
  const filtered = recipes.filter((recipe) => (active === 'All' || recipe.category === active || recipe.cuisine === active) && (!term.trim() || `${recipe.title} ${recipe.description} ${recipe.tags.join(' ')}`.toLowerCase().includes(term.toLowerCase())));
  return <><PageIntro eyebrow="The Orangee recipe box" title="Recipes for real life." description="From five-minute fixes to slow Sunday projects, find something delicious for the moment you’re in."><div className="intro-stats"><span><strong>1,200+</strong> tested recipes</span><span><strong>4.9/5</strong> community rating</span></div></PageIntro><section className="section section-white recipes-page"><div className="section-inner"><div className="library-toolbar"><form className="library-search" onSubmit={(event) => event.preventDefault()}><Search size={18} /><input value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Search by recipe, ingredient or mood" aria-label="Search recipes" /></form><button className="filter-button"><SlidersHorizontal size={17} /> Filters <span>3</span></button></div><div className="cuisine-tabs" role="tablist">{cuisines.map((cuisine) => <button key={cuisine} className={active === cuisine ? 'active' : ''} onClick={() => setActive(cuisine)}>{cuisine}</button>)}</div><div className="results-bar"><p><strong>{filtered.length}</strong> recipes to make today</p><button className="sort-button">Most loved <ChevronDown size={15} /></button></div>{filtered.length ? <div className="recipe-grid recipe-grid-four">{filtered.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div> : <EmptyState title="No recipes found" copy="Try another ingredient, cuisine or a little less specificity." button="Browse all recipes" onClick={() => { setTerm(''); setActive('All'); }} />}</div></section><Newsletter id="recipes-newsletter" /></>;
}

function RecipeDetailPage({ slug, favorites, toggleFavorite, navigate }) {
  const recipe = recipes.find((item) => item.id === slug) || recipes[0];
  const [checked, setChecked] = useState([]);
  const [copied, setCopied] = useState(false);
  const saved = favorites.has(recipe.id);
  const toggleItem = (item) => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item]);
  const share = async () => { try { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { setCopied(true); setTimeout(() => setCopied(false), 1800); } };
  return <article className="recipe-detail-page"><div className="section-inner"><div className="breadcrumbs"><AppLink to="/">Home</AppLink><ChevronRight size={14} /><AppLink to="/recipes">Recipes</AppLink><ChevronRight size={14} /><span>{recipe.category}</span><ChevronRight size={14} /><strong>{recipe.shortTitle}</strong></div><div className="recipe-detail-top"><div className="recipe-detail-copy"><span className="eyebrow eyebrow-orange">{recipe.category} · {recipe.meal}</span><h1>{recipe.title}</h1><p>{recipe.description}</p><div className="detail-author"><span className="avatar">{recipe.author.charAt(0)}</span><div><strong>By {recipe.author}</strong><span>Updated {recipe.date}</span></div><Stars rating={recipe.rating} reviews={recipe.reviews} /></div><div className="detail-actions"><button className={`button ${saved ? 'button-saved' : 'button-primary'}`} onClick={() => toggleFavorite(recipe.id)}><Heart size={17} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved to favorites' : 'Save recipe'}</button><button className="outline-icon-button" onClick={() => window.print()} aria-label="Print recipe"><Printer size={18} /></button><button className="outline-icon-button" onClick={share} aria-label="Copy recipe link">{copied ? <Check size={18} /> : <Share2 size={18} />}</button></div><button className="jump-link" onClick={() => document.getElementById('recipe-card')?.scrollIntoView({ behavior: 'smooth' })}><ArrowRight size={16} /> Jump to recipe</button></div><div className="recipe-detail-image"><img src={recipe.image} alt={recipe.title} /><div className="image-sticker"><span>Orangee</span><strong>tested<br />& loved</strong></div></div></div><div className="recipe-info-bar" id="recipe-card"><div><Clock size={20} /><span>Prep time</span><strong>{recipe.prep} minutes</strong></div><div><Flame size={20} /><span>Cook time</span><strong>{recipe.cook} minutes</strong></div><div><Utensils size={20} /><span>Total time</span><strong>{recipe.time} minutes</strong></div><div><Leaf size={20} /><span>Servings</span><strong>{recipe.servings} people</strong></div></div><div className="recipe-main-grid"><div className="recipe-article-content"><section className="recipe-section"><div className="recipe-section-heading"><span className="section-number">01</span><div><span className="eyebrow eyebrow-orange">Gather around</span><h2>Ingredients</h2><p>Check things off as you go — we’ll keep your place.</p></div></div><div className="ingredient-groups">{recipe.groups.map((group) => <div className="ingredient-group" key={group.name}><h3>{group.name}</h3>{group.items.map((item) => <label className={`ingredient-item ${checked.includes(item) ? 'checked' : ''}`} key={item}><input type="checkbox" checked={checked.includes(item)} onChange={() => toggleItem(item)} /><span className="check-box"><Check size={13} /></span><span>{item}</span></label>)}</div>)}</div><div className="ingredient-note"><Leaf size={18} /><span>Cooking for a crowd? <button onClick={() => alert('Serving adjustments are coming soon — for now, simply scale each ingredient by your guest count.')}>Adjust servings</button></span></div></section><section className="recipe-section instructions-section"><div className="recipe-section-heading"><span className="section-number">02</span><div><span className="eyebrow eyebrow-orange">Let’s get cooking</span><h2>Cooking instructions</h2><p>Take your time. Good food is worth the little pauses.</p></div></div><div className="steps-list">{recipe.steps.map((step, index) => <div className="step-item" key={step.title}><div className="step-number">{String(index + 1).padStart(2, '0')}</div><div className="step-content"><h3>{step.title}</h3><p>{step.text}</p><img src={step.image} alt="" loading="lazy" /></div></div>)}</div></section></div><aside className="recipe-sidebar"><div className="nutrition-card"><div className="nutrition-title"><div><span className="eyebrow eyebrow-green">Good to know</span><h3>Nutrition per serving</h3></div><Leaf size={22} /></div><div className="nutrition-main"><strong>{recipe.nutrition.calories}</strong><span>calories</span></div><div className="nutrition-bars"><NutritionBar label="Protein" value={recipe.nutrition.protein} percent="64%" color="green" /><NutritionBar label="Carbohydrates" value={recipe.nutrition.carbs} percent="42%" color="orange" /><NutritionBar label="Fat" value={recipe.nutrition.fat} percent="58%" color="gold" /><NutritionBar label="Fiber" value={recipe.nutrition.fiber} percent="28%" color="green" /></div><small>Nutrition information is an estimate and may vary by ingredients and portion size.</small></div><div className="side-tip"><Sparkles size={18} /><div><span>Orangee tip</span><p>Make it yours. Taste as you go and add a little more of what makes you happy.</p></div></div><div className="recipe-tags"><span className="eyebrow">Good for</span><div>{recipe.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div></aside></div></div><section className="related-section section section-cream"><div className="section-inner"><SectionHeading eyebrow="Keep cooking" title="You might also like" link="More recipes" onLink={() => navigate('/recipes')} /><div className="recipe-grid recipe-grid-four">{recipes.filter((item) => item.id !== recipe.id).slice(0, 4).map((item) => <RecipeCard key={item.id} recipe={item} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div></div></section></article>;
}

function NutritionBar({ label, value, percent, color }) {
  return <div className="nutrition-bar"><div><span>{label}</span><strong>{value}</strong></div><div className="bar-track"><span className={`bar-fill ${color}`} style={{ width: percent }} /></div></div>;
}

function VideosPage({ navigate }) {
  return <><PageIntro eyebrow="The Orangee video kitchen" title="Press play. Make dinner." description="Watch our cooks break down the good stuff — from quick fixes to recipes worth lingering over." tone="orange"><div className="intro-pill"><CirclePlay size={16} fill="currentColor" /> New videos every Thursday</div></PageIntro><section className="section section-white videos-page"><div className="section-inner"><div className="video-feature"><div className="video-feature-thumb"><img src={images.kitchen} alt="Cooking in the Orangee kitchen" /><div className="video-shade" /><button className="large-play" onClick={() => navigate('/videos/butter-chicken')}><Play size={23} fill="currentColor" /></button><span className="duration">12:08</span></div><div className="video-feature-copy"><span className="eyebrow eyebrow-orange">Featured film</span><h2>Inside the Orangee kitchen: butter chicken, three ways</h2><p>We asked our cooks how they make this beloved dish at home. The answer? There is more than one right way to make something delicious.</p><div className="video-feature-meta"><span className="avatar">N</span><span><strong>Neelam Kapoor</strong><small>54.1K views · Jul 22, 2026</small></span></div><button className="button button-primary" onClick={() => navigate('/videos/butter-chicken')}>Watch film <ArrowRight size={16} /></button></div></div><div className="video-filter-row"><div className="cuisine-tabs"><button className="active">All videos</button><button>Quick & easy</button><button>Vegetarian</button><button>Nepali table</button></div><button className="filter-button"><Filter size={16} /> Filter</button></div><div className="video-grid video-grid-three">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div></div></section></>;
}

function VideoDetailPage({ slug, navigate }) {
  const video = videos.find((item) => item.id === slug) || videos[0];
  const recipe = recipes.find((item) => item.id === video.id) || recipes[0];
  const [playing, setPlaying] = useState(false);
  return <><section className="video-detail-hero"><div className="section-inner"><div className="breadcrumbs breadcrumbs-light"><AppLink to="/">Home</AppLink><ChevronRight size={14} /><AppLink to="/videos">Videos</AppLink><ChevronRight size={14} /><span>{video.title}</span></div><div className={`video-player ${playing ? 'playing' : ''}`}><img src={video.thumbnail} alt={video.title} /><div className="video-player-shade" />{playing ? <div className="playing-state"><Check size={25} /><strong>Preview playing</strong><span>A full cook-along is coming soon.</span></div> : <button className="large-play player-play" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}><Play size={27} fill="currentColor" /></button>}<span className="player-duration">{video.duration}</span><div className="fake-player-controls"><span className="fake-progress"><i /></span><span>HD</span><MoreHorizontal size={19} /></div></div><div className="video-detail-heading"><div><span className="eyebrow eyebrow-light">{video.category}</span><h1>{video.title}</h1><p>{video.description}</p></div><div className="video-actions"><button><ThumbsUp size={17} /> Like</button><button><Bookmark size={17} /> Save</button><button><Share2 size={17} /> Share</button></div></div><div className="video-meta-row"><span className="avatar">{video.author.charAt(0)}</span><span><strong>{video.author}</strong><small>Orangee kitchen · {video.date}</small></span><span className="video-views"><Eye size={15} /> {video.views} views</span></div></div></section><section className="section section-white video-detail-content"><div className="section-inner video-content-grid"><div><div className="video-copy"><span className="eyebrow eyebrow-orange">About this cook-along</span><p>Pull up a chair and cook with us. This recipe is designed to be paused, rewound and made at your own pace — because the best part is making it yours.</p><div className="video-tags"><span><Tag size={14} /> {recipe.category}</span><span><Clock size={14} /> {recipe.time} min recipe</span></div></div><div className="video-ingredients"><div className="recipe-section-heading"><span className="section-number">01</span><div><span className="eyebrow eyebrow-orange">Set yourself up</span><h2>Ingredients</h2></div></div><div className="video-ingredient-grid">{recipe.groups.flatMap((group) => group.items).slice(0, 8).map((item) => <div key={item}><span className="ingredient-dot" /><span>{item}</span></div>)}</div><button className="button button-secondary" onClick={() => navigate(`/recipes/${recipe.id}`)}>See full recipe <ArrowRight size={16} /></button></div><div className="video-steps"><div className="recipe-section-heading"><span className="section-number">02</span><div><span className="eyebrow eyebrow-orange">Follow along</span><h2>Cooking steps</h2></div></div>{recipe.steps.map((step, index) => <div className="video-step" key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div></div><aside className="video-aside"><div className="creator-card"><span className="avatar avatar-large">{video.author.charAt(0)}</span><span className="eyebrow eyebrow-green">Your host</span><h3>{video.author}</h3><p>{recipe.authorRole} and keeper of very good secrets.</p><button className="button button-secondary">Follow cook <Plus size={15} /></button></div><div className="related-video-card"><span className="eyebrow">Next up</span><h3>More from the Orangee kitchen</h3>{videos.filter((item) => item.id !== video.id).slice(0, 2).map((item) => <AppLink to={`/videos/${item.id}`} className="mini-video" key={item.id}><img src={item.thumbnail} alt="" /><span className="mini-video-play"><Play size={12} fill="currentColor" /></span><div><strong>{item.title}</strong><small>{item.duration}</small></div></AppLink>)}</div></aside></div></section></>;
}

function CategoriesPage({ navigate }) {
  return <><PageIntro eyebrow="There’s always more to taste" title="Find your flavor." description="Follow your appetite through our collection of cuisines, cravings and kitchen traditions."><div className="category-intro-chips"><span><Flame size={15} /> Most loved: Indian</span><span><Leaf size={15} /> Fresh: Nepali</span></div></PageIntro><section className="section section-white"><div className="section-inner"><div className="category-grid category-grid-large">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div><div className="category-cta"><div><span className="eyebrow eyebrow-orange">Not sure where to start?</span><h2>Tell us what you’re in the mood for.</h2><p>We’ll help you find your next favorite.</p></div><button className="button button-primary" onClick={() => navigate('/search')}>Explore all recipes <ArrowRight size={17} /></button></div></div></section></>;
}

function CategoryPage({ slug, favorites, toggleFavorite, navigate }) {
  const category = categories.find((item) => item.slug === slug) || categories[1];
  const items = recipes.filter((recipe) => recipe.category.toLowerCase() === category.name.toLowerCase() || recipe.cuisine.toLowerCase() === category.name.toLowerCase());
  return <><section className="category-hero"><img src={category.image} alt="" /><div className="category-hero-overlay" /><div className="section-inner category-hero-inner"><div className="breadcrumbs breadcrumbs-light"><AppLink to="/">Home</AppLink><ChevronRight size={14} /><AppLink to="/categories">Categories</AppLink><ChevronRight size={14} /><span>{category.name}</span></div><span className="eyebrow eyebrow-light">A taste of {category.name}</span><h1>{category.name}<br /><em>recipes.</em></h1><p>{category.description} Discover comforting classics, regional favorites and modern interpretations from the Orangee kitchen.</p><span className="category-count">{category.count} recipes to explore</span></div></section><section className="section section-white category-page"><div className="section-inner"><SectionHeading eyebrow={`The ${category.name} table`} title="Popular recipes" description="Start with something our community already loves." /><div className="recipe-grid recipe-grid-four">{items.length ? items.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />) : recipes.slice(0, 4).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div><div className="category-subsections"><div><span className="eyebrow eyebrow-orange">Quick & easy</span><h2>When dinner needs to happen now.</h2><p>Fast, flavorful ideas for busy days.</p><button className="text-link" onClick={() => navigate(`/search?q=${category.name}+quick`)}>See quick {category.name} recipes <ArrowRight size={16} /></button></div><div><span className="eyebrow eyebrow-green">From the video kitchen</span><h2>Watch it come together.</h2><p>Learn the little techniques that make a big difference.</p><button className="text-link" onClick={() => navigate('/videos')}>Watch cooking videos <ArrowRight size={16} /></button></div></div></div></section></>;
}

function SearchPage({ query, favorites, toggleFavorite, navigate }) {
  const [term, setTerm] = useState(query || '');
  const normalized = term.trim().toLowerCase();
  const results = normalized ? recipes.filter((recipe) => `${recipe.title} ${recipe.description} ${recipe.category} ${recipe.cuisine} ${recipe.tags.join(' ')}`.toLowerCase().includes(normalized)) : recipes.slice(0, 8);
  const relatedVideos = normalized ? videos.filter((video) => `${video.title} ${video.category}`.toLowerCase().includes(normalized)) : videos.slice(0, 3);
  const submit = (event) => { event.preventDefault(); navigate(`/search?q=${encodeURIComponent(term)}`); };
  return <><PageIntro eyebrow="Find something delicious" title={normalized ? `Results for “${term}”` : 'What are you craving?'} description="Search recipes, ingredients, cuisines and the little ideas that make dinner better."><form className="page-search" onSubmit={submit}><Search size={20} /><input autoFocus value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Search recipes, ingredients, cuisines..." aria-label="Search everything" /><button className="button button-dark" type="submit">Search</button></form><div className="search-suggestions"><span>Popular:</span>{popularSearches.map((item) => <button key={item} onClick={() => { setTerm(item); navigate(`/search?q=${item}`); }}>{item}</button>)}</div></PageIntro><section className="section section-white search-page"><div className="section-inner">{normalized && <div className="results-bar search-results-bar"><p><strong>{results.length}</strong> recipe results <span>·</span> <strong>{relatedVideos.length}</strong> video results</p><button className="filter-button"><Filter size={16} /> Refine search</button></div>}<div className="search-result-block"><SectionHeading eyebrow="Recipes" title={normalized ? 'Recipes worth making' : 'A few places to start'} link="Browse all" onLink={() => navigate('/recipes')} /><div className="recipe-grid recipe-grid-four">{results.slice(0, 8).map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div></div>{relatedVideos.length > 0 && <div className="search-result-block search-videos-block"><SectionHeading eyebrow="Watch & cook" title="Video inspiration" link="See all videos" onLink={() => navigate('/videos')} /><div className="video-grid">{relatedVideos.slice(0, 3).map((video) => <VideoCard key={video.id} video={video} />)}</div></div>}{!results.length && !relatedVideos.length && <EmptyState title="Nothing tasty came up" copy="Try searching for chicken, momo, quick dinner or dessert." button="Explore recipes" onClick={() => { setTerm(''); navigate('/recipes'); }} />}</div></section></>;
}

function BlogPage({ navigate }) {
  return <><PageIntro eyebrow="Stories behind the food" title="Welcome to the journal." description="A collection of food stories, kitchen wisdom and places worth pulling up a chair for."><div className="blog-categories"><button className="active">All stories</button><button>Food stories</button><button>Kitchen tips</button><button>Ingredients</button><button>Travel & food</button></div></PageIntro><section className="section section-white blog-page"><div className="section-inner"><div className="journal-feature"><img src={blogPosts[0].image} alt={blogPosts[0].title} /><div><span className="eyebrow eyebrow-orange">Editor’s note</span><h2>{blogPosts[0].title}</h2><p>{blogPosts[0].excerpt}</p><div className="blog-meta"><span>{blogPosts[0].author}</span><span className="dot-separator" /><span>{blogPosts[0].date}</span><span className="dot-separator" /><span>{blogPosts[0].reading}</span></div><AppLink to={`/blog/${blogPosts[0].slug}`} className="button button-primary">Read the story <ArrowRight size={16} /></AppLink></div></div><SectionHeading eyebrow="Keep reading" title="More from the journal" /><div className="blog-page-grid">{blogPosts.slice(1).map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section><Newsletter id="blog-newsletter" /></>;
}

function BlogDetailPage({ slug, navigate }) {
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  return <><article className="blog-detail"><div className="section-inner"><div className="breadcrumbs"><AppLink to="/">Home</AppLink><ChevronRight size={14} /><AppLink to="/blog">Journal</AppLink><ChevronRight size={14} /><span>{post.category}</span></div><div className="blog-detail-head"><span className="eyebrow eyebrow-orange">{post.category}</span><h1>{post.title}</h1><p>{post.excerpt}</p><div className="article-byline"><span className="avatar">{post.author.charAt(0)}</span><span><strong>{post.author}</strong><small>{post.date} · {post.reading}</small></span></div></div><img className="blog-detail-image" src={post.image} alt={post.title} /><div className="article-layout"><aside className="article-share"><span>Share story</span><button aria-label="Share on Instagram"><span className="social-letter">◎</span></button><button aria-label="Copy link"><Copy size={17} /></button></aside><div className="article-prose"><p className="drop-cap">There is a particular kind of comfort in food that asks you to slow down. The first bite tells you where you are, who taught you, and which stories are worth carrying into the kitchen.</p><p>At Orangee, we believe recipes are only part of the story. The rest lives in the hands that make them, the ingredients that travel through generations, and the people who pull their chairs a little closer when dinner is ready.</p><blockquote>“The best tables don’t ask you to be perfect. They ask you to stay a while.”</blockquote><h2>A recipe is a little map home</h2><p>Whether it is a plate of steaming momos, a bowl of spice-scented curry or a salad thrown together at the end of a long day, food has a way of making room for us. Our journal is where we follow those threads — through kitchens, markets, family notebooks and the places that make us hungry for more.</p><img src={images.ingredients} alt="Fresh ingredients on a kitchen table" /><p>Take what you need, add what you love, and make a little space at your table. There is always room for one more story.</p><div className="article-end"><Leaf size={20} /><span>Cook something good today.</span></div></div></div></div></article><section className="section section-cream"><div className="section-inner"><SectionHeading eyebrow="Keep reading" title="More stories from Orangee" link="Back to journal" onLink={() => navigate('/blog')} /><div className="blog-grid">{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => <BlogCard key={item.slug} post={item} />)}</div></div></section></>;
}

function FavoritesPage({ favorites, toggleFavorite, navigate }) {
  const [tab, setTab] = useState('recipes');
  const savedRecipes = recipes.filter((recipe) => favorites.has(recipe.id));
  const savedVideos = videos.filter((video) => favorites.has(video.id));
  return <><PageIntro eyebrow="Your personal recipe box" title="My favorites." description="Keep the recipes, videos and little sparks of inspiration you want close by."><div className="favorites-count"><Heart size={17} fill="currentColor" /> {savedRecipes.length + savedVideos.length} saved pieces of goodness</div></PageIntro><section className="section section-white favorites-page"><div className="section-inner"><div className="favorites-tabs"><button className={tab === 'recipes' ? 'active' : ''} onClick={() => setTab('recipes')}><Heart size={17} /> Recipes <span>{savedRecipes.length}</span></button><button className={tab === 'videos' ? 'active' : ''} onClick={() => setTab('videos')}><Video size={17} /> Videos <span>{savedVideos.length}</span></button><button className={tab === 'collections' ? 'active' : ''} onClick={() => setTab('collections')}><BookOpen size={17} /> Collections <span>3</span></button></div>{tab === 'recipes' && (savedRecipes.length ? <div className="recipe-grid recipe-grid-four">{savedRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} favorites={favorites} toggleFavorite={toggleFavorite} />)}</div> : <EmptyState title="No favorite recipes yet" copy="Save recipes you love and they’ll appear here." button="Explore recipes" onClick={() => navigate('/recipes')} />)}{tab === 'videos' && (savedVideos.length ? <div className="video-grid video-grid-three">{savedVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="Your watch list is waiting" copy="Save a cook-along when you find one you want to try." button="Explore videos" onClick={() => navigate('/videos')} />)}{tab === 'collections' && <CollectionsState navigate={navigate} />}</div></section></>;
}

function CollectionsState({ navigate }) {
  const collections = [{ title: 'Weekend cooking', count: 12, image: images.butterChicken }, { title: 'Quick dinner', count: 8, image: images.pasta }, { title: 'Nepali favorites', count: 15, image: images.dumplings }];
  return <div className="collections-grid">{collections.map((collection) => <div className="collection-card" key={collection.title}><img src={collection.image} alt="" /><div><span>{collection.count} recipes</span><h3>{collection.title}</h3><button className="text-link">Open collection <ArrowRight size={15} /></button></div></div>)}<button className="new-collection" onClick={() => navigate('/recipes')}><Plus size={22} /><strong>Make a new collection</strong><span>Start with a recipe you love</span></button></div>;
}

function ProfilePage({ navigate }) {
  return <><PageIntro eyebrow="Your Orangee kitchen" title="Make yourself at home." description="Keep your favorites close, build collections and share the recipes that make your table yours."><button className="button button-dark" onClick={() => navigate('/favorites')}>View my favorites <Heart size={16} /></button></PageIntro><section className="section section-white profile-page"><div className="section-inner"><div className="profile-header"><div className="profile-avatar">AM</div><div><span className="eyebrow eyebrow-orange">Orangee home cook</span><h2>Alex Morgan</h2><p>Making dinner a little more delicious, one saved recipe at a time.</p><div className="profile-stats"><span><strong>24</strong> recipes saved</span><span><strong>3</strong> collections</span><span><strong>8</strong> videos watched</span></div></div><button className="button button-secondary">Edit profile</button></div><div className="profile-content"><div className="profile-panel"><div className="panel-heading"><div><span className="eyebrow">Recently saved</span><h3>A few good ideas</h3></div><AppLink to="/favorites" className="text-link">See all <ArrowRight size={15} /></AppLink></div><div className="mini-recipe-list">{recipes.slice(0, 3).map((recipe) => <AppLink to={`/recipes/${recipe.id}`} key={recipe.id}><img src={recipe.image} alt="" /><div><strong>{recipe.title}</strong><span><Clock size={13} /> {recipe.time} min · {recipe.category}</span></div><ChevronRight size={16} /></AppLink>)}</div></div><div className="profile-panel profile-tip-panel"><Leaf size={24} /><span className="eyebrow eyebrow-green">A note for your next meal</span><h3>Try one unfamiliar ingredient.</h3><p>The best recipes often begin with a little curiosity. Start small, taste as you go and see where it takes you.</p><button className="text-link" onClick={() => navigate('/recipes')}>Find inspiration <ArrowRight size={16} /></button></div></div></div></section></>;
}

function SubmitPage() {
  const [published, setPublished] = useState(false);
  const [ingredients, setIngredients] = useState(['']);
  const addIngredient = () => setIngredients((current) => [...current, '']);
  const updateIngredient = (index, value) => setIngredients((current) => current.map((item, itemIndex) => itemIndex === index ? value : item));
  const submit = (event) => { event.preventDefault(); setPublished(true); };
  if (published) return <section className="success-page section"><div className="success-card"><span className="success-icon"><Check size={28} /></span><span className="eyebrow eyebrow-green">Thank you, chef</span><h1>Your recipe is on its way.</h1><p>Our kitchen team will give it a little look before it joins the Orangee table. We’ll be in touch soon.</p><button className="button button-primary" onClick={() => setPublished(false)}>Submit another recipe <Plus size={16} /></button></div></section>;
  return <><PageIntro eyebrow="Pull up a chair" title="Share something delicious." description="Have a recipe that deserves a spot at the table? We’d love to cook it, taste it and share it with the Orangee community." tone="green"><div className="intro-pill intro-pill-light"><ShieldCheck size={16} /> Every recipe is reviewed by our kitchen team</div></PageIntro><section className="section section-white submit-page"><div className="section-inner"><form className="submit-form" onSubmit={submit}><div className="form-step"><div className="form-step-heading"><span>01</span><div><span className="eyebrow eyebrow-orange">The good stuff</span><h2>Tell us about your recipe</h2><p>Give it a name people will want to cook.</p></div></div><div className="form-grid"><label className="form-field form-field-full"><span>Recipe name *</span><input required placeholder="e.g. Sunday Morning Momos" /></label><label className="form-field"><span>Cuisine *</span><select required defaultValue=""><option value="" disabled>Choose a cuisine</option><option>Indian</option><option>Nepali</option><option>Asian</option><option>Continental</option><option>Other</option></select></label><label className="form-field"><span>Meal type *</span><select required defaultValue=""><option value="" disabled>Choose a meal</option><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Snack</option><option>Dessert</option></select></label><label className="form-field form-field-full"><span>Short description *</span><textarea required rows="3" placeholder="What makes this recipe special?" /></label></div></div><div className="form-step"><div className="form-step-heading"><span>02</span><div><span className="eyebrow eyebrow-orange">Make a plan</span><h2>Ingredients & timing</h2><p>Clear details help other cooks feel confident.</p></div></div><div className="form-grid"><div className="form-field form-field-full"><span>Ingredients *</span><div className="ingredient-inputs">{ingredients.map((ingredient, index) => <div className="ingredient-input" key={index}><input required value={ingredient} onChange={(event) => updateIngredient(index, event.target.value)} placeholder={`Ingredient ${index + 1}`} />{index === ingredients.length - 1 && <button type="button" onClick={addIngredient} aria-label="Add ingredient"><Plus size={17} /></button>}</div>)}</div></div><label className="form-field"><span>Prep time</span><input placeholder="15 minutes" /></label><label className="form-field"><span>Cook time</span><input placeholder="30 minutes" /></label><label className="form-field"><span>Servings</span><input placeholder="4 people" /></label><label className="form-field"><span>Difficulty</span><select defaultValue="Easy"><option>Easy</option><option>Medium</option><option>Hard</option></select></label></div></div><div className="form-step"><div className="form-step-heading"><span>03</span><div><span className="eyebrow eyebrow-orange">Show, don’t just tell</span><h2>Instructions & photos</h2><p>Walk us through it in your own words.</p></div></div><div className="form-grid"><label className="form-field form-field-full"><span>Cooking instructions *</span><textarea required rows="7" placeholder="Step 1...&#10;&#10;Step 2...&#10;&#10;Step 3..." /></label><label className="form-field form-field-full"><span>Recipe photos</span><div className="upload-zone"><ImagePlus size={26} /><strong>Drop your best food photos here</strong><span>JPG, PNG or WEBP · up to 10MB each</span><button type="button" className="button button-secondary"><Upload size={15} /> Choose images</button></div></label><label className="form-field form-field-full"><span>Your name & email *</span><div className="form-inline"><input required placeholder="Your name" /><input required type="email" placeholder="you@example.com" /></div></label></div></div><div className="submit-form-footer"><span><Lock size={15} /> Your details stay private with our team.</span><button className="button button-primary" type="submit">Send to the kitchen <Send size={16} /></button></div></form></div></section></>;
}

function AboutPage({ navigate }) {
  return <><section className="about-hero"><div className="section-inner about-hero-inner"><div><span className="eyebrow eyebrow-orange">A little about us</span><h1>Food that brings<br /><em>people together.</em></h1><p>Orangee Food is a place for delicious recipes, honest kitchen stories and the kind of cooking that makes room for everyone.</p><button className="button button-primary" onClick={() => navigate('/recipes')}>Explore our recipes <ArrowRight size={17} /></button></div><div className="about-hero-collage"><img className="about-image-main" src={images.foodTable} alt="Friends sharing food around a table" /><img className="about-image-small" src={images.ingredients} alt="Fresh herbs and ingredients" /><span className="about-collage-note"><Leaf size={17} /> Made for sharing</span></div></div></section><section className="section section-white story-section"><div className="section-inner story-grid"><div className="story-side"><span className="eyebrow eyebrow-green">Our story</span><h2>A good recipe is only the beginning.</h2></div><div className="story-copy"><p className="lead">We started Orangee because food has always been our favorite way to say: come in, stay a while, there’s enough for everyone.</p><p>Our cooks come from different kitchens, cultures and corners of the world. What connects us is a belief that recipes should feel generous, useful and full of possibility — whether you are cooking your first curry or the one you know by heart.</p><p>So pull up a chair. Learn something new. Make a mess. Share what you cook. The table is better with you at it.</p><div className="signature">orangee <span>food journal</span></div></div></div></section><section className="section section-cream values-section"><div className="section-inner"><SectionHeading eyebrow="The way we cook" title="Our food philosophy" description="Simple ideas that guide every recipe and story we share." /><div className="values-grid"><Value icon={<Heart size={22} />} title="Make it generous" text="Recipes with clear steps, flexible swaps and enough warmth to welcome every cook." /><Value icon={<Leaf size={22} />} title="Keep it real" text="We celebrate the imperfect, the seasonal and the beautifully everyday." /><Value icon={<Sparkles size={22} />} title="Stay curious" text="There is always another ingredient, tradition or technique worth discovering." /></div></div></section><Newsletter id="about-newsletter" /></>;
}

function Value({ icon, title, text }) { return <div className="value-card"><span className="value-icon">{icon}</span><h3>{title}</h3><p>{text}</p><ArrowRight size={17} /></div>; }

function ContactPage() {
  const [sent, setSent] = useState(false);
  if (sent) return <section className="contact-success section"><div className="success-card"><span className="success-icon"><Send size={26} /></span><span className="eyebrow eyebrow-green">Message received</span><h1>Thanks for reaching out.</h1><p>Someone from our kitchen team will get back to you within two working days.</p><button className="button button-primary" onClick={() => setSent(false)}>Send another message</button></div></section>;
  return <><PageIntro eyebrow="We’d love to hear from you" title="Come say hello." description="Recipe question, collaboration idea or just want to tell us what you cooked? Our inbox is always open." tone="orange" /><section className="section section-white contact-page"><div className="section-inner contact-grid"><div className="contact-details"><span className="eyebrow eyebrow-orange">Find us here</span><h2>Let’s keep<br /><em>in touch.</em></h2><p>We read every note that comes through. For recipe questions, the community kitchen is the fastest place to start.</p><div className="contact-detail"><span><Mail size={18} /></span><div><strong>Email</strong><a href="mailto:hello@orangeefood.com">hello@orangeefood.com</a></div></div><div className="contact-detail"><span><MapPin size={18} /></span><div><strong>Our kitchen</strong><p>Somewhere warm, with snacks<br />and good natural light.</p></div></div><div className="contact-detail"><span><Clock size={18} /></span><div><strong>Kitchen hours</strong><p>Mon–Fri · 9:00–17:00 UTC</p></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><div className="form-grid"><label className="form-field"><span>Your name *</span><input required placeholder="Alex Morgan" /></label><label className="form-field"><span>Email address *</span><input required type="email" placeholder="you@example.com" /></label><label className="form-field form-field-full"><span>What can we help with?</span><select defaultValue="Recipe question"><option>Recipe question</option><option>Say hello</option><option>Partnership</option><option>Press & media</option><option>Something else</option></select></label><label className="form-field form-field-full"><span>Your message *</span><textarea required rows="7" placeholder="Tell us what’s on your mind..." /></label></div><button className="button button-primary" type="submit">Send message <Send size={16} /></button></form></div></section></>;
}

function LegalPage({ type }) {
  const privacy = type === 'privacy';
  return <><PageIntro eyebrow="The fine print" title={privacy ? 'Privacy, plainly put.' : 'Terms for the table.'} description={privacy ? 'We believe trust is an ingredient worth being transparent about.' : 'A few simple guidelines to keep Orangee a welcoming place for everyone.'} /><section className="section section-white legal-page"><div className="section-inner legal-layout"><aside><span className="eyebrow eyebrow-orange">On this page</span><a href="#overview">Overview</a><a href="#information">Information we collect</a><a href="#choices">Your choices</a><a href="#contact">Contact us</a></aside><div className="legal-copy"><span className="legal-updated">Last updated August 2026</span><h2 id="overview">A short version</h2><p>{privacy ? 'Orangee Food collects only the information we need to make the site useful, keep it secure and send you the updates you ask for. We never sell your personal information.' : 'Use Orangee Food for good food, good ideas and respectful conversation. By using the site, you agree to these terms and to the idea that recipes are meant to be adapted, credited and enjoyed.'}</p><h2 id="information">{privacy ? 'Information we collect' : 'Using our content'}</h2><p>{privacy ? 'When you subscribe, create an account or send us a message, we may collect your name, email address and the details you choose to share. We also use basic, privacy-conscious analytics to understand what helps people cook.' : 'Our recipes, writing, photography and visual identity belong to Orangee Food or our contributing creators. You may cook, save and share links to our work for personal use. Please credit Orangee and do not republish our content as your own.'}</p><h2 id="choices">{privacy ? 'Your choices' : 'Community guidelines'}</h2><p>{privacy ? 'You can unsubscribe from emails at any time, request access to or deletion of your account data, and control non-essential cookies through your browser. Email us and we will help.' : 'Be kind, be constructive and keep the table open. We may remove content that is unsafe, abusive, misleading or unrelated to food. Recipes shared by the community should be your own or clearly credited.'}</p><h2 id="contact">Questions?</h2><p>If anything here is unclear, we would rather you ask. Write to <a href="mailto:hello@orangeefood.com">hello@orangeefood.com</a> and we’ll get back to you.</p></div></div></section></>;
}

function EmptyState({ title, copy, button, onClick }) { return <div className="empty-state"><span className="empty-icon"><SearchX size={27} /></span><h2>{title}</h2><p>{copy}</p><button className="button button-primary" onClick={onClick}>{button} <ArrowRight size={16} /></button></div>; }

function NotFound({ navigate }) { return <section className="not-found section"><div className="not-found-doodle"><span>404</span><div className="doodle-plate" /></div><span className="eyebrow eyebrow-orange">A little lost?</span><h1>Oops! This recipe wandered off.</h1><p>Let’s get you back to something delicious.</p><button className="button button-primary" onClick={() => navigate('/recipes')}>Back to recipes <ArrowLeft size={16} /></button></section>; }

function App() {
  const [route, setRoute] = useState(getRoute);
  const [favorites, setFavorites] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('orangee-favorites') || '["butter-chicken", "momo"]')); } catch { return new Set(['butter-chicken', 'momo']); }
  });
  useEffect(() => { const handleRoute = () => setRoute(getRoute()); window.addEventListener('popstate', handleRoute); window.addEventListener('hashchange', handleRoute); return () => { window.removeEventListener('popstate', handleRoute); window.removeEventListener('hashchange', handleRoute); }; }, []);
  useEffect(() => { try { localStorage.setItem('orangee-favorites', JSON.stringify([...favorites])); } catch { /* storage is optional */ } }, [favorites]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [route.pathname]);
  useEffect(() => { const nicePath = route.pathname === '/' ? 'Home' : route.pathname.split('/').filter(Boolean).map((part) => part.replace(/-/g, ' ')).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' · '); document.title = `${nicePath} | Orangee Food`; }, [route.pathname]);
  const navigate = (to) => {
    const destination = to.startsWith('/#') ? '/' : to;
    const current = `${window.location.pathname}${window.location.search}`;
    if (current === destination) { setRoute(getRoute()); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else { window.history.pushState({}, '', destination); setRoute(getRoute()); window.scrollTo({ top: 0, behavior: 'instant' }); }
    if (to.startsWith('/#')) window.setTimeout(() => document.getElementById(to.slice(2))?.scrollIntoView({ behavior: 'smooth' }), 20);
  };
  const toggleFavorite = (id) => setFavorites((current) => { const next = new Set(current); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  const renderPage = () => {
    const { pathname, query } = route;
    if (pathname === '/') return <HomePage navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname === '/recipes') return <RecipesPage navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname.startsWith('/recipes/')) return <RecipeDetailPage slug={pathname.split('/')[2]} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname === '/videos') return <VideosPage navigate={navigate} />;
    if (pathname.startsWith('/videos/')) return <VideoDetailPage slug={pathname.split('/')[2]} navigate={navigate} />;
    if (pathname === '/categories') return <CategoriesPage navigate={navigate} />;
    if (pathname.startsWith('/categories/')) return <CategoryPage slug={pathname.split('/')[2]} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname === '/search') return <SearchPage query={query.get('q') || ''} navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname === '/blog') return <BlogPage navigate={navigate} />;
    if (pathname.startsWith('/blog/')) return <BlogDetailPage slug={pathname.split('/')[2]} navigate={navigate} />;
    if (pathname === '/favorites') return <FavoritesPage navigate={navigate} favorites={favorites} toggleFavorite={toggleFavorite} />;
    if (pathname === '/profile') return <ProfilePage navigate={navigate} />;
    if (pathname === '/submit') return <SubmitPage />;
    if (pathname === '/about') return <AboutPage navigate={navigate} />;
    if (pathname === '/contact') return <ContactPage />;
    if (pathname === '/privacy') return <LegalPage type="privacy" />;
    if (pathname === '/terms') return <LegalPage type="terms" />;
    return <NotFound navigate={navigate} />;
  };
  return <div className="app"><Header pathname={route.pathname} navigate={navigate} favoritesCount={favorites.size} /><main>{renderPage()}</main><Footer navigate={navigate} /></div>;
}

createRoot(document.getElementById('root')).render(<App />);
