import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll", ()=> {
    it("should return arr", ()=>{
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array)
    })
  })

  describe("getOne", ()=> {
    it("should return a movie", ()=> {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it("should 404 err", ()=> {
      try{
        service.getOne(999);
      } catch (e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe("deleteOne", ()=> {
    it("delete a movie", ()=> {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const all = service.getAll();
      service.deleteOne(1);
      const result = service.getAll();

      expect(result.length).toEqual(all.length - 1);
    });
    it("should 404 err", ()=> {
      try{
        service.deleteOne(999);
      } catch (e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
  
  describe("create", ()=> {
    it("create a movie", ()=> {
      const all = service.getAll().length;
      service.create({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      const result = service.getAll().length;

      expect(result).toBeGreaterThan(all);
    });
  });

  describe("update", ()=> {
    it("update a movie", ()=> {
      service.create({
        title: 'test',
        genres: ['test'],
        year: 2000,
      });
      service.update(1, {title: 'update'})
      const movie = service.getOne(1)

      expect(movie.title).toEqual('update');
    });
  });

});
