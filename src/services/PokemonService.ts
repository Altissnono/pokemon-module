import { Injectable } from '@nestjs/common';
import { catchError, first, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { config } from 'process';

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  readonly pokeApiBaseUrl: Readonly<string> =
    'https://pokebuildapi.fr/api/v1/pokemon/limit/21';

  readonly findPokeUrl: Readonly<string> = 'https://pokebuildapi.fr/api/v1/pokemon/';

  readonly TypePokeurl: Readonly<string> = 'https://pokebuildapi.fr/api/v1/types';

  async findAll(page): Promise<Array<PokemonListDto>> {
    if (!page) page = 0
    const { data } = await firstValueFrom(
      this.httpService.get(this.pokeApiBaseUrl+page, {
        responseType: 'json',
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      }),
    );

    console.log(data)
    return data;
  }

  async findPokemon(
    searchPokemonDto: SearchPokemonDto,
  ): Promise<PokemonLightDto> {

    const nameL = searchPokemonDto.name.toLowerCase() 

    const { data } = await firstValueFrom(
      this.httpService.get(this.findPokeUrl + nameL, {
        responseType: 'json',
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      }),
    );

    return data;
  }

  async TypePoke(poke): Promise<Array<PokemonTypeDto>> {
    if (!poke) poke = 0
    const { data } = await firstValueFrom(
      this.httpService.get(this.TypePokeurl+poke, {
        responseType: 'json',
        headers: {
          'Accept-Encoding': 'gzip,deflate,compress',
        },
      }),
    );

    console.log(data)
    return data;
  }

}
