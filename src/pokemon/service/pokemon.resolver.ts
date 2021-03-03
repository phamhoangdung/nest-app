import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PokemonEntity } from '../entity/pokemon.entity'
import { CreatePokemonDto } from '../dto/create-pokemon.dto'
import { PokemonService } from './pokemon.service'
import { inputPokemon } from '../inputs/pokemon.input'

@Resolver((of) => PokemonEntity)
export class PokemonResolver {
    constructor(private readonly pokemonService: PokemonService) { }

    @Query(() => [CreatePokemonDto])
    async pokemon() {
        return this.pokemonService.getPokemons()
    }

    @Query(() => CreatePokemonDto)
    async getByIdPokemon(@Args('id') id: string) {
        return this.pokemonService.getByIdPokemons(id)
    }
    @Mutation(() => CreatePokemonDto)
    async createPokemon(@Args('data') data: inputPokemon) {
        return this.pokemonService.createPokemon(data)
    }

    @Mutation(() => CreatePokemonDto)
    async updatePokemon(@Args('id') id: String, @Args('input') input: inputPokemon) {
        return this.pokemonService.updatePokemon(id, input)
    }

    @Mutation(() => CreatePokemonDto)
    async deletePokemon(@Args('id') id: String) {
        console.log(id);
        return this.pokemonService.deletePokemon(id);
    }
}