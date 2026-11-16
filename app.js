
const mainCategories = [
  "Устриці",
  "Холодні закуски",
  "Гарячі закуски",
  "Салати",
  "Супи",
  "М’ясо",
  "Гарячі пательні",
  "Птиця",
  "Риба",
  "Плато на грилі",
  "Карі",
  "WOK MENU",
  "Гарніри",
  "Сети",
  "Суші",
  "Гункани",
  "Макі",
  "Роли",
  "Теплі роли",
  "Сашимі",
  "Десерти"
];

const mainMenu = [
  // УСТРИЦІ
  {category:"Устриці",name:"Устриці Фін де Клер №1",weight:"1 шт",price:180,description:"З лаймом, соусом та багетом."},
  {category:"Устриці",name:"Лобстер з акваріума",weight:"100 г",price:590,description:"Свіжий, живий лобстер готується на грилі або на пару, подається з вершковим маслом, кінзою та фірмовим соусом."},

  // ХОЛОДНІ ЗАКУСКИ
  {category:"Холодні закуски",name:"Севіче з тунця",weight:"275 г",price:615,description:"З авокадо та томатами конкасе."},
  {category:"Холодні закуски",name:"Гуакамоле з авокадо",weight:"250 г",price:395,description:"Подається з рисовими чіпсами."},
  {category:"Холодні закуски",name:"Карпачо з лосося",weight:"100/30 г",price:450,description:""},
  {category:"Холодні закуски",name:"Карпачо з тунця",weight:"100/30 г",price:450,description:""},
  {category:"Холодні закуски",name:"Карпачо з маринованого лосося",weight:"100/30 г",price:390,description:""},
  {category:"Холодні закуски",name:"Карпачо з телятини",weight:"100/30 г",price:420,description:""},
  {category:"Холодні закуски",name:"Карпачо з вирізки телятини з м’яким сиром",weight:"100/30 г",price:460,description:""},
  {category:"Холодні закуски",name:"Карпачо з вугрем",weight:"250 г",price:595,description:"З авокадо та томатами."},
  {category:"Холодні закуски",name:"Тар-тар з телятини",weight:"320 г",price:565,description:""},
  {category:"Холодні закуски",name:"Тар-тар з лососем, авокадо та зеленим маслом",weight:"250 г",price:550,description:""},
  {category:"Холодні закуски",name:"Тар-тар з манго та лосося",weight:"200 г",price:465,description:""},
  {category:"Холодні закуски",name:"Тар-тар з лосося",weight:"200 г",price:450,description:""},
  {category:"Холодні закуски",name:"Тар-тар з тунця",weight:"200 г",price:490,description:""},
  {category:"Холодні закуски",name:"Креветочні чіпси",weight:"10 шт",price:170,description:""},
  {category:"Холодні закуски",name:"Ікра щуки",weight:"50 г",price:495,description:"Подається з грінками та маслом."},

  // ГАРЯЧІ ЗАКУСКИ
  {category:"Гарячі закуски",name:"Креветки в кисло-солодкому соусі",weight:"280 г",price:695,description:"З сиром бурато."},
  {category:"Гарячі закуски",name:"Хрусткі креветки",weight:"5 шт / 100 г",price:450,description:"В імбирному соусі."},
  {category:"Гарячі закуски",name:"Креветки-темпура",weight:"5 шт",price:390,description:""},
  {category:"Гарячі закуски",name:"Фуа-гра",weight:"180 г",price:735,description:"З карамелізованою грушею."},
  {category:"Гарячі закуски",name:"Попкорн з креветок",weight:"100/30 г",price:350,description:"Подається з соусом спайсі-майоран."},
  {category:"Гарячі закуски",name:"Камамбер",weight:"100/245 г",price:450,description:"Запечений з овочами."},
  {category:"Гарячі закуски",name:"Камамбер з креветками",weight:"300 г",price:570,description:"В соусі том-ям."},
  {category:"Гарячі закуски",name:"Рапани",weight:"240 г",price:495,description:"У вершковому соусі."},
  {category:"Гарячі закуски",name:"Гриби муер та броколі",weight:"350 г",price:545,description:"В соусі."},
  {category:"Гарячі закуски",name:"Гребінець на грилі",weight:"150 г",price:620,description:"З соусом манго."},
  {category:"Гарячі закуски",name:"Гребінець",weight:"150 г",price:495,description:"Під крем-спайсі соусом."},
  {category:"Гарячі закуски",name:"Спринг-роли з тигровими креветками",weight:"3 шт / 360 г",price:510,description:""},
  {category:"Гарячі закуски",name:"Спринг-роли з куркою та ананасом",weight:"3 шт",price:410,description:""},

  // САЛАТИ
  {category:"Салати",name:"Салат з креветками та авокадо",weight:"210 г",price:570,description:"У горіховому соусі."},
  {category:"Салати",name:"Салат із восьминогом",weight:"370 г",price:995,description:""},
  {category:"Салати",name:"Салат великий зелений",weight:"240 г",price:390,description:"З горіхами кеш’ю."},
  {category:"Салати",name:"Салат із буратою та помідорами",weight:"300 г",price:570,description:""},
  {category:"Салати",name:"Салат з качкою, авокадо та мигдалем",weight:"270 г",price:550,description:""},
  {category:"Салати",name:"Азіатський Цезар з креветками",weight:"250 г",price:550,description:""},
  {category:"Салати",name:"Цезар з куркою та беконом",weight:"250 г",price:530,description:""},
  {category:"Салати",name:"Тайський салат з морепродуктами",weight:"260 г",price:610,description:""},
  {category:"Салати",name:"Фреш-салат із чері, буратою та авокадо",weight:"260 г",price:605,description:""},
  {category:"Салати",name:"Салат з вугрем",weight:"210 г",price:595,description:"З авокадо, бобами едамаме та червоною ікрою."},
  {category:"Салати",name:"Легкий салат з маринованим лососем",weight:"170 г",price:450,description:"З бобами едамаме, філе апельсина, міксом салату та хрусткими чіпсами."},
  {category:"Салати",name:"Салат «Хіяші»",weight:"130 г",price:280,description:"З горіховим соусом."},
  {category:"Салати",name:"Салат зі сніжним крабом та ікрою тобіко",weight:"270 г",price:450,description:"В запеченому авокадо."},
  {category:"Салати",name:"Салат з хрусткими баклажанами та помідорами",weight:"180 г",price:430,description:""},
  {category:"Салати",name:"Салат з крабом в азійському стилі",weight:"200 г",price:980,description:""},

  // СУПИ
  {category:"Супи",name:"Гарбузовий крем-суп з креветками",weight:"320 г",price:320,description:""},
  {category:"Супи",name:"Суп Фо-Бо з телятиною",weight:"510 г",price:445,description:""},
  {category:"Супи",name:"Суп рамен з куркою",weight:"360 г",price:420,description:""},
  {category:"Супи",name:"Місо-суп з трюфельним маслом",weight:"340 г",price:320,description:""},
  {category:"Супи",name:"Том-ям з морепродуктами",weight:"450 г",price:620,description:""},
  {category:"Супи",name:"Том-ям з морепродуктами MINI",weight:"230 г",price:395,description:""},
  {category:"Супи",name:"Місо-шіру з морепродуктами",weight:"380 г",price:620,description:""},
  {category:"Супи",name:"Місо-шіру з морепродуктами MINI",weight:"240 г",price:395,description:""},

  // М’ЯСО
  {category:"М’ясо",name:"Томлені телячі щічки",weight:"400 г",price:650,description:"З картопляним пюре."},
  {category:"М’ясо",name:"Стейк з фермерської телятини",weight:"300/70/30 г",price:620,description:"Із запеченою картоплею та ачар-рампай."},
  {category:"М’ясо",name:"Стейк філе міньйон",weight:"100 г",price:420,description:""},
  {category:"М’ясо",name:"Стейк рібай",weight:"100 г",price:270,description:""},
  {category:"М’ясо",name:"Ребра барбекю",weight:"260/100/70 г",price:510,description:"З молодою картоплею та ачар-рампай."},
  {category:"М’ясо",name:"Ребра на грилі",weight:"1 кг",price:1550,description:"За попереднім замовленням. Із запеченою картоплею та овочами."},
  {category:"М’ясо",name:"Медальйон із телятини",weight:"200/120/30 г",price:550,description:"З молодою картоплею, стручковою квасолею та соусом спайсі."},
  {category:"М’ясо",name:"Медальйон зі свинини",weight:"200/120/30 г",price:390,description:"З молодою картоплею, стручковою квасолею та соусом спайсі."},

  // ГАРЯЧІ ПАТЕЛЬНІ
  {category:"Гарячі пательні",name:"Гаряча пательня з восьминогом",weight:"320 г",price:995,description:"Із запеченою картоплею та сиром філадельфія."},
  {category:"Гарячі пательні",name:"Гаряча пательня з телятиною",weight:"410 г",price:550,description:"З овочами та молодою картоплею."},
  {category:"Гарячі пательні",name:"Гаряча пательня зі свининою",weight:"410 г",price:495,description:""},

  // ПТИЦЯ
  {category:"Птиця",name:"Качина ніжка конфі",weight:"350 г",price:570,description:"З картопляним пюре."},
  {category:"Птиця",name:"Курча в соусі світ чилі",weight:"420 г",price:420,description:"Та молодою картоплею."},
  {category:"Птиця",name:"Качка по-пекінськи",weight:"300/50 г · 6 шт",price:1450,description:"В стилі кантонес. Ціла качка — 2200 ₴."},
  {category:"Птиця",name:"Качка в азіатському стилі",weight:"300/200 г",price:1450,description:""},

  // РИБА
  {category:"Риба",name:"Запечений лосось із мусом з авокадо",weight:"240 г",price:620,description:"З горіхами кеш’ю."},
  {category:"Риба",name:"Стейк із лосося з баклажаном",weight:"200 г",price:790,description:""},
  {category:"Риба",name:"Дорадо",weight:"100 г",price:240,description:"Запечена цілком з овочами."},
  {category:"Риба",name:"Сібас",weight:"100 г",price:240,description:"Запечений цілком з овочами."},
  {category:"Риба",name:"Медальйон із лосося",weight:"210 г",price:610,description:"У вершковому соусі з червоною ікрою."},

  // ПЛАТО НА ГРИЛІ
  {category:"Плато на грилі",name:"Овочі",weight:"140 г",price:270,description:"Морква каротель, кукурудза, квасоля, броколі."},
  {category:"Плато на грилі",name:"Гребінець",weight:"100 г",price:460,description:""},
  {category:"Плато на грилі",name:"Тунець",weight:"100 г",price:340,description:""},
  {category:"Плато на грилі",name:"Лосось",weight:"100 г",price:380,description:""},
  {category:"Плато на грилі",name:"Кальмар",weight:"100 г",price:165,description:""},
  {category:"Плато на грилі",name:"Креветки тигрові",weight:"5 шт",price:350,description:""},
  {category:"Плато на грилі",name:"Восьминіг",weight:"100 г",price:810,description:""},
  {category:"Плато на грилі",name:"Бебі восьминіг",weight:"100 г",price:220,description:""},

  // КАРІ
  {category:"Карі",name:"Червоне карі з лососем",weight:"380 г",price:545,description:"З овочами та пареним рисом."},
  {category:"Карі",name:"Червоне карі з куркою",weight:"400 г",price:470,description:"З овочами та пареним рисом."},

  // WOK MENU
  {category:"WOK MENU",name:"Овочі WOK",weight:"200 г",price:410,description:""},
  {category:"WOK MENU",name:"Смажений рис у малазійському стилі",weight:"300 г",price:395,description:""},
  {category:"WOK MENU",name:"Смажений рис з овочами",weight:"230 г",price:290,description:""},
  {category:"WOK MENU",name:"Смажений рис з телятиною",weight:"310 г",price:435,description:""},
  {category:"WOK MENU",name:"Локшина удон з овочами",weight:"340 г",price:395,description:""},
  {category:"WOK MENU",name:"Локшина рамен з телятиною",weight:"310 г",price:490,description:""},
  {category:"WOK MENU",name:"Локшина рамен з білими грибами та гребінцем",weight:"250 г",price:570,description:""},
  {category:"WOK MENU",name:"Локшина скляна «По-сінгапурськи» з качкою",weight:"300 г",price:490,description:""},
  {category:"WOK MENU",name:"Локшина скляна «По-сінгапурськи» з креветкою та куркою",weight:"300 г",price:490,description:""},
  {category:"WOK MENU",name:"Локшина соба «По-сінгапурськи»",weight:"300 г",price:450,description:"З овочами, куркою та креветкою."},
  {category:"WOK MENU",name:"Морепродукти з овочами та пареним рисом",weight:"300 г",price:530,description:""},

  // ГАРНІРИ
  {category:"Гарніри",name:"Рис на пару",weight:"130 г",price:85,description:""},
  {category:"Гарніри",name:"Картопляне пюре",weight:"250 г",price:170,description:""},
  {category:"Гарніри",name:"Картопля фрі",weight:"120/50 г",price:160,description:""},
  {category:"Гарніри",name:"Рамен з маслом",weight:"100 г",price:150,description:""},
  {category:"Гарніри",name:"Молода запечена картопля",weight:"100 г",price:180,description:""},

  // СЕТИ
  {category:"Сети",name:"Сет «Гранд»",weight:"1165 г",price:1880,description:"Рол Філадельфія Де Люкс, рол Філадельфія з тунцем, рол максі Чорний дракон, рол Філадельфія з лососем та креветкою."},
  {category:"Сети",name:"Фірмовий сет «TAU»",weight:"740 г",price:1330,description:"Рол фірмовий «TAU», рол в стилі «ТАІ», рол «Самурай» з грейпфрутом."},
  {category:"Сети",name:"Сет «Чотири дракони»",weight:"900 г",price:1890,description:"Рол «Червоний дракон», рол «Чорний дракон», рол «Зелений дракон», рол «Золотий дракон»."},
  {category:"Сети",name:"Сет «Де Люкс»",weight:"880 г",price:1850,description:"Рол «Зелений дракон Де Люкс», рол «Філадельфія Де Люкс», рол «Норіто», рол «Темпура з вугрем»."},
  {category:"Сети",name:"Сет «Філадельфія»",weight:"935 г",price:1690,description:"Філадельфія, Філадельфія «Преміум», рол в «ТАІ» стилі, рол «Креветки Темпура»."},
  {category:"Сети",name:"Сет «Преміум»",weight:"1410 г",price:2350,description:"Максі рол з лососем та сніжним крабом, рол фірмовий ТАУ, рол фірмовий з манго, рол Філадельфія Де Люкс, рол Каліфорнія з лососем в ікрі."},

  // СУШІ
  {category:"Суші",name:"Суші «Магуро»",weight:"20/20 г",price:110,description:""},
  {category:"Суші",name:"Суші «Унагі»",weight:"20/20 г",price:160,description:""},
  {category:"Суші",name:"Суші «Сяке»",weight:"20/20 г",price:120,description:""},
  {category:"Суші",name:"Суші «Хотате»",weight:"20/20 г",price:150,description:""},
  {category:"Суші",name:"Суші «Ебі»",weight:"20/20 г",price:110,description:""},
  {category:"Суші",name:"Суші з вугрем та авокадо",weight:"20/20 г",price:120,description:""},
  {category:"Суші",name:"Суші з лососем, авокадо та ікрою",weight:"20/20 г",price:150,description:""},

  // ГУНКАНИ
  {category:"Гункани",name:"Гункан «Магуро»",weight:"20/20 г",price:130,description:""},
  {category:"Гункани",name:"Гункан «Унагі»",weight:"20/20 г",price:140,description:""},
  {category:"Гункани",name:"Гункан «Сяке»",weight:"20/20 г",price:130,description:""},
  {category:"Гункани",name:"Гункан «Хотате»",weight:"20/20 г",price:160,description:""},
  {category:"Гункани",name:"Гункан «Ебі»",weight:"20/20 г",price:140,description:""},
  {category:"Гункани",name:"Гункан з лососем та ікрою",weight:"20/20 г",price:190,description:""},
  {category:"Гункани",name:"Гункан з ікрою",weight:"20/20 г",price:170,description:""},

  // МАКІ
  {category:"Макі",name:"Макі «Магуро»",weight:"100 г",price:220,description:""},
  {category:"Макі",name:"Макі «Унагі»",weight:"100 г",price:280,description:""},
  {category:"Макі",name:"Макі «Сяке»",weight:"100 г",price:220,description:""},
  {category:"Макі",name:"Макі «Ебі»",weight:"100 г",price:220,description:""},
  {category:"Макі",name:"Макі «Каппа»",weight:"100 г",price:190,description:""},
  {category:"Макі",name:"Макі «Авокадо»",weight:"100 г",price:180,description:""},

  // РОЛИ
  {category:"Роли",name:"Рол Такумі",weight:"260 г",price:565,description:"З міксом риби та червоною ікрою, без рису."},
  {category:"Роли",name:"Рол фірмовий «TAU»",weight:"250 г",price:530,description:""},
  {category:"Роли",name:"Рол в «ТАІ» стилі",weight:"240 г",price:475,description:""},
  {category:"Роли",name:"Рол «Самурай»",weight:"250 г",price:460,description:"З грейпфрутом."},
  {category:"Роли",name:"Рол MIXfish",weight:"310 г",price:450,description:""},
  {category:"Роли",name:"Рол фірмовий з манго",weight:"370 г",price:550,description:""},
  {category:"Роли",name:"Махі манго",weight:"350 г",price:510,description:""},
  {category:"Роли",name:"Махі Каліфорнія з креветкою",weight:"245 г",price:465,description:""},
  {category:"Роли",name:"Каліфорнія з лососем в ікрі",weight:"200 г",price:430,description:""},
  {category:"Роли",name:"Каліфорнія з креветкою в ікрі",weight:"240 г",price:450,description:""},
  {category:"Роли",name:"Філадельфія з креветкою та лососем",weight:"310 г",price:470,description:""},
  {category:"Роли",name:"Філадельфія з тунцем",weight:"295 г",price:440,description:""},
  {category:"Роли",name:"Філадельфія",weight:"235 г",price:480,description:""},
  {category:"Роли",name:"Філадельфія «Де Люкс»",weight:"240 г",price:595,description:""},
  {category:"Роли",name:"Філадельфія «Преміум»",weight:"180 г",price:495,description:""},
  {category:"Роли",name:"Філадельфія «Гравлакс»",weight:"300 г",price:480,description:""},
  {category:"Роли",name:"Махі рол з лососем та сніжним крабом",weight:"350 г",price:490,description:""},
  {category:"Роли",name:"Махі Чорний дракон",weight:"320 г",price:570,description:""},
  {category:"Роли",name:"Чорний дракон",weight:"215 г",price:550,description:""},
  {category:"Роли",name:"Червоний дракон",weight:"240 г",price:520,description:""},
  {category:"Роли",name:"Зелений дракон",weight:"205 г",price:395,description:""},
  {category:"Роли",name:"Зелений дракон «Де Люкс»",weight:"240 г",price:480,description:""},
  {category:"Роли",name:"Золотий дракон",weight:"240 г",price:590,description:""},
  {category:"Роли",name:"Рол Хотате",weight:"415 г",price:780,description:""},
  {category:"Роли",name:"Спайсі-рол із лососем",weight:"300 г",price:530,description:""},

  // ТЕПЛІ РОЛИ
  {category:"Теплі роли",name:"Рол Норіто",weight:"150 г",price:550,description:""},
  {category:"Теплі роли",name:"Рол Норіто Фьюжен",weight:"260 г",price:530,description:""},
  {category:"Теплі роли",name:"Рол «Креветки Темпура»",weight:"280 г",price:420,description:""},
  {category:"Теплі роли",name:"Рол «Темпура»",weight:"230 г",price:420,description:""},
  {category:"Теплі роли",name:"Рол «Темпура з вугрем»",weight:"250 г",price:420,description:""},
  {category:"Теплі роли",name:"Рол «Темпура Хіяші»",weight:"250 г",price:585,description:"З креветкою, лососем та горіховим соусом, без рису."},
  {category:"Теплі роли",name:"Хот рол з лососем, авокадо та соусом унагі",weight:"280 г",price:410,description:""},

  // САШИМІ
  {category:"Сашимі",name:"Сашимі «Магуро»",weight:"70 г",price:365,description:""},
  {category:"Сашимі",name:"Сашимі «Унагі»",weight:"60 г",price:390,description:""},
  {category:"Сашимі",name:"Сашимі «Сяке»",weight:"75 г",price:345,description:""},
  {category:"Сашимі",name:"Сашимі «Ебі»",weight:"5 шт",price:320,description:""},
  {category:"Сашимі",name:"Сашимі «Мікс»",weight:"130 г",price:515,description:""},

  // ДЕСЕРТИ
  {category:"Десерти",name:"Крем-брюле",weight:"100 г",price:290,description:""},
  {category:"Десерти",name:"Тірамісу",weight:"100 г",price:130,description:""},
  {category:"Десерти",name:"Шоколадний фондан",weight:"1 шт",price:395,description:""},
  {category:"Десерти",name:"Чізкейк «TAU»",weight:"1 шт",price:290,description:""},
  {category:"Десерти",name:"Сорбет з морозивом та свіжими ягодами",weight:"260 г",price:340,description:""},
  {category:"Десерти",name:"Чіа пудинг з манго та маракуєю",weight:"250 г",price:390,description:""},
  {category:"Десерти",name:"Морозиво класичне біле",weight:"100 г",price:97,description:""}
];

