import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonService } from './pokemon/service/pokemon.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gpl' }),
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule { }
