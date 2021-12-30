import { BudgetItem } from './../../../shared/models/budget-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isIncome: boolean = true;
  @Input() budgetItem?: BudgetItem;
  @Output() xButtonPressed: EventEmitter<any> = new EventEmitter;
  @Output() cardClick: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonPressed(){
    this.xButtonPressed.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }
}
