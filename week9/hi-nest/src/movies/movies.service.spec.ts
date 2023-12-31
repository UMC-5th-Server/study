import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    // 테스트하기 전 시작
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 테스트 부분
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // 예시
  // it('should be 5', () => {
  //   // 우리가 테스트하고 싶어하는 부분을 테스트하는 function을 만드는 것
  //   expect(2 + 3).toEqual(5); // 이게 잘 되면 테스트가 성공적으로 진행된 것. 값이 잘못되어 에러나면 테스트 시 알려줌
  // });

  // getAll() 테스트
  describe('getAll', () => {
    // 해당 이름은 꼭 같지 않아도 됨. ex) apple로 설정 가능
    it('should return an array', () => {
      // 배열로 잘 리턴하는 지 확인
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  // getOne() 테스트
  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });

    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID 999 not found.`);
      }
    });
  });

  describe('deleteOne', () => {
    it('deletes a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });

      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(beforeDelete);
    });

    it('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      service.update(1, { title: 'Updated Test' });
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Test');
    });

    it('should throw a NotfoundException', () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});

// movies.service.ts을 테스트하는 파일

// Testing
// npm run test:cov -> 코드가 얼마나 테스팅 됐는지나 안됐는지 알려줌 (모든 spec.ts 파일찾아서 몇 줄이 테스팅 되었는지 알려줌)
// npm run test:watch -> 원하는대로 테스트 파일에서 테스트 일어나는 거 확인 가능
// 유닛 테스팅 -> 모든 function을 따로 테스트하는 것. 서비스에서 분리된 유닛을 테스트하는 것 ex) getAll() function 하나만 테스트 하고 싶을 때 사용.
// end-to-end(e2e) -> 모든 시스템을 테스팅 (test:e2e) 사용자가 특정 링크를 클릭하면 이 링크를 볼 수 있어야하는 걸 테스트. 즉, 사용자가 취할만한 액션들을 처음부터 끝까지 테스트

// 테스팅할 때 jest (자바스크립트 테스팅 프레임워크) 사용
