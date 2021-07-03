import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit 
{
  Designation!:string;
  Username !:string;
  NoOfTeamMembers !:number; 
  TotalCostofAllProjects!:number;
  PendingTasks!:number;
  UpComingProjects!:number;
  ProjectCost!:number;

  CurrentExpenditure!:number;
  AvailableFunds!:number;

  ngOnInit() {
    this.Designation = "Team Leader"
    this.Username = "John Doe"
    this.NoOfTeamMembers = 67
    this.TotalCostofAllProjects =240
    this.PendingTasks= 15
    this.UpComingProjects =2
    this.ProjectCost=2112407
    this.CurrentExpenditure = 96788
    this.AvailableFunds =52536
  }

}
