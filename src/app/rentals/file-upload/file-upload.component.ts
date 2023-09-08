import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  currentFile: File

  ngOnInit(): void {
    
  }

  fileSelected(event : Event){
    const fileInput = (event.target as HTMLInputElement)
    if(fileInput.files?.length) this.currentFile = fileInput.files[0]
  }
}
