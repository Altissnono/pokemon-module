import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonService } from './services/pokemon.service';
import { PokemonController } from './controllers/PokemonController';
import { HttpModule } from '@nestjs/axios';
import { PokemonList } from 'src/domains/pokemonlist';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController],
  providers: [PokemonService],
})
export class AppModule {}