const breakfast = [
  {name:'Тост з консервованим тунцем та шафрановим соусом',weight:'330 г',price:295,description:'Хліб «бріош», обсмажений на маслі гхі, консервований тунець, мікс салату, шафрановий соус.'},
  {name:'Кокосова вівсянка з сезонними ягодами',weight:'290 г',price:280,description:'Вівсянка, ванільний крем з маком, сезонні ягоди, насіння чіа, кокосове молоко.'},
  {name:'Сирники з ванільним кремом та маком',weight:'350 г',price:285,description:'Ванільний крем, сезонні ягоди, мак, сметана, м’ята, м’ятне масло.'},
  {name:'Чіа з кокосовим молоком, фруктами, горіхами та ягодами',weight:'270 г',price:255,description:''},
  {name:'Френч тост із сиром «бурата» та полуницею на хлібі бріош',weight:'',price:285,description:'Сезонна страва. Хліб бріош, обсмажений на маслі гхі, полуниця, малиновий мус, м’ята.'},
  {name:'Тост скрембл із запеченою картоплею та беконом',weight:'370 г',price:250,description:'Хліб бездріжджовий, запечена картопля, бекон, цибуля конфі, пармезан.',addons:[['Лосось','50 г',135],['Куряче стегно','50 г',70]]},
  {name:'Тост з лососем, сиром «бурата», авокадо та шпинатним соусом',weight:'320 г',price:450,description:'Хліб бріош, обсмажений на маслі гхі, маринований лосось, авокадо, сир «бурата».'},
  {name:'Вівсянка з грибами та соусом песто',weight:'310 г',price:370,description:'Вівсяна каша, яйце куряче, бекон, соус песто, печериці, гливи.'},
  {name:'Оладки з цукіні та шпинатним соусом',weight:'320 г',price:260,description:'Перець болгарський запечений, мікс салату, сметана.',addons:[['Лосось','50 г',135],['Куряче стегно','50 г',70]]},
  {name:'Картопляні деруни з шпинатним соусом',weight:'320 г',price:260,description:'Перець болгарський запечений, мікс салату, сметана.',addons:[['Лосось','50 г',135],['Куряче стегно','50 г',70]]},
  {name:'Запечений лосось з рисом та яйцями пашот',weight:'385 г',price:450,description:''},
  {name:'Шакшука зелена з креветками у вершковому соусі з сиром пармезан',weight:'',price:350,description:''},
  {name:'Шакшука з фаршем з телятини, сиром «Чеддер» та томатами',weight:'',price:310,description:''},
  {name:'Великий сніданок з мюнхенськими ковбасками',weight:'440 г',price:390,description:'Яйця курячі, сир «Чеддер», мюнхенські ковбаски, бекон, мікс салату, картопля запечена, грінки.'},
  {name:'Скрембл з овочевим міксом та філе апельсина',weight:'220 г',price:230,description:'Яйця курячі, мікс салату, вершки.',addons:[['Лосось','50 г',135],['Куряче стегно','50 г',70],['Скрембл','',60],['Хліб бріош','1 шт',30],['Яйце куряче','1 шт',19]]}
];

