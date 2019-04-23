import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { NodeService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NodeService]
})
export class AppComponent implements OnInit {
  constructor(private nodeDataService:NodeService) {}

  title = 'Tree Structure';
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  ngOnInit() {
    this.nodeDataService.getFiles().then(files => this.filesTree = files);
  }
}
