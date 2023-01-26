interface PokemonLightDto {
  abilities: Array<PokemonAbilityDto>;
  base_experience: number;
  forms: SimplePokemonDto;
  id: number;
  is_default: boolean;
  stats: Array<PokemonStatDto>;
  types: Array<SimplePokemonDto>;
  weight: number;
}
