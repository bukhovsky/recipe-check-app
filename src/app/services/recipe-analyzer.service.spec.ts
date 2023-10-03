import { TestBed } from '@angular/core/testing';

import { RecipeAnalyzerService } from './recipe-analyzer.service';

describe('RecipeAnalyzerService', () => {
  let service: RecipeAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
