import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

//imported createMovieDto but made it "not required"
export class UpdateMovieDto extends PartialType(CreateMovieDto){}