import { Routes }                   from '@angular/router'
import { TimeTrackerComponent }     from 'src/app/sections/time-tracker/time-tracker.component';
import { ExpenseTrackerComponent }  from 'src/app//sections/expense-tracker/expense-tracker.component';
import { TaskManagerComponent }     from 'src/app//sections/task-manager/task-manager.component';
import { MoneyManagerComponent }    from 'src/app//sections/money-manager/money-manager.component';
import { FAQComponent }             from 'src/app//sections/faq/faq.component';
import { SettingsComponent }        from 'src/app//sections/settings/settings.component';
import { OverviewComponent }        from 'src/app//sections/overview/overview.component';
import { NotFoundComponent }        from './app/sections/not-found/not-found.component';
import { NotificationsComponent }   from 'src/app/sections/notifications/notifications.component';
import { DetailsComponent }         from './app/sections/details/details.component';

export const appRoutes : Routes = [
    { path : "" ,   redirectTo : "/overview" ,  pathMatch : "full" },
    { path : "overview" ,        component : OverviewComponent },
    { path : "track/money" ,     component : ExpenseTrackerComponent },
    { path : "track/time" ,      component : TimeTrackerComponent },
    { path : "manage/money" ,    component : MoneyManagerComponent },
    { path : "manage/time" ,     component : TaskManagerComponent },
    { path : "settings" ,        component : SettingsComponent},
    { path : "faq" ,             component : FAQComponent },
    { path : "details" ,         component : DetailsComponent },
    { path : "notifications" ,   component : NotificationsComponent },
    { path : '404' ,             component : NotFoundComponent},
    //{ path : '**' , redirectTo : '/404'}, //leave at the bottom since angular verifies routes in ascending order
];