const groups = document.querySelector('#menu-groups');
const nav = document.querySelector('#category-nav');

/* ЗАКРІПЛЕНА НАВІГАЦІЯ КАТЕГОРІЙ */

const stickyCategoryStyles = document.createElement('style');

stickyCategoryStyles.textContent = `
  .subcategory-nav {
    position: sticky !important;
    top: 0 !important;
    z-index: 500 !important;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    background: rgba(8, 7, 6, .97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    scrollbar-width: none;
    transition: box-shadow .25s ease;
  }

  .subcategory-nav::-webkit-scrollbar {
    display: none;
  }

  .subcategory-nav button {
    flex-shrink: 0;
    white-space: nowrap;
    transition: padding .25s ease, font-size .25s ease;
  }

  .subcategory-nav.compact {
    box-shadow: 0 8px 20px rgba(0,0,0,.35);
  }

  .subcategory-nav.compact button {
    padding-top: 7px !important;
    padding-bottom: 7px !important;
    font-size: 11px !important;
  }

  .menu-category {
    scroll-margin-top: 115px;
  }

  @media(max-width:600px) {
    .subcategory-nav {
      top: 0 !important;
      gap: 6px;
    }

    .subcategory-nav button {
      font-size: 12px;
      padding: 9px 12px;
    }

    .subcategory-nav.compact button {
      padding: 6px 9px !important;
      font-size: 10px !important;
    }

    .menu-category {
      scroll-margin-top: 95px;
    }
  }
`;

