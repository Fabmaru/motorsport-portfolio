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
    "bannerImage": "/assets/cat_motorsport.webp",
    "count": 60,
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
    "bannerImage": "/assets/cat_sports.webp",
    "count": 12
  },
  {
    "id": "automotive",
    "titleEn": "Automotive Photography",
    "titlePt": "Fotografia Automóvel",
    "bannerImage": "/assets/cat_automotive.webp",
    "count": 9
  },
  {
    "id": "artistic_events",
    "titleEn": "Artistic & Events Photography",
    "titlePt": "Fotografia Artística e Eventos",
    "bannerImage": "/assets/cat_artistic_events.webp",
    "count": 9
  }
];

export const rawItems = [
  {
    "id": "ms-circuit-1",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Mikel Azcona Hyundai Motorsport Driver in the Paddock at Circuito Internacional de Vila Real",
    "titlePt": "Mikel Azcona Piloto Hyundai Motorsport no Paddock do Circuito Internacional de Vila Real",
    "location": "Circuito Internacional de Vila Real",
    "date": "2025-07-12",
    "image": "/assets/gallery/motorsport/circuit/mikel-azcona-hyundai-tcr-world-tour-vila-real-paddock.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/mikel-azcona-hyundai-tcr-world-tour-vila-real-paddock-thumb.webp"
  },
  {
    "id": "ms-circuit-2",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Chevrolet Corvette C6.R GT2 Compuware High-Speed Panning at Estoril Classics",
    "titlePt": "Panning do Chevrolet Corvette C6.R GT2 Compuware no Estoril Classics",
    "location": "Autódromo do Estoril",
    "date": "2025-10-20",
    "image": "/assets/gallery/motorsport/circuit/corvette-c6r-gt2-compuware-panning-estoril-classics.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/corvette-c6r-gt2-compuware-panning-estoril-classics-thumb.webp"
  },
  {
    "id": "ms-circuit-3",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Aston Martin Vantage GT4 Racing on the Streets of Circuito Internacional de Vila Real",
    "titlePt": "Aston Martin Vantage GT4 em Corrida no Circuito Internacional de Vila Real",
    "location": "Vila Real, Portugal",
    "date": "2025-07-12",
    "image": "/assets/gallery/motorsport/circuit/aston-martin-vantage-gt4-panning-vila-real-street-circuit.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/aston-martin-vantage-gt4-panning-vila-real-street-circuit-thumb.webp"
  },
  {
    "id": "ms-circuit-4",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Ferrari 499P AF Corse #50 Hypercar Cornering Through Foliage in FIA WEC",
    "titlePt": "Ferrari 499P AF Corse #50 Hypercar em Curva no Mundial de Resistência FIA WEC",
    "location": "Autódromo Internacional do Algarve",
    "date": "2025-05-10",
    "image": "/assets/gallery/motorsport/circuit/ferrari-499p-af-corse-hypercar-cornering-wec.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/ferrari-499p-af-corse-hypercar-cornering-wec-thumb.webp"
  },
  {
    "id": "ms-circuit-5",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Classic Lotus 79 John Player Special Formula 1 Taking the Checkered Flag at Estoril Classics",
    "titlePt": "Lotus 79 John Player Special de Fórmula 1 a Receber a Bandeira de Xadrez no Estoril Classics",
    "location": "Autódromo do Estoril",
    "date": "2025-10-20",
    "image": "/assets/gallery/motorsport/circuit/lotus-79-john-player-special-f1-checkered-flag-estoril-classics.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/lotus-79-john-player-special-f1-checkered-flag-estoril-classics-thumb.webp"
  },
  {
    "id": "ms-circuit-6",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Cadillac V-Series.R #101 Hypercar Attacking the Kerbs at 24 Hours of Le Mans",
    "titlePt": "Cadillac V-Series.R #101 Hypercar a Atacar os Corretores nas 24 Horas de Le Mans",
    "location": "Circuit Trackside",
    "date": "2025-06-15",
    "image": "/assets/gallery/motorsport/circuit/cadillac-v-series-r-hypercar-cornering-24h-le-mans.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/cadillac-v-series-r-hypercar-cornering-24h-le-mans-thumb.webp"
  },
  {
    "id": "ms-circuit-7",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "CrowdStrike Racing by APR Oreca 07 LMP2 Night Panning with Glowing Brakes at Le Mans",
    "titlePt": "Panning Noturno do Oreca 07 LMP2 da CrowdStrike Racing com Travões Incandescentes em Le Mans",
    "location": "Circuit Track",
    "date": "2025-06-18",
    "image": "/assets/gallery/motorsport/circuit/crowdstrike-oreca-07-lmp2-night-panning-glowing-brakes-le-mans.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/crowdstrike-oreca-07-lmp2-night-panning-glowing-brakes-le-mans-thumb.webp"
  },
  {
    "id": "ms-circuit-8",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "AF Corse Ferrari 499P #83 Leading Aston Martin Valkyrie Hypercar at 24 Hours of Le Mans",
    "titlePt": "Ferrari 499P #83 da AF Corse na Frente do Aston Martin Valkyrie Hypercar nas 24 Horas de Le Mans",
    "location": "International Circuit",
    "date": "2025-06-20",
    "image": "/assets/gallery/motorsport/circuit/af-corse-ferrari-499p-aston-martin-valkyrie-hypercar-le-mans.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/circuit/af-corse-ferrari-499p-aston-martin-valkyrie-hypercar-le-mans-thumb.webp"
  },
  {
    "id": "ms-circuit-9",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Aurélien Comte Cupra Leon VZ TCR Racing Downhill at Circuito Internacional de Vila Real",
    "titlePt": "Aurélien Comte em Cupra Leon VZ TCR na Descida do Circuito Internacional de Vila Real",
    "location": "Circuito Internacional de Vila Real",
    "date": "2025-07-11",
    "image": "/assets/gallery/motorsport/circuit/cupra-leon-vz-tcr-aurelien-comte-vila-real-street-circuit.webp",
    "tags": [
      "Vila Real",
      "Street Circuit",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/2000",
      "aperture": "f/2.8",
      "iso": "ISO 64"
    },
    "thumb": "/assets/gallery/motorsport/circuit/cupra-leon-vz-tcr-aurelien-comte-vila-real-street-circuit-thumb.webp"
  },
  {
    "id": "ms-circuit-10",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Duqueine Team Oreca 07 #30 LMP2 Attacking the Apex at ELMS 4 Hours of Portimão",
    "titlePt": "Oreca 07 #30 LMP2 da Duqueine Team a Atacar a Curva nas 4 Horas de Portimão ELMS",
    "location": "Autódromo Internacional do Algarve, Portimão",
    "date": "2026-10-10",
    "image": "/assets/gallery/motorsport/circuit/duqueine-team-oreca-07-lmp2-elms-portimao-circuit.webp",
    "tags": [
      "ELMS",
      "Portimão",
      "Panning",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "450mm",
      "exposure": "1/50",
      "aperture": "f/14.0",
      "iso": "ISO 64"
    },
    "thumb": "/assets/gallery/motorsport/circuit/duqueine-team-oreca-07-lmp2-elms-portimao-circuit-thumb.webp"
  },
  {
    "id": "ms-circuit-11",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "IDEC Sport Oreca 07 #18 LMP2 Wheel-to-Wheel Battle at Sunset in ELMS Portimão",
    "titlePt": "Disputa Roda a Roda do Oreca 07 #18 LMP2 da IDEC Sport ao Pôr do Sol no ELMS em Portimão",
    "location": "Autódromo Internacional do Algarve, Portimão",
    "date": "2026-10-10",
    "image": "/assets/gallery/motorsport/circuit/idec-sport-oreca-07-lmp2-golden-hour-battle-elms-portimao.webp",
    "tags": [
      "ELMS",
      "Endurance",
      "Portimão",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "230mm",
      "exposure": "1/160",
      "aperture": "f/6.3",
      "iso": "ISO 200"
    },
    "thumb": "/assets/gallery/motorsport/circuit/idec-sport-oreca-07-lmp2-golden-hour-battle-elms-portimao-thumb.webp"
  },
  {
    "id": "ms-circuit-12",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Team Virage Ligier JS P320 #70 LMP3 High-Speed Panning in Michelin Le Mans Cup Portimão",
    "titlePt": "Panning de Alta Velocidade do Ligier JS P320 #70 LMP3 da Team Virage na Michelin Le Mans Cup em Portimão",
    "location": "Autódromo Internacional do Algarve, Portimão",
    "date": "2026-10-10",
    "image": "/assets/gallery/motorsport/circuit/team-virage-ligier-js-p320-lmp3-panning-le-mans-cup-portimao.webp",
    "tags": [
      "Le Mans Cup",
      "LMP3",
      "Portimão",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "530mm",
      "exposure": "1/80",
      "aperture": "f/16.0",
      "iso": "ISO 64"
    },
    "thumb": "/assets/gallery/motorsport/circuit/team-virage-ligier-js-p320-lmp3-panning-le-mans-cup-portimao-thumb.webp"
  },
  {
    "id": "ms-circuit-13",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "GetSpeed Mercedes-AMG GT3 Evo #17 Night Racing with Glowing Brake Discs at Portimão",
    "titlePt": "Mercedes-AMG GT3 Evo #17 da GetSpeed em Corrida Noturna com Travões Incandescentes em Portimão",
    "location": "Circuit Track",
    "date": "2026-10-17",
    "image": "/assets/gallery/motorsport/circuit/getspeed-mercedes-amg-gt3-night-glowing-brakes-portimao.webp",
    "tags": [
      "GT3",
      "Night Race",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "180mm",
      "exposure": "1/100",
      "aperture": "f/6.3",
      "iso": "ISO 12800"
    },
    "thumb": "/assets/gallery/motorsport/circuit/getspeed-mercedes-amg-gt3-night-glowing-brakes-portimao-thumb.webp"
  },
  {
    "id": "ms-circuit-14",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Winward Racing Mann-Filter Mercedes-AMG GT3 #48 Sunset Panning at Autódromo Internacional do Algarve",
    "titlePt": "Panning ao Pôr do Sol do Mercedes-AMG GT3 #48 Mann-Filter da Winward Racing no Autódromo Internacional do Algarve",
    "location": "Circuit Track",
    "date": "2026-10-17",
    "image": "/assets/gallery/motorsport/circuit/winward-racing-mann-filter-mercedes-amg-gt3-sunset-panning-portimao.webp",
    "tags": [
      "GT3",
      "Panning",
      "Sunset",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/20",
      "aperture": "f/18.0",
      "iso": "ISO 64"
    },
    "thumb": "/assets/gallery/motorsport/circuit/winward-racing-mann-filter-mercedes-amg-gt3-sunset-panning-portimao-thumb.webp"
  },
  {
    "id": "ms-circuit-15",
    "category": "motorsport",
    "subCategory": "circuit",
    "titleEn": "Racing Driver Portrait with Grid Walk Reflection in Sunglasses at ELMS Portimão",
    "titlePt": "Retrato de Piloto com Reflexo da Grelha de Partida nos Óculos de Sol no ELMS em Portimão",
    "location": "Autódromo Internacional do Algarve, Portimão",
    "date": "2026-10-10",
    "image": "/assets/gallery/motorsport/circuit/elms-racing-driver-grid-walk-sunglasses-reflection-portimao.webp",
    "tags": [
      "ELMS",
      "LMP",
      "Portimão",
      "Circuit"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "240mm",
      "exposure": "1/1250",
      "aperture": "f/6.3",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/motorsport/circuit/elms-racing-driver-grid-walk-sunglasses-reflection-portimao-thumb.webp"
  },
  {
    "id": "ms-rally-1",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "AutoAçoreana Toyota GR Yaris Rally2 Kicking Up Gravel Spray on Special Stage",
    "titlePt": "Toyota GR Yaris Rally2 AutoAçoreana a Levantar Pedras e Poeira em Classificativa de Rali",
    "location": "Rally Special Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally2-autoacoreana-gravel-spray-panning.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally2-autoacoreana-gravel-spray-panning-thumb.webp"
  },
  {
    "id": "ms-rally-2",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Renault Clio RS Ragnotti #32 Cornering on Tarmac in Front of Fans at Rali de Santo Tirso",
    "titlePt": "Renault Clio RS Ragnotti #32 a Curvar em Asfalto Perante o Público no Rali de Santo Tirso",
    "location": "Gravel Rally Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/renault-clio-rs-ragnotti-tarmac-cornering-rali-santo-tirso.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/renault-clio-rs-ragnotti-tarmac-cornering-rali-santo-tirso-thumb.webp"
  },
  {
    "id": "ms-rally-3",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Sami Pajari Toyota GR Yaris Rally1 Sliding Through Forest Gravel Stage at WRC Rally de Portugal",
    "titlePt": "Sami Pajari em Toyota GR Yaris Rally1 a Derrapar em Troço Florestal de Terra no WRC Vodafone Rally de Portugal",
    "location": "Fafe Rally Jump",
    "date": "2025-05-19",
    "image": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally1-sami-pajari-forest-stage-rally-portugal.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally1-sami-pajari-forest-stage-rally-portugal-thumb.webp"
  },
  {
    "id": "ms-rally-4",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Toyota GR Yaris Rally1 Airborne Over the Iconic Fafe Jump at WRC Rally de Portugal",
    "titlePt": "Toyota GR Yaris Rally1 em Voo no Mítico Salto de Fafe no WRC Vodafone Rally de Portugal",
    "location": "Tarmac Rally Stage",
    "date": "2025-04-12",
    "image": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally1-fafe-jump-airborne-wrc-rally-portugal.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/toyota-gr-yaris-rally1-fafe-jump-airborne-wrc-rally-portugal-thumb.webp"
  },
  {
    "id": "ms-rally-5",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Pedro Meireles Hyundai i20 N Rally2 Racing Through Historic Cobblestone Street Stage",
    "titlePt": "Pedro Meireles em Hyundai i20 N Rally2 a Correr em Super Especial Histórica de Calçada",
    "location": "Night Special Stage",
    "date": "2025-05-17",
    "image": "/assets/gallery/motorsport/rally/hyundai-i20-n-rally2-pedro-meireles-cobblestone-street-stage.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/hyundai-i20-n-rally2-pedro-meireles-cobblestone-street-stage-thumb.webp"
  },
  {
    "id": "ms-rally-6",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Diogo Marujo Škoda Fabia RS Rally2 Sliding Around Hay-Bale Chicane on Cobblestone Stage",
    "titlePt": "Diogo Marujo em Škoda Fabia RS Rally2 a Derrapar na Chicane em Super Especial de Calçada",
    "location": "Gravel Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/skoda-fabia-rs-rally2-diogo-marujo-chicane-slide-super-special.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/skoda-fabia-rs-rally2-diogo-marujo-chicane-slide-super-special-thumb.webp"
  },
  {
    "id": "ms-rally-7",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Adrien Fourmaux Hyundai i20 N Rally1 Charging Through Forest Gravel Corner at WRC Rally de Portugal",
    "titlePt": "Adrien Fourmaux em Hyundai i20 N Rally1 ao Ataque numa Curva Florestal no WRC Rally de Portugal",
    "location": "Rally Service Park",
    "date": "2025-05-17",
    "image": "/assets/gallery/motorsport/rally/adrien-fourmaux-hyundai-i20-n-rally1-forest-corner-wrc-rally-portugal.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/adrien-fourmaux-hyundai-i20-n-rally1-forest-corner-wrc-rally-portugal-thumb.webp"
  },
  {
    "id": "ms-rally-8",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Armindo Araújo Škoda Fabia RS Rally2 Kicking Up a Massive Dust Cloud at Rali Terras d'Aboboreira",
    "titlePt": "Armindo Araújo em Škoda Fabia RS Rally2 a Levantar uma Nuvem de Poeira no Rali Terras d'Aboboreira",
    "location": "Forest Rally Stage",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/rally/armindo-araujo-skoda-fabia-rs-rally2-dust-cloud-terras-aboboreira.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/armindo-araujo-skoda-fabia-rs-rally2-dust-cloud-terras-aboboreira-thumb.webp"
  },
  {
    "id": "ms-rally-9",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Castrol Lancia Ypsilon Rally4 HF #27 Cornering on Mountain Gravel Stage at Rali Terras d'Aboboreira",
    "titlePt": "Lancia Ypsilon Rally4 HF #27 Castrol em Curva de Terra na Serra no Rali Terras d'Aboboreira",
    "location": "Rally Spectator Zone",
    "date": "2025-05-19",
    "image": "/assets/gallery/motorsport/rally/lancia-ypsilon-rally4-hf-castrol-gravel-stage-terras-aboboreira.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rally/lancia-ypsilon-rally4-hf-castrol-gravel-stage-terras-aboboreira-thumb.webp"
  },
  {
    "id": "ms-rally-10",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Pablo Sarrazin Lancia Ypsilon Rally4 HF Speeding Through Sunlit Forest Gravel Stage at ERC Fafe",
    "titlePt": "Pablo Sarrazin em Lancia Ypsilon Rally4 HF a Fundo em Troço Florestal de Terra no ERC Fafe",
    "location": "ERC Rally Stage",
    "date": "2026-10-24",
    "image": "/assets/gallery/motorsport/rally/pablo-sarrazin-lancia-ypsilon-rally4-hf-forest-dust-erc-fafe.webp",
    "tags": [
      "ERC",
      "Rally",
      "Drift"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "43mm",
      "exposure": "1/250",
      "aperture": "f/5.0",
      "iso": "ISO 64"
    },
    "thumb": "/assets/gallery/motorsport/rally/pablo-sarrazin-lancia-ypsilon-rally4-hf-forest-dust-erc-fafe-thumb.webp"
  },
  {
    "id": "ms-rally-11",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Miko Marczyk Orlen Škoda Fabia RS Rally2 Flying High Over the Fafe Jump in FIA ERC",
    "titlePt": "Miko Marczyk em Škoda Fabia RS Rally2 Orlen a Voar no Salto de Fafe no Campeonato Europeu de Ralis ERC",
    "location": "ERC Rally Stage",
    "date": "2026-10-25",
    "image": "/assets/gallery/motorsport/rally/miko-marczyk-skoda-fabia-rs-rally2-fafe-jump-erc-rally.webp",
    "tags": [
      "ERC",
      "Rally",
      "Apex"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "70.0-200.0 mm f/2.8",
      "focalLength": "70mm",
      "exposure": "1/2500",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/motorsport/rally/miko-marczyk-skoda-fabia-rs-rally2-fafe-jump-erc-rally-thumb.webp"
  },
  {
    "id": "ms-rally-12",
    "category": "motorsport",
    "subCategory": "rally",
    "titleEn": "Citroën C3 Rally2 #51 Charging Down Mountain Gravel Stage Under Pirelli Arch at ERC Fafe",
    "titlePt": "Citroën C3 Rally2 #51 em Alta Velocidade na Classificativa de Montanha sob o Pórtico Pirelli no ERC Fafe",
    "location": "ERC Rally Stage",
    "date": "2026-10-25",
    "image": "/assets/gallery/motorsport/rally/citroen-c3-rally2-pirelli-arch-mountain-stage-erc-fafe.webp",
    "tags": [
      "ERC",
      "Rally",
      "Cornering"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "70.0-200.0 mm f/2.8",
      "focalLength": "150mm",
      "exposure": "1/1000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/motorsport/rally/citroen-c3-rally2-pirelli-arch-mountain-stage-erc-fafe-thumb.webp"
  },
  {
    "id": "ms-rx-1",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Renault Clio and Ford Fiesta Gravel Battle at CPRx Montalegre",
    "titlePt": "Disputa na Terra entre Renault Clio e Ford Fiesta no CPRx Montalegre",
    "location": "Pista Automóvel de Montalegre",
    "date": "2025-07-26",
    "image": "/assets/gallery/motorsport/rallycross/renault-clio-ford-fiesta-gravel-battle-cprx-montalegre.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/renault-clio-ford-fiesta-gravel-battle-cprx-montalegre-thumb.webp"
  },
  {
    "id": "ms-rx-2",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Johan Kristoffersson Red Bull Volkswagen Polo RX1 Taking Checkered Flag at Euro RX",
    "titlePt": "Johan Kristoffersson em Volkswagen Polo RX1 Red Bull a Cortar a Meta no Euro RX",
    "location": "Euro RX Circuit",
    "date": "2025-09-12",
    "image": "/assets/gallery/motorsport/rallycross/johan-kristoffersson-vw-polo-rx1-red-bull-checkered-flag-euro-rx.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/johan-kristoffersson-vw-polo-rx1-red-bull-checkered-flag-euro-rx-thumb.webp"
  },
  {
    "id": "ms-rx-3",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Oliver Bennett Xite Energy MINI Cooper RX1 Panning Past Portuguese Flag at Montalegre",
    "titlePt": "Panning do MINI Cooper RX1 Xite Energy de Oliver Bennett com Bandeira de Portugal em Montalegre",
    "location": "Montalegre Circuit",
    "date": "2025-09-12",
    "image": "/assets/gallery/motorsport/rallycross/oliver-bennett-mini-cooper-rx1-xite-energy-portugal-flag-montalegre.webp",
    "tags": [
      "Joker Lap",
      "Strategy",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "430mm",
      "exposure": "1/80",
      "aperture": "f/9.0",
      "iso": "ISO 50"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/oliver-bennett-mini-cooper-rx1-xite-energy-portugal-flag-montalegre-thumb.webp"
  },
  {
    "id": "ms-rx-4",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Hyundai i20 RX Supercars Sliding Over Dirt Transition in Front of Packed Grandstands at Montalegre",
    "titlePt": "Supercars Hyundai i20 RX na Transição de Terra Perante Bancadas Cheias em Montalegre",
    "location": "Rallycross Track",
    "date": "2025-04-27",
    "image": "/assets/gallery/motorsport/rallycross/hyundai-i20-rx-supercars-dirt-transition-montalegre-rallycross.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/hyundai-i20-rx-supercars-dirt-transition-montalegre-rallycross-thumb.webp"
  },
  {
    "id": "ms-rx-5",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Citroën Saxo Leading BMW E30 and 2WD Pack on Gravel at Lousada Rallycross",
    "titlePt": "Citroën Saxo na Frente de BMW E30 e Pelotão 2WD na Terra em Lousada",
    "location": "Montalegre RX",
    "date": "2025-03-29",
    "image": "/assets/gallery/motorsport/rallycross/citroen-saxo-bmw-e30-gravel-pack-battle-lousada-rallycross.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/citroen-saxo-bmw-e30-gravel-pack-battle-lousada-rallycross-thumb.webp"
  },
  {
    "id": "ms-rx-6",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Wide-Angle Panning of Peugeot 208 Rallycross Car Drifting Through Tarmac Hairpin at Montalegre",
    "titlePt": "Panning Grande Angular de Peugeot 208 Rallycross em Drift no Gancho de Asfalto em Montalegre",
    "location": "Montalegre RX",
    "date": "2025-06-27",
    "image": "/assets/gallery/motorsport/rallycross/peugeot-208-rx-wide-angle-hairpin-drift-montalegre.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/peugeot-208-rx-wide-angle-hairpin-drift-montalegre-thumb.webp"
  },
  {
    "id": "ms-rx-7",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Three-Wide Peugeot 208 Rallycross Battle in Front of Massive Crowd at Lousada",
    "titlePt": "Tripla de Peugeot 208 Lado a Lado Perante Multidão na Pista da Costilha em Lousada",
    "location": "Euro RX Stage",
    "date": "2025-03-29",
    "image": "/assets/gallery/motorsport/rallycross/three-wide-peugeot-208-battle-lousada-rallycross-crowd.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/three-wide-peugeot-208-battle-lousada-rallycross-crowd-thumb.webp"
  },
  {
    "id": "ms-rx-8",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Panike Peugeot 208 Leading Ford Fiesta Out of Dust Cloud in Rallycross Heat",
    "titlePt": "Peugeot 208 Panike na Frente de Ford Fiesta a Sair da Nuvem de Poeira no Rallycross",
    "location": "RX Final",
    "date": "2025-06-27",
    "image": "/assets/gallery/motorsport/rallycross/peugeot-208-panike-leading-ford-fiesta-dust-rallycross.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/peugeot-208-panike-leading-ford-fiesta-dust-rallycross-thumb.webp"
  },
  {
    "id": "ms-rx-9",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Škoda Fabia Rallycross Car Speeding Under Iconic Montalegre Start Gantry",
    "titlePt": "Škoda Fabia de Rallycross a Passar Sob o Pórtico de Partida de Montalegre",
    "location": "Montalegre Paddock",
    "date": "2025-04-27",
    "image": "/assets/gallery/motorsport/rallycross/skoda-fabia-rx-under-montalegre-start-gantry.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/rallycross/skoda-fabia-rx-under-montalegre-start-gantry-thumb.webp"
  },
  {
    "id": "ms-rx-10",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Slow-Shutter Speed Panning of Ford Fiesta Rallycross Car at CPRx Lousada",
    "titlePt": "Panning de Baixa Velocidade de Ford Fiesta no Campeonato de Portugal de Rallycross em Lousada",
    "location": "Pista de Costilha, Lousada",
    "date": "2026-10-04",
    "image": "/assets/gallery/motorsport/rallycross/ford-fiesta-rx-slow-shutter-panning-cprx-lousada.webp",
    "tags": [
      "Lousada",
      "Panning",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "120mm",
      "exposure": "1/20",
      "aperture": "f/14.0",
      "iso": "ISO 50"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/ford-fiesta-rx-slow-shutter-panning-cprx-lousada-thumb.webp"
  },
  {
    "id": "ms-rx-11",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Focused FIA Euro RX3 Driver Portrait in Paddock at Lousada Rallycross",
    "titlePt": "Retrato de Piloto FIA Euro RX3 Focado no Paddock em Lousada",
    "location": "Euro RX Lousada Circuit",
    "date": "2026-10-04",
    "image": "/assets/gallery/motorsport/rallycross/euro-rx3-driver-bell-helmet-paddock-portrait-lousada.webp",
    "tags": [
      "Lousada",
      "CPRx",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/6400",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/euro-rx3-driver-bell-helmet-paddock-portrait-lousada-thumb.webp"
  },
  {
    "id": "ms-rx-12",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Rallycross Driver Celebrating Victory in Front of Cheering Crowd at Lousada",
    "titlePt": "Piloto de Rallycross a Celebrar Vitória Perante Bancada em Festa em Lousada",
    "location": "Pista de Costilha, Lousada",
    "date": "2026-10-04",
    "image": "/assets/gallery/motorsport/rallycross/rallycross-driver-victory-celebration-crowd-cprx-lousada.webp",
    "tags": [
      "Lousada",
      "Supercars",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "155mm",
      "exposure": "1/500",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/rallycross-driver-victory-celebration-crowd-cprx-lousada-thumb.webp"
  },
  {
    "id": "ms-rx-13",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Hansen Supercar Attacking Inside Kerb at Golden Hour During RallyX Global Final",
    "titlePt": "Supercar da Hansen a Atacar o Corretor ao Pôr do Sol na Final Global do RallyX",
    "location": "Rallycross Circuit",
    "date": "2026-10-24",
    "image": "/assets/gallery/motorsport/rallycross/hansen-fc2-supercar-kerb-attack-sunset-rallyx-montalegre.webp",
    "tags": [
      "RallyX",
      "Supercars",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "180mm",
      "exposure": "1/5000",
      "aperture": "f/5.6",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/hansen-fc2-supercar-kerb-attack-sunset-rallyx-montalegre-thumb.webp"
  },
  {
    "id": "ms-rx-14",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "RallyX Cars Battling on Gravel Under Fiery Orange Sunset Sky in Montalegre",
    "titlePt": "Carros do RallyX em Disputa na Terra Sob Céu Laranja de Pôr do Sol em Montalegre",
    "location": "Rallycross Circuit",
    "date": "2026-10-24",
    "image": "/assets/gallery/motorsport/rallycross/rallyx-supercars-racing-under-fiery-sunset-sky-montalegre.webp",
    "tags": [
      "RallyX",
      "Dusk",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/1250",
      "aperture": "f/2.8",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/rallyx-supercars-racing-under-fiery-sunset-sky-montalegre-thumb.webp"
  },
  {
    "id": "ms-rx-15",
    "category": "motorsport",
    "subCategory": "rallycross",
    "titleEn": "Tiago Costa Sliding FIA RX5 Crosskart on Dirt Under Night Floodlights at Euro RX",
    "titlePt": "Tiago Costa em Derrapagem Noturna de Kartcross FIA RX5 na Terra no Euro RX",
    "location": "Euro RX Circuit",
    "date": "2026-09-11",
    "image": "/assets/gallery/motorsport/rallycross/tiago-costa-fia-rx5-kartcross-night-dirt-slide-euro-rx.webp",
    "tags": [
      "Euro RX",
      "Supercars",
      "Rallycross"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/125",
      "aperture": "f/6.3",
      "iso": "ISO 6400"
    },
    "thumb": "/assets/gallery/motorsport/rallycross/tiago-costa-fia-rx5-kartcross-night-dirt-slide-euro-rx-thumb.webp"
  },
  {
    "id": "ms-karting-1",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Birel ART Kart Leading Tight Pack Into First Corner in National Karting Championship",
    "titlePt": "Kart Birel ART a Liderar Pelotão Compacto na Primeira Curva do Campeonato de Karting",
    "location": "Kartódromo do Porto / Braga",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/birel-art-leading-karting-pack-first-corner-championship.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/birel-art-leading-karting-pack-first-corner-championship-thumb.webp"
  },
  {
    "id": "ms-karting-2",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Green Pita Kart Leading Three-Kart Train Through Fast Corner at Karting Championship",
    "titlePt": "Kart Pita Verde a Liderar Trio em Curva Rápida no Campeonato de Karting",
    "location": "Kartódromo",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/pita-kart-313-leading-trio-cornering-karting-championship.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/pita-kart-313-leading-trio-cornering-karting-championship-thumb.webp"
  },
  {
    "id": "ms-karting-3",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Close-Up Portrait of Karting Driver Fastening Helmet on Pre-Grid",
    "titlePt": "Retrato de Piloto de Karting a Apertar o Capacete na Pré-Grelha",
    "location": "Kart Track",
    "date": "2026-03-01",
    "image": "/assets/gallery/motorsport/karting/karting-driver-d-marujo-fastening-helmet-pre-grid-portrait.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/karting-driver-d-marujo-fastening-helmet-pre-grid-portrait-thumb.webp"
  },
  {
    "id": "ms-karting-4",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Intense Close-Up Portrait of Maranello Kart Driver Looking Through Helmet Visor",
    "titlePt": "Retrato Intenso de Piloto em Kart Maranello com Olhar Focado Pela Viseira",
    "location": "Kartódromo",
    "date": "2026-03-07",
    "image": "/assets/gallery/motorsport/karting/maranello-kart-driver-intense-eyes-helmet-visor-portrait.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/maranello-kart-driver-intense-eyes-helmet-visor-portrait-thumb.webp"
  },
  {
    "id": "ms-karting-5",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Kart Republic Teammates Sharing Helmet Touch and Handshake After Race",
    "titlePt": "Pilotos Kart Republic em Cumprimento de Desportivismo Após a Corrida",
    "location": "Pre-Grid",
    "date": "2026-03-08",
    "image": "/assets/gallery/motorsport/karting/kart-republic-drivers-helmet-touch-handshake-sportsmanship.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/kart-republic-drivers-helmet-touch-handshake-sportsmanship-thumb.webp"
  },
  {
    "id": "ms-karting-6",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "High-Speed Trackside Panning of Racing Kart #233 at Full Throttle",
    "titlePt": "Panning de Alta Velocidade do Kart #233 a Fundo em Pista",
    "location": "Kart Circuit",
    "date": "2026-03-08",
    "image": "/assets/gallery/motorsport/karting/kart-233-high-speed-panning-motion-blur-circuit.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/kart-233-high-speed-panning-motion-blur-circuit-thumb.webp"
  },
  {
    "id": "ms-karting-7",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Birel ART Kart Leading Rotax Max Pack Under Rotax Racing Arch at Braga",
    "titlePt": "Kart Birel ART a Liderar Pelotão Sob o Pórtico Rotax Racing no Kartódromo de Braga",
    "location": "Kart Track",
    "date": "2026-03-22",
    "image": "/assets/gallery/motorsport/karting/rotax-max-birel-art-pack-start-straight-braga.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/rotax-max-birel-art-pack-start-straight-braga-thumb.webp"
  },
  {
    "id": "ms-karting-8",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Side-Profile Speed Panning of Birel ART Kart #475 Racing Along Main Straight",
    "titlePt": "Panning Lateral de Velocidade do Kart Birel ART #475 na Reta da Meta",
    "location": "Karting Podium",
    "date": "2026-03-23",
    "image": "/assets/gallery/motorsport/karting/birel-art-kart-475-side-profile-speed-panning.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/birel-art-kart-475-side-profile-speed-panning-thumb.webp"
  },
  {
    "id": "ms-karting-9",
    "category": "motorsport",
    "subCategory": "karting",
    "titleEn": "Head-On Telephoto Shot of Rotax Max Kart #669 Defending Lead in Tight Battle",
    "titlePt": "Plano Frontal de Teleobjetiva do Kart Rotax Max #669 a Defender a Liderança",
    "location": "Karting Track",
    "date": "2026-03-21",
    "image": "/assets/gallery/motorsport/karting/rotax-max-kart-669-leading-pack-head-on-braga.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/karting/rotax-max-kart-669-leading-pack-head-on-braga-thumb.webp"
  },
  {
    "id": "ms-hill-1",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Classic Red Alfa Romeo Giulia GTA Panning Past Spectators at Rampa do Caramulo",
    "titlePt": "Panning de Alfa Romeo Giulia GTA Clássico Entre o Público na Rampa do Caramulo",
    "location": "Serra do Caramulo",
    "date": "2025-09-06",
    "image": "/assets/gallery/motorsport/hillclimb/classic-alfa-romeo-gta-panning-through-crowd-rampa-caramulo.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/classic-alfa-romeo-gta-panning-through-crowd-rampa-caramulo-thumb.webp"
  },
  {
    "id": "ms-hill-2",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Martini Racing Lancia Rally 037 Cornering at Rampa Histórica do Caramulo",
    "titlePt": "Lancia Rally 037 Martini Racing em Curva na Rampa Histórica do Caramulo",
    "location": "Rampa do Caramulo",
    "date": "2025-09-06",
    "image": "/assets/gallery/motorsport/hillclimb/lancia-037-martini-racing-cornering-rampa-do-caramulo.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/lancia-037-martini-racing-cornering-rampa-do-caramulo-thumb.webp"
  },
  {
    "id": "ms-hill-3",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Suzuki Swift Hillclimb Car Charging Up Dappled Forest Road at Rampa da Falperra",
    "titlePt": "Suzuki Swift de Montanha em Subida Rápida na Floresta da Rampa da Falperra",
    "location": "Rampa da Falperra, Braga",
    "date": "2025-05-16",
    "image": "/assets/gallery/motorsport/hillclimb/suzuki-swift-proto-hillclimb-attack-rampa-da-falperra.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/suzuki-swift-proto-hillclimb-attack-rampa-da-falperra-thumb.webp"
  },
  {
    "id": "ms-hill-4",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Close-Up Detail of Pirelli P Zero Slick Tyre and Rear Wing on Hillclimb Prototype",
    "titlePt": "Detalhe de Pneu Slick Pirelli P Zero e Asa Traseira de Protótipo de Montanha",
    "location": "Falperra Hillclimb",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/hillclimb/hillclimb-prototype-pirelli-pzero-slick-tyre-rear-wing-detail.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/hillclimb-prototype-pirelli-pzero-slick-tyre-rear-wing-detail-thumb.webp"
  },
  {
    "id": "ms-hill-5",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Hillclimb Driver Fastening Stilo Helmet in Paddock Before Rampa da Falperra Run",
    "titlePt": "Piloto de Montanha a Ajustar Capacete Stilo Antes da Subida na Rampa da Falperra",
    "location": "Hillclimb Course",
    "date": "2025-05-16",
    "image": "/assets/gallery/motorsport/hillclimb/hillclimb-driver-repsol-helmet-preparation-portrait-falperra.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/hillclimb-driver-repsol-helmet-preparation-portrait-falperra-thumb.webp"
  },
  {
    "id": "ms-hill-6",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Single-Seater Formula Hillclimb Car Accelerating Up Mountain Road at Rampa da Falperra",
    "titlePt": "Monolugar de Montanha em Aceleração na Subida da Rampa da Falperra",
    "location": "Braga, Portugal",
    "date": "2025-05-18",
    "image": "/assets/gallery/motorsport/hillclimb/single-seater-formula-hillclimb-car-accelerating-rampa-da-falperra.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/single-seater-formula-hillclimb-car-accelerating-rampa-da-falperra-thumb.webp"
  },
  {
    "id": "ms-hill-7",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Subaru Impreza WRX STI Speeding Through Lush Green Forest Canopy on Hillclimb Stage",
    "titlePt": "Subaru Impreza WRX STI a Subir Entre a Vegetação da Floresta em Rampa de Montanha",
    "location": "Mountain Stage",
    "date": "2025-04-26",
    "image": "/assets/gallery/motorsport/hillclimb/subaru-impreza-wrx-sti-forest-climb-hillclimb-stage.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/subaru-impreza-wrx-sti-forest-climb-hillclimb-stage-thumb.webp"
  },
  {
    "id": "ms-hill-8",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Peugeot 106 Cornering Around Rocky Mountain Hairpin at Rampa Capital do Móvel",
    "titlePt": "Peugeot 106 a Descrever Curva Junto à Encosta Rochosa na Rampa Capital do Móvel",
    "location": "Paços de Ferreira",
    "date": "2025-07-19",
    "image": "/assets/gallery/motorsport/hillclimb/peugeot-106-rocky-hairpin-corner-rampa-capital-do-movel.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/peugeot-106-rocky-hairpin-corner-rampa-capital-do-movel-thumb.webp"
  },
  {
    "id": "ms-hill-9",
    "category": "motorsport",
    "subCategory": "hillclimb",
    "titleEn": "Gold Sports Prototype Attacking Chicane at Rampa Capital do Móvel in Paços de Ferreira",
    "titlePt": "Protótipo Desportivo Dourado a Atacar a Chicane na Rampa Capital do Móvel",
    "location": "Capital do Móvel",
    "date": "2025-07-19",
    "image": "/assets/gallery/motorsport/hillclimb/solar-da-pena-sports-prototype-chicane-rampa-capital-do-movel.webp",
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
    },
    "thumb": "/assets/gallery/motorsport/hillclimb/solar-da-pena-sports-prototype-chicane-rampa-capital-do-movel-thumb.webp"
  },
  {
    "id": "sp-1",
    "category": "sports",
    "titleEn": "Road Cycling Peloton Cornering at High Speed",
    "titlePt": "Pelotão de Ciclismo de Estrada a Curvar em Alta Velocidade",
    "location": "Portugal Road Race",
    "date": "2025-03-16",
    "image": "/assets/gallery/sports/road-cycling-peloton-cornering-portugal.webp",
    "tags": [
      "Cycling",
      "Peloton",
      "Road Race"
    ],
    "exif": {
      "camera": "Nikon D3400",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "38mm",
      "exposure": "1/1250",
      "aperture": "f/4.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/sports/road-cycling-peloton-cornering-portugal-thumb.webp"
  },
  {
    "id": "sp-2",
    "category": "sports",
    "titleEn": "Efapel Cycling Rider in Individual Time Trial at Volta a Portugal",
    "titlePt": "Ciclista da Efapel Cycling em Contrarrelógio na Volta a Portugal",
    "location": "Volta a Portugal",
    "date": "2025-08-06",
    "image": "/assets/gallery/sports/efapel-cycling-time-trial-volta-a-portugal.webp",
    "tags": [
      "Cycling",
      "Time Trial",
      "Volta a Portugal"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-210.0 mm f/4.0",
      "focalLength": "70mm",
      "exposure": "1/125",
      "aperture": "f/18.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/sports/efapel-cycling-time-trial-volta-a-portugal-thumb.webp"
  },
  {
    "id": "sp-3",
    "category": "sports",
    "titleEn": "Caja Rural-Seguros RGA Breakaway Climb at Volta a Portugal",
    "titlePt": "Fuga em Subida da Caja Rural-Seguros RGA na Volta a Portugal",
    "location": "Volta a Portugal",
    "date": "2025-08-07",
    "image": "/assets/gallery/sports/caja-rural-cycling-breakaway-climb-volta-a-portugal.webp",
    "tags": [
      "Cycling",
      "Breakaway",
      "Volta a Portugal"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-210.0 mm f/4.0",
      "focalLength": "140mm",
      "exposure": "1/160",
      "aperture": "f/7.1",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/sports/caja-rural-cycling-breakaway-climb-volta-a-portugal-thumb.webp"
  },
  {
    "id": "sp-4",
    "category": "sports",
    "titleEn": "CF Oliveira do Douro Youth Footballer On-Pitch Focus",
    "titlePt": "Foco em Campo de Jovem Futebolista do CF Oliveira do Douro",
    "location": "Vila Nova de Gaia",
    "date": "2026-02-28",
    "image": "/assets/gallery/sports/cf-oliveira-do-douro-youth-football-match-focus.webp",
    "tags": [
      "Football",
      "Youth",
      "Oliveira do Douro"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/1000",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/sports/cf-oliveira-do-douro-youth-football-match-focus-thumb.webp"
  },
  {
    "id": "sp-5",
    "category": "sports",
    "titleEn": "CF Oliveira do Douro Football Player Golden Hour Profile",
    "titlePt": "Perfil ao Pôr do Sol de Jogador do CF Oliveira do Douro",
    "location": "Vila Nova de Gaia",
    "date": "2026-02-28",
    "image": "/assets/gallery/sports/cf-oliveira-do-douro-football-player-sunset-portrait.webp",
    "tags": [
      "Football",
      "Portrait",
      "Golden Hour"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "VR 70-200mm f/2.8E",
      "focalLength": "200mm",
      "exposure": "1/200",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/sports/cf-oliveira-do-douro-football-player-sunset-portrait-thumb.webp"
  },
  {
    "id": "sp-6",
    "category": "sports",
    "titleEn": "CF Oliveira do Douro Women's Footballer Sprinting After the Ball",
    "titlePt": "Jogadora de Futebol Feminino do CF Oliveira do Douro em Sprint",
    "location": "Vila Nova de Gaia",
    "date": "2026-03-14",
    "image": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-wing-sprint.webp",
    "tags": [
      "Women's Football",
      "Sprint",
      "Action"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "70.0-200.0 mm f/2.8",
      "focalLength": "200mm",
      "exposure": "1/400",
      "aperture": "f/2.8",
      "iso": "ISO 200"
    },
    "thumb": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-wing-sprint-thumb.webp"
  },
  {
    "id": "sp-7",
    "category": "sports",
    "titleEn": "CF Oliveira do Douro Women's Football Team Goal Celebration",
    "titlePt": "Celebração de Golo da Equipa Feminina do CF Oliveira do Douro",
    "location": "Vila Nova de Gaia",
    "date": "2025-09-10",
    "image": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-goal-celebration.webp",
    "tags": [
      "Women's Football",
      "Goal Celebration",
      "Teamwork"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "180mm",
      "exposure": "1/1250",
      "aperture": "f/6.3",
      "iso": "ISO 400"
    },
    "thumb": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-goal-celebration-thumb.webp"
  },
  {
    "id": "sp-8",
    "category": "sports",
    "titleEn": "CF Oliveira do Douro Women's Football Player Composure on Pitch",
    "titlePt": "Jogadora do CF Oliveira do Douro em Campo durante Jogo Oficial",
    "location": "Vila Nova de Gaia",
    "date": "2025-09-12",
    "image": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-player-pitch.webp",
    "tags": [
      "Women's Football",
      "Match",
      "Oliveira do Douro"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "550mm",
      "exposure": "1/400",
      "aperture": "f/6.3",
      "iso": "ISO 400"
    },
    "thumb": "/assets/gallery/sports/cf-oliveira-do-douro-womens-football-player-pitch-thumb.webp"
  },
  {
    "id": "sp-9",
    "category": "sports",
    "titleEn": "Football Head Coach Addressing Players in Team Huddle",
    "titlePt": "Treinador de Futebol a Discursar na Roda da Equipa",
    "location": "Vila Nova de Gaia",
    "date": "2025-09-15",
    "image": "/assets/gallery/sports/football-head-coach-team-huddle-talk.webp",
    "tags": [
      "Football",
      "Coaching",
      "Leadership"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "350mm",
      "exposure": "1/320",
      "aperture": "f/7.1",
      "iso": "ISO 400"
    },
    "thumb": "/assets/gallery/sports/football-head-coach-team-huddle-talk-thumb.webp"
  },
  {
    "id": "sp-10",
    "category": "sports",
    "titleEn": "AVS SAD Striker Rodrigo Pinho Facing FC Vizela in Liga Portugal",
    "titlePt": "Rodrigo Pinho do AVS SAD Frente ao FC Vizela na Liga Portugal",
    "location": "Estádio do CD das Aves",
    "date": "2026-11-06",
    "image": "/assets/gallery/sports/avs-sad-vs-fc-vizela-rodrigo-pinho-liga-portugal.webp",
    "tags": [
      "Liga Portugal",
      "AVS SAD",
      "FC Vizela"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/1000",
      "aperture": "f/6.3",
      "iso": "ISO 6400"
    },
    "thumb": "/assets/gallery/sports/avs-sad-vs-fc-vizela-rodrigo-pinho-liga-portugal-thumb.webp"
  },
  {
    "id": "sp-11",
    "category": "sports",
    "titleEn": "AVS SAD Winger Dribbling Down the Line Against FC Vizela",
    "titlePt": "Jogador do AVS SAD em Progressão com Bola Frente ao FC Vizela",
    "location": "Estádio do CD das Aves",
    "date": "2026-11-06",
    "image": "/assets/gallery/sports/avs-sad-vs-fc-vizela-winger-dribbling-action.webp",
    "tags": [
      "Football",
      "AVS SAD",
      "Liga Portugal"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "220mm",
      "exposure": "1/1000",
      "aperture": "f/6.3",
      "iso": "ISO 6400"
    },
    "thumb": "/assets/gallery/sports/avs-sad-vs-fc-vizela-winger-dribbling-action-thumb.webp"
  },
  {
    "id": "sp-12",
    "category": "sports",
    "titleEn": "AVS SAD Midfielder Sprinting in the Rain Against FC Vizela",
    "titlePt": "Médio do AVS SAD em Sprint Debaixo de Chuva Frente ao FC Vizela",
    "location": "Estádio do CD das Aves",
    "date": "2026-11-06",
    "image": "/assets/gallery/sports/avs-sad-vs-fc-vizela-rain-night-match-sprint.webp",
    "tags": [
      "Rain",
      "AVS SAD",
      "FC Vizela"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "600mm",
      "exposure": "1/1000",
      "aperture": "f/6.3",
      "iso": "ISO 6400"
    },
    "thumb": "/assets/gallery/sports/avs-sad-vs-fc-vizela-rain-night-match-sprint-thumb.webp"
  },
  {
    "id": "au-1",
    "category": "automotive",
    "titleEn": "Classic Mercedes-Benz Three-Pointed Star Hood Ornament & Crest",
    "titlePt": "Detalhe da Estrela e Emblema Clássico Mercedes-Benz no Capô",
    "location": "Porto, Portugal",
    "date": "2026-02-07",
    "image": "/assets/gallery/automotive/classic-mercedes-benz-hood-ornament-emblem-detail.webp",
    "tags": [
      "Mercedes-Benz",
      "Classic Car",
      "Emblem"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/125",
      "aperture": "f/2.0",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/automotive/classic-mercedes-benz-hood-ornament-emblem-detail-thumb.webp"
  },
  {
    "id": "au-2",
    "category": "automotive",
    "titleEn": "Classic Red Toyota AE86 Cockpit & Original Steering Wheel",
    "titlePt": "Cockpit e Volante Original de Toyota AE86 Clássico Vermelho",
    "location": "Porto, Portugal",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/classic-toyota-ae86-corolla-gt-cockpit-steering-wheel.webp",
    "tags": [
      "Toyota AE86",
      "Cockpit",
      "JDM Classic"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/250",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/automotive/classic-toyota-ae86-corolla-gt-cockpit-steering-wheel-thumb.webp"
  },
  {
    "id": "au-3",
    "category": "automotive",
    "titleEn": "Red Toyota MR2 SW20 Rear Wing & Dual Exhaust Stance",
    "titlePt": "Traseira e Spoiler de Toyota MR2 SW20 Vermelho",
    "location": "Porto, Portugal",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/red-toyota-mr2-sw20-rear-spoiler-stance.webp",
    "tags": [
      "Toyota MR2",
      "JDM",
      "Rear Stance"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1600",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/automotive/red-toyota-mr2-sw20-rear-spoiler-stance-thumb.webp"
  },
  {
    "id": "au-4",
    "category": "automotive",
    "titleEn": "Red Lancia Delta HF Integrale Rear Badge & Taillight Detail",
    "titlePt": "Detalhe do Emblema e Farol Traseiro de Lancia Delta HF Integrale",
    "location": "Porto, Portugal",
    "date": "2026-02-22",
    "image": "/assets/gallery/automotive/red-lancia-delta-hf-integrale-rear-badge-taillight.webp",
    "tags": [
      "Lancia Delta",
      "Integrale",
      "Rally Legend"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1000",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/automotive/red-lancia-delta-hf-integrale-rear-badge-taillight-thumb.webp"
  },
  {
    "id": "au-5",
    "category": "automotive",
    "titleEn": "Thunder Grey Toyota GT86 Rear Stance in Underground Garage",
    "titlePt": "Postura Traseira de Toyota GT86 Thunder Grey em Garagem Subterrânea",
    "location": "Porto, Portugal",
    "date": "2026-03-08",
    "image": "/assets/gallery/automotive/toyota-gt86-thunder-grey-underground-garage-rear.webp",
    "tags": [
      "Toyota GT86",
      "JDM",
      "Underground"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/25",
      "aperture": "f/2.0",
      "iso": "ISO 500"
    },
    "thumb": "/assets/gallery/automotive/toyota-gt86-thunder-grey-underground-garage-rear-thumb.webp"
  },
  {
    "id": "au-6",
    "category": "automotive",
    "titleEn": "Classic Red Toyota Starlet Front Grille & Headlights in Garage",
    "titlePt": "Frente e Faróis de Toyota Starlet Clássico Vermelho em Garagem",
    "location": "Porto, Portugal",
    "date": "2026-03-08",
    "image": "/assets/gallery/automotive/classic-red-toyota-starlet-ep70-headlights-garage.webp",
    "tags": [
      "Toyota Starlet",
      "Classic JDM",
      "Garage"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/160",
      "aperture": "f/2.0",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/automotive/classic-red-toyota-starlet-ep70-headlights-garage-thumb.webp"
  },
  {
    "id": "au-7",
    "category": "automotive",
    "titleEn": "Blue Subaru Impreza GT Turbo GC8 Front Stance at Car Meet",
    "titlePt": "Subaru Impreza GT Turbo GC8 Azul em Encontro Automóvel",
    "location": "Porto, Portugal",
    "date": "2025-11-14",
    "image": "/assets/gallery/automotive/blue-subaru-impreza-gt-turbo-gc8-front-stance.webp",
    "tags": [
      "Subaru Impreza",
      "GC8",
      "JDM"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/1600",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/automotive/blue-subaru-impreza-gt-turbo-gc8-front-stance-thumb.webp"
  },
  {
    "id": "au-8",
    "category": "automotive",
    "titleEn": "Black Porsche Boxster 981 Outside the Gibson Garage in London",
    "titlePt": "Porsche Boxster 981 Preto em Frente à Gibson Garage em Londres",
    "location": "Fitzrovia, London",
    "date": "2025-10-05",
    "image": "/assets/gallery/automotive/black-porsche-boxster-981-gibson-garage-london.webp",
    "tags": [
      "Porsche Boxster",
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
    },
    "thumb": "/assets/gallery/automotive/black-porsche-boxster-981-gibson-garage-london-thumb.webp"
  },
  {
    "id": "au-9",
    "category": "automotive",
    "titleEn": "Red Ferrari Purosangue Side Profile on a Mayfair Street in London",
    "titlePt": "Perfil Lateral de Ferrari Purosangue Vermelho em Mayfair, Londres",
    "location": "Mayfair, London",
    "date": "2025-10-05",
    "image": "/assets/gallery/automotive/red-ferrari-purosangue-mayfair-london-street-profile.webp",
    "tags": [
      "Ferrari Purosangue",
      "Mayfair",
      "London"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "44mm",
      "exposure": "1/500",
      "aperture": "f/2.8",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/automotive/red-ferrari-purosangue-mayfair-london-street-profile-thumb.webp"
  },
  {
    "id": "ae-1",
    "category": "artistic_events",
    "titleEn": "Black and White Eiffel Tower Framed by Winter Branches in Paris",
    "titlePt": "Torre Eiffel a Preto e Branco Enquadrada por Ramos de Inverno em Paris",
    "location": "Paris, France",
    "date": "2025-02-28",
    "image": "/assets/gallery/artistic_events/eiffel-tower-paris-black-and-white-winter-branches.webp",
    "tags": [
      "Paris",
      "Eiffel Tower",
      "Monochrome"
    ],
    "exif": {
      "camera": "Nikon D3400",
      "lens": "18.0-55.0 mm f/3.5-5.6",
      "focalLength": "18mm",
      "exposure": "1/100",
      "aperture": "f/4.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/artistic_events/eiffel-tower-paris-black-and-white-winter-branches-thumb.webp"
  },
  {
    "id": "ae-2",
    "category": "artistic_events",
    "titleEn": "Dramatic Soprano Vocalist with Harp and Piano on Concert Stage",
    "titlePt": "Cantora Lírica em Palco com Harpa e Piano em Concerto ao Vivo",
    "location": "Concert Hall, Portugal",
    "date": "2025-12-13",
    "image": "/assets/gallery/artistic_events/live-classical-vocalist-harp-piano-stage-concert.webp",
    "tags": [
      "Concert",
      "Stage Performance",
      "Live Music"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "17.0-50.0 mm f/2.8",
      "focalLength": "50mm",
      "exposure": "1/160",
      "aperture": "f/2.8",
      "iso": "ISO 1250"
    },
    "thumb": "/assets/gallery/artistic_events/live-classical-vocalist-harp-piano-stage-concert-thumb.webp"
  },
  {
    "id": "ae-3",
    "category": "artistic_events",
    "titleEn": "Igreja dos Santos Passos Night Long Exposure & Light Trails in Guimarães",
    "titlePt": "Longa Exposição Noturna da Igreja dos Santos Passos em Guimarães",
    "location": "Guimarães, Portugal",
    "date": "2026-01-17",
    "image": "/assets/gallery/artistic_events/igreja-santos-passos-guimaraes-night-long-exposure.webp",
    "tags": [
      "Guimarães",
      "Long Exposure",
      "Night Architecture"
    ],
    "exif": {
      "camera": "Nikon D7500",
      "lens": "35.0 mm f/1.8",
      "focalLength": "35mm",
      "exposure": "20.0s",
      "aperture": "f/13.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/artistic_events/igreja-santos-passos-guimaraes-night-long-exposure-thumb.webp"
  },
  {
    "id": "ae-4",
    "category": "artistic_events",
    "titleEn": "Cat Sheltering Under a Rain-Soaked VW New Beetle on Cobblestone Street",
    "titlePt": "Gato Abrigado Sob um VW New Beetle à Chuva em Rua de Calçada",
    "location": "Porto, Portugal",
    "date": "2026-01-28",
    "image": "/assets/gallery/artistic_events/stray-cat-under-rainy-vw-beetle-cobblestone-night.webp",
    "tags": [
      "Street Photography",
      "Night Rain",
      "Candid"
    ],
    "exif": {
      "camera": "Nikon 1 V1",
      "lens": "1 NIKKOR 18.5mm f/1.8",
      "focalLength": "19mm",
      "exposure": "1/100",
      "aperture": "f/1.8",
      "iso": "ISO 1600"
    },
    "thumb": "/assets/gallery/artistic_events/stray-cat-under-rainy-vw-beetle-cobblestone-night-thumb.webp"
  },
  {
    "id": "ae-5",
    "category": "artistic_events",
    "titleEn": "Vintage Bicycle by the Lima River and Eiffel Bridge in Viana do Castelo",
    "titlePt": "Bicicleta Clássica Junto ao Rio Lima e Ponte Eiffel em Viana do Castelo",
    "location": "Viana do Castelo, Portugal",
    "date": "2026-03-01",
    "image": "/assets/gallery/artistic_events/vintage-bicycle-lima-river-eiffel-bridge-viana-do-castelo.webp",
    "tags": [
      "Viana do Castelo",
      "Riverfront",
      "Minimalism"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 40mm f/2",
      "focalLength": "40mm",
      "exposure": "1/5000",
      "aperture": "f/2.0",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/artistic_events/vintage-bicycle-lima-river-eiffel-bridge-viana-do-castelo-thumb.webp"
  },
  {
    "id": "ae-6",
    "category": "artistic_events",
    "titleEn": "Dublin Custom House & River Liffey Night Reflections with Light Trails",
    "titlePt": "Reflexos Noturnos e Rastos de Luz no Rio Liffey e Custom House em Dublin",
    "location": "Dublin, Ireland",
    "date": "2025-08-20",
    "image": "/assets/gallery/artistic_events/dublin-custom-house-river-liffey-night-light-trails.webp",
    "tags": [
      "Dublin",
      "Long Exposure",
      "River Liffey"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "6.0s",
      "aperture": "f/5.6",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/artistic_events/dublin-custom-house-river-liffey-night-light-trails-thumb.webp"
  },
  {
    "id": "ae-7",
    "category": "artistic_events",
    "titleEn": "Candid Cyclist Riding Along a Tree-Lined Canal in Amsterdam",
    "titlePt": "Ciclista a Pedalar Junto aos Canais Arborizados de Amesterdão",
    "location": "Amsterdam, Netherlands",
    "date": "2025-06-05",
    "image": "/assets/gallery/artistic_events/amsterdam-canal-street-cyclist-spring-trees.webp",
    "tags": [
      "Amsterdam",
      "Street Photography",
      "Cycling Culture"
    ],
    "exif": {
      "camera": "Nikon Z6",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/1000",
      "aperture": "f/4.0",
      "iso": "ISO 800"
    },
    "thumb": "/assets/gallery/artistic_events/amsterdam-canal-street-cyclist-spring-trees-thumb.webp"
  },
  {
    "id": "ae-8",
    "category": "artistic_events",
    "titleEn": "Transavia Boeing 737-800 Climbing at Golden Hour Takeoff",
    "titlePt": "Boeing 737-800 da Transavia a Descolar à Hora Dourada",
    "location": "Porto Airport (OPO)",
    "date": "2025-09-18",
    "image": "/assets/gallery/artistic_events/transavia-boeing-737-800-takeoff-golden-hour.webp",
    "tags": [
      "Aviation",
      "Boeing 737",
      "Golden Hour"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "NIKKOR Z 180-600mm f/5.6-6.3 VR",
      "focalLength": "300mm",
      "exposure": "1/320",
      "aperture": "f/6.0",
      "iso": "ISO 5000"
    },
    "thumb": "/assets/gallery/artistic_events/transavia-boeing-737-800-takeoff-golden-hour-thumb.webp"
  },
  {
    "id": "ae-9",
    "category": "artistic_events",
    "titleEn": "Big Ben and Palace of Westminster Framed by South Bank Trees at Dusk",
    "titlePt": "Big Ben e Palácio de Westminster Enquadrados pelas Árvores em Londres",
    "location": "Westminster, London",
    "date": "2025-10-06",
    "image": "/assets/gallery/artistic_events/big-ben-elizabeth-tower-framed-by-trees-london-dusk.webp",
    "tags": [
      "London",
      "Big Ben",
      "Architecture"
    ],
    "exif": {
      "camera": "Nikon Z6 II",
      "lens": "TAMRON 28-75mm F/2.8 Di III VXD G2 A063Z",
      "focalLength": "75mm",
      "exposure": "1/125",
      "aperture": "f/2.8",
      "iso": "ISO 100"
    },
    "thumb": "/assets/gallery/artistic_events/big-ben-elizabeth-tower-framed-by-trees-london-dusk-thumb.webp"
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
