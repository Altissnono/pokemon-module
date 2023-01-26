import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PokemonList } from 'src/domains/pokemonList';
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

    // create an array to store the Pokemon data
    let pokemons = [];

    // iterate over the results and make a call to the specific Pokemon endpoint
    for (const pokemon of data.results) {
        const { data: pokemonData } = await firstValueFrom(
            this.httpService.get(pokemon.url, {
                responseType: 'json',
                headers: {
                    'Accept-Encoding': 'gzip,deflate,compress',
                },
            })
        );
        let description = '';
        if(pokemonData.flavor_text_entries && pokemonData.flavor_text_entries.length>0)
        {
            description = pokemonData.flavor_text_entries[0].flavor_text;
        }
        // push the pokemon data including image and description
        pokemons.push({
            name: pokemon.name,
            image: pokemonData.sprites.front_default,
            description: description
        });
    }

    return pokemons;
}
}