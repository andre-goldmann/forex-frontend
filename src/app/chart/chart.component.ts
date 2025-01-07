import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full bg-trading-dark flex flex-col">
      <div class="border-b border-trading-border p-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="text-xl font-bold">EUR/USD</span>
          <span class="text-lg">1.2345</span>
          <span class="text-trading-green">+0.0023 (+0.19%)</span>
        </div>
        
        <div class="flex gap-2">
          <button *ngFor="let period of periods" 
                  [class.bg-trading-panel]="activePeriod === period"
                  class="px-3 py-1 rounded hover:bg-trading-panel transition-colors"
                  (click)="activePeriod = period">
            {{period}}
          </button>
        </div>
      </div>
      
      <div class="flex-1 flex items-center justify-center text-gray-500">
        Chart Area - Will integrate real charting library later
      </div>
    </div>
  `
})
export class ChartComponent {
  periods = ['1H', '4H', '1D', '1W', '1M'];
  activePeriod = '1D';
}
