export type PokemonStructure = {
  name: string;
  sprites: { front_default: string };
  types: [{ type: { name: string } }];
  abilities?: [{ ability: { name: string } }];
  height?: number;
  weight?: number;
  base_experience?: number;
  order?: number;
};
