import { Controller, Delete, Get, Patch, Post, Put, Query, Render } from '@nestjs/common';
import { PokemonService } from './services/pokemon.service';

@Controller()
export class AppController {
  constructor(private readonly pokemonservice: PokemonService) {}
  @Get()
  @Render('index')
  root(): any {
    return { message: 'Hello world! je suis un kiwi !' };
  }

  @Get()
  Getallpokemon() {
    return this.pokemonservice.getAllPokemon();
  }
}
