import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private readonly messageService: MessageService) {}

  error(title: string, message: string): void {
    this.toast('error', title, message);
  }

  success(title: string, message: string): void {
    this.toast('success', title, message);
  }

  private toast(
    severity: 'error' | 'success',
    title: string,
    message: string
  ): void {
    this.messageService.add({
      severity,
      summary: title,
      detail: message,
    });
  }
}
