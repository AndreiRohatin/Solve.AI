import { Routes } from '@angular/router'
import { TimeTrackerComponent } from 'src/app/sections/time-tracker/time-tracker.component';
import { ExpenseTrackerComponent } from 'src/app//sections/expense-tracker/expense-tracker.component';
import { TaskManagerComponent } from 'src/app//sections/task-manager/task-manager.component';
import { MoneyManagerComponent } from 'src/app//sections/money-manager/money-manager.component';
import { FAQComponent } from 'src/app//sections/faq/faq.component';
import { SettingsComponent } from 'src/app//sections/settings/settings.component';
import { OverviewComponent } from 'src/app//sections/overview/overview.component';
import { NotificationsComponent } from 'src/app/sections/notifications/notifications.component';

export const appRoutes : Routes = [
    { path : "" ,   redirectTo : "/overview" ,  pathMatch : "full" },
    { path : "track/money" ,     component : ExpenseTrackerComponent },
    { path : "track/time" ,      component : TimeTrackerComponent },
    { path : "manage/money" ,    component : MoneyManagerComponent },
    { path : "manage/time" ,     component : TaskManagerComponent },
    { path : "settings" ,        component : SettingsComponent},
    { path : "faq" ,             component : FAQComponent },
    { path : "overview" ,        component : OverviewComponent },
    { path : "notifications" ,   component : NotificationsComponent }
];