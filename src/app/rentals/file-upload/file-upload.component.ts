import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  currentFile: File

  ngOnInit(): void { }

  constructor(private apiService : ApiService){ }

  fileSelected(event : Event){
    const fileInput = (event.target as HTMLInputElement)
    if(fileInput.files?.length) this.currentFile = fileInput.files[0]
    this.apiService.postPicture(this.currentFile).subscribe( datas => {
      console.log(datas)
    })
  }
}
