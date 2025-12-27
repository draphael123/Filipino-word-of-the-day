// Filipino words database with pronunciation and examples
const filipinoWords = [
    // Greetings and Common Phrases
    {
        word: "Kumusta",
        pronunciation: "koo-moos-TAH",
        meaning: "Hello / How are you?",
        example: "Kumusta ka? (How are you?)"
    },
    {
        word: "Salamat",
        pronunciation: "sah-LAH-maht",
        meaning: "Thank you",
        example: "Salamat po! (Thank you, sir/ma'am!)"
    },
    {
        word: "Paalam",
        pronunciation: "pah-AH-lahm",
        meaning: "Goodbye",
        example: "Paalam na! (Goodbye!)"
    },
    {
        word: "Oo",
        pronunciation: "OH-oh",
        meaning: "Yes",
        example: "Oo, tama ka. (Yes, you're right.)"
    },
    {
        word: "Hindi",
        pronunciation: "heen-DEE",
        meaning: "No",
        example: "Hindi ako sigurado. (I'm not sure.)"
    },
    {
        word: "Opo",
        pronunciation: "OH-poh",
        meaning: "Yes (respectful)",
        example: "Opo, naintindihan ko. (Yes, I understand.)"
    },
    {
        word: "Sige",
        pronunciation: "SEE-geh",
        meaning: "Okay / Go ahead",
        example: "Sige, tuloy lang. (Okay, go ahead.)"
    },
    {
        word: "Paki",
        pronunciation: "PAH-kee",
        meaning: "Please",
        example: "Paki bigay nito. (Please give this.)"
    },
    {
        word: "Pasensya",
        pronunciation: "pah-SEN-shah",
        meaning: "Sorry / Patience",
        example: "Pasensya na po. (I'm sorry, sir/ma'am.)"
    },
    {
        word: "Walang anuman",
        pronunciation: "wah-LAHNG ah-noo-MAHN",
        meaning: "You're welcome",
        example: "Walang anuman! (You're welcome!)"
    },
    
    // Family and Relationships
    {
        word: "Pamilya",
        pronunciation: "pah-MEEL-yah",
        meaning: "Family",
        example: "Mahal ko ang aking pamilya. (I love my family.)"
    },
    {
        word: "Nanay",
        pronunciation: "nah-NAY",
        meaning: "Mother",
        example: "Si Nanay ay nagluluto. (Mother is cooking.)"
    },
    {
        word: "Tatay",
        pronunciation: "tah-TAY",
        meaning: "Father",
        example: "Si Tatay ay nagtatrabaho. (Father is working.)"
    },
    {
        word: "Ate",
        pronunciation: "AH-teh",
        meaning: "Older sister",
        example: "Si Ate ay mabait. (Older sister is kind.)"
    },
    {
        word: "Kuya",
        pronunciation: "KOO-yah",
        meaning: "Older brother",
        example: "Si Kuya ay matangkad. (Older brother is tall.)"
    },
    {
        word: "Bunso",
        pronunciation: "BOON-soh",
        meaning: "Youngest child",
        example: "Siya ang bunso sa pamilya. (He/She is the youngest in the family.)"
    },
    {
        word: "Lolo",
        pronunciation: "LOH-loh",
        meaning: "Grandfather",
        example: "Si Lolo ay matanda na. (Grandfather is old already.)"
    },
    {
        word: "Lola",
        pronunciation: "LOH-lah",
        meaning: "Grandmother",
        example: "Si Lola ay masaya. (Grandmother is happy.)"
    },
    {
        word: "Tito",
        pronunciation: "TEE-toh",
        meaning: "Uncle",
        example: "Si Tito ay dumating. (Uncle arrived.)"
    },
    {
        word: "Tita",
        pronunciation: "TEE-tah",
        meaning: "Aunt",
        example: "Si Tita ay mabait. (Aunt is kind.)"
    },
    {
        word: "Kaibigan",
        pronunciation: "kah-ee-bee-GAHN",
        meaning: "Friend",
        example: "Sila ay aking mga kaibigan. (They are my friends.)"
    },
    {
        word: "Kapitbahay",
        pronunciation: "kah-peet-bah-HAY",
        meaning: "Neighbor",
        example: "Siya ay aming kapitbahay. (He/She is our neighbor.)"
    },
    
    // Emotions and Feelings
    {
        word: "Masaya",
        pronunciation: "mah-sah-YAH",
        meaning: "Happy",
        example: "Masaya ako ngayon. (I am happy today.)"
    },
    {
        word: "Malungkot",
        pronunciation: "mah-LOONG-koht",
        meaning: "Sad",
        example: "Bakit ka malungkot? (Why are you sad?)"
    },
    {
        word: "Galit",
        pronunciation: "gah-LEET",
        meaning: "Angry",
        example: "Huwag kang magalit. (Don't be angry.)"
    },
    {
        word: "Takot",
        pronunciation: "tah-KOHT",
        meaning: "Afraid / Scared",
        example: "Takot ako sa dilim. (I am afraid of the dark.)"
    },
    {
        word: "Gulat",
        pronunciation: "goo-LAHT",
        meaning: "Surprised",
        example: "Gulat ako sa balita. (I am surprised by the news.)"
    },
    {
        word: "Pagod",
        pronunciation: "pah-GOHD",
        meaning: "Tired",
        example: "Pagod na pagod ako. (I am very tired.)"
    },
    {
        word: "Saya",
        pronunciation: "sah-YAH",
        meaning: "Happiness / Joy",
        example: "Puno ng saya ang puso ko. (My heart is full of joy.)"
    },
    {
        word: "Kaligayahan",
        pronunciation: "kah-lee-gah-YAH-hahn",
        meaning: "Happiness",
        example: "Ang kaligayahan ay nasa puso. (Happiness is in the heart.)"
    },
    {
        word: "Ligaya",
        pronunciation: "lee-gah-YAH",
        meaning: "Joy",
        example: "Buong ligaya siyang sumayaw. (He/She danced with full joy.)"
    },
    
    // Love and Affection
    {
        word: "Mahal",
        pronunciation: "mah-HAHL",
        meaning: "Love / Expensive",
        example: "Mahal kita. (I love you.)"
    },
    {
        word: "Pag-ibig",
        pronunciation: "pahg-EE-big",
        meaning: "Love (romantic)",
        example: "Ang pag-ibig ay maganda. (Love is beautiful.)"
    },
    {
        word: "Puso",
        pronunciation: "POO-soh",
        meaning: "Heart",
        example: "Ang puso ko ay masaya. (My heart is happy.)"
    },
    {
        word: "Halik",
        pronunciation: "hah-LEEK",
        meaning: "Kiss",
        example: "Bigyan mo ako ng halik. (Give me a kiss.)"
    },
    {
        word: "Yakap",
        pronunciation: "yah-KAHP",
        meaning: "Hug",
        example: "Kumusta ang yakap? (How's the hug?)"
    },
    
    // Body Parts
    {
        word: "Ulo",
        pronunciation: "OO-loh",
        meaning: "Head",
        example: "Masakit ang aking ulo. (My head hurts.)"
    },
    {
        word: "Mata",
        pronunciation: "mah-TAH",
        meaning: "Eye",
        example: "Maganda ang kanyang mata. (His/Her eyes are beautiful.)"
    },
    {
        word: "Ilong",
        pronunciation: "ee-LOHNG",
        meaning: "Nose",
        example: "Mahaba ang ilong niya. (His/Her nose is long.)"
    },
    {
        word: "Bibig",
        pronunciation: "bee-BEEG",
        meaning: "Mouth",
        example: "Ang bibig niya ay maliit. (His/Her mouth is small.)"
    },
    {
        word: "Kamay",
        pronunciation: "kah-MAY",
        meaning: "Hand",
        example: "Hugasan mo ang iyong kamay. (Wash your hands.)"
    },
    {
        word: "Paa",
        pronunciation: "pah-AH",
        meaning: "Foot",
        example: "Malaki ang kanyang paa. (His/Her feet are big.)"
    },
    {
        word: "Binti",
        pronunciation: "been-TEE",
        meaning: "Leg",
        example: "Mahaba ang kanyang binti. (His/Her legs are long.)"
    },
    {
        word: "Braso",
        pronunciation: "brah-SOH",
        meaning: "Arm",
        example: "Malakas ang kanyang braso. (His/Her arms are strong.)"
    },
    {
        word: "Tiyan",
        pronunciation: "tee-YAHN",
        meaning: "Stomach / Belly",
        example: "Masakit ang aking tiyan. (My stomach hurts.)"
    },
    {
        word: "Likod",
        pronunciation: "lee-KOHD",
        meaning: "Back",
        example: "Masakit ang likod ko. (My back hurts.)"
    },
    
    // Colors
    {
        word: "Pula",
        pronunciation: "poo-LAH",
        meaning: "Red",
        example: "Ang rosas ay pula. (The rose is red.)"
    },
    {
        word: "Bughaw",
        pronunciation: "boog-HAW",
        meaning: "Blue",
        example: "Ang langit ay bughaw. (The sky is blue.)"
    },
    {
        word: "Berde",
        pronunciation: "ber-DEH",
        meaning: "Green",
        example: "Ang damo ay berde. (The grass is green.)"
    },
    {
        word: "Dilaw",
        pronunciation: "dee-LAW",
        meaning: "Yellow",
        example: "Ang araw ay dilaw. (The sun is yellow.)"
    },
    {
        word: "Itim",
        pronunciation: "ee-TEEM",
        meaning: "Black",
        example: "Itim ang kanyang buhok. (His/Her hair is black.)"
    },
    {
        word: "Puti",
        pronunciation: "poo-TEE",
        meaning: "White",
        example: "Puti ang pader. (The wall is white.)"
    },
    {
        word: "Kulay-abò",
        pronunciation: "koo-LAY ah-BOH",
        meaning: "Gray",
        example: "Kulay-abò ang ulap. (The cloud is gray.)"
    },
    {
        word: "Kayumanggi",
        pronunciation: "kah-yoo-mahng-GEE",
        meaning: "Brown",
        example: "Kayumanggi ang kanyang balat. (His/Her skin is brown.)"
    },
    
    // Food and Drinks
    {
        word: "Pagkain",
        pronunciation: "pahg-KAH-een",
        meaning: "Food",
        example: "Masarap ang pagkain. (The food is delicious.)"
    },
    {
        word: "Kanin",
        pronunciation: "kah-NEEN",
        meaning: "Rice (cooked)",
        example: "Kumain ako ng kanin. (I ate rice.)"
    },
    {
        word: "Bigas",
        pronunciation: "bee-GAHS",
        meaning: "Rice (uncooked)",
        example: "Bumili ako ng bigas. (I bought rice.)"
    },
    {
        word: "Tubig",
        pronunciation: "too-BEEG",
        meaning: "Water",
        example: "Uminom ako ng tubig. (I drank water.)"
    },
    {
        word: "Gatas",
        pronunciation: "gah-TAHS",
        meaning: "Milk",
        example: "Ang gatas ay masustansya. (Milk is nutritious.)"
    },
    {
        word: "Tinapay",
        pronunciation: "tee-nah-PAY",
        meaning: "Bread",
        example: "Bumili ako ng tinapay. (I bought bread.)"
    },
    {
        word: "Itlog",
        pronunciation: "eet-LOHG",
        meaning: "Egg",
        example: "Nagluto ako ng itlog. (I cooked an egg.)"
    },
    {
        word: "Karne",
        pronunciation: "kar-NEH",
        meaning: "Meat",
        example: "Ang karne ay masarap. (The meat is delicious.)"
    },
    {
        word: "Isda",
        pronunciation: "ees-DAH",
        meaning: "Fish",
        example: "Kumain ako ng isda. (I ate fish.)"
    },
    {
        word: "Manok",
        pronunciation: "mah-NOHK",
        meaning: "Chicken",
        example: "Adobo ang manok. (The chicken is adobo.)"
    },
    {
        word: "Gulay",
        pronunciation: "goo-LAY",
        meaning: "Vegetables",
        example: "Kumain ng gulay para sa kalusugan. (Eat vegetables for health.)"
    },
    {
        word: "Prutas",
        pronunciation: "proo-TAHS",
        meaning: "Fruit",
        example: "Ang prutas ay masustansya. (Fruits are nutritious.)"
    },
    {
        word: "Mango",
        pronunciation: "MAHN-goh",
        meaning: "Mango",
        example: "Ang mango ay matamis. (The mango is sweet.)"
    },
    {
        word: "Saging",
        pronunciation: "sah-GEENG",
        meaning: "Banana",
        example: "Gusto ko ng saging. (I like bananas.)"
    },
    {
        word: "Kape",
        pronunciation: "kah-PEH",
        meaning: "Coffee",
        example: "Uminom ako ng kape. (I drank coffee.)"
    },
    {
        word: "Asin",
        pronunciation: "ah-SEEN",
        meaning: "Salt",
        example: "Lagyan mo ng asin. (Put some salt.)"
    },
    {
        word: "Asukal",
        pronunciation: "ah-soo-KAHL",
        meaning: "Sugar",
        example: "Kaunti lang ang asukal. (Just a little sugar.)"
    },
    
    // Time and Days
    {
        word: "Araw",
        pronunciation: "AH-rahw",
        meaning: "Day / Sun",
        example: "Magandang araw! (Good day!)"
    },
    {
        word: "Gabi",
        pronunciation: "gah-BEE",
        meaning: "Night / Evening",
        example: "Magandang gabi! (Good evening!)"
    },
    {
        word: "Umaga",
        pronunciation: "oo-mah-GAH",
        meaning: "Morning",
        example: "Magandang umaga! (Good morning!)"
    },
    {
        word: "Tanghali",
        pronunciation: "tahng-hah-LEE",
        meaning: "Noon",
        example: "Kumain kami ng tanghali. (We ate at noon.)"
    },
    {
        word: "Hapon",
        pronunciation: "hah-POHN",
        meaning: "Afternoon",
        example: "Magandang hapon! (Good afternoon!)"
    },
    {
        word: "Madaling-araw",
        pronunciation: "mah-dah-LEENG AH-rahw",
        meaning: "Dawn / Early morning",
        example: "Gumising ako ng madaling-araw. (I woke up at dawn.)"
    },
    {
        word: "Lunes",
        pronunciation: "LOO-ness",
        meaning: "Monday",
        example: "Lunes ngayon. (Today is Monday.)"
    },
    {
        word: "Martes",
        pronunciation: "mar-TESS",
        meaning: "Tuesday",
        example: "Martes bukas. (Tomorrow is Tuesday.)"
    },
    {
        word: "Miyerkules",
        pronunciation: "myer-koo-LESS",
        meaning: "Wednesday",
        example: "Miyerkules na bukas. (Tomorrow is Wednesday.)"
    },
    {
        word: "Huwebes",
        pronunciation: "hoo-WEH-bess",
        meaning: "Thursday",
        example: "Huwebes ngayon. (Today is Thursday.)"
    },
    {
        word: "Biyernes",
        pronunciation: "byer-NESS",
        meaning: "Friday",
        example: "Biyernes na bukas. (Tomorrow is Friday.)"
    },
    {
        word: "Sabado",
        pronunciation: "sah-BAH-doh",
        meaning: "Saturday",
        example: "Sabado ngayon. (Today is Saturday.)"
    },
    {
        word: "Linggo",
        pronunciation: "leeng-GOH",
        meaning: "Sunday",
        example: "Linggo ngayon. (Today is Sunday.)"
    },
    {
        word: "Buwan",
        pronunciation: "boo-WAHN",
        meaning: "Month / Moon",
        example: "Ilang buwan na? (How many months?)"
    },
    {
        word: "Taon",
        pronunciation: "tah-OHN",
        meaning: "Year",
        example: "Ilang taon ka na? (How old are you?)"
    },
    
    // Numbers
    {
        word: "Isa",
        pronunciation: "ee-SAH",
        meaning: "One",
        example: "Isa lang. (Just one.)"
    },
    {
        word: "Dalawa",
        pronunciation: "dah-lah-WAH",
        meaning: "Two",
        example: "Dalawa sila. (There are two of them.)"
    },
    {
        word: "Tatlo",
        pronunciation: "taht-LOH",
        meaning: "Three",
        example: "Tatlong araw. (Three days.)"
    },
    {
        word: "Apat",
        pronunciation: "ah-PAHT",
        meaning: "Four",
        example: "Apat na tao. (Four people.)"
    },
    {
        word: "Lima",
        pronunciation: "lee-MAH",
        meaning: "Five",
        example: "Lima sila. (There are five of them.)"
    },
    {
        word: "Anim",
        pronunciation: "ah-NEEM",
        meaning: "Six",
        example: "Anim na pusa. (Six cats.)"
    },
    {
        word: "Pito",
        pronunciation: "pee-TOH",
        meaning: "Seven",
        example: "Pito sila. (There are seven of them.)"
    },
    {
        word: "Walo",
        pronunciation: "wah-LOH",
        meaning: "Eight",
        example: "Walong libro. (Eight books.)"
    },
    {
        word: "Siyam",
        pronunciation: "shah-YAHM",
        meaning: "Nine",
        example: "Siyam na bata. (Nine children.)"
    },
    {
        word: "Sampu",
        pronunciation: "sahm-POO",
        meaning: "Ten",
        example: "Sampung tao. (Ten people.)"
    },
    
    // Animals
    {
        word: "Aso",
        pronunciation: "ah-SOH",
        meaning: "Dog",
        example: "Ang aso ay matalino. (The dog is smart.)"
    },
    {
        word: "Pusa",
        pronunciation: "poo-SAH",
        meaning: "Cat",
        example: "Ang pusa ay maliit. (The cat is small.)"
    },
    {
        word: "Ibon",
        pronunciation: "ee-BOHN",
        meaning: "Bird",
        example: "Ang ibon ay lumilipad. (The bird is flying.)"
    },
    {
        word: "Baboy",
        pronunciation: "bah-BOY",
        meaning: "Pig",
        example: "Ang baboy ay mataba. (The pig is fat.)"
    },
    {
        word: "Baka",
        pronunciation: "bah-KAH",
        meaning: "Cow",
        example: "Ang baka ay malaki. (The cow is big.)"
    },
    {
        word: "Kabayo",
        pronunciation: "kah-bah-YOH",
        meaning: "Horse",
        example: "Ang kabayo ay mabilis. (The horse is fast.)"
    },
    {
        word: "Kambing",
        pronunciation: "kahm-BEENG",
        meaning: "Goat",
        example: "Ang kambing ay kumakain ng damo. (The goat is eating grass.)"
    },
    {
        word: "Daga",
        pronunciation: "dah-GAH",
        meaning: "Rat / Mouse",
        example: "May daga sa bahay. (There's a rat in the house.)"
    },
    {
        word: "Ahas",
        pronunciation: "ah-HAHS",
        meaning: "Snake",
        example: "Takot ako sa ahas. (I'm afraid of snakes.)"
    },
    {
        word: "Isda",
        pronunciation: "ees-DAH",
        meaning: "Fish",
        example: "Ang isda ay lumalangoy. (The fish is swimming.)"
    },
    
    // Nature and Environment
    {
        word: "Kalikasan",
        pronunciation: "kah-lee-kah-SAHN",
        meaning: "Nature",
        example: "Mahal ko ang kalikasan. (I love nature.)"
    },
    {
        word: "Bundok",
        pronunciation: "boon-DOHK",
        meaning: "Mountain",
        example: "Mataas ang bundok. (The mountain is high.)"
    },
    {
        word: "Dagat",
        pronunciation: "dah-GAHT",
        meaning: "Sea / Ocean",
        example: "Malawak ang dagat. (The sea is vast.)"
    },
    {
        word: "Ilog",
        pronunciation: "ee-LOHG",
        meaning: "River",
        example: "Malinis ang ilog. (The river is clean.)"
    },
    {
        word: "Lawà",
        pronunciation: "lah-WAH",
        meaning: "Lake",
        example: "Maganda ang lawà. (The lake is beautiful.)"
    },
    {
        word: "Kahoy",
        pronunciation: "kah-HOY",
        meaning: "Tree",
        example: "Mataas ang kahoy. (The tree is tall.)"
    },
    {
        word: "Damo",
        pronunciation: "dah-MOH",
        meaning: "Grass",
        example: "Berde ang damo. (The grass is green.)"
    },
    {
        word: "Bulaklak",
        pronunciation: "boo-lahk-LAHK",
        meaning: "Flower",
        example: "Maganda ang bulaklak. (The flower is beautiful.)"
    },
    {
        word: "Langit",
        pronunciation: "lahn-GEET",
        meaning: "Sky / Heaven",
        example: "Bughaw ang langit. (The sky is blue.)"
    },
    {
        word: "Lupa",
        pronunciation: "loo-PAH",
        meaning: "Land / Ground / Soil",
        example: "Tumayo ako sa lupa. (I stood on the ground.)"
    },
    {
        word: "Hangin",
        pronunciation: "hahn-GEEN",
        meaning: "Wind / Air",
        example: "Malakas ang hangin. (The wind is strong.)"
    },
    {
        word: "Ulap",
        pronunciation: "oo-LAHP",
        meaning: "Cloud",
        example: "Puti ang ulap. (The cloud is white.)"
    },
    {
        word: "Ulan",
        pronunciation: "oo-LAHN",
        meaning: "Rain",
        example: "Umuulan ngayon. (It's raining now.)"
    },
    {
        word: "Araw",
        pronunciation: "AH-rahw",
        meaning: "Sun",
        example: "Mainit ang araw. (The sun is hot.)"
    },
    {
        word: "Bituin",
        pronunciation: "bee-too-EEN",
        meaning: "Star",
        example: "Maraming bituin sa langit. (There are many stars in the sky.)"
    },
    
    // Places and Locations
    {
        word: "Tahanan",
        pronunciation: "tah-hah-NAHN",
        meaning: "Home",
        example: "Uuwi ako sa aking tahanan. (I will go home.)"
    },
    {
        word: "Bahay",
        pronunciation: "bah-HAY",
        meaning: "House",
        example: "Malaki ang bahay. (The house is big.)"
    },
    {
        word: "Paaralan",
        pronunciation: "pah-ah-rah-LAHN",
        meaning: "School",
        example: "Pumapasok ako sa paaralan. (I go to school.)"
    },
    {
        word: "Ospital",
        pronunciation: "ohs-pee-TAHL",
        meaning: "Hospital",
        example: "Pumunta siya sa ospital. (He/She went to the hospital.)"
    },
    {
        word: "Palengke",
        pronunciation: "pah-leng-KEH",
        meaning: "Market",
        example: "Bumili ako sa palengke. (I bought from the market.)"
    },
    {
        word: "Tindahan",
        pronunciation: "teen-dah-HAHN",
        meaning: "Store / Shop",
        example: "Bumili ako sa tindahan. (I bought from the store.)"
    },
    {
        word: "Simbahan",
        pronunciation: "seem-bah-HAHN",
        meaning: "Church",
        example: "Pumunta kami sa simbahan. (We went to the church.)"
    },
    {
        word: "Lansangan",
        pronunciation: "lahn-sah-NGAHN",
        meaning: "Street",
        example: "Tumawid ako sa lansangan. (I crossed the street.)"
    },
    {
        word: "Lungsod",
        pronunciation: "loong-SOHD",
        meaning: "City",
        example: "Malaki ang lungsod. (The city is big.)"
    },
    {
        word: "Bayan",
        pronunciation: "bah-YAHN",
        meaning: "Town / Country",
        example: "Maganda ang bayan. (The town is beautiful.)"
    },
    
    // Actions and Verbs
    {
        word: "Kumain",
        pronunciation: "koo-mah-EEN",
        meaning: "To eat",
        example: "Kumain ako ng kanin. (I ate rice.)"
    },
    {
        word: "Uminom",
        pronunciation: "oo-mee-NOHM",
        meaning: "To drink",
        example: "Uminom ako ng tubig. (I drank water.)"
    },
    {
        word: "Tulog",
        pronunciation: "too-LOHG",
        meaning: "Sleep",
        example: "Matulog ka na. (Go to sleep now.)"
    },
    {
        word: "Gising",
        pronunciation: "gee-SEENG",
        meaning: "Awake",
        example: "Gising na ako. (I'm awake now.)"
    },
    {
        word: "Lakad",
        pronunciation: "lah-KAHD",
        meaning: "Walk",
        example: "Maglakad tayo. (Let's walk.)"
    },
    {
        word: "Takbo",
        pronunciation: "tahk-BOH",
        meaning: "Run",
        example: "Tumakbo siya. (He/She ran.)"
    },
    {
        word: "Tingnan",
        pronunciation: "ting-NAHN",
        meaning: "Look / See",
        example: "Tingnan mo ito. (Look at this.)"
    },
    {
        word: "Makita",
        pronunciation: "mah-kee-TAH",
        meaning: "To see",
        example: "Nakita ko siya. (I saw him/her.)"
    },
    {
        word: "Pakinggan",
        pronunciation: "pah-keeng-GAHN",
        meaning: "Listen",
        example: "Pakinggan mo ako. (Listen to me.)"
    },
    {
        word: "Marinig",
        pronunciation: "mah-ree-NEEG",
        meaning: "To hear",
        example: "Narinig ko ang musika. (I heard the music.)"
    },
    {
        word: "Sabihin",
        pronunciation: "sah-bee-HEEN",
        meaning: "Say / Tell",
        example: "Sabihin mo sa akin. (Tell me.)"
    },
    {
        word: "Magluto",
        pronunciation: "mahg-loo-TOH",
        meaning: "To cook",
        example: "Magluto tayo. (Let's cook.)"
    },
    {
        word: "Bumili",
        pronunciation: "boo-mee-LEE",
        meaning: "To buy",
        example: "Bumili ako ng pagkain. (I bought food.)"
    },
    {
        word: "Bigay",
        pronunciation: "bee-GAY",
        meaning: "Give",
        example: "Bigay mo sa akin. (Give it to me.)"
    },
    {
        word: "Kumuha",
        pronunciation: "koo-moo-HAH",
        meaning: "To get / To take",
        example: "Kumuha ako ng libro. (I got a book.)"
    },
    {
        word: "Basahin",
        pronunciation: "bah-sah-HEEN",
        meaning: "Read",
        example: "Basahin mo ang libro. (Read the book.)"
    },
    {
        word: "Sulat",
        pronunciation: "soo-LAHT",
        meaning: "Write",
        example: "Sumulat ako ng liham. (I wrote a letter.)"
    },
    {
        word: "Mag-aral",
        pronunciation: "mahg AH-rahl",
        meaning: "To study",
        example: "Mag-aral tayo. (Let's study.)"
    },
    {
        word: "Magtrabaho",
        pronunciation: "mahg-trah-bah-HOH",
        meaning: "To work",
        example: "Nagtatrabaho siya. (He/She is working.)"
    },
    {
        word: "Laro",
        pronunciation: "lah-ROH",
        meaning: "Play",
        example: "Maglaro tayo. (Let's play.)"
    },
    {
        word: "Sayaw",
        pronunciation: "sah-YAW",
        meaning: "Dance",
        example: "Sumayaw siya. (He/She danced.)"
    },
    {
        word: "Kanta",
        pronunciation: "kahn-TAH",
        meaning: "Sing / Song",
        example: "Kumanta siya. (He/She sang.)"
    },
    {
        word: "Tawa",
        pronunciation: "tah-WAH",
        meaning: "Laugh",
        example: "Tumawa siya. (He/She laughed.)"
    },
    {
        word: "Iyak",
        pronunciation: "ee-YAHK",
        meaning: "Cry",
        example: "Umiiyak ang bata. (The child is crying.)"
    },
    {
        word: "Ngiti",
        pronunciation: "ngee-TEE",
        meaning: "Smile",
        example: "Ngumiti siya. (He/She smiled.)"
    },
    {
        word: "Tulong",
        pronunciation: "TOO-lohng",
        meaning: "Help",
        example: "Tulong! (Help!)"
    },
    {
        word: "Mahal",
        pronunciation: "mah-HAHL",
        meaning: "To love",
        example: "Mahal kita. (I love you.)"
    },
    
    // Adjectives - Appearance
    {
        word: "Maganda",
        pronunciation: "mah-gahn-DAH",
        meaning: "Beautiful",
        example: "Maganda ang araw. (The sun is beautiful.)"
    },
    {
        word: "Pangit",
        pronunciation: "pah-NGEET",
        meaning: "Ugly",
        example: "Hindi naman pangit. (It's not ugly.)"
    },
    {
        word: "Malaki",
        pronunciation: "mah-lah-KEE",
        meaning: "Big / Large",
        example: "Malaki ang bahay. (The house is big.)"
    },
    {
        word: "Maliit",
        pronunciation: "mah-lee-EET",
        meaning: "Small / Little",
        example: "Maliit ang pusa. (The cat is small.)"
    },
    {
        word: "Mataas",
        pronunciation: "mah-tah-AHS",
        meaning: "Tall / High",
        example: "Mataas ang puno. (The tree is tall.)"
    },
    {
        word: "Mababa",
        pronunciation: "mah-bah-BAH",
        meaning: "Low / Short",
        example: "Mababa ang mesa. (The table is low.)"
    },
    {
        word: "Mataba",
        pronunciation: "mah-tah-BAH",
        meaning: "Fat",
        example: "Mataba ang baboy. (The pig is fat.)"
    },
    {
        word: "Payat",
        pronunciation: "pah-YAHT",
        meaning: "Thin / Skinny",
        example: "Payat siya. (He/She is thin.)"
    },
    {
        word: "Malakas",
        pronunciation: "mah-lah-KAHS",
        meaning: "Strong / Loud",
        example: "Malakas siya. (He/She is strong.)"
    },
    {
        word: "Mahina",
        pronunciation: "mah-hee-NAH",
        meaning: "Weak / Soft",
        example: "Mahina ang boses. (The voice is soft.)"
    },
    {
        word: "Mabilis",
        pronunciation: "mah-bee-LEES",
        meaning: "Fast / Quick",
        example: "Mabilis siyang tumakbo. (He/She ran fast.)"
    },
    {
        word: "Mabagal",
        pronunciation: "mah-bah-GAHL",
        meaning: "Slow",
        example: "Mabagal ang takbo. (The run is slow.)"
    },
    
    // Adjectives - Qualities
    {
        word: "Mabait",
        pronunciation: "mah-bah-EET",
        meaning: "Kind / Good",
        example: "Mabait siya. (He/She is kind.)"
    },
    {
        word: "Masama",
        pronunciation: "mah-sah-MAH",
        meaning: "Bad / Evil",
        example: "Huwag maging masama. (Don't be bad.)"
    },
    {
        word: "Matalino",
        pronunciation: "mah-tah-lee-NOH",
        meaning: "Smart / Intelligent",
        example: "Matalino ang bata. (The child is smart.)"
    },
    {
        word: "Bobo",
        pronunciation: "boh-BOH",
        meaning: "Stupid / Foolish",
        example: "Huwag kang maging bobo. (Don't be stupid.)"
    },
    {
        word: "Masipag",
        pronunciation: "mah-see-PAHG",
        meaning: "Hardworking / Industrious",
        example: "Masipag siyang mag-aral. (He/She studies hard.)"
    },
    {
        word: "Tamad",
        pronunciation: "tah-MAHD",
        meaning: "Lazy",
        example: "Tamad siya. (He/She is lazy.)"
    },
    {
        word: "Tapat",
        pronunciation: "tah-PAHT",
        meaning: "Honest / Faithful",
        example: "Tapat siya sa trabaho. (He/She is honest at work.)"
    },
    {
        word: "Masaya",
        pronunciation: "mah-sah-YAH",
        meaning: "Happy",
        example: "Masaya ako. (I am happy.)"
    },
    
    // Adjectives - Taste and Feel
    {
        word: "Masarap",
        pronunciation: "mah-sah-RAHP",
        meaning: "Delicious",
        example: "Masarap ang pagkain. (The food is delicious.)"
    },
    {
        word: "Matamis",
        pronunciation: "mah-tah-MEES",
        meaning: "Sweet",
        example: "Matamis ang mangga. (The mango is sweet.)"
    },
    {
        word: "Maalat",
        pronunciation: "mah-ah-LAHT",
        meaning: "Salty",
        example: "Maalat ang pagkain. (The food is salty.)"
    },
    {
        word: "Mapait",
        pronunciation: "mah-pah-EET",
        meaning: "Bitter",
        example: "Mapait ang gamot. (The medicine is bitter.)"
    },
    {
        word: "Maasim",
        pronunciation: "mah-ah-SEEM",
        meaning: "Sour",
        example: "Maasim ang kalamansi. (The calamansi is sour.)"
    },
    {
        word: "Mainit",
        pronunciation: "mah-ee-NEET",
        meaning: "Hot",
        example: "Mainit ang kape. (The coffee is hot.)"
    },
    {
        word: "Malamig",
        pronunciation: "mah-lah-MEEG",
        meaning: "Cold",
        example: "Malamig ang tubig. (The water is cold.)"
    },
    
    // Objects and Things
    {
        word: "Libro",
        pronunciation: "lee-BROH",
        meaning: "Book",
        example: "Basahin mo ang libro. (Read the book.)"
    },
    {
        word: "Lapis",
        pronunciation: "lah-PEES",
        meaning: "Pencil",
        example: "Bumili ako ng lapis. (I bought a pencil.)"
    },
    {
        word: "Bolpen",
        pronunciation: "bohl-PEN",
        meaning: "Pen",
        example: "Mayroon ka bang bolpen? (Do you have a pen?)"
    },
    {
        word: "Papel",
        pronunciation: "pah-PEL",
        meaning: "Paper",
        example: "Bigyan mo ako ng papel. (Give me some paper.)"
    },
    {
        word: "Mesa",
        pronunciation: "meh-SAH",
        meaning: "Table",
        example: "Malinis ang mesa. (The table is clean.)"
    },
    {
        word: "Upuan",
        pronunciation: "oo-poo-AHN",
        meaning: "Chair / Seat",
        example: "Umupo ka sa upuan. (Sit on the chair.)"
    },
    {
        word: "Kama",
        pronunciation: "kah-MAH",
        meaning: "Bed",
        example: "Tulog na sa kama. (Sleep in the bed.)"
    },
    {
        word: "Pinto",
        pronunciation: "peen-TOH",
        meaning: "Door",
        example: "Bukas ang pinto. (The door is open.)"
    },
    {
        word: "Bintana",
        pronunciation: "been-tah-NAH",
        meaning: "Window",
        example: "Buksan mo ang bintana. (Open the window.)"
    },
    {
        word: "Ilaw",
        pronunciation: "ee-LAW",
        meaning: "Light",
        example: "Buksan mo ang ilaw. (Turn on the light.)"
    },
    {
        word: "Salamin",
        pronunciation: "sah-lah-MEEN",
        meaning: "Mirror / Glass",
        example: "Tingnan mo sa salamin. (Look in the mirror.)"
    },
    {
        word: "Sapatos",
        pronunciation: "sah-pah-TOHS",
        meaning: "Shoes",
        example: "Suotin mo ang sapatos. (Wear the shoes.)"
    },
    {
        word: "Damit",
        pronunciation: "dah-MEET",
        meaning: "Clothes",
        example: "Bumili ako ng damit. (I bought clothes.)"
    },
    {
        word: "Telepono",
        pronunciation: "teh-leh-poh-NOH",
        meaning: "Telephone / Phone",
        example: "Tumawag ako sa telepono. (I called on the phone.)"
    },
    {
        word: "Kotse",
        pronunciation: "koht-SEH",
        meaning: "Car",
        example: "Malaki ang kotse. (The car is big.)"
    },
    {
        word: "Pera",
        pronunciation: "peh-RAH",
        meaning: "Money",
        example: "May pera ka ba? (Do you have money?)"
    },
    
    // Concepts and Abstract
    {
        word: "Bayani",
        pronunciation: "bah-YAH-nee",
        meaning: "Hero",
        example: "Siya ay isang bayani. (He/She is a hero.)"
    },
    {
        word: "Kapayapaan",
        pronunciation: "kah-pah-yah-PAH-ahn",
        meaning: "Peace",
        example: "Nais namin ang kapayapaan. (We want peace.)"
    },
    {
        word: "Pag-asa",
        pronunciation: "pahg-AH-sah",
        meaning: "Hope",
        example: "May pag-asa pa. (There is still hope.)"
    },
    {
        word: "Kalayaan",
        pronunciation: "kah-lah-yah-AHN",
        meaning: "Freedom / Liberty",
        example: "Ang kalayaan ay mahalaga. (Freedom is important.)"
    },
    {
        word: "Kaligtasan",
        pronunciation: "kah-leeg-tah-SAHN",
        meaning: "Safety",
        example: "Ingatan ang kaligtasan. (Take care of safety.)"
    },
    {
        word: "Tagumpay",
        pronunciation: "tah-goom-PAY",
        meaning: "Success / Victory",
        example: "Tagumpay siya sa pagsusulit. (He/She succeeded in the exam.)"
    },
    {
        word: "Pagkakamali",
        pronunciation: "pahg-kah-kah-mah-LEE",
        meaning: "Mistake",
        example: "Pasensya sa pagkakamali. (Sorry for the mistake.)"
    },
    {
        word: "Bisita",
        pronunciation: "bee-see-TAH",
        meaning: "Visitor / Guest",
        example: "May bisita tayo. (We have a visitor.)"
    },
    {
        word: "Suliranin",
        pronunciation: "soo-lee-rah-NEEN",
        meaning: "Problem",
        example: "May suliranin ako. (I have a problem.)"
    },
    {
        word: "Sagot",
        pronunciation: "sah-GOHT",
        meaning: "Answer",
        example: "Ano ang sagot? (What is the answer?)"
    },
    {
        word: "Tanong",
        pronunciation: "tah-NOHNG",
        meaning: "Question",
        example: "May tanong ako. (I have a question.)"
    },
    {
        word: "Sagot",
        pronunciation: "sah-GOHT",
        meaning: "Reply / Answer",
        example: "Wala siyang sagot. (He/She has no reply.)"
    },
    {
        word: "Pangarap",
        pronunciation: "pah-NGAH-rahp",
        meaning: "Dream",
        example: "Ito ang aking pangarap. (This is my dream.)"
    },
    {
        word: "Alaala",
        pronunciation: "ah-lah-AH-lah",
        meaning: "Memory / Remembrance",
        example: "Mahalaga ang alaala. (Memory is important.)"
    },
    
    // Additional Words - More Common Terms
    {
        word: "Ngayon",
        pronunciation: "ngah-YOHN",
        meaning: "Now / Today",
        example: "Ngayon na. (Right now.)"
    },
    {
        word: "Kahapon",
        pronunciation: "kah-hah-POHN",
        meaning: "Yesterday",
        example: "Kahapon ako pumunta. (I went yesterday.)"
    },
    {
        word: "Bukas",
        pronunciation: "boo-KAHS",
        meaning: "Tomorrow",
        example: "Bukas tayo magkikita. (We will meet tomorrow.)"
    },
    {
        word: "Dito",
        pronunciation: "dee-TOH",
        meaning: "Here",
        example: "Dito ka tumayo. (Stand here.)"
    },
    {
        word: "Doon",
        pronunciation: "doh-OHN",
        meaning: "There",
        example: "Pumunta ka doon. (Go there.)"
    },
    {
        word: "Saan",
        pronunciation: "sah-AHN",
        meaning: "Where",
        example: "Saan ka pupunta? (Where are you going?)"
    },
    {
        word: "Kailan",
        pronunciation: "kah-ee-LAHN",
        meaning: "When",
        example: "Kailan ka darating? (When will you arrive?)"
    },
    {
        word: "Bakit",
        pronunciation: "bah-KEET",
        meaning: "Why",
        example: "Bakit ka umalis? (Why did you leave?)"
    },
    {
        word: "Paano",
        pronunciation: "pah-ah-NOH",
        meaning: "How",
        example: "Paano mo ginawa? (How did you do it?)"
    },
    {
        word: "Sino",
        pronunciation: "see-NOH",
        meaning: "Who",
        example: "Sino siya? (Who is he/she?)"
    },
    {
        word: "Ano",
        pronunciation: "ah-NOH",
        meaning: "What",
        example: "Ano ang pangalan mo? (What is your name?)"
    },
    {
        word: "Ilan",
        pronunciation: "ee-LAHN",
        meaning: "How many",
        example: "Ilan kayo? (How many are you?)"
    },
    {
        word: "Magkano",
        pronunciation: "mahg-kah-NOH",
        meaning: "How much",
        example: "Magkano ito? (How much is this?)"
    },
    {
        word: "Ako",
        pronunciation: "ah-KOH",
        meaning: "I / Me",
        example: "Ako ay masaya. (I am happy.)"
    },
    {
        word: "Ikaw",
        pronunciation: "ee-KAW",
        meaning: "You (singular)",
        example: "Ikaw ba? (Is it you?)"
    },
    {
        word: "Siya",
        pronunciation: "shah-YAH",
        meaning: "He / She",
        example: "Siya ay mabait. (He/She is kind.)"
    },
    {
        word: "Kami",
        pronunciation: "kah-MEE",
        meaning: "We (exclusive)",
        example: "Kami ay pupunta. (We are going.)"
    },
    {
        word: "Tayo",
        pronunciation: "tah-YOH",
        meaning: "We (inclusive)",
        example: "Tayo ay magkasama. (We are together.)"
    },
    {
        word: "Kayo",
        pronunciation: "kah-YOH",
        meaning: "You (plural)",
        example: "Kayo ba? (Is it you all?)"
    },
    {
        word: "Sila",
        pronunciation: "see-LAH",
        meaning: "They",
        example: "Sila ay kaibigan. (They are friends.)"
    },
    {
        word: "Ito",
        pronunciation: "ee-TOH",
        meaning: "This",
        example: "Ito ang libro. (This is the book.)"
    },
    {
        word: "Iyan",
        pronunciation: "ee-YAHN",
        meaning: "That (near you)",
        example: "Iyan ang bahay. (That is the house.)"
    },
    {
        word: "Iyon",
        pronunciation: "ee-YOHN",
        meaning: "That (far)",
        example: "Iyon ang kotse. (That is the car.)"
    },
    {
        word: "May",
        pronunciation: "may",
        meaning: "Have / There is",
        example: "May pagkain ako. (I have food.)"
    },
    {
        word: "Wala",
        pronunciation: "wah-LAH",
        meaning: "None / Nothing",
        example: "Wala akong pera. (I have no money.)"
    },
    {
        word: "Lahat",
        pronunciation: "lah-HAHT",
        meaning: "All / Everything",
        example: "Lahat ay mabuti. (Everything is good.)"
    },
    {
        word: "Isa",
        pronunciation: "ee-SAH",
        meaning: "One / Some",
        example: "Isa lang. (Just one.)"
    },
    {
        word: "Marami",
        pronunciation: "mah-rah-MEE",
        meaning: "Many / Much",
        example: "Maraming tao. (Many people.)"
    },
    {
        word: "Kaunti",
        pronunciation: "kah-oon-TEE",
        meaning: "Few / Little",
        example: "Kaunti lang. (Just a little.)"
    },
    {
        word: "Mas",
        pronunciation: "mahs",
        meaning: "More",
        example: "Mas malaki. (Bigger.)"
    },
    {
        word: "Pinaka",
        pronunciation: "pee-nah-KAH",
        meaning: "Most",
        example: "Pinakamaganda. (Most beautiful.)"
    },
    {
        word: "Napaka",
        pronunciation: "nah-pah-KAH",
        meaning: "Very",
        example: "Napakaganda. (Very beautiful.)"
    },
    {
        word: "Sobrang",
        pronunciation: "soh-BRAHNG",
        meaning: "Very / Too",
        example: "Sobrang init. (Too hot.)"
    },
    {
        word: "Medyo",
        pronunciation: "med-YOH",
        meaning: "Somewhat / A bit",
        example: "Medyo malaki. (Somewhat big.)"
    },
    {
        word: "Masyado",
        pronunciation: "mah-shah-DOH",
        meaning: "Too much",
        example: "Masyadong mainit. (Too hot.)"
    },
    {
        word: "Masaya",
        pronunciation: "mah-sah-YAH",
        meaning: "Happy / Fun",
        example: "Masaya ako. (I am happy.)"
    },
    {
        word: "Tuwang-tuwa",
        pronunciation: "too-WAHNG too-WAH",
        meaning: "Very happy",
        example: "Tuwang-tuwa siya. (He/She is very happy.)"
    },
    {
        word: "Nalulungkot",
        pronunciation: "nah-loo-LOONG-koht",
        meaning: "Feeling sad",
        example: "Nalulungkot ako. (I am feeling sad.)"
    },
    {
        word: "Nakakatuwa",
        pronunciation: "nah-kah-kah-too-WAH",
        meaning: "Funny / Amusing",
        example: "Nakakatuwa siya. (He/She is funny.)"
    },
    {
        word: "Nakakatawa",
        pronunciation: "nah-kah-kah-tah-WAH",
        meaning: "Funny / Laughable",
        example: "Nakakatawa ang palabas. (The show is funny.)"
    },
    {
        word: "Kapag",
        pronunciation: "kah-PAHG",
        meaning: "When / If",
        example: "Kapag umuulan, magdala ng payong. (When it rains, bring an umbrella.)"
    },
    {
        word: "Kung",
        pronunciation: "koong",
        meaning: "If",
        example: "Kung gusto mo. (If you want.)"
    },
    {
        word: "Dahil",
        pronunciation: "dah-HEEL",
        meaning: "Because",
        example: "Dahil sa ulan. (Because of the rain.)"
    },
    {
        word: "Kaya",
        pronunciation: "kah-YAH",
        meaning: "So / Therefore",
        example: "Kaya siya umalis. (That's why he/she left.)"
    },
    {
        word: "Pero",
        pronunciation: "peh-ROH",
        meaning: "But",
        example: "Gusto ko, pero wala akong pera. (I want to, but I have no money.)"
    },
    {
        word: "At",
        pronunciation: "aht",
        meaning: "And",
        example: "Ako at ikaw. (I and you.)"
    },
    {
        word: "O",
        pronunciation: "oh",
        meaning: "Or",
        example: "Ikaw o ako? (You or me?)"
    },
    {
        word: "Dapat",
        pronunciation: "dah-PAHT",
        meaning: "Should / Must",
        example: "Dapat tayo umalis. (We should leave.)"
    },
    {
        word: "Puwede",
        pronunciation: "poo-WEH-deh",
        meaning: "Can / May",
        example: "Puwede ba? (Is it okay? / Can I?)"
    },
    {
        word: "Huwag",
        pronunciation: "hoo-WAHG",
        meaning: "Don't",
        example: "Huwag kang umalis. (Don't leave.)"
    },
    {
        word: "Bawal",
        pronunciation: "bah-WAHL",
        meaning: "Not allowed / Forbidden",
        example: "Bawal dito. (Not allowed here.)"
    },
    {
        word: "Muli",
        pronunciation: "moo-LEE",
        meaning: "Again",
        example: "Gawin muli. (Do it again.)"
    },
    {
        word: "Na",
        pronunciation: "nah",
        meaning: "Already / Now",
        example: "Tapos na. (It's done already.)"
    },
    {
        word: "Pa",
        pronunciation: "pah",
        meaning: "Yet / Still",
        example: "Hindi pa. (Not yet.)"
    },
    {
        word: "Lang",
        pronunciation: "lahng",
        meaning: "Only / Just",
        example: "Isa lang. (Just one.)"
    },
    {
        word: "Din",
        pronunciation: "deen",
        meaning: "Also / Too",
        example: "Ako din. (Me too.)"
    },
    {
        word: "Rin",
        pronunciation: "reen",
        meaning: "Also / Too",
        example: "Ako rin. (Me too.)"
    },
    {
        word: "Lamang",
        pronunciation: "lah-MAHNG",
        meaning: "Only / Just",
        example: "Isa lamang. (Just one.)"
    },
    {
        word: "Pangalan",
        pronunciation: "pah-NGAH-lahn",
        meaning: "Name",
        example: "Ano ang pangalan mo? (What is your name?)"
    },
    {
        word: "Edad",
        pronunciation: "eh-DAHD",
        meaning: "Age",
        example: "Ilang edad ka na? (How old are you?)"
    },
    {
        word: "Trabaho",
        pronunciation: "trah-bah-HOH",
        meaning: "Work / Job",
        example: "May trabaho ka ba? (Do you have a job?)"
    },
    {
        word: "Eskwela",
        pronunciation: "ess-KWEH-lah",
        meaning: "School",
        example: "Pumapasok ako sa eskwela. (I go to school.)"
    },
    {
        word: "Guro",
        pronunciation: "goo-ROH",
        meaning: "Teacher",
        example: "Ang guro ay mabait. (The teacher is kind.)"
    },
    {
        word: "Estudyante",
        pronunciation: "ess-tood-YAHN-teh",
        meaning: "Student",
        example: "Siya ay estudyante. (He/She is a student.)"
    },
    {
        word: "Doktor",
        pronunciation: "dohk-TOHR",
        meaning: "Doctor",
        example: "Pumunta ako sa doktor. (I went to the doctor.)"
    },
    {
        word: "Nars",
        pronunciation: "nahrs",
        meaning: "Nurse",
        example: "Ang nars ay tumutulong. (The nurse is helping.)"
    },
    {
        word: "Pulis",
        pronunciation: "poo-LEES",
        meaning: "Police",
        example: "Tumawag ako ng pulis. (I called the police.)"
    },
    {
        word: "Sunog",
        pronunciation: "soo-NOHG",
        meaning: "Fire",
        example: "May sunog! (There's a fire!)"
    },
    {
        word: "Gamot",
        pronunciation: "gah-MOHT",
        meaning: "Medicine",
        example: "Uminom ng gamot. (Take medicine.)"
    },
    {
        word: "Sakit",
        pronunciation: "sah-KEET",
        meaning: "Sick / Pain",
        example: "May sakit ako. (I am sick.)"
    },
    {
        word: "Sugat",
        pronunciation: "soo-GAHT",
        meaning: "Wound",
        example: "May sugat siya. (He/She has a wound.)"
    },
    {
        word: "Lagnat",
        pronunciation: "lahg-NAHT",
        meaning: "Fever",
        example: "May lagnat ako. (I have a fever.)"
    },
    {
        word: "Ubo",
        pronunciation: "oo-BOH",
        meaning: "Cough",
        example: "May ubo siya. (He/She has a cough.)"
    },
    {
        word: "Sipon",
        pronunciation: "see-POHN",
        meaning: "Cold (illness)",
        example: "May sipon ako. (I have a cold.)"
    },
    {
        word: "Payong",
        pronunciation: "pah-YOHNG",
        meaning: "Umbrella",
        example: "Magdala ng payong. (Bring an umbrella.)"
    },
    {
        word: "Susì",
        pronunciation: "soo-SEE",
        meaning: "Key",
        example: "Nawala ang susì. (The key is lost.)"
    },
    {
        word: "Bag",
        pronunciation: "bahg",
        meaning: "Bag",
        example: "May bag siya. (He/She has a bag.)"
    },
    {
        word: "Wallet",
        pronunciation: "WALL-let",
        meaning: "Wallet",
        example: "Nawala ang wallet ko. (My wallet is lost.)"
    },
    {
        word: "Relo",
        pronunciation: "reh-LOH",
        meaning: "Watch / Clock",
        example: "Anong oras sa relo? (What time on the watch?)"
    },
    {
        word: "Oras",
        pronunciation: "oh-RAHS",
        meaning: "Time / Hour",
        example: "Anong oras na? (What time is it?)"
    },
    {
        word: "Minuto",
        pronunciation: "mee-NOO-toh",
        meaning: "Minute",
        example: "Lima lang na minuto. (Just five minutes.)"
    },
    {
        word: "Segundo",
        pronunciation: "seh-GOON-doh",
        meaning: "Second",
        example: "Ilang segundo? (How many seconds?)"
    },
    {
        word: "Gabi",
        pronunciation: "gah-BEE",
        meaning: "Night",
        example: "Magandang gabi! (Good evening!)"
    },
    {
        word: "Umaga",
        pronunciation: "oo-mah-GAH",
        meaning: "Morning",
        example: "Magandang umaga! (Good morning!)"
    },
    {
        word: "Maraming salamat",
        pronunciation: "mah-rah-MEENG sah-LAH-maht",
        meaning: "Thank you very much",
        example: "Maraming salamat po! (Thank you very much, sir/ma'am!)"
    }
];

