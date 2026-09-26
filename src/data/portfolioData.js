function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const categories = [
  {
    "id": "motorsport",
    "titleEn": "Motorsport Photography",
    "titlePt": "Fotografia de Desporto Motorizado",
    "bannerImage": "/assets/cat_motorsport.jpg",
    "count": 45,
    "disciplines": [
      {
        "id": "circuit",
        "titleEn": "Circuit",
        "titlePt": "Velocidade"
      },
      {
        "id": "rally",
        "titleEn": "Rally",
        "titlePt": "Rali"
      },
      {
        "id": "rallycross",
        "titleEn": "Rallycross",
        "titlePt": "Rallycross"
      },
      {
        "id": "karting",
        "titleEn": "Karting",
        "titlePt": "Karting"
      },
      {
        "id": "hillclimb",
        "titleEn": "Hillclimb",
        "titlePt": "Rampa"
      }
    ]
  },
  {
    "id": "sports",
    "titleEn": "Sports Photography",
    "titlePt": "Fotografia de Desporto",
    "bannerImage": "/assets/cat_sports.jpg",
    "count": 9
  },
  {
    "id": "automotive",
    "titleEn": "Automotive Photography",
    "titlePt": "Fotografia Automóvel",
    "bannerImage": "/assets/cat_automotive.jpg",
    "count": 9
  },
  {
    "id": "artistic_events",
    "titleEn": "Artistic & Events Photography",
    "titlePt": "Fotografia Artística e Eventos",
    "bannerImage": "/assets/cat_artistic_events.jpg",
    "count": 9
  }
];

