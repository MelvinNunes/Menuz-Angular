import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { v4 as uuidv4 } from 'uuid';
import * as  moment from 'moment';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class Functions {

  format_date(d: any, args: any) {
    if (d === '1970-01-02 00:00:00' || d === null) {
      return 'NÃO DEFINIDA';
    }
    if (args === 3) {
      return new Date(d).toLocaleDateString('pt', { year: 'numeric', month: 'long', day: 'numeric' });
    } else if (args === 2) {
      return new Date(d).toLocaleDateString('pt', { year: 'numeric', month: 'long' });
    }
    else if (args === 4) {
      return new Date(d).toLocaleTimeString('pt', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return ' - ';
  }

  format_currency(v: any) {
    const formatter = new Intl.NumberFormat('pt', {
      style: 'currency',
      currency: 'MZN',
      minimumFractionDigits: 2
    });

    return formatter.format(v);
  }

  getObjectoByID(id: any, array: any) {
    for (const a in array) {
      if (array[a].id === id) {
        return array[a];
      }
    }
    return null;
  }

  initSelects(target: any, data: any) {
    if (!isNaN(data)) {
      $(target).dropdown('set selected', data);
    } else {
      const list = [];
      for (const i of data) {
        list.push(i.id + '');
      }
      $(target).dropdown('set selected', list);
    }
  }

  processDatePickerDate(d: any) {
    try {
      const date = new Date(d);
      date.setDate(date.getDate() + 1);
      return date.toISOString().slice(0, 19).replace('T', ' ');
    } catch (e) {
      return null;
    }
  }

  sqlDateFromNgbDate(ngbDate: any) {
    return this.processDatePickerDate(new Date(ngbDate.year * 1, ngbDate.month * 1, ngbDate.day * 1));
  }

  ngbDateFromSqlDate(sqlDate: any) {
    const jsDate = moment(sqlDate);

    return {
      year: jsDate.year(),
      month: jsDate.month()+1,
      day: jsDate.date()
    };
  }

  parseArray(a: any) {
    try {
      return JSON.parse(a);
    } catch (e) {
      return [];
    }
  }

  idList(list: any) {
    let res = [];
    for (const i of list) {
      res.push(i.id);
    }
    return res;
  }

  round(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100
  }

  percentagem(a: number, b: number) {
    return this.round((a * 100) / b);
  }

  exportToExcel(data: any, fileName: any = undefined): void {
    try {
      if (fileName == undefined) {
        fileName = uuidv4();
      }
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, fileName + '.xlsx');
    } catch (err) {
      console.error('export error', err);
    }
  }
}