// Get elements
const wordElement = document.getElementById('word');
const pronunciationElement = document.getElementById('pronunciation');
const meaningElement = document.getElementById('meaning');
const exampleElement = document.getElementById('example');
const newWordBtn = document.getElementById('newWordBtn');
const speakBtn = document.getElementById('speakBtn');

// Function to get a word (daily or random)
function getWord() {
    // Try to get today's word based on date, otherwise random
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const wordIndex = dayOfYear % filipinoWords.length;
    
    return filipinoWords[wordIndex];
}

// Function to display a word
function displayWord(wordData) {
    wordElement.textContent = wordData.word;
    pronunciationElement.textContent = `[${wordData.pronunciation}]`;
    meaningElement.textContent = wordData.meaning;
    exampleElement.textContent = wordData.example;
}

// Function to get a random word
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * filipinoWords.length);
    return filipinoWords[randomIndex];
}

// Function to speak the word using Web Speech API
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'tl-PH'; // Tagalog (Philippines)
        utterance.rate = 0.8;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Speech synthesis not supported in your browser.');
    }
}

// Event listeners
newWordBtn.addEventListener('click', () => {
    const randomWord = getRandomWord();
    displayWord(randomWord);
});

speakBtn.addEventListener('click', () => {
    const currentWord = wordElement.textContent;
    if (currentWord && currentWord !== 'Loading...') {
        speakWord(currentWord);
    }
});

// Initialize with today's word
displayWord(getWord());