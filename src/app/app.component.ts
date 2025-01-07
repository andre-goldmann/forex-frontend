import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ChartComponent} from './chart/chart.component';
import {MarketWatchComponent} from './market-watch/market-watch.component';
import {TradingPanelComponent} from './trading-panel/trading-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ChartComponent, MarketWatchComponent, TradingPanelComponent],
  template: `
    <div class="h-screen flex flex-col">
      <app-header></app-header>
      <div class="flex-1 flex overflow-hidden">
        <app-market-watch></app-market-watch>
        <app-chart class="flex-1"></app-chart>
        <app-trading-panel></app-trading-panel>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'forex-frontend';
}
