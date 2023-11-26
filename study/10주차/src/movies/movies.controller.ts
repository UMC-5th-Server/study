import { Controller } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MovieService) { }

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Movie {
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        return this.movieService.create(movieData);
    }

    @Delete()
    remove(@Param('id') id: string) {
        return this.movieService.deleteOne(id);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() movieData) {
        return this.movieService.update(id, movieData);
    }
}