document.head.appendChild(stickyCategoryStyles);

function updateSubcategoryNav() {
  const stickyNav = document.querySelector('#sticky-subcategory-nav');

  if (!stickyNav) return;

  stickyNav.classList.toggle('compact', window.scrollY > 180);
}

window.addEventListener('scroll', updateSubcategoryNav, {
  passive: true
});

let activeSection = 'breakfast';
let cart = [];

function slug(s) {
  return s.toLowerCase()
    .replaceAll(' ','-')
    .replaceAll('’','')
    .replaceAll('і','i');
}

function productCard(p,i,isBreakfast=false) {
  return `<article class="product">
    <div class="product-photo"><div class="photo-placeholder">TAU</div></div>
    <div class="product-info">
      <h4>${p.name}</h4>
      ${p.weight?`<div class="meta">${p.weight}</div>`:''}
      ${p.description?`<p class="description">${p.description}</p>`:''}
      <div class="product-foot">
        <strong class="price">${p.price} ₴</strong>
        <button class="add-btn" data-add="${isBreakfast?'b':'m'}-${i}" aria-label="Додати до кошика">
          <span class="tau-arrow" aria-hidden="true"></span>
        </button>
      </div>
      ${p.addons?`<div class="addons"><span>Додатки:</span>${p.addons.map((a,j)=>`<button class="addon-btn" data-addon="${isBreakfast?'b':'m'}-${i}-${j}">${a[0]}${a[1]?' · '+a[1]:''} — ${a[2]} ₴ <b>+</b></button>`).join('')}</div>`:''}
    </div>
  </article>`;
}

