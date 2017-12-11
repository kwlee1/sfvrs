import { Injectable } from '@angular/core';

@Injectable()
export class CharserviceService {

    choiceArray
    select1
    select2

    constructor(){}

    randomize(characters){
        for(let char of characters){
            if(characters[char] == 'on'){
                this.choiceArray.push(char)
            }
        }
        let index1 = Math.floor(Math.random()*this.choiceArray.length)
        let index2
    }

}
