import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // each: true는 모든 요소를 하나씩 검사하겠다는 의미
  readonly genres: string[];
}
