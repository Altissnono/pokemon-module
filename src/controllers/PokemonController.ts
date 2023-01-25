import { Controller, Get, Render } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) { }

  @Get()
  @Render('index')
  async root(): Promise<Readonly<any>> {
    const pokemonList = await this.pokemonService.getAllPokemon();
    return { list: pokemonList };
  }

  @Get('/data')
  getAllPokemon() {
    return this.pokemonService.getAllPokemon();
  }
}
