import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIData } from "../model/vendorData.model";


@Injectable()
export class AppApiService {
  private apiUrl: string='https://01.fy25ey01.64mb.io/';  

  constructor(private http: HttpClient) { }
  getVendorData():Observable<APIData>{
    return this.http.get<APIData>(this.apiUrl);
  }
  
}