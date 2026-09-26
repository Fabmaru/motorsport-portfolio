const fs = require('fs');
const path = require('path');

function parseExif(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    const buf = fs.readFileSync(filePath);
    let offset = 2;
    while (offset < buf.length - 4) {
      if (buf[offset] !== 0xFF) break;
      const marker = buf[offset + 1];
      const len = buf.readUInt16BE(offset + 2);
      if (marker === 0xE1) {
        const sig = buf.toString('utf8', offset + 4, offset + 8);
        if (sig === 'Exif') {
          const exifBuf = buf.subarray(offset + 10, offset + 2 + len);
          return parseTiff(exifBuf);
        }
      }
      offset += 2 + len;
    }
  } catch(e) {}
  return null;
}

function parseTiff(buf) {
  const isLE = buf.toString('utf8', 0, 2) === 'II';
  const read16 = (o) => isLE ? buf.readUInt16LE(o) : buf.readUInt16BE(o);
  const read32 = (o) => isLE ? buf.readUInt32LE(o) : buf.readUInt32BE(o);
  
  if (read16(2) !== 42) return null;
  const firstIFD = read32(4);
  const tags = {};
  
  function readIFD(ifdOffset) {
    if (!ifdOffset || ifdOffset + 2 > buf.length) return;
    const numEntries = read16(ifdOffset);
    for (let i = 0; i < numEntries; i++) {
      const entry = ifdOffset + 2 + i * 12;
      if (entry + 12 > buf.length) break;
      const tag = read16(entry);
      const count = read32(entry + 4);
      const valOffset = entry + 8;
      
      if (tag === 0x010F || tag === 0x0110 || tag === 0xA434) {
        let strVal = '';
        const dataOffset = count > 4 ? read32(valOffset) : valOffset;
        if (dataOffset < buf.length) {
          strVal = buf.toString('utf8', dataOffset, dataOffset + count).replace(/\0/g, '').trim();
        }
        if (tag === 0x010F) tags.make = strVal;
        if (tag === 0x0110) tags.model = strVal;
        if (tag === 0xA434) tags.lens = strVal;
      }
      
      if (tag === 0x8769) {
        const subOffset = read32(valOffset);
        readExifSubIFD(subOffset);
      }
    }
  }

  function readExifSubIFD(subOffset) {
    if (!subOffset || subOffset + 2 > buf.length) return;
    const numEntries = read16(subOffset);
    for (let i = 0; i < numEntries; i++) {
      const entry = subOffset + 2 + i * 12;
      if (entry + 12 > buf.length) break;
      const tag = read16(entry);
      const count = read32(entry + 4);
      const valOffset = entry + 8;

      if (tag === 0xA434) {
        const dataOffset = count > 4 ? read32(valOffset) : valOffset;
        if (dataOffset < buf.length) {
          tags.lens = buf.toString('utf8', dataOffset, dataOffset + count).replace(/\0/g, '').trim();
        }
      }
      if (tag === 0x8827) {
        tags.iso = count === 1 ? read16(valOffset) : read32(read32(valOffset));
      }
      if (tag === 0x829A) {
        const dataOffset = read32(valOffset);
        if (dataOffset + 8 <= buf.length) {
          const num = read32(dataOffset);
          const den = read32(dataOffset + 4);
          tags.exposureTime = den ? (num === 1 ? '1/' + den : (num/den).toFixed(1) + 's') : null;
        }
      }
      if (tag === 0x829D) {
        const dataOffset = read32(valOffset);
        if (dataOffset + 8 <= buf.length) {
          const num = read32(dataOffset);
          const den = read32(dataOffset + 4);
          tags.fNumber = den ? 'f/' + (num/den).toFixed(1) : null;
        }
      }
      if (tag === 0x920A) {
        const dataOffset = read32(valOffset);
        if (dataOffset + 8 <= buf.length) {
          const num = read32(dataOffset);
          const den = read32(dataOffset + 4);
          tags.focalLength = den ? Math.round(num/den) + 'mm' : null;
        }
      }
    }
  }

  readIFD(firstIFD);
  return tags;
}

