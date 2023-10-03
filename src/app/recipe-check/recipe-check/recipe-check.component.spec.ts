import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCheckComponent } from './recipe-check.component';

describe('RecipeCheckComponent', () => {
  let component: RecipeCheckComponent;
  let fixture: ComponentFixture<RecipeCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeCheckComponent]
    });
    fixture = TestBed.createComponent(RecipeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