/* КАТЕГОРІЇ БЕЗ ЗНАЧКІВ */

function renderMenu() {
  nav.innerHTML = `
    <button class="category-main active" data-section="breakfast">Сніданки</button>
    <button class="category-main" data-section="main">Основне меню</button>
    <button class="category-main" data-section="bar">Бар</button>`;
  renderSection();
}

function renderSection() {
  document.querySelectorAll('.category-main').forEach(b => {
    b.classList.toggle('active',b.dataset.section===activeSection);
  });

  if(activeSection==='breakfast') {
    groups.innerHTML = `
      <section class="menu-category breakfast-category">
        <div class="breakfast-note">
          <span class="eyebrow">TAU · BREAKFAST</span>
          <h3>Сніданки</h3>
          <p class="breakfast-hours">Щодня з 10:00 до 14:00</p>
          <p>До кожного сніданку подаємо сік на вибір: апельсиновий або яблучний.</p>
        </div>
        <div class="products">${breakfast.map((p,i)=>productCard(p,i,true)).join('')}</div>
      </section>`;
  } else if(activeSection==='main') {
    groups.innerHTML = `
      <nav class="subcategory-nav" id="sticky-subcategory-nav">
        ${mainCategories.map(c=>`<button data-subcategory="${slug(c)}">${c}</button>`).join('')}
      </nav>
      <div class="main-menu-groups">
        ${mainCategories.map(c=>{
          const items=mainMenu.filter(p=>p.category===c);
          return `<section class="menu-category" id="sub-${slug(c)}">
            <div class="category-title"><h3>${c}</h3></div>
            ${items.length?`<div class="products">${items.map(p=>productCard(p,mainMenu.indexOf(p))).join('')}</div>`:`<p class="muted empty-category">Позиції цього розділу додамо окремо.</p>`}
          </section>`;
        }).join('')}
      </div>`;

    // Оновлюємо закріплену панель одразу після її створення
    requestAnimationFrame(updateSubcategoryNav);
  } else {
    groups.innerHTML = `
      <section class="menu-category bar-placeholder">
        <span class="eyebrow">TAU · BAR</span>
        <h3>Бар</h3>
        <p class="muted">Барну карту додамо наступним етапом.</p>
      </section>`;
  }
}

