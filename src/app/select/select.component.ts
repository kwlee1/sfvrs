import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

    allchars = ['Abigail','Akuma','Alex','Balrog','Birdie','Blanka','Cammy','Chunli','Dhalsim',
    'Ed','Fang','Guile','Ibuki','Juri','Karin','Ken','Kolin','Laura','Mbison','Menat','Nash',
    'Necalli','R-Mika','Rashid','Ryu','Sakura','Urien','Vega','Zangief','Zeku']

    character = {}
    mirror = true

    constructor(private _charService: CharserviceService) { }

    ngOnInit() {
        this.initCharacter()
    }

    initCharacter(){
        for(let char of this.allchars){
            this.character[char] = true
        }
    }

    deselect(){
        for(let char of this.allchars){
            this.character[char] = ''
        }
    }

    randomizeChars(){
        console.log(this.character)
        this._charService.makeChoiceArray(this.character,this.mirror)
    }

}