export const rawItems = [
  {
    "id": "ms-circuit-1",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Vila Real Circuit Track Action",
    "titlePt": "Ação em Pista em Vila Real",
    "location": "Circuito Internacional de Vila Real",
    "date": "2025-07-12",
    "image": "/assets/gallery/motorsport/circuit/Vila_Real_11-113.jpg",
    "tags": [
      "Vila Real",
      "Street Circuit",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "110mm",
      "exposure": "1/800",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-circuit-2",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Estoril Classics Heritage Sprint",
    "titlePt": "Estoril Classics Sprint Histórico",
    "location": "Autódromo do Estoril",
    "date": "2025-10-20",
    "image": "/assets/gallery/motorsport/circuit/Estoril_Classics_20-10.jpg",
    "tags": [
      "Estoril Classics",
      "Heritage",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "350mm",
      "exposure": "1/80",
      "aperture": "f/13.0",
      "iso": "ISO 50"
    }
  },
  {
    "id": "ms-circuit-3",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Vila Real Chicane Apex Attack",
    "titlePt": "Ataque à Chicane de Vila Real",
    "location": "Vila Real, Portugal",
    "date": "2025-07-12",
    "image": "/assets/gallery/motorsport/circuit/Vila_Real_12-55.jpg",
    "tags": [
      "Vila Real",
      "Apex",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/100",
      "aperture": "f/8.0",
      "iso": "ISO 50"
    }
  },
  {
    "id": "ms-circuit-4",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "High-Speed Circuit Panning",
    "titlePt": "Panning de Alta Velocidade",
    "location": "Autódromo Internacional do Algarve",
    "date": "2025-05-10",
    "image": "/assets/gallery/motorsport/circuit/20250510-FAB_3336.jpg",
    "tags": [
      "Panning",
      "Portimão",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-210.0 mm f/4.0",
      "focalLength": "75mm",
      "exposure": "1/160",
      "aperture": "f/9.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-circuit-5",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Estoril Classics Pitlane Action",
    "titlePt": "Ação no Pitlane do Estoril",
    "location": "Autódromo do Estoril",
    "date": "2025-10-20",
    "image": "/assets/gallery/motorsport/circuit/Estoril_Classics_20-70.jpg",
    "tags": [
      "Pitlane",
      "Estoril",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "44mm",
      "exposure": "1/3200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-circuit-6",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Trackside Racing Perspective",
    "titlePt": "Perspetiva de Corrida em Pista",
    "location": "Circuit Trackside",
    "date": "2025-06-15",
    "image": "/assets/gallery/motorsport/circuit/FAB_0060.jpg",
    "tags": [
      "Trackside",
      "Speed",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/400",
      "aperture": "f/6.3",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-circuit-7",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Wheel-to-Wheel Battle",
    "titlePt": "Disputa Roda a Roda",
    "location": "Circuit Track",
    "date": "2025-06-18",
    "image": "/assets/gallery/motorsport/circuit/FAB_1236.jpg",
    "tags": [
      "Battle",
      "Precision",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "300mm",
      "exposure": "1/60",
      "aperture": "f/6.0",
      "iso": "ISO 12800"
    }
  },
  {
    "id": "ms-circuit-8",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Sunset Circuit Stint",
    "titlePt": "Turno ao Pôr do Sol",
    "location": "International Circuit",
    "date": "2025-06-20",
    "image": "/assets/gallery/motorsport/circuit/FAB_1510.jpg",
    "tags": [
      "Sunset",
      "Endurance",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/400",
      "aperture": "f/6.3",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-circuit-9",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Vila Real Street Circuit Victory",
    "titlePt": "Vitória no Circuito de Vila Real",
    "location": "Vila Real",
    "date": "2025-07-12",
    "image": "/assets/gallery/motorsport/circuit/Vila_Real_12-99.jpg",
    "tags": [
      "Vila Real",
      "Victory",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "28mm",
      "exposure": "1/2500",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rally-1",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "WRC Special Stage Attack",
    "titlePt": "Ataque em Classificativa de Rali",
    "location": "Rally Special Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/FAB_1236-1.jpg",
    "tags": [
      "WRC",
      "Gravel",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/60",
      "aperture": "f/9.0",
      "iso": "ISO 80"
    }
  },
  {
    "id": "ms-rally-2",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Dust & Power Drift",
    "titlePt": "Drift entre Poeira e Potência",
    "location": "Gravel Rally Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/FAB_1396-1.jpg",
    "tags": [
      "Dust",
      "Drift",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "150mm",
      "exposure": "1/160",
      "aperture": "f/5.6",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rally-3",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "High-Fly Jump Landing",
    "titlePt": "Salto de Alta Velocidade",
    "location": "Fafe Rally Jump",
    "date": "2025-05-19",
    "image": "/assets/gallery/motorsport/rally/FAB_3969-1.jpg",
    "tags": [
      "Fafe Jump",
      "Airborne",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "90mm",
      "exposure": "1/1600",
      "aperture": "f/2.8",
      "iso": "ISO 200"
    }
  },
  {
    "id": "ms-rally-4",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Tarmac Stage Hairpin",
    "titlePt": "Gancho em Asfalto",
    "location": "Tarmac Rally Stage",
    "date": "2025-04-12",
    "image": "/assets/gallery/motorsport/rally/FAB_5337-1.jpg",
    "tags": [
      "Tarmac",
      "Hairpin",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/2000",
      "aperture": "f/6.3",
      "iso": "ISO 800"
    }
  },
  {
    "id": "ms-rally-5",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Night Rally Stage Flash",
    "titlePt": "Classificativa Noturna de Rali",
    "location": "Night Special Stage",
    "date": "2025-05-17",
    "image": "/assets/gallery/motorsport/rally/FAB_6885-1.jpg",
    "tags": [
      "Night Stage",
      "Lights",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "86mm",
      "exposure": "1/1600",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rally-6",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Gravel Apex Slide",
    "titlePt": "Derrapagem em Terra",
    "location": "Gravel Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/FAB_7138-1.jpg",
    "tags": [
      "Slide",
      "Gravel",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/8000",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rally-7",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Service Park Preparation",
    "titlePt": "Preparação no Parque de Assistência",
    "location": "Rally Service Park",
    "date": "2025-05-17",
    "image": "/assets/gallery/motorsport/rally/FAB_7384-1.jpg",
    "tags": [
      "Service Park",
      "Pitlane",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "34mm",
      "exposure": "1/640",
      "aperture": "f/2.8",
      "iso": "ISO 320"
    }
  },
  {
    "id": "ms-rally-8",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Forest Stage Flat Out",
    "titlePt": "A Fundo pela Floresta",
    "location": "Forest Rally Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/FAB_7997-1.jpg",
    "tags": [
      "Forest",
      "Speed",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/3200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rally-9",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Spectator Zone Action",
    "titlePt": "Ação na Zona de Espetáculos",
    "location": "Rally Spectator Zone",
    "date": "2025-05-19",
    "image": "/assets/gallery/motorsport/rally/FAB_8133-1.jpg",
    "tags": [
      "Fans",
      "Atmosphere",
      "Rally"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "105mm",
      "exposure": "1/2500",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-1",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Montalegre RX World Championship",
    "titlePt": "Mundial de Rallycross em Montalegre",
    "location": "Pista Automóvel de Montalegre",
    "date": "2025-07-26",
    "image": "/assets/gallery/motorsport/rallycross/CPRx_Montalegre-14.jpg",
    "tags": [
      "Montalegre",
      "World RX",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/1250",
      "aperture": "f/2.8",
      "iso": "ISO 50"
    }
  },
  {
    "id": "ms-rx-2",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Euro RX Wheel-to-Wheel Push",
    "titlePt": "Disputa Intensa no Euro RX",
    "location": "Euro RX Circuit",
    "date": "2025-09-12",
    "image": "/assets/gallery/motorsport/rallycross/EuroRX-27.jpg",
    "tags": [
      "Euro RX",
      "Push",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "560mm",
      "exposure": "1/250",
      "aperture": "f/6.3",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-3",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Joker Lap Strategy Drama",
    "titlePt": "Estratégia na Joker Lap",
    "location": "Montalegre Circuit",
    "date": "2025-09-12",
    "image": "/assets/gallery/motorsport/rallycross/EuroRX-35_36.png",
    "tags": [
      "Joker Lap",
      "Strategy",
      "Rallycross"
    ],
    "exif": null
  },
  {
    "id": "ms-rx-4",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Dirt to Asphalt Transition",
    "titlePt": "Transição Terra-Asfalto",
    "location": "Rallycross Track",
    "date": "2025-04-27",
    "image": "/assets/gallery/motorsport/rallycross/FAB_0130-1.jpg",
    "tags": [
      "Transition",
      "Dirt",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "105mm",
      "exposure": "1/2000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-5",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Supercar Semi-Final Launch",
    "titlePt": "Arranque de Semifinal Supercars",
    "location": "Montalegre RX",
    "date": "2025-03-29",
    "image": "/assets/gallery/motorsport/rallycross/FAB_2772-1.jpg",
    "tags": [
      "Supercars",
      "Launch",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "120mm",
      "exposure": "1/1600",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-6",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Kerb Bouncing Power",
    "titlePt": "Ataque Agressivo ao Corretor",
    "location": "Montalegre RX",
    "date": "2025-06-27",
    "image": "/assets/gallery/motorsport/rallycross/FAB_3004.jpg",
    "tags": [
      "Kerb",
      "Action",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "Viltrox AF 20/2.8 Z",
      "focalLength": "20mm",
      "exposure": "1/125",
      "aperture": "f/10.0",
      "iso": "ISO 50"
    }
  },
  {
    "id": "ms-rx-7",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Side-by-Side Gravel Attack",
    "titlePt": "Lado a Lado em Terra",
    "location": "Euro RX Stage",
    "date": "2025-03-29",
    "image": "/assets/gallery/motorsport/rallycross/FAB_3021-1.jpg",
    "tags": [
      "Side by Side",
      "Gravel",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/1250",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-8",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Final Corner Victory Sprint",
    "titlePt": "Sprint de Vitória na Última Curva",
    "location": "RX Final",
    "date": "2025-06-27",
    "image": "/assets/gallery/motorsport/rallycross/FAB_3221.jpg",
    "tags": [
      "Final",
      "Sprint",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "130mm",
      "exposure": "1/2000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-rx-9",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Paddock Celebration Moment",
    "titlePt": "Celebração no Paddock",
    "location": "Montalegre Paddock",
    "date": "2025-04-27",
    "image": "/assets/gallery/motorsport/rallycross/FAB_6240-1.jpg",
    "tags": [
      "Paddock",
      "Podium",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "22mm",
      "exposure": "1/5000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-1",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "National Karting Championship Apex",
    "titlePt": "Campeonato Nacional de Karting",
    "location": "Kartódromo do Porto / Braga",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/20260301-FAB_3720.jpg",
    "tags": [
      "Karting",
      "Championship",
      "Apex"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/640",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-2",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "KZ Shifter Kart Acceleration",
    "titlePt": "Aceleração Shifter KZ",
    "location": "Kartódromo",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/20260301-FAB_5394.jpg",
    "tags": [
      "KZ Shifter",
      "Speed",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "190mm",
      "exposure": "1/3200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-3",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Junior Drivers Pack Battle",
    "titlePt": "Batalha no Pelotão Júnior",
    "location": "Kart Track",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/20260301-FAB_5917.jpg",
    "tags": [
      "Junior",
      "Pack Battle",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/500",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-4",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Low-Angle Apex Panning",
    "titlePt": "Panning Baixo na Curva",
    "location": "Kartódromo",
    "date": "2026-03-07",
    "image": "/assets/gallery/motorsport/karting/20260307-FAB_7178.jpg",
    "tags": [
      "Low Angle",
      "Panning",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "195mm",
      "exposure": "1/640",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-5",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Pre-Grid Helmet Focus",
    "titlePt": "Foco no Capacete na Pré-Grelha",
    "location": "Pre-Grid",
    "date": "2026-03-08",
    "image": "/assets/gallery/motorsport/karting/20260308-FAB_7785.jpg",
    "tags": [
      "Pre-Grid",
      "Focus",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "116mm",
      "exposure": "1/1000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-karting-6",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Wet Track Spray Battle",
    "titlePt": "Batalha em Pista Molhada",
    "location": "Kart Circuit",
    "date": "2026-03-08",
    "image": "/assets/gallery/motorsport/karting/20260308-FAB_8259.jpg",
    "tags": [
      "Wet Track",
      "Spray",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "100mm",
      "exposure": "1/100",
      "aperture": "f/7.1",
      "iso": "ISO 64"
    }
  },
  {
    "id": "ms-karting-7",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Chassis Lean in High-G Corner",
    "titlePt": "Inclinação de Chassi em Curva Rápida",
    "location": "Kart Track",
    "date": "2026-03-22",
    "image": "/assets/gallery/motorsport/karting/FAB_0540-1.jpg",
    "tags": [
      "High-G",
      "Cornering",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "440mm",
      "exposure": "1/8000",
      "aperture": "f/6.0",
      "iso": "ISO 800"
    }
  },
  {
    "id": "ms-karting-8",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Podium Trophy Moment",
    "titlePt": "Entrega de Troféus no Pódio",
    "location": "Karting Podium",
    "date": "2026-03-23",
    "image": "/assets/gallery/motorsport/karting/FAB_0640-1.jpg",
    "tags": [
      "Podium",
      "Trophy",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "180mm",
      "exposure": "1/80",
      "aperture": "f/11.0",
      "iso": "ISO 64"
    }
  },
  {
    "id": "ms-karting-9",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Sunset Heat Finish Line",
    "titlePt": "Corte de Meta ao Pôr do Sol",
    "location": "Karting Track",
    "date": "2026-03-21",
    "image": "/assets/gallery/motorsport/karting/FAB_9275-1.jpg",
    "tags": [
      "Finish Line",
      "Sunset",
      "Karting"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/1250",
      "aperture": "f/6.3",
      "iso": "ISO 250"
    }
  },
  {
    "id": "ms-hill-1",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Rampa do Caramulo Heritage Climb",
    "titlePt": "Subida Histórica da Rampa do Caramulo",
    "location": "Serra do Caramulo",
    "date": "2025-09-06",
    "image": "/assets/gallery/motorsport/hillclimb/Caramulo-26.jpg",
    "tags": [
      "Caramulo",
      "Heritage",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "49mm",
      "exposure": "1/25",
      "aperture": "f/11.0",
      "iso": "ISO 64"
    }
  },
  {
    "id": "ms-hill-2",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Caramulo Mountain Hairpin",
    "titlePt": "Curva de Montanha no Caramulo",
    "location": "Rampa do Caramulo",
    "date": "2025-09-06",
    "image": "/assets/gallery/motorsport/hillclimb/Caramulo-40.jpg",
    "tags": [
      "Hairpin",
      "Caramulo",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "42mm",
      "exposure": "1/250",
      "aperture": "f/6.3",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-hill-3",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Rampa da Falperra Prototype Attack",
    "titlePt": "Protótipo na Rampa da Falperra",
    "location": "Rampa da Falperra, Braga",
    "date": "2025-05-16",
    "image": "/assets/gallery/motorsport/hillclimb/FAB_5675-1.jpg",
    "tags": [
      "Falperra",
      "Prototype",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/2000",
      "aperture": "f/2.8",
      "iso": "ISO 400"
    }
  },
  {
    "id": "ms-hill-4",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Speed Mountain Apex",
    "titlePt": "Velocidade na Montanha",
    "location": "Falperra Hillclimb",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/hillclimb/FAB_6141-1.jpg",
    "tags": [
      "Falperra",
      "Apex",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "80mm",
      "exposure": "1/250",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-hill-5",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "GT Prototype Mountain Panning",
    "titlePt": "Panning de Protótipo na Montanha",
    "location": "Hillclimb Course",
    "date": "2025-05-16",
    "image": "/assets/gallery/motorsport/hillclimb/FAB_6155-1.jpg",
    "tags": [
      "GT",
      "Panning",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "120mm",
      "exposure": "1/1250",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-hill-6",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Rampa da Falperra Spectator Crowd",
    "titlePt": "Multidão na Rampa da Falperra",
    "location": "Braga, Portugal",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/hillclimb/FAB_6297-1.jpg",
    "tags": [
      "Falperra",
      "Crowd",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/2500",
      "aperture": "f/2.8",
      "iso": "ISO 200"
    }
  },
  {
    "id": "ms-hill-7",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Mountain Pass Speed Shot",
    "titlePt": "Passagem de Montanha a Alta Velocidade",
    "location": "Mountain Stage",
    "date": "2025-04-26",
    "image": "/assets/gallery/motorsport/hillclimb/FAB_9368-1.jpg",
    "tags": [
      "Mountain Pass",
      "Speed",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/320",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ms-hill-8",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Rampa Capital do Móvel Sprint",
    "titlePt": "Rampa Capital do Móvel em Paços de Ferreira",
    "location": "Paços de Ferreira",
    "date": "2025-07-19",
    "image": "/assets/gallery/motorsport/hillclimb/Rampa_Capital_Movel-21.jpg",
    "tags": [
      "Capital do Movel",
      "Sprint",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "42mm",
      "exposure": "1/500",
      "aperture": "f/5.0",
      "iso": "ISO 80"
    }
  },
  {
    "id": "ms-hill-9",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Classic Escort Hillclimb Launch",
    "titlePt": "Subida de Clássico na Rampa",
    "location": "Capital do Móvel",
    "date": "2025-07-19",
    "image": "/assets/gallery/motorsport/hillclimb/Rampa_Capital_Movel-33.jpg",
    "tags": [
      "Escort Classic",
      "Launch",
      "Hillclimb"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "70mm",
      "exposure": "1/500",
      "aperture": "f/5.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-1",
    "category": "sports",
    "titleEn": "Athletic Sprint & Movement",
    "titlePt": "Sprint e Movimento Atlético",
    "location": "Athletics Meeting",
    "date": "2025-03-16",
    "image": "/assets/gallery/sports/20250316-DSC_0004.jpg",
    "tags": [
      "Athletics",
      "Sprint",
      "Action"
    ],
    "exif": {
      "camera": "Nikon D3400",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "38mm",
      "exposure": "1/1250",
      "aperture": "f/4.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-2",
    "category": "sports",
    "titleEn": "Outdoor Endurance Challenge",
    "titlePt": "Desafio de Resistência Outdoor",
    "location": "Outdoor Course",
    "date": "2025-08-06",
    "image": "/assets/gallery/sports/20250806-FAB_1656.jpg",
    "tags": [
      "Endurance",
      "Outdoor",
      "Focus"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-210.0 mm f/4.0",
      "focalLength": "70mm",
      "exposure": "1/125",
      "aperture": "f/18.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-3",
    "category": "sports",
    "titleEn": "High-Energy Athletic Power",
    "titlePt": "Poder Atlético de Alta Energia",
    "location": "Sports Arena",
    "date": "2025-08-07",
    "image": "/assets/gallery/sports/20250807-FAB_1903.jpg",
    "tags": [
      "Power",
      "Arena",
      "Intensity"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-210.0 mm f/4.0",
      "focalLength": "140mm",
      "exposure": "1/160",
      "aperture": "f/7.1",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-4",
    "category": "sports",
    "titleEn": "Indoor Championship Competition",
    "titlePt": "Competição de Campeonato Indoor",
    "location": "Porto Athletics Center",
    "date": "2026-02-28",
    "image": "/assets/gallery/sports/20260228-FAB_2681.jpg",
    "tags": [
      "Indoor",
      "Championship",
      "Porto"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/1000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-5",
    "category": "sports",
    "titleEn": "Split-Second Focus & Motion",
    "titlePt": "Foco de Fração de Segundo e Movimento",
    "location": "Athletic Arena",
    "date": "2026-02-28",
    "image": "/assets/gallery/sports/20260228-FAB_2823.jpg",
    "tags": [
      "Focus",
      "Motion",
      "Speed"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "sp-6",
    "category": "sports",
    "titleEn": "Championship Action Series",
    "titlePt": "Série de Ação em Campeonato",
    "location": "Arena Track",
    "date": "2026-03-14",
    "image": "/assets/gallery/sports/20260314-FAB_5811.jpg",
    "tags": [
      "Championship",
      "Action",
      "Series"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-200.0 mm f/2.8",
      "focalLength": "200mm",
      "exposure": "1/400",
      "aperture": "f/2.8",
      "iso": "ISO 200"
    }
  },
  {
    "id": "sp-7",
    "category": "sports",
    "titleEn": "Dynamic Outdoor Action",
    "titlePt": "Ação Dinâmica Outdoor",
    "location": "Outdoor Competition",
    "date": "2025-09-10",
    "image": "/assets/gallery/sports/FAB_4150-1.jpg",
    "tags": [
      "Dynamic",
      "Outdoor",
      "Energy"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "180mm",
      "exposure": "1/1250",
      "aperture": "f/6.3",
      "iso": "ISO 400"
    }
  },
  {
    "id": "sp-8",
    "category": "sports",
    "titleEn": "Athletic Performance Capture",
    "titlePt": "Captura de Performance Atlética",
    "location": "Stadium Track",
    "date": "2025-09-12",
    "image": "/assets/gallery/sports/FAB_4199-1.jpg",
    "tags": [
      "Performance",
      "Stadium",
      "Track"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "550mm",
      "exposure": "1/400",
      "aperture": "f/6.3",
      "iso": "ISO 400"
    }
  },
  {
    "id": "sp-9",
    "category": "sports",
    "titleEn": "Determination & Victory",
    "titlePt": "Determinação e Vitória",
    "location": "National Stadium",
    "date": "2025-09-15",
    "image": "/assets/gallery/sports/FAB_4251-1.jpg",
    "tags": [
      "Victory",
      "Determination",
      "Sports"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "350mm",
      "exposure": "1/320",
      "aperture": "f/7.1",
      "iso": "ISO 400"
    }
  },
  {
    "id": "au-1",
    "category": "automotive",
    "titleEn": "Supercar Studio Profile",
    "titlePt": "Perfil de Supercarro em Estúdio",
    "location": "Automotive Studio",
    "date": "2026-02-07",
    "image": "/assets/gallery/automotive/20260207-FAB_0498.jpg",
    "tags": [
      "Supercar",
      "Studio",
      "Automotive"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/125",
      "aperture": "f/2.0",
      "iso": "ISO 800"
    }
  },
  {
    "id": "au-2",
    "category": "automotive",
    "titleEn": "Sculptural Car Lines & Design",
    "titlePt": "Linhas Escultóricas e Design Automóvel",
    "location": "Porto Car Studio",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/20260222-FAB_1377.jpg",
    "tags": [
      "Lines",
      "Design",
      "Porto"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/250",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "au-3",
    "category": "automotive",
    "titleEn": "Exotic Vehicle Cockpit Detail",
    "titlePt": "Detalhe do Cockpit de Veículo Exótico",
    "location": "Automotive Exhibition",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/20260222-FAB_1405.jpg",
    "tags": [
      "Cockpit",
      "Exotic",
      "Detail"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1600",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "au-4",
    "category": "automotive",
    "titleEn": "High-Performance Aero Silhouette",
    "titlePt": "Silhueta Aerodinâmica de Alta Performance",
    "location": "Collector Garage",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/20260222-FAB_1484.jpg",
    "tags": [
      "Aero",
      "Silhouette",
      "Collector"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1000",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "au-5",
    "category": "automotive",
    "titleEn": "Outdoor Light Painting Photography",
    "titlePt": "Fotografia de Pintura com Luz Outdoor",
    "location": "Cascais Coastline",
    "date": "2026-03-08",
    "image": "/assets/gallery/automotive/20260308-FAB_8572.jpg",
    "tags": [
      "Light Painting",
      "Outdoor",
      "Cascais"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/25",
      "aperture": "f/2.0",
      "iso": "ISO 500"
    }
  },
  {
    "id": "au-6",
    "category": "automotive",
    "titleEn": "Exotic Rear Tail Light Stance",
    "titlePt": "Postura Noturna de Faróis Traseiros",
    "location": "Studio 44",
    "date": "2026-03-08",
    "image": "/assets/gallery/automotive/20260308-FAB_8652.jpg",
    "tags": [
      "Tail Light",
      "Night",
      "Stance"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/160",
      "aperture": "f/2.0",
      "iso": "ISO 800"
    }
  },
  {
    "id": "au-7",
    "category": "automotive",
    "titleEn": "Commercial Studio Car Portraiture",
    "titlePt": "Retrato Comercial Automóvel em Estúdio",
    "location": "Commercial Studio",
    "date": "2025-11-14",
    "image": "/assets/gallery/automotive/FAB_9706-1.jpg",
    "tags": [
      "Commercial",
      "Studio",
      "Portraiture"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1600",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "au-8",
    "category": "automotive",
    "titleEn": "London Mayfair Street Supercar",
    "titlePt": "Supercarro nas Ruas de Mayfair em Londres",
    "location": "Mayfair, London",
    "date": "2025-10-05",
    "image": "/assets/gallery/automotive/London-19.jpg",
    "tags": [
      "Mayfair",
      "London",
      "Street"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "54mm",
      "exposure": "1/200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  },
  {
    "id": "au-9",
    "category": "automotive",
    "titleEn": "London Night Supercar Reflections",
    "titlePt": "Reflexos Noturnos de Supercarro em Londres",
    "location": "Central London",
    "date": "2025-10-05",
    "image": "/assets/gallery/automotive/London-90.jpg",
    "tags": [
      "Night",
      "Reflections",
      "London"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "44mm",
      "exposure": "1/500",
      "aperture": "f/2.8",
      "iso": "ISO 800"
    }
  },
  {
    "id": "ae-1",
    "category": "artistic_events",
    "titleEn": "Low-Light Artistic Perspective",
    "titlePt": "Perspetiva Artística em Fraca Luz",
    "location": "Creative Location",
    "date": "2025-02-28",
    "image": "/assets/gallery/artistic_events/20250228-DSC_0292.jpg",
    "tags": [
      "Low Light",
      "Artistic",
      "Creative"
    ],
    "exif": {
      "camera": "Nikon D3400",
      "lens": "18.0-55.0 mm f/3.5-5.6",
      "focalLength": "18mm",
      "exposure": "1/100",
      "aperture": "f/4.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ae-2",
    "category": "artistic_events",
    "titleEn": "Paddock VIP Event Atmosphere",
    "titlePt": "Atmosfera de Evento VIP no Paddock",
    "location": "Circuit Paddock VIP",
    "date": "2025-12-13",
    "image": "/assets/gallery/artistic_events/20251213-FAB_2388.jpg",
    "tags": [
      "Paddock",
      "VIP",
      "Event"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "50mm",
      "exposure": "1/160",
      "aperture": "f/2.8",
      "iso": "ISO 1250"
    }
  },
  {
    "id": "ae-3",
    "category": "artistic_events",
    "titleEn": "Supercar Rally Night Gathering",
    "titlePt": "Encontro Noturno de Rali de Supercarros",
    "location": "Estoril Event Arena",
    "date": "2026-01-17",
    "image": "/assets/gallery/artistic_events/20260117-FAB_4893.jpg",
    "tags": [
      "Supercar",
      "Night",
      "Estoril"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "35.0 mm f/1.8",
      "focalLength": "35mm",
      "exposure": "20.0s",
      "aperture": "f/13.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ae-4",
    "category": "artistic_events",
    "titleEn": "Creative Bokeh Reflection Art",
    "titlePt": "Arte de Reflexo Criativo com Bokeh",
    "location": "Studio Art Session",
    "date": "2026-01-28",
    "image": "/assets/gallery/artistic_events/20260128-DSC_4448-Enhanced-NR.jpg",
    "tags": [
      "Bokeh",
      "Reflection",
      "Art"
    ],
    "exif": {
      "camera": "Nikon 1 V1",
      "lens": "1 NIKKOR 18.5mm f/1.8",
      "focalLength": "19mm",
      "exposure": "1/100",
      "aperture": "f/1.8",
      "iso": "ISO 1600"
    }
  },
  {
    "id": "ae-5",
    "category": "artistic_events",
    "titleEn": "Automotive Press Launch Event",
    "titlePt": "Lançamento de Imprensa Automóvel",
    "location": "Automotive Expo Center",
    "date": "2026-03-01",
    "image": "/assets/gallery/artistic_events/20260301-FAB_5992.jpg",
    "tags": [
      "Press Launch",
      "Event",
      "Automotive"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/5000",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ae-6",
    "category": "artistic_events",
    "titleEn": "Dublin Urban Automotive Art",
    "titlePt": "Arte Automóvel Urbana em Dublin",
    "location": "Dublin City Center",
    "date": "2025-08-20",
    "image": "/assets/gallery/artistic_events/Dublin-36.JPG",
    "tags": [
      "Dublin",
      "Urban",
      "Art"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "6.0s",
      "aperture": "f/5.6",
      "iso": "ISO 100"
    }
  },
  {
    "id": "ae-7",
    "category": "artistic_events",
    "titleEn": "Podium Celebration & Champagne Flare",
    "titlePt": "Celebração no Pódio com Champanhe",
    "location": "Race Track Podium",
    "date": "2025-06-05",
    "image": "/assets/gallery/artistic_events/FAB_0817.jpg",
    "tags": [
      "Podium",
      "Celebration",
      "Champagne"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/1000",
      "aperture": "f/4.0",
      "iso": "ISO 800"
    }
  },
  {
    "id": "ae-8",
    "category": "artistic_events",
    "titleEn": "High-Contrast Creative Composition",
    "titlePt": "Composição Criativa de Alto Contraste",
    "location": "Art Studio",
    "date": "2025-09-18",
    "image": "/assets/gallery/artistic_events/FAB_4319-Enhanced-NR-1.jpg",
    "tags": [
      "High Contrast",
      "Creative",
      "Composition"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "300mm",
      "exposure": "1/320",
      "aperture": "f/6.0",
      "iso": "ISO 5000"
    }
  },
  {
    "id": "ae-9",
    "category": "artistic_events",
    "titleEn": "London Night Automotive Culture",
    "titlePt": "Cultura Automóvel Noturna em Londres",
    "location": "Piccadilly, London",
    "date": "2025-10-06",
    "image": "/assets/gallery/artistic_events/London-51.jpg",
    "tags": [
      "London",
      "Night",
      "Culture"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/125",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    }
  }
];

export const portfolioData = {
  categories,
  items: rawItems,
  rawItems
};

export function getPortfolioItems() {
  return shuffleArray(rawItems);
}

export function getItemsByCategory(category) {
  const filtered = rawItems.filter((i) => i.category === category);
  return shuffleArray(filtered);
}

export function getItemsBySubCategory(category, subCategory) {
  const filtered = rawItems.filter(
    (i) => i.category === category && i.subCategory === subCategory
  );
  return shuffleArray(filtered);
}
