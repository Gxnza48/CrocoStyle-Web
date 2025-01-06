import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  availableSizes: string[];
  features?: string[];
  additionalImages?: string[];
}

export const products: Product[] = [
  {
    id: uuidv4(),
    name: "Gorra Nike Azul Marino",
    brand: "Nike",
    category: "gorras",
    price: 45000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FGorras%2FIMG_3830.jpg?alt=media&token=33e8060c-702e-45ce-b590-911949c075a9",
    description: "Gorra clasica de visera plana marca nike",
    availableSizes: ["Unico"],
    features: [
      "Gran Diseño",
      "Prenda a Estrenar",
      "Regulable"
    ]
  },
  {
    id: uuidv4(),
    name: "Remera Nike Beige",
    brand: "Nike",
    category: "remeras",
    price: 45000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3715.jpg?alt=media&token=2715f781-2b0e-49cc-8cc4-339b55310e30",
    description: "Remera clasica nike diseño retro beige",
    availableSizes: ["XL"],
    features: [
      "Gran diseño de Nike",
      "Prenda a estrenar"
    ],
    additionalImages: [
      "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3716.jpg?alt=media&token=3014106c-92c2-44cd-b61d-63ee4c73a83e",
    ]
  },
  {
    id: uuidv4(),
    name: "Pantalon Dickies",
    brand: "Dickies",
    category: "pantalones",
    price: 25000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3851.jpg?alt=media&token=6c0a4ce7-a497-44af-84f4-924eb96b20dc",
    description: "Pantalón de vestir Dickies",
    availableSizes: ["40 arg"],
    features: [
      "Pantalon Dickies" 
    ],
    additionalImages: [
      "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3852.jpg?alt=media&token=27858a96-c7c4-45e1-b08a-d9be01c12358",
    ]
  },
  {
    id: uuidv4(),
    name: "Chomba Elixir",
    brand: "Elixir",
    category: "chombas",
    price: 40000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3701.jpg?alt=media&token=69b5dd3e-4574-4114-9681-413b31d68f8b",
    description: "Chomba negra diseño  en blanco",
    availableSizes: ["XL"],
    features: [
      "Diseño exotico",
    ],
    additionalImages: [
      "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3702.jpg?alt=media&token=9294d7d3-8901-4972-b020-32703aa0e8f3",
    ]
  },
  {
    id: uuidv4(),
    name: "Short Hilfiger Celeste cielo",
    brand: "Thommy Hilfiger",
    category: "shorts",
    price: 25000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_2939.jpg?alt=media&token=8da217fb-a51d-4cda-b369-8b981d4caee0",
    description: "Tremendo short para uso diario y pileta",
    availableSizes: ["M"],
    features: [
      "Tiene una quemadura en parte trasera",
    ],
    additionalImages: [
      "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_2940.jpg?alt=media&token=a19b0b89-e344-47ce-b9ea-7928bdb4209d",
    ]
  },
  {
    id: uuidv4(),
    name: "Short Nautica",
    brand: "Nautica",
    category: "shorts",
    price: 30000,
    image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_2942.jpg?alt=media&token=b45d5a34-64de-43ad-9bb8-b6603688b621",
    description: "Tremendo short para uso diario y pileta",
    availableSizes: ["M"],
    features: [
      "Diseño muy raro de ver",
    ],
    additionalImages: [
      "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_2943.jpg?alt=media&token=7cb3035b-8d0f-4ee3-82ce-39948ff712e9",
    ]
  },
{
  id: uuidv4(),
  name: "Short Off White",
  brand: "Off White",
  category: "shorts",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_3842.jpg?alt=media&token=44d12233-1574-4e73-8bc7-dcc9c9df7d17",
  description: "Tremendo short para uso diario y pileta",
  availableSizes: ["M"],
  features: [
    "Diseño muy raro de ver",
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FShorts%2FIMG_3843.jpg?alt=media&token=feda9553-5fe8-419f-a380-534602a9f37a",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Lacoste",
  brand: "Lacoste",
  category: "chombas",
  price: 27000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3703.jpg?alt=media&token=75c20c46-21ee-4c3d-950e-938072e882f3",
  description: "Hermosa chomba",
  availableSizes: ["M"],
  features: [
    "Chomba Formal",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3704.jpg?alt=media&token=632e3213-9a7f-4e78-9ade-1d33dafd4a08",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Play CDG",
  brand: "Comme des Gorcons",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3706.jpg?alt=media&token=8790a8ef-e8c6-4e3f-bcc1-e8b31d309ff9",
  description: "Hermosa chomba",
  availableSizes: ["M"],
  features: [
    "Chomba Formal",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3707.jpg?alt=media&token=9a609fbe-2fa9-496b-99f0-5a035b3c2612",
  ]
},

{
  id: uuidv4(),
  name: "Chomba Stone Island",
  brand: "Stone Island",
  category: "chombas",
  price: 43000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3713.jpg?alt=media&token=74f7c7a2-d2a8-4808-99e1-90f4d61a3e48",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba muy bonita",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3714.jpg?alt=media&token=6b98b3b9-1b88-4153-b9d1-ca05ae1e7baa",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo RL",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3726.jpg?alt=media&token=25289fae-a735-4723-a7f3-d19ee38309c5",
  description: "Hermosa chomba",
  availableSizes: ["S"],
  features: [
    "Chomba muy bonita",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3727.jpg?alt=media&token=dd4f3ee7-3f07-426d-9994-8fd8e558529b",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo RL Big Logo",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 35000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3731.jpg?alt=media&token=880c1ae0-a90b-4351-b346-caa4c374a1dc",
  description: "Hermosa chomba",
  availableSizes: ["XL"],
  features: [
    "Chomba muy bonita con un color raro de ver",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3732.jpg?alt=media&token=b4adb6f8-a5aa-4d98-999b-78a9b3e23bb3",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "chombas",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3737.jpg?alt=media&token=ed32bc23-a5df-4c1a-88ef-929c6fdddcf6",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba a lineas",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3738.jpg?alt=media&token=6c60bdac-10b7-4ac5-95e2-25eb883043b5",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Lacoste",
  brand: "Lacoste",
  category: "chombas",
  price: 27000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3744.jpg?alt=media&token=118cf530-e1b9-40f6-a240-017f5231ca31",
  description: "Hermosa chomba",
  availableSizes: ["S"],
  features: [
    "Chomba de color muy llamativo ",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3745.jpg?alt=media&token=687510d4-38d9-46fa-8193-4880335326d0",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Kappa",
  brand: "Kappa",
  category: "chombas",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3751.jpg?alt=media&token=56ce8c4c-93cf-44a9-8982-3d5955bdf07e",
  description: "Hermosa chomba",
  availableSizes: ["M"],
  features: [
    "Chomba de colores neutros ",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3752.jpg?alt=media&token=2729b7c1-8e60-46fe-8de5-a0439b32ab8d",
  ]
},
{
  id: uuidv4(),
  name: "Chomba mangas largas Polo Ralph Lauren",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 37000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3753.jpg?alt=media&token=e0e1f740-fc8d-47b9-9b7b-d50b9106c77a",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba a lineas ",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3754.jpg?alt=media&token=5dc1fa80-b4ea-42db-86b2-45ede43a6138",
  ]
},
{
  id: uuidv4(),
  name: "Chomba mangas largas Polo Ralph Lauren",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3755.jpg?alt=media&token=9c65794f-d784-47bc-b3f9-a09018b08fae",
  description: "Hermosa chomba",
  availableSizes: ["XXL"],
  features: [
    "Chomba hermosa con escudo de polo en el pecho ",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3756.jpg?alt=media&token=7eb00e5b-6c90-4579-b8ca-613e360d3899",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3763.jpg?alt=media&token=38958fbc-8d3c-42f0-bab4-b5e949a5458e",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba hermosa Tricolor",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3764.jpg?alt=media&token=fc37543d-b84e-49ec-980c-25a97e1032bd",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo Ralph Lauren",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 20000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3765.jpg?alt=media&token=6093e8f7-53f5-40dc-ae2c-bba012a7a0b3",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba clasica de Polo",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3766.jpg?alt=media&token=df6881a0-d710-42ec-a6b5-d2c7a43fd882",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Lacoste",
  brand: "Lacoste",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3769.jpg?alt=media&token=7d25b619-4e17-46d2-8f2c-d2e61af741fc",
  description: "Hermosa chomba",
  availableSizes: ["L"],
  features: [
    "Chomba Lacoste France",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3770.jpg?alt=media&token=960a2f00-5e87-42bd-9ce4-6ef6ba39a610",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Lacoste",
  brand: "Lacoste",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3771.jpg?alt=media&token=b0f2007c-c14a-4464-a2b1-e1c60fb806d2",
  description: "Hermosa chomba",
  availableSizes: ["M"],
  features: [
    "Chomba Lacoste France",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3772.jpg?alt=media&token=be3d5959-a6e7-43f1-9eeb-78383fc34c44",
  ]
},
{
  id: uuidv4(),
  name: "Chomba mangas largas Polo Ralph Lauren Big Logo",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 32000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3783.jpg?alt=media&token=fb69d23b-e8a5-42b5-bca1-b260591c557f",
  description: "Hermosa chomba",
  availableSizes: ["XL"],
  features: [
    "Chomba hermosa con big logo en el pecho ",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3784.jpg?alt=media&token=d4be41ce-08cd-4e27-aa39-c0fd57227f35",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Dickies",
  brand: "Dickies",
  category: "chombas",
  price: 28000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3791.jpg?alt=media&token=07b0d093-a1b9-4113-8926-825bfcc2eabd",
  description: "Hermosa chomba",
  availableSizes: ["M"],
  features: [
    "Chomba con logo de la marca en el costado",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3792.jpg?alt=media&token=c005dfd9-f2fc-4612-9631-9dcd6d34568b",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo Ralph Lauren Big Logo",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3799.jpg?alt=media&token=53f8ed95-ead1-45b3-b4e5-06e7262bafa1",
  description: "Hermosa chomba",
  availableSizes: ["S"],
  features: [
    "Chomba con big logo en el costado",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3800.jpg?alt=media&token=0e92a0ab-8ac4-493a-b6c5-9893aa888f67",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Nautica Big Logo",
  brand: "Nautica",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3805.jpg?alt=media&token=74fd2920-2c3c-40dc-8079-40dd8330ca9f",
  description: "Hermosa chomba",
  availableSizes: ["XXL"],
  features: [
    "Chomba con big logo en el costado",

  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2FIMG_3806.jpg?alt=media&token=63c2650a-8dcf-44de-a7c7-545e403fb92b",
  ]
},
{
  id: uuidv4(),
  name: "Gorra Nike Blanca",
  brand: "Nike",
  category: "gorras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FGorras%2FIMG_3831.jpg?alt=media&token=789d7020-a38e-42d2-ad04-36ae709bffe6",
  description: "Gorra clasica de visera  marca nike",
  availableSizes: ["Unico"],
  features: [
    "Gran Diseño",
    "Prenda a Estrenar",
    "Regulable"
  ]
},
{
  id: uuidv4(),
  name: "Gorra Nike verde",
  brand: "Nike",
  category: "gorras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FGorras%2FIMG_3836.jpg?alt=media&token=2d351aa4-5db8-4cec-8977-787322ec604a",
  description: "Gorra clasica de visera  marca nike",
  availableSizes: ["Unico"],
  features: [
    "Gran Diseño",
    "Prenda a Estrenar",
    "Regulable"
  ]
},
{
  id: uuidv4(),
  name: "Gorra Nike verde clara",
  brand: "Nike",
  category: "gorras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FGorras%2FIMG_3838.jpg?alt=media&token=410c1b42-e2f1-4f23-a6ca-bf5d302b4faa",
  description: "Gorra clasica de visera  marca nike",
  availableSizes: ["Unico"],
  features: [
    "Gran Diseño",
    "Prenda a Estrenar",
    "Regulable"
  ]
},
{
  id: uuidv4(),
  name: "Remera Adidas",
  brand: "Adidas",
  category: "remeras",
  price: 35000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3699.jpg?alt=media&token=865248ce-8bc0-4980-80ab-a0d44a9ef554",
  description: "Remera clasica adias con multiples logos",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Adidas",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3700.jpg?alt=media&token=ebd18f6c-ffb7-422a-b1af-0ecc7c48b6d5",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo RL",
  brand: "Polo Ralph Lauren",
  category: "remeras",
  price: 20000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3711.jpg?alt=media&token=4452150c-5463-4db9-87c8-bc62093f494b",
  description: "Remera clasica Polo",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Polo",
    "Prenda con detalles en su etiqueta"
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3712.jpg?alt=media&token=79ad8605-cbff-4c76-a850-3d39facef362",
  ]
},
{
  id: uuidv4(),
  name: "Remera Nike",
  brand: "Nike",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3715.jpg?alt=media&token=2715f781-2b0e-49cc-8cc4-339b55310e30",
  description: "Remera clasica Tommy",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Nike",
    "Prenda a estrenar"
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3716.jpg?alt=media&token=3014106c-92c2-44cd-b61d-63ee4c73a83e",
  ]
},
{
  id: uuidv4(),
  name: "Remera Nike",
  brand: "Nike",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3717.jpg?alt=media&token=481c9110-9e01-4812-9ef2-13dcc5cda40b",
  description: "Remera clasica Tommy",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Nike",
    "Prenda a estrenar"
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3718.jpg?alt=media&token=a0591d05-bf8a-4af4-b2c8-bf1adf1b6cbe",
  ]
},
{
  id: uuidv4(),
  name: "Remera Tommy Jeans",
  brand: "Tommy Jeans",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3723.jpg?alt=media&token=1bfeb70f-f702-475f-8d05-3c4bf0771563",
  description: "Remera clasica Tommy",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Tommy",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3724.jpg?alt=media&token=82fad9c2-f2f2-4b73-aba3-a0528f19b8d6",
  ]
},
{
  id: uuidv4(),
  name: "Remera Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "remeras",
  price: 25000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3729.jpg?alt=media&token=22a74773-b02c-4802-b4ea-028bf58b4d36",
  description: "Remera clasica Tommy",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Tommy",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3730.jpg?alt=media&token=28933c27-2ef2-483c-bbe1-abd5d7ffdbc5",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Bear",
  brand: "Polo Bear",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3739.jpg?alt=media&token=1d42a4af-7e64-4dae-a9a1-dd562e6b393d",
  description: "Remera clasica Polo Bear",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Polo",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3740.jpg?alt=media&token=0d13d259-e19d-4647-a636-710cea264683",
  ]
},
{
  id: uuidv4(),
  name: "Remera Nike",
  brand: "Nike",
  category: "remeras",
  price: 22000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3741.jpg?alt=media&token=979db106-a9b3-4406-905f-0f6d5f9f4fae",
  description: "Remera clasica Nike",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Nike",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3742.jpg?alt=media&token=c8bdd787-b4cd-48e3-b116-b8a763f8a16b",
  ]
},
{
  id: uuidv4(),
  name: "Mangas Largas Polo",
  brand: "Polo Sport",
  category: "remeras",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3749.jpg?alt=media&token=4bde890b-0062-42df-aeea-44d6fff0e750",
  description: "Remera clasica Polo",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Polo",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3750.jpg?alt=media&token=de4772ce-204f-4d60-80ec-bed6b6d6fc97",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Bear",
  brand: "Polo Bear",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3758.jpg?alt=media&token=ae09833c-0694-458c-9bac-11eabf1460fa",
  description: "Remera clasica Polo",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Polo",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3759.jpg?alt=media&token=879cc3c0-0e29-4ea8-9368-f27d5eeef2a2",
  ]
},
{
  id: uuidv4(),
  name: "Remera Patagonia",
  brand: "Patagonia",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3773.jpg?alt=media&token=bc93dd4d-6325-4d50-9723-2dd71cd9368e",
  description: "Remera clasica Polo",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Patagonia",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3774.jpg?alt=media&token=e9bb8469-0e97-4378-97c4-4c59c2cf0262",
  ]
},
{
  id: uuidv4(),
  name: "Remera CDG PLAY",
  brand: "Comme des Garcons",
  category: "remeras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3777.jpg?alt=media&token=61e94769-a218-443f-8e0c-2090f8dd8683",
  description: "Remera clasica CDG",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Comme des Garcons",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3778.jpg?alt=media&token=8e6a8586-c164-46ce-bfc4-a6ce87bc32d7",
  ]
},
{
  id: uuidv4(),
  name: "Remera Carhartt",
  brand: "Carhartt",
  category: "remeras",
  price: 32000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3779.jpg?alt=media&token=06df8d88-2cd0-415a-a34e-04338039b24c",
  description: "Remera clasica Carhartt",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Carhartt",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3780.jpg?alt=media&token=5d4cb95f-cd49-4257-968f-f571878c3c96",
  ]
},
{
  id: uuidv4(),
  name: "Remera Nike",
  brand: "Nike",
  category: "remeras",
  price: 22000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3787.jpg?alt=media&token=ef047d4e-0516-478c-acf1-5f7a7501419c",
  description: "Remera clasica Nike",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Nike",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3788.jpg?alt=media&token=0dd3d385-d4f6-4305-8d22-e01605a662b4",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Sport",
  brand: "Polo Sport",
  category: "remeras",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3793.jpg?alt=media&token=4515c8ee-db0c-4bf1-b24c-4941d6b8f3fe",
  description: "Remera clasica Polo Sport",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Polo Sport",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3794.jpg?alt=media&token=173fd9df-27f5-4cf4-b25b-051df902c46c",
  ]
},
{
  id: uuidv4(),
  name: "Remera Adidas",
  brand: "Adidas",
  category: "remeras",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3797.jpg?alt=media&token=7b2ec425-4966-44ee-ba2c-aa867d914ac5",
  description: "Remera clasica Adidas",
  availableSizes: ["M"],
  features: [
    "Gran diseño de  Adidas",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3798.jpg?alt=media&token=f97479b0-ba01-4abc-b675-210f3aea9bea",
  ]
},
{
  id: uuidv4(),
  name: "Remera Carhartt",
  brand: "Carhartt",
  category: "remeras",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3803.jpg?alt=media&token=a12f80fa-424f-4175-bb18-93da347a7c25",
  description: "Remera clasica Carhartt",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Carhartt",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3804.jpg?alt=media&token=94327e77-969b-4f66-bc62-72d881b204dc",
  ]
},
{
  id: uuidv4(),
  name: "Remera Carhartt",
  brand: "Carhartt",
  category: "remeras",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3803.jpg?alt=media&token=a12f80fa-424f-4175-bb18-93da347a7c25",
  description: "Remera clasica Carhartt",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Carhartt",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3804.jpg?alt=media&token=94327e77-969b-4f66-bc62-72d881b204dc",
  ]
},
{
  id: uuidv4(),
  name: "Remera Carhartt mangas largas",
  brand: "Carhartt",
  category: "remeras",
  price: 32000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3809.jpg?alt=media&token=fa83967f-e79c-4331-a058-7fc445da39c0",
  description: "Remera clasica Carhartt",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Carhartt",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3810.jpg?alt=media&token=12807cb3-a7d2-40d1-86f2-5d1d44a3021f",
  ]
},
{
  id: uuidv4(),
  name: "Remera Carhartt ",
  brand: "Carhartt",
  category: "remeras",
  price: 32000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3811.jpg?alt=media&token=f6955899-b234-4b66-b895-67bffe178931",
  description: "Remera clasica Carhartt",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Carhartt",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2FIMG_3812.jpg?alt=media&token=770c06d2-bb9c-4b1a-836c-b1a4cb49652e",
  ]
},
{
  id: uuidv4(),
  name: "Pantalon Rompeviento Adidas",
  brand: "Adidas",
  category: "pantalones",
  price: 25000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3847.jpg?alt=media&token=a04cd196-0b6a-4129-bf1a-c0308f2e7557",
  description: "Pantalón deportivo",
  availableSizes: ["40 arg"],
  features: [
    "Pantalon Adidas" 
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3848.jpg?alt=media&token=b645c854-5801-4425-8304-70650e15a9f4",
  ]
},
{
  id: uuidv4(),
  name: "Bermuda Dickies",
  brand: "Dickies",
  category: "pantalones",
  price: 25000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3849.jpg?alt=media&token=472fd252-e52c-4131-9c8c-feaa3ea49410",
  description: "Bermuda",
  availableSizes: ["48 arg"],
  features: [
    "Pantalon Dickies" 
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3850.jpg?alt=media&token=2d70d836-231f-4842-b054-eb3d40c8c694",
  ]
},
{
  id: uuidv4(),
  name: "Bermuda The North Face",
  brand: "The North Face",
  category: "pantalones",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3854.jpg?alt=media&token=227d992a-e7bb-4b0b-8306-acb602292fe3",
  description: "Bermuda",
  availableSizes: ["44 arg"],
  features: [
    "Bermuda TNF" 
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3855.jpg?alt=media&token=639c0308-6e20-42ea-9b80-8fec6f6ee5a7",
  ]
},
{
  id: uuidv4(),
  name: "Pantalon Carhartt",
  brand: "Carhartt",
  category: "pantalones",
  price: 30000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3856.jpg?alt=media&token=7d613ebd-fe39-4080-89b0-a8e50dc03935",
  description: "Carhartt",
  availableSizes: ["44 arg"],
  features: [
    "Pantalon Carhartt" 
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FPantalones%2FIMG_3857.jpg?alt=media&token=7cdf183c-38a5-41a4-b840-2c1268bd9ea6",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Ralph Lauren ",
  brand: "Polo Ralph Lauren",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4391.jpg?alt=media&token=f019c5d1-d120-4244-a8a7-fda6b5c7ba41",
  description: "Remera multiples logos",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Polo",
    "Prenda a estrenar"
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4392.jpg?alt=media&token=7cef1ade-13bb-46f7-b81e-ab192bcc3ebb",
  ]
},
{
  id: uuidv4(),
  name: "Remera Under Armour ",
  brand: "Under Armour",
  category: "remeras",
  price: 35000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4393.jpg?alt=media&token=c294ee26-e45c-4855-9c6d-4a4dcc47d0a4",
  description: "Remera Under Armour",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Under Armour",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4394.jpg?alt=media&token=9f9caec0-302e-489b-be6d-bc07db670e0b",
  ]
},
{
  id: uuidv4(),
  name: "Remera Louis Vuitton",
  brand: "Louis Vuitton",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4395.jpg?alt=media&token=f17fc5ba-b92a-4cb9-aa0e-68516fffb5f4",
  description: "Remera Louis Vuitton",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Louis Vuitton",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4396.jpg?alt=media&token=a1252496-ac33-4510-b5c5-8edc12e1328c",
  ]
},
{
  id: uuidv4(),
  name: "Remera Amiri",
  brand: "Amiri",
  category: "remeras",
  price: 42000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4399.jpg?alt=media&token=1b549a78-cf84-4e13-b523-f8c385201791",
  description: "Remera Amiri",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Amiri",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4400.jpg?alt=media&token=6e4b53e1-b9c0-41fd-ad26-42becdafc1d4",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Bear",
  brand: "Polo Bear",
  category: "remeras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4405.jpg?alt=media&token=92a20cda-d4db-444f-a0b9-ac734e3d99ec",
  description: "Remera Polo Bear",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Polo Bear",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4406.jpg?alt=media&token=f2d4e5a4-c401-477b-aa4d-090857acacf5",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Bear",
  brand: "Polo Bear",
  category: "remeras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4411.jpg?alt=media&token=6c39e240-b4fa-41cb-a1d9-da1b7c72819a",
  description: "Remera Polo Bear",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Polo Bear",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%201%2FIMG_4412.jpg?alt=media&token=497d315d-b6e7-4511-a82d-4d4dd5030880",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4385.jpg?alt=media&token=97478458-ee34-48fa-9ab5-5c5f8f13a1c4",
  description: "Chomba Tommy Hilfiger",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Tommy Hilfiger",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4386.jpg?alt=media&token=bf9b3a5c-1acb-4664-af93-a6d7b1dae66e",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo Ralph Lauren",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4397.jpg?alt=media&token=6bc41cfe-736d-4682-b5cc-f182e88d5762",
  description: "Chomba Polo Ralph Lauren",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Polo Ralph Lauren",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4398.jpg?alt=media&token=d4e10cd2-2253-4252-a0a8-6f7a7f26e419",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "chombas",
  price: 42000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4403.jpg?alt=media&token=6a12eb96-4a9f-4215-b2f7-b607ad0bd1f1",
  description: "Chomba Tommy Hilfiger",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Tommy Hilfiger",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4404.jpg?alt=media&token=7287f9f1-be5b-43d4-b228-bf5a5c563fac",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Tommy Hilfiger",
  brand: "Tommy Hilfiger",
  category: "chombas",
  price: 50000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4408.jpg?alt=media&token=2b120bca-9aa4-422c-98a1-92418f4f41af",
  description: "Chomba Tommy Hilfiger",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Tommy Hilfiger",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%201%2FIMG_4410.jpg?alt=media&token=070072c3-13f4-458f-9dba-a66006ed1c22",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo Ralph Lauren Mangas Largas",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 65000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%202%2FIMG_4653.jpg?alt=media&token=52e2d25a-ac24-4303-b091-ec092fa4b058",
  description: "Chomba Polo Ralph Lauren",
  availableSizes: ["M"],
  features: [
    "Gran diseño de Polo Ralph Lauren",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%202%2FIMG_4654.jpg?alt=media&token=bd9038c9-1378-456a-b26e-1e9ca9d7cab1",
  ]
},
{
  id: uuidv4(),
  name: "Chomba Polo Ralph Lauren Big Pony",
  brand: "Polo Ralph Lauren",
  category: "chombas",
  price: 35000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%202%2FIMG_4659.jpg?alt=media&token=21e73556-e1ab-47df-b8fd-efa87beb0537",
  description: "Chomba Polo Ralph Lauren",
  availableSizes: ["L"],
  features: [
    "Gran diseño de Polo Ralph Lauren",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FChombas%2Fenero%202%2FIMG_4660.jpg?alt=media&token=27dcf93d-a252-4a4f-815c-9726e40eee2d",
  ]
},
{
  id: uuidv4(),
  name: "Remera Lacoste",
  brand: "Lacoste",
  category: "remeras",
  price: 40000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4655.jpg?alt=media&token=e81894e0-6011-45be-8708-1b11112c720a",
  description: "Remera Lacoste",
  availableSizes: ["XL"],
  features: [
    "Gran diseño de Lacoste",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4656.jpg?alt=media&token=53e6d0af-8641-45cf-a7af-58122c5523a7",
  ]
},
{
  id: uuidv4(),
  name: "Remera Comme des Garçons",
  brand: "Lacoste",
  category: "remeras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4657.jpg?alt=media&token=cb11a840-45bc-449a-a4ba-e4446185d371",
  description: "Remera Comme des Garçons",

  availableSizes: ["XL"],
  features: [
    "Gran diseño de Comme des Garçons",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4658.jpg?alt=media&token=9d351369-1192-480a-96c9-9a0decff2d8d",
  ]
},
{
  id: uuidv4(),
  name: "Remera Polo Bear",
  brand: "Polo Bear",
  category: "remeras",
  price: 45000,
  image: "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4661.jpg?alt=media&token=d0880e08-a20e-4862-996e-9af9355a2973",
  description: "Remera Polo Bea",

  availableSizes: ["M"],
  features: [
    "Gran diseño de Comme des Garçons",
    
  ],
  additionalImages: [
    "https://firebasestorage.googleapis.com/v0/b/crocogool-products.appspot.com/o/Crocodile%20vSport%2FRemera%2Fenero%202%2FIMG_4662.jpg?alt=media&token=3df469e8-77fe-4f5c-8abe-e730fa09396a",
  ]
},
];