import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokemonList } from 'src/domains/pokemonlist';
import { HttpModule, HttpService } from '@nestjs/axios';

@Injectable()

export class PokemonService {
  constructor(private httpService: HttpService) { }

  readonly pokeApiBaseUrl: Readonly<string> = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  async getAllPokemon(): Promise<Array<PokemonList>> {
    const { data } = await firstValueFrom(
      this.httpService.get(this.pokeApiBaseUrl, {
        responseType: 'json',
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      }),
    );
    console.log(typeof data);
    return data;
  }
}
