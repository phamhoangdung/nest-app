import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pokemon')
export class PokemonEntity {
    @PrimaryGeneratedColumn('uuid') id?: string

    @Column('varchar', { length: 250, unique: true }) name: string

    @Column('varchar', { length: 250 }) type: string

    @Column('numeric') pokedex: number
}