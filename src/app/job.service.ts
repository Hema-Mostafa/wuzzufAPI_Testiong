import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  constructor(private http: HttpClient) { }

  getAllJobs(url: string) {
    return this.http.get<any>(url)
  }

  getAllCompanies(url: string) {
    return this.http.get<any>(url)
  }

  getMostLocations(url: string) {
    return this.http.get<any>(url)
  }

  getDemandesJobs(url: string) {
    return this.http.get<any>(url)
  }

  getRequriedSkills(url: string) {
    return this.http.get<any>(url)
  }


  getAllCompaniesChart(url: string) {
    return this.http.get<any>(url)

  }
  getLocationChart(url: string) {
    return this.http.get<any>(url)

  }

  getDemandsJobChart(url: string) {

    return this.http.get<any>(url)

  }

  img(url: string) {

    return this.http.get<any>(url)

  }


}
