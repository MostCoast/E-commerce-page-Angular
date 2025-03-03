import { Product } from './product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'ScootGrill ForeU',
    price: 789,
    description:
      'Be mobile and never get hungry with this e-scooter with a built in Foreman grill',
    imageUrl: 'img/scootGrill.jfif',
    category: 'Vehicles',
    rating: 4.7,
    brand: 'ElScooterino',
    quantity: 1,
    availability: true,
    costumerQuote:
      'This "ScootGrill ForeU" is a wild ride...literally.  Tried grilling a burger on my way to work.  Ended up with a smoky commute and a patty stuck to my pants.  The "non-stick" surface is a lie, much like my dreams of a grease-free journey.  Also, the "wind-resistant" grill?  My bun ended up in a tree.  On the plus side, I did make friends at the stoplight when I offered a slightly singed sausage.  1/5 stars, unless you enjoy smelling like a BBQ and dodging airborne condiments.',
  },
  {
    id: 2,
    name: 'ConTroaster 1',
    price: 259,
    description: 'Gamer must have - food and gaming at the same time',
    imageUrl: 'img/conTroaster.jfif',
    category: 'Electronics',
    rating: 1.9,
    brand: 'Burning Hands',
    quantity: 1,
    availability: true,
    costumerQuote:
      'Okay, so I bought this Controaster thing thinking, genius! Toast while I raid tombs, right? Wrong. Turns out, burnt offerings are not ideal for breakfast.  Also, the analog stick gets sticky with butter. And who puts a dial for "lightly toasted" next to the rumble button?  My controller now vibrates with the existential dread of overdone carbs. 2/5 stars, would only recommend if you hate both toast and winning.',
  },
  {
    id: 3,
    name: 'Feed the Clown',
    price: 59,
    description: 'Award winning nightmare inducing Boardgame for all ages',
    imageUrl: 'img/feedTheClown.jfif',
    category: 'Games',
    rating: 3.7,
    brand: 'IT',
    quantity: 1,
    availability: true,
    costumerQuote:
      '"Feed the Clown" promised chaotic apple-chucking fun.  Delivered existential dread and a sticky kitchen table.  The clown´s gaping maw haunts my dreams.  Turns out, glowing apples are hard to aim, especially when you´re laughing hysterically at the absurdity of it all.  My cat now thinks apples are sentient beings.  Also, I´m pretty sure this game predicted the singularity.  10/10 for terrifyingly accurate clown representation, 2/5 for actual gameplay.  Would recommend if you enjoy questioning your life choices while covered in apple juice.',
  },
  {
    id: 4,
    name: 'S(poon)alt',
    price: 54,
    description: 'Futuristic kitchen gadget of the 21st century',
    imageUrl: 'img/spoonSalter.jfif',
    category: 'Kitchen',
    rating: 2.7,
    brand: 'Kitchenstuff4U',
    quantity: 1,
    availability: true,
    costumerQuote:
      'This "S(poon)alt" spoon is either genius or a sign of the apocalypse.  Tried to season my soup, ended up with a salt mine in a bowl.  The "precision dispenser" is apparently calibrated for a herd of salt-loving elephants.  My tastebuds are now staging a revolt.  On the plus side, I´ve finally achieved the recommended daily sodium intake for the next decade.  Also, it doubles as a tiny snow shovel for my hamster. 1/5 stars, unless you´re a slug or enjoy the taste of pure, unadulterated regret.',
  },
  {
    id: 5,
    name: 'Weird Cats',
    price: 19,
    description: 'Spice up your home with our lovely designed weird Cats',
    imageUrl: 'img/weirdCats.jfif',
    category: 'Interior',
    rating: 4.9,
    brand: 'PotteryPotts',
    quantity: 1,
    availability: false,
    costumerQuote: '',
  },
  {
    id: 6,
    name: 'Murder LED',
    price: 89,
    description: 'Light up your crime scene like never before',
    imageUrl: 'img/murderLED.jfif',
    category: 'Security',
    rating: 4.4,
    brand: 'Crimescene unlimited',
    quantity: 1,
    availability: true,
    costumerQuote:
      'Okay, so I bought this "Murder LED" thinking, "Finally, a chic way to illuminate my midnight snack raids!"  Turns out, it´s less "mood lighting" and more "serial killer chic."  My cat now avoids the kitchen.  The chalk outline?  Accurate, I guess, if you´re a stick figure.  Also, the yellow tape is surprisingly sticky.  Got it stuck to my robe.  Now I look like I´m investigating a fashion crime.  1/5 stars, unless you´re planning a true crime podcast or want to give your guests a mild heart attack.',
  },
  {
    id: 7,
    name: 'Butter Butler 2525',
    price: 125,
    description: 'A robot only designed to give you the butter',
    imageUrl: 'img/butterRobot.jfif',
    category: 'Electronics',
    rating: 3.1,
    brand: 'SadRobots&Brothers',
    quantity: 1,
    availability: true,
    costumerQuote:
      'This "Butter Bot" is less "pass the butter" and more "existential dread on wheels."  It stares at me with those vacant eyes, holding the butter like it´s the last shred of meaning in a cold, uncaring universe.  It´s been three days. I haven´t touched the butter.  I´m afraid to.  It just...watches.  My therapist says it´s a "metaphor for my crippling anxiety."  10/10 for accurate representation of my inner turmoil, 0/10 for actually buttering my toast.  Also, it keeps trying to sell me life insurance.',
  },
  {
    id: 8,
    name: 'HeadDish Z',
    price: 250,
    description: 'Listen to weird space music and turn mad where ever you like',
    imageUrl: 'img/headphoneDish.jfif',
    category: 'Electronics',
    rating: 0.9,
    brand: 'OldOnes&Co KG',
    quantity: 1,
    availability: false,
    costumerQuote: '',
  },
  {
    id: 9,
    name: 'Inflatable Kitchen',
    price: 479,
    description: 'Feel like a chef in this state-of-the-art camping kitchen',
    imageUrl: 'img/inflatableKitchen.jfif',
    category: 'Outdoors',
    rating: 3.9,
    brand: 'Firekitchen',
    quantity: 1,
    availability: true,
    costumerQuote:
      'Okay, so I bought this "Inflatable Kitchen" thinking, "Finally, gourmet meals on the go!"  Turns out, "go" is the operative word. This thing is basically a bouncy castle for cooking.  Tried to fry an egg, ended up chasing it across the yard like a rogue ping pong ball.  The oven? Gets hotter than my ex after seeing me with this thing.  And don´t even get me started on the wind.  My soufflé ended up in the neighbor´s pool.  1/5 stars, would only recommend if you enjoy cooking in a hurricane.',
  },
  {
    id: 10,
    name: 'Ultimate MultiTool',
    price: 344,
    description:
      'The multi tool to end them all, trash your work place like never before',
    imageUrl: 'img/multiTool.jfif',
    category: 'Tools',
    rating: 4.1,
    brand: 'Werkstatt55',
    quantity: 1,
    availability: true,
    costumerQuote:
      'This "Ultimate MultiTool" is like if a toddler designed power tools. The forklift? Adorable, but it barely lifts a brick, let alone my self-esteem after buying this. The circular saw? It spins, I´ll give it that, mostly uselessly.  Tried cutting wood, ended up with splinters and existential dread.  The battery pack is bigger than my head, and Im pretty sure its powering a small disco inside.  10/10 for novelty, 0/10 for actual construction.  My cat loves chasing the mini forklift, though.',
  },
  {
    id: 11,
    name: 'Random thing',
    price: 43,
    description: 'Even we dont know what it does, but you can find out now',
    imageUrl: 'img/randomThing.jfif',
    category: 'Stuff',
    rating: 1.3,
    brand: 'Flurp',
    quantity: 1,
    availability: false,
    costumerQuote: '',
  },
  {
    id: 12,
    name: 'BoaTent X50',
    price: 324,
    description: 'Innovative design - live the house boat life everywhere',
    imageUrl: 'img/boaTent.jfif',
    category: 'Outdoors',
    rating: 4.7,
    brand: 'Draussen & Co',
    quantity: 1,
    availability: true,
    costumerQuote:
      'This "BoaTent X50" promised the ultimate adventure.  Delivered a soggy nap and a sunburn.  Tried kayaking, tent nearly capsized.  Tried camping, woke up with a fish staring at me through the mesh.  The "easy setup" is a lie.  Spent an hour wrestling with poles, looked like I was fighting a giant inflatable octopus.  On the bright side, it´s a great conversation starter at the ER.  1/5 stars, unless you´re a masochistic duck who enjoys questionable stability and public humiliation.',
  },
];
