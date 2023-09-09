import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  currentFile: File

  // send an event that can be tracked by the parent (the rental form)
  @Output() fileUploaded = new EventEmitter<{data : string}>()

  ngOnInit(): void { }

  constructor(private apiService : ApiService){ }

  fileSelected(event : Event){
    const fileInput = (event.target as HTMLInputElement)
    if(fileInput.files?.length) this.currentFile = fileInput.files[0]
    this.apiService.postPicture(this.currentFile).subscribe( datas => {
      this.fileUploaded.emit({data : datas.filename})
    })
  }
}
