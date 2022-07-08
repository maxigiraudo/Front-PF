const initialState = {
  cards: [
    {
      name: "MONO1",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO2",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 22,
      image:
        "https://cdn.decrypt.co/resize/1536/wp-content/uploads/2021/10/bored-ape-nft-sothebys-record-sale-gID_4.png.webp",
    },
    {
      name: "MONO3",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 33,
      image:
        "https://planetanft.com/wp-content/uploads/2021/12/Bored-Ape-Yacht-Club-3.png",
    },
    {
      name: "MONO4",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 44,
      image:
        "https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/09/22436.jpg",
    },
    {
      name: "MONO5",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 55,
      image:
        "https://www.larazon.es/resizer/lPwjF6eG-PeAfrCUPPt75lJXgb0=/1800x1200/smart/filters:format(webp):quality(65)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/C3QPAGIE3RBULNY6TPH7GGWBTQ.jpg",
    },
    {
      name: "MONO6",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 66,
      image:
        "https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/09/22436.jpg",
    },
    {
      name: "MONO7",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 77,
      image: "https://pbs.twimg.com/media/FJ-piSWX0AMTw5U.png",
    },
    {
      name: "MONO8",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONO QUE ES CARISIMO",
      price: 88,
      image:
        "https://www.publimetro.com.mx/resizer/CocGeimTnro-D1hoH3ZC1Nrs1IY=/arc-photo-metroworldnews/arc2-prod/public/RSNJQRDEKNBMRC3Z4SYV64SZT4.jpg",
    },
    {
      name: "MONO9",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO10",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO11",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO12",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO13",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO14",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO15",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
    {
      name: "MONO16",
      created: "JUAN24C",
      description:
        "CONSEGUI TODAS LAS EXCLUSIVIDADES CON ESTE MONITO QUE ES CARISIMO",
      price: 40,
      image:
        "https://www.latercera.com/resizer/Jw37YLm2lX8o_akIpM57enxchxA=/arc-anglerfish-arc2-prod-copesa/public/XQP24CTNQND2TBDZ7AQN54D44Y.jpg",
    },
  ],
  category: [
    {
      name: "Art",
      image:
        "https://icons.iconarchive.com/icons/hadezign/hobbies/256/Art-icon.png",
    },
    {
      name: "Sport",
      image: "https://www.pngmart.com/files/1/Football-Ball-PNG.png",
    },
    {
      name: "Music",
      image:
        "https://cdn.pixabay.com/photo/2016/03/23/17/26/music-note-1275177_640.png",
    },
    {
      name: "Photography",
      image: "https://www.pngmart.com/files/5/Photographer-PNG-HD.png",
    },
    {
      name: "World",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/198/092/original/world-png.png",
    },
    {
      name: "Animals",
      image: "http://assets.stickpng.com/images/580b57fbd9996e24bc43bc80.png",
    },
    {
      name: "Crypto",
      image:
        "https://www.pngmart.com/files/15/Real-Bitcoin-Transparent-PNG.png",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_BY_NAME":
      if (action.payload === "desc") {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
          ),
        };
      } else {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ),
        };
      }

    case "ORDER_BY_PRICE":
      if (action.payload === "low") {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            else return 0;
          }),
        };
      } else {
        return {
          ...state,
          cards: [...state.cards].sort((a, b) => {
            if (a.price < b.price) return 1;
            if (a.price > b.price) return -1;
            else return 0;
          }),
        };
      }

    default:
      return state;
  }
}
