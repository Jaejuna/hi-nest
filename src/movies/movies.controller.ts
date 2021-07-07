import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.MoviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto){
    return this.MoviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.MoviesService.update(movieId, updateData);
  }
}