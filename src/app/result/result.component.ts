import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    char1 = ''
    char2 = ''
    charArray = []
    resultMirror = true

    constructor(private _charService:CharserviceService){}

    ngOnInit() {
        this.initSelect()
    }

    initSelect(){
        this._charService.select1.subscribe(
            (response) => { this.char1 = response }
        )
        this._charService.select2.subscribe(
            (response) => { this.char2 = response }
        )
        this.charArray = this._charService.getSelects()
    }

    reselect(){
        this._charService.randomize(this.charArray,this.resultMirror)
    }

}
