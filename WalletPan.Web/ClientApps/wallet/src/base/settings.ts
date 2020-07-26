export class Setting {
  static mainUrl: string = 'http://localhost:5000/api/';
  static Ripple: string = 'wss://s.altnet.rippletest.net/';

  static GetApiUrl = (address: string): string => Setting.mainUrl + address;
}

export default Setting;
