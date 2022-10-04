export interface Details {
  name: string;
  url: string;
}

interface Ability {
  ability: Details;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: Details;
}

interface VersionDetails {
  rarity: number;
  version: Details;
}

interface HeldItem {
  item: Details;
  version_details: Array<VersionDetails>;
}

interface VersionGroupDetails {
  level_earned_at: number;
  move_learn_method: Details;
  version_group: Details;
}

interface Move {
  move: Details;
  version_group_details: Array<VersionGroupDetails>;
}

interface Sprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    official_artwork: {
      front_default: string | null;
    };
    versions: any;
  };
}
interface Stat {
  base_stat: number;
  effort: number;
  stat: Details;
}

interface Type {
  slot: number;
  type: Details;
}

export interface Pokemon {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<Details>;
  game_indices: Array<GameIndex>;
  heigth: number;
  held_items: Array<HeldItem>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: Details;
  sprites: Sprite;
  stats: Array<Stat>;
  types: Array<Type>;
  weigth: number;
}
