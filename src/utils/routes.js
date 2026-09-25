export const CATEGORY_URL_MAP = {
  motorsport: '/portfolio/motorsport/',
  sports: '/portfolio/sports/',
  automotive: '/portfolio/automotive/',
  artistic_events: '/portfolio/artistic-events/'
};

export const REVERSE_CATEGORY_MAP = {
  motorsport: 'motorsport',
  sports: 'sports',
  automotive: 'automotive',
  'artistic-events': 'artistic_events'
};

export const MOTORSPORT_DISCIPLINES_MAP = {
  ALL: '/portfolio/motorsport/',
  circuit: '/portfolio/motorsport/circuit/',
  rally: '/portfolio/motorsport/rally/',
  rallycross: '/portfolio/motorsport/rallycross/',
  karting: '/portfolio/motorsport/karting/',
  hillclimb: '/portfolio/motorsport/hillclimb/'
};

export function getCategoryUrl(categoryId) {
  return CATEGORY_URL_MAP[categoryId] || '/portfolio/';
}

export function getMotorsportDisciplineUrl(disciplineId) {
  return MOTORSPORT_DISCIPLINES_MAP[disciplineId] || '/portfolio/motorsport/';
}
