import { RequestService } from './request.service';
import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { METHOD } from '../constantes';
declare var $: any;
declare var bootbox: any;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  error: any = (e: any, data:any) => {
    this.notifier.notify('error', e);
  };

  success: any = (res: any, data: any) => {
    $('#' + data.modal_id).modal('hide');
    data.success();
  };

  finally: any = (data: any) => {
    $('#' + data.save_buton_id).show();
  }

  constructor(
    private request: RequestService,
    private notifier: NotifierService
  ) { }


  /*crud com notifier,modal e btn apenas*/
  crud(data: any) {
    $('#' + data.save_buton_id).hide();
    switch (data.method) {
      case METHOD.POST:
        this.request.post(data.url, data.object).subscribe(
          (r: any) => {
            this.success(r, data);
          }, (e: any) => {
            this.error(e, data);
          }, () => {
            this.finally(data);
          });
          break;
      case METHOD.PUT:
        this.request.put(data.url, data.object).subscribe(
          (r: any) => {
            this.success(r, data);
          }, (e: any) => {
            this.error(e, data);
          }, () => {
            this.finally(data);
          });
          break;
      default:
    }

  }


  /* Generic function to remove a object*/
  remove(data: any) {
    bootbox.confirm({
      message: ('Deseja mesmo remover o ' + data.name + '?').toUpperCase(),
      closeButton: false,
      buttons: {
        confirm: {
          label: 'Sim, Remover',
          className: 'btn-success btn-sm'
        },
        cancel: {
          label: 'Não',
          className: 'btn-danger btn-sm'
        }
      },
      callback: (result: any) => {
        if (result) {
          this.request.delete(data.url).subscribe(
            (r: any) => {
              data.success();
            }, (e: any) => {
              this.notifier.notify(
                'error',
                e
              );
            });
        }
      }
    },
    );
  }


}
