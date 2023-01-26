import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Render,
} from '@nestjs/common';
import { query } from 'express';
import { PokemonService } from '../services/PokemonService';

@Controller('/pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @Render('index')
  async findAll(@Query('page') page: string) {
    const pokemons = await this.pokemonService.findAll(page);
    return { message: pokemons };
  }

  @Render('index')
  async TypePoke(@Query('poke') poke: string) {
    const pokemons = await this.pokemonService.TypePoke(poke);
    return { message: pokemons };
  }

  @Post()
  async findPokemon(@Body() searchPokemonDto: SearchPokemonDto) {
    const pokemon = await this.pokemonService.findPokemon(searchPokemonDto);
    return pokemon;
  }
}
