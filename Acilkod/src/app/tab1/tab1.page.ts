import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
interface AlarmScreenData {
  renk: string;
  text: string;
  icon: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  // var alarmScreenData = [];
  // function ekranDataYukle() {
  //   alarmScreenData.push({ renk: '#8AADD9', text: 'Medikal Acil Durum', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#D0D0D0', text: 'Saldırgan Kişi/Rehine Durumu', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#8DCA4D', text: 'Acil Durum Sonlandırma', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#F7BA00', text: 'Tehlikeli Madde Sızıntısı', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#F6C6F7', text: 'Bebek/Çocuk Kaçırma', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#9400C7', text: 'Acil Müdahala Planı Aktivasyonu', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#F60000', text: 'Yangın', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#F7F7F7', text: 'Çalışana Saldırı', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#F7F700', text: 'Tahliye', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#00F7F7', text: 'Dış Toplu Yaralanma', icon: 'fa-solid fa-bell' });
  //   alarmScreenData.push({ renk: '#000000', text: 'Bomba Tehdidi', icon: 'fa-solid fa-bell' });

  // }
  // function EkranYukle() {

  //   let area = document.getElementsByClassName("MainAlertArea");
  //   area = area[0];
  //   let boxes = '';
  //   for (let alarmbox of alarmScreenData) {
  //     boxes += '<ion-col class="alarmbox" style="background-color:' + alarmbox.renk + '"><i class="' + alarmbox.icon + '"></i>' + alarmbox.text + '</ion-col>';

  //   }
  //   area.innerHtml = boxes;
  // }
  // ekranDataYukle();
  // EkranYukle();




  public alarmScreenData: AlarmScreenData[] = [];
  public EkranDataYukle(): void {
    this.alarmScreenData.push({ renk: '#8AADD9', text: 'Medikal Acil Durum', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#D0D0D0', text: 'Saldırgan Kişi/Rehine Durumu', icon: 'fa-regular fa-heart' });
    this.alarmScreenData.push({ renk: '#8DCA4D', text: 'Acil Durum Sonlandırma', icon: 'fa-regular fa-bell' });
    this.alarmScreenData.push({ renk: '#F7BA00', text: 'Tehlikeli Madde Sızıntısı', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#F6C6F7', text: 'Bebek/Çocuk Kaçırma', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#9400C7', text: 'Acil Müdahala Planı Aktivasyonu', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#F60000', text: 'Yangın', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#F7F7F7', text: 'Çalışana Saldırı', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#F7F700', text: 'Tahliye', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#00F7F7', text: 'Dış Toplu Yaralanma', icon: 'fa-solid fa-bell' });
    this.alarmScreenData.push({ renk: '#000000', text: 'Bomba Tehdidi', icon: 'fa-solid fa-bell' });
  }
  public EkranYukle(): void {
    let area = document.getElementsByClassName("MainAlertArea")[0] as HTMLElement;
    let boxes = '';
    for (let alarmbox of this.alarmScreenData) {
      boxes += `<ion-col icon="home" class="alarmbox" style="background-color:${alarmbox.renk}; border: 1px solid white!important;
      border-radius: 10px!important;">
      <fa-icon icon="home"></fa-icon>
      ${alarmbox.text}</ion-col>`;
    }

    area.innerHTML=boxes;
  }
  ngAfterViewInit(){
    console.log('SAyfa Yüklendi');
    this.EkranYukle();
  }
  constructor() {
     this.EkranDataYukle();
  } 

}
