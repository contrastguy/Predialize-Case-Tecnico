import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  //pegar as funções e usá-las no Front-End
  getAll() {
    return this.http.request('GET', this.apiUrl,{responseType:'json'});
 }
  

  getById() {}

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
