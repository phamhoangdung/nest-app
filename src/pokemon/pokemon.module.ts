import { PokemonResolver } from './service/pokemon.resolver'
import { Module } from '@nestjs/common'
import { PokemonService } from './service/pokemon.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PokemonEntity } from './entity/pokemon.entity'

@Module({
    imports: [TypeOrmModule.forFeature([PokemonEntity])],
    providers: [PokemonResolver, PokemonService]
})
export class PokemonModule { }