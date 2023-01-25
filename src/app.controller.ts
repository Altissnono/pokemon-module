import { Controller, Get, Patch, Post, Put, Query, Render } from '@nestjs/common';
import { PokemonService } from './services/pokemon.service';

@Controller()
export class AppController {
  constructor(private readonly appService: PokemonService) {}

  @Get()
  getAllPokemon(): any {
    return this.appService.getAllPokemon();
  }

  @Get()
    getHello(): string {
        return 'Hello World!';
    }
}
