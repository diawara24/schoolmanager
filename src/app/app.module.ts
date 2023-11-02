import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { NotificationModule } from './notification.module';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr';
import { NotificationService } from './services/notification.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NotificationModule
    ],
    providers: [NotificationService,
        {provide: LOCALE_ID, useValue: 'fr'}
],
    bootstrap: [AppComponent]
})
export class AppModule {
}
