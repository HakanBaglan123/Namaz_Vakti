import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { Vakit } from './model/vakit';
import { VakitService } from './servic/vakit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  vakit: Vakit[] = [];
  iller: any[] = [];

  ilControl: FormControl = new FormControl();
  constructor(private vakitService: VakitService, private ngSelectConfig: NgSelectConfig) {
    ngSelectConfig.addTagText = "Ekle";
    ngSelectConfig.notFoundText = "Veri Bulunamadı";

    this.vakitService.getIller().subscribe(res => this.iller = res.iller);

    this.setIl("istanbul");
    this.ilControl.valueChanges.subscribe(secilenIL => {
      console.log("Seçilen il:", secilenIL);
      this.setIl(secilenIL);
    })
  }

  setIl(il: string) {
    this.vakitService.getVakit(il).subscribe(res => this.vakit = res.result);
  }
}
