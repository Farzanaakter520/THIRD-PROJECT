import { Component } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-harry-potter',
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css'
})
export class HarryPotterComponent {
  spells: any[] = [];

  constructor(private harryPotterService: HarryPotterService) {}

  ngOnInit(): void {
    console.log('Harry Potter');
    this.fetchSpells();
  }

  getSpells(): void {
    this.harryPotterService.getSpells().subscribe(spells => this.spells=spells);
    }

    fetchSpells(): void {
      this.harryPotterService.getSpells().subscribe(
        (data) => {
          this.spells = data;
          console.log('Fetched spells:', this.spells);
        },
        (error) => {
          console.error('Error fetching spells:', error);
        }
      );
  }
}
