import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


// Tip: Seeing 'import ProcessEthBarcode from ..'? Change this into 'import { ProcessEthBarcode } from ..'

@Injectable()
export class UlaService {
  private eventHandler: any // Change this type to EventHandler after installing all dependencies

  constructor(private storage: Storage) {
    // Some repositories and plugins require a DataStorage, use the constructor param for that.
    const privateMasterKey = 'xprv9s21ZrQH143K2LLQ7KdTM8D8yAD54aGpcLwCt3gniTeKZbyPjvgwtCZeNErqSRWJMQJonB6C2qehSMsvt4JPD3amjZvfg9eNdEksXHhezHM';
    // Todo construct all plugin dependencies here

    // Todo construct all plugins here

    // Todo construct the ULA eventhandler with the plugins
  }

  public async sendMessage(message: object, callback: any) {
    // Todo simply call eventHandler.processMsg with the two parameters above, that's it
  }
}