nav.addEventListener('click',e=>{
  const b=e.target.closest('[data-section]');
  if(!b)return;
  activeSection=b.dataset.section;
  renderSection();
});

/* ПЛАВНА ПРОКРУТКА МІЖ КАТЕГОРІЯМИ */

let categoryScrollFrame = null;

function smoothCategoryScroll(target) {
  if (!target) return;

  if (categoryScrollFrame !== null) {
    cancelAnimationFrame(categoryScrollFrame);
    categoryScrollFrame = null;
  }

  const startY = window.scrollY;

  // Різний відступ для телефону та комп'ютера
  const offset = window.innerWidth <= 600 ? 100 : 115;

  const targetY = Math.max(
    0,
    target.getBoundingClientRect().top + startY - offset
  );

  const distance = targetY - startY;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, targetY);
    return;
  }

  const duration = 1200;
  let startTime = null;

  function animateScroll(timestamp) {
    if (startTime === null) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);

    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      categoryScrollFrame = requestAnimationFrame(animateScroll);
    } else {
      categoryScrollFrame = null;
    }
  }

  categoryScrollFrame = requestAnimationFrame(animateScroll);
}

groups.addEventListener('click',e=>{
  const add=e.target.closest('[data-add]');
  if(add) {
    const [type,index]=add.dataset.add.split('-');
    const p=type==='b'?breakfast[+index]:mainMenu[+index];
    cart.push({name:p.name,price:p.price});
    renderCart();
    toast('Додано до кошика');
    return;
  }

  const addon=e.target.closest('[data-addon]');
  if(addon) {
    const [type,index,j]=addon.dataset.addon.split('-');
    const p=type==='b'?breakfast[+index]:mainMenu[+index];
    const a=p.addons[+j];
    cart.push({
      name:`${a[0]}${a[1]?' '+a[1]:''} — до страви «${p.name}»`,
      price:a[2]
    });
    renderCart();
    toast('Додаток додано до кошика');
    return;
  }

  const sub=e.target.closest('[data-subcategory]');
  if(sub) {
    const target=document.querySelector('#sub-'+sub.dataset.subcategory);
    smoothCategoryScroll(target);
  }
});

/* КОШИК */

function renderCart() {
  document.querySelector('#cart-count').textContent=cart.length;

  document.querySelector('#cart-items').innerHTML=cart.length
    ?cart.map((p,i)=>`
      <div class="cart-row">
        <span>${p.name}<br><b>${p.price} ₴</b></span>
        <button data-remove="${i}">×</button>
      </div>`).join('')
    :'<p class="muted">Кошик поки порожній</p>';

  document.querySelector('#cart-total').textContent=
    cart.reduce((s,p)=>s+p.price,0)+' ₴';
}

document.querySelector('#cart-items').addEventListener('click',e=>{
  const b=e.target.closest('[data-remove]');
  if(b) {
    cart.splice(+b.dataset.remove,1);
    renderCart();
  }
});

const panel=document.querySelector('#cart-panel');
const scrim=document.querySelector('#scrim');

function openCart() {
  panel.classList.add('open');
  scrim.classList.add('show');
}

function closeCart() {
  panel.classList.remove('open');
  scrim.classList.remove('show');
}

document.querySelector('#cart-open').onclick=openCart;
document.querySelector('#cart-close').onclick=closeCart;
scrim.onclick=closeCart;

/* ОФОРМЛЕННЯ ЗАМОВЛЕННЯ */

const checkoutStyles = document.createElement('style');

