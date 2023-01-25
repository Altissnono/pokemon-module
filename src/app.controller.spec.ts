import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PokemonService } from './services/pokemon.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PokemonService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getAllPokemon', () => {
    it('should return list of pokemons', () => {
      const pokemons = appController.getAllPokemon();
      expect(pokemons).toBeTruthy();
    });
  });
});
