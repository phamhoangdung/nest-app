import { from } from "rxjs";
import { PokemonEntity } from '../entity/pokemon.entity'

export class PaginatedPokemonResultDto {
    data: PokemonEntity[]
    page: number
    limit: number
    totalCount: number
}