checkoutStyles.textContent = `
.checkout-overlay {
  position:fixed;
  inset:0;
  z-index:3000;
  display:none;
  align-items:center;
  justify-content:center;
  padding:16px;
  background:rgba(0,0,0,.78);
  backdrop-filter:blur(8px);
}
.checkout-overlay.open {display:flex}
.checkout-modal {
  width:100%;
  max-width:540px;
  max-height:90vh;
  overflow-y:auto;
  padding:28px;
  background:#11100e;
  border:1px solid rgba(197,163,106,.4);
  color:#eee4d4;
  box-shadow:0 20px 70px rgba(0,0,0,.7);
  position:relative;
}
.checkout-modal h2 {
  font-family:"Cormorant Garamond",serif;
  font-size:34px;
  font-weight:500;
  margin:8px 0 20px;
}
.checkout-close {
  position:absolute;
  right:18px;
  top:15px;
  color:#d9bd89;
  background:none;
  border:0;
  font-size:30px;
  cursor:pointer;
}
.checkout-label {
  display:block;
  margin:18px 0 9px;
  color:#c5a36a;
  font-size:11px;
  letter-spacing:2px;
  text-transform:uppercase;
}
.checkout-options {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.checkout-option {
  display:flex;
  align-items:center;
  gap:9px;
  padding:14px 12px;
  border:1px solid rgba(197,163,106,.3);
  color:#eee4d4;
  font-family:Manrope,sans-serif;
  font-size:13px;
  cursor:pointer;
}
.checkout-option:has(input:checked) {
  border-color:#c5a36a;
  background:rgba(197,163,106,.1);
}
.checkout-option input {accent-color:#c5a36a}
.checkout-fields {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}
.checkout-field.full {grid-column:1/-1}
.checkout-field label {
  display:block;
  margin:12px 0 6px;
  color:#c9b99e;
  font-size:12px;
}
.checkout-field input,
.checkout-field textarea {
  width:100%;
  box-sizing:border-box;
  padding:12px;
  background:#090807;
  border:1px solid rgba(197,163,106,.25);
  color:#fff;
  font:14px Manrope,sans-serif;
  outline:none;
}
.checkout-field input:focus,
.checkout-field textarea:focus {
  border-color:#c5a36a;
}
.checkout-field textarea {
  min-height:75px;
  resize:vertical;
}
.checkout-total {
  display:flex;
  justify-content:space-between;
  margin:22px 0;
  padding-top:17px;
  border-top:1px solid rgba(197,163,106,.25);
  font-size:16px;
}
.checkout-submit {
  width:100%;
  padding:16px;
  background:#c5a36a;
  color:#100e0b;
  border:0;
  font:600 12px Manrope,sans-serif;
  letter-spacing:1.5px;
  text-transform:uppercase;
  cursor:pointer;
}
.checkout-note {
  color:#a99c88;
  font-size:11px;
  line-height:1.6;
  margin-top:12px;
}
@media(max-width:480px) {
  .checkout-modal {padding:22px 17px}
  .checkout-fields {grid-template-columns:1fr}
  .checkout-field.full {grid-column:auto}
  .checkout-modal h2 {font-size:29px}
  .checkout-option {font-size:11px;padding:12px 8px}
}
`;

document.head.appendChild(checkoutStyles);

const checkoutOverlay=document.createElement('div');
checkoutOverlay.className='checkout-overlay';
checkoutOverlay.id='checkout-overlay';

checkoutOverlay.innerHTML=`
  <div class="checkout-modal">
    <button class="checkout-close" type="button" aria-label="Закрити">×</button>

    <span class="eyebrow">TAU · POLTAVA</span>
    <h2>Оформлення замовлення</h2>

    <form id="checkout-form">

      <span class="checkout-label">Спосіб отримання</span>

      <div class="checkout-options">
        <label class="checkout-option">
          <input type="radio" name="orderType" value="Доставка" checked>
          Доставка
        </label>
        <label class="checkout-option">
          <input type="radio" name="orderType" value="Самовивіз">
          Самовивіз
        </label>
      </div>

      <div class="checkout-fields">
        <div class="checkout-field">
          <label>Ваше ім'я *</label>
          <input name="name" required placeholder="Ім’я">
        </div>

        <div class="checkout-field">
          <label>Телефон *</label>
          <input name="phone" type="tel" required placeholder="+380">
        </div>
      </div>

      <div id="delivery-fields">
        <span class="checkout-label">Адреса доставки</span>

        <div class="checkout-fields">
          <div class="checkout-field full">
            <label>Вулиця *</label>
            <input name="street" placeholder="Назва вулиці">
          </div>

          <div class="checkout-field">
            <label>Будинок *</label>
            <input name="house" placeholder="Номер будинку">
          </div>

          <div class="checkout-field">
            <label>Квартира</label>
            <input name="apartment" placeholder="Номер квартири">
          </div>

          <div class="checkout-field">
            <label>Під'їзд</label>
            <input name="entrance" placeholder="Під'їзд">
          </div>

          <div class="checkout-field">
            <label>Поверх</label>
            <input name="floor" placeholder="Поверх">
          </div>

          <div class="checkout-field full">
            <label>Домофон</label>
            <input name="intercom" placeholder="Код домофона">
          </div>
        </div>
      </div>

      <div class="checkout-field full">
        <label>Коментар до замовлення</label>
        <textarea name="comment" placeholder="Побажання до замовлення..."></textarea>
      </div>

      <span class="checkout-label">Спосіб оплати</span>

      <div class="checkout-options">
        <label class="checkout-option">
          <input type="radio" name="payment" value="Онлайн" checked>
          Онлайн
        </label>

        <label class="checkout-option">
          <input type="radio" name="payment" value="Карткою при отриманні">
          Карткою при отриманні
        </label>
      </div>

      <div class="checkout-total">
        <span>До сплати</span>
        <strong id="checkout-total">0 ₴</strong>
      </div>

      <button class="checkout-submit" type="submit">
        Підтвердити замовлення
      </button>

      <p class="checkout-note">
        Після підтвердження замовлення відкриється WhatsApp для надсилання
        інформації ресторану. Онлайн-оплата потребує окремого підключення
        платіжної системи.
      </p>

    </form>
  </div>
`;

