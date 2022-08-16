import { Injectable } from '@angular/core';

export const IP_SERVER = 'localhost:8080';

export const API_SERVER = 'http://' + IP_SERVER + '/api/';

export const appModuleID = 1;
export const ALLOWED_ROLES = ['1', '2', '3', '5', '4'];

export const ACCESS_TOKEN = 'ui34898yklllhhbls90506kl';
export const REFRESH_TOKEN = 'ui34898ykll9l05elhhblskl';

export class METHOD {
  static GET = 'GET';
  static POST = 'POST';
  static DELETE = 'DELETE';
  static PUT = 'PUT';
  static UNKNOWN = 'UNKNOWN';
}

export const colors: any = [
  '#e60049',
  '#0bb4ff',
  '#50e991',
  '#e6d800',
  '#9b19f5',
  '#ffa300',
  '#dc0ab4',
  '#b3d4ff',
  '#00bfa0',
];
export const colors02: any = [
  '#e60049',
  '#0bb4ff',
  '#50e991',
  '#e6d800',
  '#9b19f5',
  '#ffa300',
  '#dc0ab4',
  '#b3d4ff',
  '#00bfa0',
].reverse();

@Injectable({
  providedIn: 'root',
})
export class Constantes {
  /*cookie*/
  static CNAME = API_SERVER;
}
