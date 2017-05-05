import { Component, Input , Output, EventEmitter} from '@angular/core';
import {Cell} from "../moduls/cell"

@Component({
  selector: 'vm-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent{
  @Input() cells: Array<Cell>;
  @Output() selectedCell =  new EventEmitter();
  @Input() thisCell:Cell;

  // Output handel event
  selectCell(cell:Cell){
    this.selectedCell.emit(cell)
  }

}
