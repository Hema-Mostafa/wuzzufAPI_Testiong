import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {



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

}
