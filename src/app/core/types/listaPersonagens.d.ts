
export interface ListaPersonagens {
  info: Info,
  results: Personagem[]
}

export interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string | null
}

export interface Personagem {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Origin,
  location: Location,
  image: string,
  episode: string[],
  url: string,
  created: string,
}

interface Location {
  name: string,
  url: string
}

export interface LocationInfo {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: string[]
}

interface Origin {
  name: string,
  url: string,
}
