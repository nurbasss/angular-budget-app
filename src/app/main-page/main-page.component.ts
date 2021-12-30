import { BudgetItem } from './../../shared/models/budget-item';
import { Component, OnInit } from '@angular/core';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItemList: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItemList.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItemList.indexOf(item);
    this.budgetItemList.splice(index,1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent){
    this.budgetItemList[this.budgetItemList.indexOf(updateEvent.old)] = updateEvent.new; 
    this.totalBudget -= updateEvent.old.amount
    this.totalBudget += updateEvent.new.amount;
  }

}
