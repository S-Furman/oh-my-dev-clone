import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ArticlesComponent } from './articles.component';
import createSpyObj = jasmine.createSpyObj;


describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;


  const spy = createSpyObj('ArticleService', ['fetchArticles']);
  spy.fetchArticles.and.returnValue(of('o kurwa'));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
