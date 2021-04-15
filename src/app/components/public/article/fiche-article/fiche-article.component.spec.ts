import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheArticleComponent } from './fiche-article.component';

describe('FicheArticleComponent', () => {
  let component: FicheArticleComponent;
  let fixture: ComponentFixture<FicheArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
