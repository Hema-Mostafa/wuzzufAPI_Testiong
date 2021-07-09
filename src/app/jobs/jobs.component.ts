import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/models/job';
import { JobService } from '../job.service';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  data !: any[];
  copydata !: any[];
  skills !: any[]


  aLink = 'http://localhost:8080/'
  aTag = document.getElementById('imgurl');

  table !: any[];

  apiName !: string

  constructor(private jobService: JobService) {
    this.apiName = 'all-jobs'
  }


  ngOnInit(): void {


    this.jobService.getAllJobs('http://localhost:8080/jobs')
      .subscribe(res => {
        this.data = res
        this.copydata = this.data
       
      })


  }

  getCompaniesData() {

    this.jobService.getAllCompanies('http://localhost:8080/all-companies')
      .subscribe(res => {
        this.data = res
        this.copydata = this.data
        this.apiName = "all-companies"

        window.open(this.aLink + 'companies-count-piechart', "_blank");


      })
  }
  getjobsData() {

    this.jobService.getAllJobs('http://localhost:8080/jobs')
      .subscribe(res => {
        this.data = res
        this.copydata = this.data
        this.apiName = "all-jobs"


      })

  }

  getAllLocations() {

    this.jobService.getMostLocations('http://localhost:8080/most-locations')

      .subscribe(res => {
        this.data = res
        this.copydata = this.data
        this.apiName = "most-locations"

        /* Open Image in new tap */
        window.open(this.aLink + 'locations-count-catchart', "_blank");
      })

  }

  getDemandsJob() {

    this.jobService.getDemandesJobs('http://localhost:8080/demands-job')

      .subscribe(res => {
        this.data = res
        this.copydata = this.data
        this.apiName = "demands-job"

        // open image in new tap
        window.open(this.aLink + 'job-demands-catChart', "_blank");

      })

  }

  getRequriedSkills() {

    this.jobService.getRequriedSkills('http://localhost:8080/req-skills')

      .subscribe(res => {
        this.data = Object.entries(res)
        this.copydata = this.data
        this.apiName = "req-skills"
        
      })

  }


  getAllCompaniesChart() {
    this.jobService.getAllCompaniesChart('http://localhost:8080/companies-count-piechart')
      .subscribe(res => {
        console.log(res)
      })
  }

  getDemandsJobChart() {
    this.jobService.getAllCompaniesChart('http://localhost:8080/job-demands-catChart')
      .subscribe(res => {
        console.log(res)
      })
  }
  getLocationsChart() {
    this.jobService.getAllCompaniesChart('http://localhost:8080/locations-count-catchart')
      .subscribe(res => {
        console.log(res)
      })
  }


  /* DElete Method and Filter To make The  app more interactive */
  delete(job: Job) {


    let index = (this.data as Array<any>).indexOf(job);
    (this.data as Array<any>).splice(index, 1);


  }

  filter(query: string) {

    this.data = this.copydata

    let filterData = (query) ?
      this.data.filter(p => p.title.toLocaleLowerCase().includes(query.toLowerCase())) :
      this.data

    this.data = filterData

  }

}
