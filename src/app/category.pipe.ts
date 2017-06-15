import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'categoryPipe',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], filterByCategory) {
    if (input){
      var output: Project[] = [];
      console.log(input);
      if (filterByCategory === "all") {
        for (var i = 0; i < input.length; i++) {
          output.push(input[i]);
        }
        return output;
      } else {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === filterByCategory) {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
  } 
}