document.body.appendChild(checkoutOverlay);

const checkoutForm=document.querySelector('#checkout-form');
const deliveryFields=document.querySelector('#delivery-fields');

function updateCheckout() {
  document.querySelector('#checkout-total').textContent=
    cart.reduce((sum,p)=>sum+p.price,0)+' ₴';
}

function updateOrderType() {
  const type=checkoutForm.querySelector('[name="orderType"]:checked').value;
  const isDelivery=type==='Доставка';

  deliveryFields.style.display=isDelivery?'block':'none';

  ['street','house'].forEach(name=>{
    checkoutForm.elements[name].required=isDelivery;
  });
}

checkoutForm.addEventListener('change',e=>{
  if(e.target.name==='orderType') updateOrderType();
});

function openCheckout() {
  if(!cart.length) {
    toast('Спочатку додайте страви до кошика');
    return;
  }

  updateCheckout();
  updateOrderType();
  closeCart();
  checkoutOverlay.classList.add('open');
}

function closeCheckout() {
  checkoutOverlay.classList.remove('open');
}

document.querySelector('#checkout').onclick=openCheckout;
checkoutOverlay.querySelector('.checkout-close').onclick=closeCheckout;

checkoutOverlay.addEventListener('click',e=>{
  if(e.target===checkoutOverlay) closeCheckout();
});

checkoutForm.addEventListener('submit',e=>{
  e.preventDefault();

  if(!cart.length) {
    toast('Кошик порожній');
    closeCheckout();
    return;
  }

  const data=new FormData(checkoutForm);
  const orderType=data.get('orderType');
  const payment=data.get('payment');

  let message='НОВЕ ЗАМОВЛЕННЯ — TAU POLTAVA\n\n';

  message+='СПОСІБ ОТРИМАННЯ: '+orderType+'\n';
  message+='ІМ’Я: '+data.get('name')+'\n';
  message+='ТЕЛЕФОН: '+data.get('phone')+'\n';

  if(orderType==='Доставка') {
    message+='\nАДРЕСА ДОСТАВКИ:\n';
    message+='Вулиця: '+data.get('street')+'\n';
    message+='Будинок: '+data.get('house')+'\n';
    message+='Квартира: '+(data.get('apartment')||'Не вказано')+'\n';
    message+='Під’їзд: '+(data.get('entrance')||'Не вказано')+'\n';
    message+='Поверх: '+(data.get('floor')||'Не вказано')+'\n';
    message+='Домофон: '+(data.get('intercom')||'Не вказано')+'\n';
  }

  message+='\nЗАМОВЛЕННЯ:\n';

  cart.forEach((p,i)=>{
    message+=(i+1)+'. '+p.name+' — '+p.price+' ₴\n';
  });

  const total=cart.reduce((sum,p)=>sum+p.price,0);

  message+='\nРАЗОМ: '+total+' ₴\n';
  message+='ОПЛАТА: '+payment+'\n';

  if(data.get('comment')) {
    message+='\nКОМЕНТАР: '+data.get('comment')+'\n';
  }

  message+='\nОчікуємо підтвердження замовлення.';

  const whatsappUrl=
    'https://wa.me/380993587888?text='+encodeURIComponent(message);

  window.open(whatsappUrl,'_blank');

  closeCheckout();
  toast('Замовлення підготовлено для WhatsApp');
});

/* ПОВІДОМЛЕННЯ */

function toast(t) {
  const el=document.querySelector('#toast');
  el.textContent=t;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

/* ЗАПУСК */

renderMenu();
renderCart();
updateSubcategoryNav();

/* TAU — УМЕНЬШЕНИЕ ТРЁХ ПОЛОСОК ПРИ ПРОКРУТКЕ */

(() => {
  const menuButton = document.querySelector('#menu-toggle');

  if (!menuButton) return;

  function updateMenuButton() {
    menuButton.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', updateMenuButton, { passive: true });

  updateMenuButton();
})();
/* =========================================
   TAU — НОРМАЛЬНАЯ ФИКСАЦИЯ НАВИГАЦИИ
========================================= */

(() => {
  const style = document.createElement('style');

  style.textContent = `
    #category-nav {
      position: sticky !important;
      top: 0 !important;
      z-index: 1000 !important;
      background: #080706 !important;
      isolation: isolate;
    }

    #sticky-subcategory-nav {
      position: sticky !important;
      top: var(--tau-main-nav-height, 60px) !important;
      z-index: 999 !important;
      background: #080706 !important;
      display: flex !important;
      flex-wrap: nowrap !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }

    #sticky-subcategory-nav::-webkit-scrollbar {
      display: none;
    }

    #sticky-subcategory-nav button {
      flex-shrink: 0;
      white-space: nowrap;
    }
  `;

  document.head.appendChild(style);

  function setNavigationHeight() {
    const nav = document.querySelector('#category-nav');

    if (nav) {
      document.documentElement.style.setProperty(
        '--tau-main-nav-height',
        nav.offsetHeight + 'px'
      );
    }
  }

  window.addEventListener('resize', setNavigationHeight);
  window.addEventListener('load', setNavigationHeight);

  setNavigationHeight();
  setTimeout(setNavigationHeight, 300);
})();