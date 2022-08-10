import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
