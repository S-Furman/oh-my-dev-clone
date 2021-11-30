import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';

describe('Articles service', () => {
  let service: ArticlesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ArticlesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  const resMockData = {
    key1: {
      title: 'title1',
      content: 'content1',
      img: 'img1',
      rating: 1,
      tags: ['1', '2'],
    },
    key2: {
      title: 'title1',
      content: 'content1',
      img: 'img1',
      rating: 1,
      tags: ['1', '2'],
    }
  };
  const mockData = [
    {
      key: 'key1',
      title: 'title1',
      content: 'content1',
      img: 'img1',
      rating: 1,
      tags: ['1', '2']
    },
    {
      key: 'key2',
      title: 'title1',
      content: 'content1',
      img: 'img1',
      rating: 1,
      tags: ['1', '2'],
    }
  ];

  it ('should retrieve posts from BE via GET', () => {
    service.fetchArticles().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockData);
    });
    const mockReq = httpTestingController.expectOne('https://ohmydevtest-default-rtdb.firebaseio.com/posts.json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(resMockData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
