import { Component } from '@angular/core';
import { RecipeAnalyzerService } from 'src/app/services/recipe-analyzer.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent {
  inputedText = '';
  constructor(
    private analyzer: RecipeAnalyzerService
  ){

  }

 onInput(){
    this.analyzer.calculateIngridients(this.inputedText);
  }
}