function cleanModelName(model) {
  if (!model) return null;
  if (model === 'NIKON Z 6_2') return 'Nikon Z6 II';
  if (model === 'NIKON Z 6') return 'Nikon Z6';
  if (model === 'NIKON D7500') return 'Nikon D7500';
  if (model === 'NIKON D3400') return 'Nikon D3400';
  if (model === 'NIKON 1 V1') return 'Nikon 1 V1';
  return model;
}

const categories = [
  {
    id: "motorsport",
    titleEn: "Motorsport Photography",
    titlePt: "Fotografia de Desporto Motorizado",
    bannerImage: "/assets/cat_motorsport.jpg",
    count: 45,
    disciplines: [
      { id: "circuit", titleEn: "Circuit", titlePt: "Velocidade" },
      { id: "rally", titleEn: "Rally", titlePt: "Rali" },
      { id: "rallycross", titleEn: "Rallycross", titlePt: "Rallycross" },
      { id: "karting", titleEn: "Karting", titlePt: "Karting" },
      { id: "hillclimb", titleEn: "Hillclimb", titlePt: "Rampa" }
    ]
  },
  {
    id: "sports",
    titleEn: "Sports Photography",
    titlePt: "Fotografia de Desporto",
    bannerImage: "/assets/cat_sports.jpg",
    count: 9
  },
  {
    id: "automotive",
    titleEn: "Automotive Photography",
    titlePt: "Fotografia Automóvel",
    bannerImage: "/assets/cat_automotive.jpg",
    count: 9
  },
  {
    id: "artistic_events",
    titleEn: "Artistic & Events Photography",
    titlePt: "Fotografia Artística e Eventos",
    bannerImage: "/assets/cat_artistic_events.jpg",
    count: 9
  }
];

