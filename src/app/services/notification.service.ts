import { Inject, Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enums/notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifier: NotificationService) { }

  public notify(type: NotificationType, message: string) {
    this.notifier.notify(type, message);
  }
}
