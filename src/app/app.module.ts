import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimeTrackerComponent } from './sections/time-tracker/time-tracker.component';
import { ExpenseTrackerComponent } from './sections/expense-tracker/expense-tracker.component';
import { TaskManagerComponent } from './sections/task-manager/task-manager.component';
import { MoneyManagerComponent } from './sections/money-manager/money-manager.component';
import { FAQComponent } from './sections/faq/faq.component';
import { SettingsComponent } from './sections/settings/settings.component';
import { OverviewComponent } from './sections/overview/overview.component';
import { NotificationsComponent } from './sections/notifications/notifications.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TimeTrackerComponent,
    ExpenseTrackerComponent,
    TaskManagerComponent,
    MoneyManagerComponent,
    FAQComponent,
    SettingsComponent,
    OverviewComponent,
    NotificationsComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
