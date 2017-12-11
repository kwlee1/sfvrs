import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

    allchars = ['Abigail','Akuma','Alex','Balrog','Birdie','Cammy','Chunli','Dhalsim',
    'Ed','Fang','Guile','Ibuki','Juri','Karin','Ken','Kolin','Laura','Mbison','Menat','Nash',
    'Necalli','R-Mika','Rashid','Ryu','Urien','Vega','Zangief','Zeku']

    character = {}

    constructor(private _charService: CharserviceService) { }


    ngOnInit() {
    }

}
