import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { RepoModel } from './repos.mode';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repoUrl: string;
  repos: RepoModel[];
  // or you can keep it simple to "repos: any[];"
  constructor(private githubService: GithubService, private ref: ChangeDetectorRef) { 
     
  }

  ngOnInit(): void {
  }

  ngOncganges(): void {
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: []) => {this.repos = repos;} )
    }else{

    }
  }
}
