/* eslint-disable no-console */
import { BrowserMultiFormatReader, Result } from '@zxing/library';

class QRCodeScanner {
  reader: BrowserMultiFormatReader;

  device: string;

  constructor() {
    this.reader = new BrowserMultiFormatReader();
    this.device = '';
  }

  getDevice = () => {
    this.reader
      .listVideoInputDevices()
      .then((videoInputDevices) => {
        this.device = videoInputDevices[videoInputDevices.length - 1].deviceId;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  scan = (callback: (result: Result) => void) => {
    try {
      this.reader.decodeFromVideoDevice(this.device, 'video', callback);
    } catch (e) {
      console.log(e);
    }
  };

  reset = () => {
    this.reader.reset();
  };
}

export default new QRCodeScanner();
