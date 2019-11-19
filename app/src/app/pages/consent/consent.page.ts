import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from "@ionic/angular";
import { UlaService } from "../../../service/ula.service";

@Component({
  selector: 'app-consent',
  templateUrl: 'consent.page.html',
  styleUrls: ['consent.page.scss']
})
export class ConsentPage implements OnInit {

  private payload: any;

  constructor(
    private ulaService: UlaService,
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {
  }

  async ngOnInit() {
    this.payload = this.navParams.get('payload');

    // Todo payload.confirmAttestations - make a list of these in the HTML page
    // Todo create a consent button and link it to the giveConsent method
    // Todo (bonus) payload.missingAttestations - these are requested by the verifier, but do not meet the verifiers requirements or are not in the storage
    // If you don't want to spend time on UI now, just call this.giveConsent() here directly to skip the consent screen
  }

  giveConsent() {
    // Todo send a message to the ULA with { type: 'accept-consent', payload: this.payload.filledTemplate, url: this.payload.url } and a callback with one argument of type UlaResponse
    // Todo inside the callback function, show a success message and dismiss the modal using modalCtrl
  }

}
