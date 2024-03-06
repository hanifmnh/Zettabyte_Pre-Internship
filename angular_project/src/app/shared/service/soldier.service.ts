import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SoldierType } from '../interface/soldier.interface';
import { soldiers } from '../data/soldier.data';

@Injectable({
  providedIn: 'root',
})
export class SoldierService {
  soldiersSubject: BehaviorSubject<SoldierType[]> = new BehaviorSubject<
    SoldierType[]
  >(soldiers);
  soldiers$ = this.soldiersSubject.asObservable();

  constructor() {}

  getSoldierById(id: string): SoldierType | undefined {
    return this.soldiersSubject.value.find((soldier) => soldier.id === id);
  }

  addSoldier(newSoldier: SoldierType): void {
    const currentSoldiers = [...this.soldiersSubject.value];
    currentSoldiers.push(newSoldier);
    this.soldiersSubject.next(currentSoldiers);
  }

  updateSoldier(updatedSoldier: SoldierType): void {
    const currentSoldiers = [...this.soldiersSubject.value];
    const index = currentSoldiers.findIndex(
      (soldier) => soldier.id === updatedSoldier.id
    );
    if (index !== -1) {
      currentSoldiers[index] = updatedSoldier;
      this.soldiersSubject.next(currentSoldiers);
    }
  }

  deleteSoldier(id: string): void {
    const soldierList = this.soldiersSubject.getValue();
    const index = soldierList.findIndex((soldier) => soldier.id === id);
    if (index !== -1) {
      soldierList.splice(index, 1);
      this.soldiersSubject.next(soldierList);
    }
  }
}
