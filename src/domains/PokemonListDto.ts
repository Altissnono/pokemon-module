interface PokemonListDto {
  count: number;
  previous: string;
  next: string;
  results: Array<SimplePokemonDto>;
}
