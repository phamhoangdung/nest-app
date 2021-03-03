import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { PokemonEntity } from '../entity/pokemon.entity'
import { Repository } from 'typeorm'
import { CreatePokemonDto } from '../dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
    constructor(@InjectRepository(PokemonEntity) private readonly PokemonRepository: Repository<PokemonEntity>) { }

    async getPokemons() {
        return await this.PokemonRepository.find()
    }

    async getByIdPokemons(id) {
        return await this.PokemonRepository.findOne({ id: id })
    }

    async createPokemon(data: CreatePokemonDto): Promise<PokemonEntity> {
        let pokemon = new PokemonEntity()
        pokemon.name = data.name
        pokemon.pokedex = data.pokedex
        pokemon.type = data.type
        pokemon = await this.PokemonRepository.save(pokemon)

        return pokemon
    }

    async updatePokemon(id, input): Promise<PokemonEntity> {
        return await this.PokemonRepository.save({ id: id, ...input })
    }

    async deletePokemon(id): Promise<PokemonEntity> {
        let pokemon = await this.PokemonRepository.findOne({ id: id })
        await this.PokemonRepository.remove(pokemon)
        return pokemon
    }

}
