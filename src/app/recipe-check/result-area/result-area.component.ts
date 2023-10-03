import { Component } from '@angular/core';
import { RecipeAnalyzerService } from 'src/app/services/recipe-analyzer.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent {
  ingridients = [];
  constructor(
    private analyzer: RecipeAnalyzerService
  ){
    this.analyzer.ingridientsWereUpdated.subscribe(
      (status: string) => {
        //console.log(status);
        this.ingridients = this.analyzer.ingridients;
      }
    )
  }
  


}