const rawItemsData = [
  // CIRCUIT
  { id: "ms-circuit-1", category: "motorsport", subCategory: "circuit", titleEn: "Vila Real Circuit Track Action", titlePt: "Ação em Pista em Vila Real", location: "Circuito Internacional de Vila Real", date: "2025-07-12", image: "/assets/gallery/motorsport/circuit/Vila_Real_11-113.jpg", tags: ["Vila Real", "Street Circuit", "Circuit"] },
  { id: "ms-circuit-2", category: "motorsport", subCategory: "circuit", titleEn: "Estoril Classics Heritage Sprint", titlePt: "Estoril Classics Sprint Histórico", location: "Autódromo do Estoril", date: "2025-10-20", image: "/assets/gallery/motorsport/circuit/Estoril_Classics_20-10.jpg", tags: ["Estoril Classics", "Heritage", "Circuit"] },
  { id: "ms-circuit-3", category: "motorsport", subCategory: "circuit", titleEn: "Vila Real Chicane Apex Attack", titlePt: "Ataque à Chicane de Vila Real", location: "Vila Real, Portugal", date: "2025-07-12", image: "/assets/gallery/motorsport/circuit/Vila_Real_12-55.jpg", tags: ["Vila Real", "Apex", "Circuit"] },
  { id: "ms-circuit-4", category: "motorsport", subCategory: "circuit", titleEn: "High-Speed Circuit Panning", titlePt: "Panning de Alta Velocidade", location: "Autódromo Internacional do Algarve", date: "2025-05-10", image: "/assets/gallery/motorsport/circuit/20250510-FAB_3336.jpg", tags: ["Panning", "Portimão", "Circuit"] },
  { id: "ms-circuit-5", category: "motorsport", subCategory: "circuit", titleEn: "Estoril Classics Pitlane Action", titlePt: "Ação no Pitlane do Estoril", location: "Autódromo do Estoril", date: "2025-10-20", image: "/assets/gallery/motorsport/circuit/Estoril_Classics_20-70.jpg", tags: ["Pitlane", "Estoril", "Circuit"] },
  { id: "ms-circuit-6", category: "motorsport", subCategory: "circuit", titleEn: "Trackside Racing Perspective", titlePt: "Perspetiva de Corrida em Pista", location: "Circuit Trackside", date: "2025-06-15", image: "/assets/gallery/motorsport/circuit/FAB_0060.jpg", tags: ["Trackside", "Speed", "Circuit"] },
  { id: "ms-circuit-7", category: "motorsport", subCategory: "circuit", titleEn: "Wheel-to-Wheel Battle", titlePt: "Disputa Roda a Roda", location: "Circuit Track", date: "2025-06-18", image: "/assets/gallery/motorsport/circuit/FAB_1236.jpg", tags: ["Battle", "Precision", "Circuit"] },
  { id: "ms-circuit-8", category: "motorsport", subCategory: "circuit", titleEn: "Sunset Circuit Stint", titlePt: "Turno ao Pôr do Sol", location: "International Circuit", date: "2025-06-20", image: "/assets/gallery/motorsport/circuit/FAB_1510.jpg", tags: ["Sunset", "Endurance", "Circuit"] },
  { id: "ms-circuit-9", category: "motorsport", subCategory: "circuit", titleEn: "Vila Real Street Circuit Victory", titlePt: "Vitória no Circuito de Vila Real", location: "Vila Real", date: "2025-07-12", image: "/assets/gallery/motorsport/circuit/Vila_Real_12-99.jpg", tags: ["Vila Real", "Victory", "Circuit"] },

  // RALLY
  { id: "ms-rally-1", category: "motorsport", subCategory: "rally", titleEn: "WRC Special Stage Attack", titlePt: "Ataque em Classificativa de Rali", location: "Rally Special Stage", date: "2025-05-18", image: "/assets/gallery/motorsport/rally/FAB_1236-1.jpg", tags: ["WRC", "Gravel", "Rally"] },
  { id: "ms-rally-2", category: "motorsport", subCategory: "rally", titleEn: "Dust & Power Drift", titlePt: "Drift entre Poeira e Potência", location: "Gravel Rally Stage", date: "2025-05-18", image: "/assets/gallery/motorsport/rally/FAB_1396-1.jpg", tags: ["Dust", "Drift", "Rally"] },
  { id: "ms-rally-3", category: "motorsport", subCategory: "rally", titleEn: "High-Fly Jump Landing", titlePt: "Salto de Alta Velocidade", location: "Fafe Rally Jump", date: "2025-05-19", image: "/assets/gallery/motorsport/rally/FAB_3969-1.jpg", tags: ["Fafe Jump", "Airborne", "Rally"] },
  { id: "ms-rally-4", category: "motorsport", subCategory: "rally", titleEn: "Tarmac Stage Hairpin", titlePt: "Gancho em Asfalto", location: "Tarmac Rally Stage", date: "2025-04-12", image: "/assets/gallery/motorsport/rally/FAB_5337-1.jpg", tags: ["Tarmac", "Hairpin", "Rally"] },
  { id: "ms-rally-5", category: "motorsport", subCategory: "rally", titleEn: "Night Rally Stage Flash", titlePt: "Classificativa Noturna de Rali", location: "Night Special Stage", date: "2025-05-17", image: "/assets/gallery/motorsport/rally/FAB_6885-1.jpg", tags: ["Night Stage", "Lights", "Rally"] },
  { id: "ms-rally-6", category: "motorsport", subCategory: "rally", titleEn: "Gravel Apex Slide", titlePt: "Derrapagem em Terra", location: "Gravel Stage", date: "2025-05-18", image: "/assets/gallery/motorsport/rally/FAB_7138-1.jpg", tags: ["Slide", "Gravel", "Rally"] },
  { id: "ms-rally-7", category: "motorsport", subCategory: "rally", titleEn: "Service Park Preparation", titlePt: "Preparação no Parque de Assistência", location: "Rally Service Park", date: "2025-05-17", image: "/assets/gallery/motorsport/rally/FAB_7384-1.jpg", tags: ["Service Park", "Pitlane", "Rally"] },
  { id: "ms-rally-8", category: "motorsport", subCategory: "rally", titleEn: "Forest Stage Flat Out", titlePt: "A Fundo pela Floresta", location: "Forest Rally Stage", date: "2025-05-18", image: "/assets/gallery/motorsport/rally/FAB_7997-1.jpg", tags: ["Forest", "Speed", "Rally"] },
  { id: "ms-rally-9", category: "motorsport", subCategory: "rally", titleEn: "Spectator Zone Action", titlePt: "Ação na Zona de Espetáculos", location: "Rally Spectator Zone", date: "2025-05-19", image: "/assets/gallery/motorsport/rally/FAB_8133-1.jpg", tags: ["Fans", "Atmosphere", "Rally"] },

  // RALLYCROSS
  { id: "ms-rx-1", category: "motorsport", subCategory: "rallycross", titleEn: "Montalegre RX World Championship", titlePt: "Mundial de Rallycross em Montalegre", location: "Pista Automóvel de Montalegre", date: "2025-07-26", image: "/assets/gallery/motorsport/rallycross/CPRx_Montalegre-14.jpg", tags: ["Montalegre", "World RX", "Rallycross"] },
  { id: "ms-rx-2", category: "motorsport", subCategory: "rallycross", titleEn: "Euro RX Wheel-to-Wheel Push", titlePt: "Disputa Intensa no Euro RX", location: "Euro RX Circuit", date: "2025-09-12", image: "/assets/gallery/motorsport/rallycross/EuroRX-27.jpg", tags: ["Euro RX", "Push", "Rallycross"] },
  { id: "ms-rx-3", category: "motorsport", subCategory: "rallycross", titleEn: "Joker Lap Strategy Drama", titlePt: "Estratégia na Joker Lap", location: "Montalegre Circuit", date: "2025-09-12", image: "/assets/gallery/motorsport/rallycross/EuroRX-35_36.png", tags: ["Joker Lap", "Strategy", "Rallycross"] },
  { id: "ms-rx-4", category: "motorsport", subCategory: "rallycross", titleEn: "Dirt to Asphalt Transition", titlePt: "Transição Terra-Asfalto", location: "Rallycross Track", date: "2025-04-27", image: "/assets/gallery/motorsport/rallycross/FAB_0130-1.jpg", tags: ["Transition", "Dirt", "Rallycross"] },
  { id: "ms-rx-5", category: "motorsport", subCategory: "rallycross", titleEn: "Supercar Semi-Final Launch", titlePt: "Arranque de Semifinal Supercars", location: "Montalegre RX", date: "2025-03-29", image: "/assets/gallery/motorsport/rallycross/FAB_2772-1.jpg", tags: ["Supercars", "Launch", "Rallycross"] },
  { id: "ms-rx-6", category: "motorsport", subCategory: "rallycross", titleEn: "Kerb Bouncing Power", titlePt: "Ataque Agressivo ao Corretor", location: "Montalegre RX", date: "2025-06-27", image: "/assets/gallery/motorsport/rallycross/FAB_3004.jpg", tags: ["Kerb", "Action", "Rallycross"] },
  { id: "ms-rx-7", category: "motorsport", subCategory: "rallycross", titleEn: "Side-by-Side Gravel Attack", titlePt: "Lado a Lado em Terra", location: "Euro RX Stage", date: "2025-03-29", image: "/assets/gallery/motorsport/rallycross/FAB_3021-1.jpg", tags: ["Side by Side", "Gravel", "Rallycross"] },
  { id: "ms-rx-8", category: "motorsport", subCategory: "rallycross", titleEn: "Final Corner Victory Sprint", titlePt: "Sprint de Vitória na Última Curva", location: "RX Final", date: "2025-06-27", image: "/assets/gallery/motorsport/rallycross/FAB_3221.jpg", tags: ["Final", "Sprint", "Rallycross"] },
  { id: "ms-rx-9", category: "motorsport", subCategory: "rallycross", titleEn: "Paddock Celebration Moment", titlePt: "Celebração no Paddock", location: "Montalegre Paddock", date: "2025-04-27", image: "/assets/gallery/motorsport/rallycross/FAB_6240-1.jpg", tags: ["Paddock", "Podium", "Rallycross"] },

  // KARTING
  { id: "ms-karting-1", category: "motorsport", subCategory: "karting", titleEn: "National Karting Championship Apex", titlePt: "Campeonato Nacional de Karting", location: "Kartódromo do Porto / Braga", date: "2026-03-01", image: "/assets/gallery/motorsport/karting/20260301-FAB_3720.jpg", tags: ["Karting", "Championship", "Apex"] },
  { id: "ms-karting-2", category: "motorsport", subCategory: "karting", titleEn: "KZ Shifter Kart Acceleration", titlePt: "Aceleração Shifter KZ", location: "Kartódromo", date: "2026-03-01", image: "/assets/gallery/motorsport/karting/20260301-FAB_5394.jpg", tags: ["KZ Shifter", "Speed", "Karting"] },
  { id: "ms-karting-3", category: "motorsport", subCategory: "karting", titleEn: "Junior Drivers Pack Battle", titlePt: "Batalha no Pelotão Júnior", location: "Kart Track", date: "2026-03-01", image: "/assets/gallery/motorsport/karting/20260301-FAB_5917.jpg", tags: ["Junior", "Pack Battle", "Karting"] },
  { id: "ms-karting-4", category: "motorsport", subCategory: "karting", titleEn: "Low-Angle Apex Panning", titlePt: "Panning Baixo na Curva", location: "Kartódromo", date: "2026-03-07", image: "/assets/gallery/motorsport/karting/20260307-FAB_7178.jpg", tags: ["Low Angle", "Panning", "Karting"] },
  { id: "ms-karting-5", category: "motorsport", subCategory: "karting", titleEn: "Pre-Grid Helmet Focus", titlePt: "Foco no Capacete na Pré-Grelha", location: "Pre-Grid", date: "2026-03-08", image: "/assets/gallery/motorsport/karting/20260308-FAB_7785.jpg", tags: ["Pre-Grid", "Focus", "Karting"] },
  { id: "ms-karting-6", category: "motorsport", subCategory: "karting", titleEn: "Wet Track Spray Battle", titlePt: "Batalha em Pista Molhada", location: "Kart Circuit", date: "2026-03-08", image: "/assets/gallery/motorsport/karting/20260308-FAB_8259.jpg", tags: ["Wet Track", "Spray", "Karting"] },
  { id: "ms-karting-7", category: "motorsport", subCategory: "karting", titleEn: "Chassis Lean in High-G Corner", titlePt: "Inclinação de Chassi em Curva Rápida", location: "Kart Track", date: "2026-03-22", image: "/assets/gallery/motorsport/karting/FAB_0540-1.jpg", tags: ["High-G", "Cornering", "Karting"] },
  { id: "ms-karting-8", category: "motorsport", subCategory: "karting", titleEn: "Podium Trophy Moment", titlePt: "Entrega de Troféus no Pódio", location: "Karting Podium", date: "2026-03-23", image: "/assets/gallery/motorsport/karting/FAB_0640-1.jpg", tags: ["Podium", "Trophy", "Karting"] },
  { id: "ms-karting-9", category: "motorsport", subCategory: "karting", titleEn: "Sunset Heat Finish Line", titlePt: "Corte de Meta ao Pôr do Sol", location: "Karting Track", date: "2026-03-21", image: "/assets/gallery/motorsport/karting/FAB_9275-1.jpg", tags: ["Finish Line", "Sunset", "Karting"] },

  // HILLCLIMB
  { id: "ms-hill-1", category: "motorsport", subCategory: "hillclimb", titleEn: "Rampa do Caramulo Heritage Climb", titlePt: "Subida Histórica da Rampa do Caramulo", location: "Serra do Caramulo", date: "2025-09-06", image: "/assets/gallery/motorsport/hillclimb/Caramulo-26.jpg", tags: ["Caramulo", "Heritage", "Hillclimb"] },
  { id: "ms-hill-2", category: "motorsport", subCategory: "hillclimb", titleEn: "Caramulo Mountain Hairpin", titlePt: "Curva de Montanha no Caramulo", location: "Rampa do Caramulo", date: "2025-09-06", image: "/assets/gallery/motorsport/hillclimb/Caramulo-40.jpg", tags: ["Hairpin", "Caramulo", "Hillclimb"] },
  { id: "ms-hill-3", category: "motorsport", subCategory: "hillclimb", titleEn: "Rampa da Falperra Prototype Attack", titlePt: "Protótipo na Rampa da Falperra", location: "Rampa da Falperra, Braga", date: "2025-05-16", image: "/assets/gallery/motorsport/hillclimb/FAB_5675-1.jpg", tags: ["Falperra", "Prototype", "Hillclimb"] },
  { id: "ms-hill-4", category: "motorsport", subCategory: "hillclimb", titleEn: "Speed Mountain Apex", titlePt: "Velocidade na Montanha", location: "Falperra Hillclimb", date: "2025-05-18", image: "/assets/gallery/motorsport/hillclimb/FAB_6141-1.jpg", tags: ["Falperra", "Apex", "Hillclimb"] },
  { id: "ms-hill-5", category: "motorsport", subCategory: "hillclimb", titleEn: "GT Prototype Mountain Panning", titlePt: "Panning de Protótipo na Montanha", location: "Hillclimb Course", date: "2025-05-16", image: "/assets/gallery/motorsport/hillclimb/FAB_6155-1.jpg", tags: ["GT", "Panning", "Hillclimb"] },
  { id: "ms-hill-6", category: "motorsport", subCategory: "hillclimb", titleEn: "Rampa da Falperra Spectator Crowd", titlePt: "Multidão na Rampa da Falperra", location: "Braga, Portugal", date: "2025-05-18", image: "/assets/gallery/motorsport/hillclimb/FAB_6297-1.jpg", tags: ["Falperra", "Crowd", "Hillclimb"] },
  { id: "ms-hill-7", category: "motorsport", subCategory: "hillclimb", titleEn: "Mountain Pass Speed Shot", titlePt: "Passagem de Montanha a Alta Velocidade", location: "Mountain Stage", date: "2025-04-26", image: "/assets/gallery/motorsport/hillclimb/FAB_9368-1.jpg", tags: ["Mountain Pass", "Speed", "Hillclimb"] },
  { id: "ms-hill-8", category: "motorsport", subCategory: "hillclimb", titleEn: "Rampa Capital do Móvel Sprint", titlePt: "Rampa Capital do Móvel em Paços de Ferreira", location: "Paços de Ferreira", date: "2025-07-19", image: "/assets/gallery/motorsport/hillclimb/Rampa_Capital_Movel-21.jpg", tags: ["Capital do Movel", "Sprint", "Hillclimb"] },
  { id: "ms-hill-9", category: "motorsport", subCategory: "hillclimb", titleEn: "Classic Escort Hillclimb Launch", titlePt: "Subida de Clássico na Rampa", location: "Capital do Móvel", date: "2025-07-19", image: "/assets/gallery/motorsport/hillclimb/Rampa_Capital_Movel-33.jpg", tags: ["Escort Classic", "Launch", "Hillclimb"] },

  // SPORTS
  { id: "sp-1", category: "sports", titleEn: "Athletic Sprint & Movement", titlePt: "Sprint e Movimento Atlético", location: "Athletics Meeting", date: "2025-03-16", image: "/assets/gallery/sports/20250316-DSC_0004.jpg", tags: ["Athletics", "Sprint", "Action"] },
  { id: "sp-2", category: "sports", titleEn: "Outdoor Endurance Challenge", titlePt: "Desafio de Resistência Outdoor", location: "Outdoor Course", date: "2025-08-06", image: "/assets/gallery/sports/20250806-FAB_1656.jpg", tags: ["Endurance", "Outdoor", "Focus"] },
  { id: "sp-3", category: "sports", titleEn: "High-Energy Athletic Power", titlePt: "Poder Atlético de Alta Energia", location: "Sports Arena", date: "2025-08-07", image: "/assets/gallery/sports/20250807-FAB_1903.jpg", tags: ["Power", "Arena", "Intensity"] },
  { id: "sp-4", category: "sports", titleEn: "Indoor Championship Competition", titlePt: "Competição de Campeonato Indoor", location: "Porto Athletics Center", date: "2026-02-28", image: "/assets/gallery/sports/20260228-FAB_2681.jpg", tags: ["Indoor", "Championship", "Porto"] },
  { id: "sp-5", category: "sports", titleEn: "Split-Second Focus & Motion", titlePt: "Foco de Fração de Segundo e Movimento", location: "Athletic Arena", date: "2026-02-28", image: "/assets/gallery/sports/20260228-FAB_2823.jpg", tags: ["Focus", "Motion", "Speed"] },
  { id: "sp-6", category: "sports", titleEn: "Championship Action Series", titlePt: "Série de Ação em Campeonato", location: "Arena Track", date: "2026-03-14", image: "/assets/gallery/sports/20260314-FAB_5811.jpg", tags: ["Championship", "Action", "Series"] },
  { id: "sp-7", category: "sports", titleEn: "Dynamic Outdoor Action", titlePt: "Ação Dinâmica Outdoor", location: "Outdoor Competition", date: "2025-09-10", image: "/assets/gallery/sports/FAB_4150-1.jpg", tags: ["Dynamic", "Outdoor", "Energy"] },
  { id: "sp-8", category: "sports", titleEn: "Athletic Performance Capture", titlePt: "Captura de Performance Atlética", location: "Stadium Track", date: "2025-09-12", image: "/assets/gallery/sports/FAB_4199-1.jpg", tags: ["Performance", "Stadium", "Track"] },
  { id: "sp-9", category: "sports", titleEn: "Determination & Victory", titlePt: "Determinação e Vitória", location: "National Stadium", date: "2025-09-15", image: "/assets/gallery/sports/FAB_4251-1.jpg", tags: ["Victory", "Determination", "Sports"] },

  // AUTOMOTIVE
  { id: "au-1", category: "automotive", titleEn: "Supercar Studio Profile", titlePt: "Perfil de Supercarro em Estúdio", location: "Automotive Studio", date: "2026-02-07", image: "/assets/gallery/automotive/20260207-FAB_0498.jpg", tags: ["Supercar", "Studio", "Automotive"] },
  { id: "au-2", category: "automotive", titleEn: "Sculptural Car Lines & Design", titlePt: "Linhas Escultóricas e Design Automóvel", location: "Porto Car Studio", date: "2026-02-22", image: "/assets/gallery/automotive/20260222-FAB_1377.jpg", tags: ["Lines", "Design", "Porto"] },
  { id: "au-3", category: "automotive", titleEn: "Exotic Vehicle Cockpit Detail", titlePt: "Detalhe do Cockpit de Veículo Exótico", location: "Automotive Exhibition", date: "2026-02-22", image: "/assets/gallery/automotive/20260222-FAB_1405.jpg", tags: ["Cockpit", "Exotic", "Detail"] },
  { id: "au-4", category: "automotive", titleEn: "High-Performance Aero Silhouette", titlePt: "Silhueta Aerodinâmica de Alta Performance", location: "Collector Garage", date: "2026-02-22", image: "/assets/gallery/automotive/20260222-FAB_1484.jpg", tags: ["Aero", "Silhouette", "Collector"] },
  { id: "au-5", category: "automotive", titleEn: "Outdoor Light Painting Photography", titlePt: "Fotografia de Pintura com Luz Outdoor", location: "Cascais Coastline", date: "2026-03-08", image: "/assets/gallery/automotive/20260308-FAB_8572.jpg", tags: ["Light Painting", "Outdoor", "Cascais"] },
  { id: "au-6", category: "automotive", titleEn: "Exotic Rear Tail Light Stance", titlePt: "Postura Noturna de Faróis Traseiros", location: "Studio 44", date: "2026-03-08", image: "/assets/gallery/automotive/20260308-FAB_8652.jpg", tags: ["Tail Light", "Night", "Stance"] },
  { id: "au-7", category: "automotive", titleEn: "Commercial Studio Car Portraiture", titlePt: "Retrato Comercial Automóvel em Estúdio", location: "Commercial Studio", date: "2025-11-14", image: "/assets/gallery/automotive/FAB_9706-1.jpg", tags: ["Commercial", "Studio", "Portraiture"] },
  { id: "au-8", category: "automotive", titleEn: "London Mayfair Street Supercar", titlePt: "Supercarro nas Ruas de Mayfair em Londres", location: "Mayfair, London", date: "2025-10-05", image: "/assets/gallery/automotive/London-19.jpg", tags: ["Mayfair", "London", "Street"] },
  { id: "au-9", category: "automotive", titleEn: "London Night Supercar Reflections", titlePt: "Reflexos Noturnos de Supercarro em Londres", location: "Central London", date: "2025-10-05", image: "/assets/gallery/automotive/London-90.jpg", tags: ["Night", "Reflections", "London"] },

  // ARTISTIC & EVENTS
  { id: "ae-1", category: "artistic_events", titleEn: "Low-Light Artistic Perspective", titlePt: "Perspetiva Artística em Fraca Luz", location: "Creative Location", date: "2025-02-28", image: "/assets/gallery/artistic_events/20250228-DSC_0292.jpg", tags: ["Low Light", "Artistic", "Creative"] },
  { id: "ae-2", category: "artistic_events", titleEn: "Paddock VIP Event Atmosphere", titlePt: "Atmosfera de Evento VIP no Paddock", location: "Circuit Paddock VIP", date: "2025-12-13", image: "/assets/gallery/artistic_events/20251213-FAB_2388.jpg", tags: ["Paddock", "VIP", "Event"] },
  { id: "ae-3", category: "artistic_events", titleEn: "Supercar Rally Night Gathering", titlePt: "Encontro Noturno de Rali de Supercarros", location: "Estoril Event Arena", date: "2026-01-17", image: "/assets/gallery/artistic_events/20260117-FAB_4893.jpg", tags: ["Supercar", "Night", "Estoril"] },
  { id: "ae-4", category: "artistic_events", titleEn: "Creative Bokeh Reflection Art", titlePt: "Arte de Reflexo Criativo com Bokeh", location: "Studio Art Session", date: "2026-01-28", image: "/assets/gallery/artistic_events/20260128-DSC_4448-Enhanced-NR.jpg", tags: ["Bokeh", "Reflection", "Art"] },
  { id: "ae-5", category: "artistic_events", titleEn: "Automotive Press Launch Event", titlePt: "Lançamento de Imprensa Automóvel", location: "Automotive Expo Center", date: "2026-03-01", image: "/assets/gallery/artistic_events/20260301-FAB_5992.jpg", tags: ["Press Launch", "Event", "Automotive"] },
  { id: "ae-6", category: "artistic_events", titleEn: "Dublin Urban Automotive Art", titlePt: "Arte Automóvel Urbana em Dublin", location: "Dublin City Center", date: "2025-08-20", image: "/assets/gallery/artistic_events/Dublin-36.JPG", tags: ["Dublin", "Urban", "Art"] },
  { id: "ae-7", category: "artistic_events", titleEn: "Podium Celebration & Champagne Flare", titlePt: "Celebração no Pódio com Champanhe", location: "Race Track Podium", date: "2025-06-05", image: "/assets/gallery/artistic_events/FAB_0817.jpg", tags: ["Podium", "Celebration", "Champagne"] },
  { id: "ae-8", category: "artistic_events", titleEn: "High-Contrast Creative Composition", titlePt: "Composição Criativa de Alto Contraste", location: "Art Studio", date: "2025-09-18", image: "/assets/gallery/artistic_events/FAB_4319-Enhanced-NR-1.jpg", tags: ["High Contrast", "Creative", "Composition"] },
  { id: "ae-9", category: "artistic_events", titleEn: "London Night Automotive Culture", titlePt: "Cultura Automóvel Noturna em Londres", location: "Piccadilly, London", date: "2025-10-06", image: "/assets/gallery/artistic_events/London-51.jpg", tags: ["London", "Night", "Culture"] }
];

const itemsWithExif = rawItemsData.map(item => {
  const exifRaw = parseExif('public' + item.image);
  let exif = null;
  if (exifRaw && exifRaw.model) {
    exif = {
      camera: cleanModelName(exifRaw.model),
      lens: exifRaw.lens || null,
      focalLength: exifRaw.focalLength || null,
      exposure: exifRaw.exposureTime || null,
      aperture: exifRaw.fNumber || null,
      iso: exifRaw.iso ? 'ISO ' + exifRaw.iso : null
    };
  }
  return { ...item, exif };
});

const fileContent = `function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const categories = ${JSON.stringify(categories, null, 2)};

export const rawItems = ${JSON.stringify(itemsWithExif, null, 2)};

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
`;

fs.writeFileSync(path.join(__dirname, '../src/data/portfolioData.js'), fileContent, 'utf8');
console.log('Done! All 72 items generated with EXIF.');
