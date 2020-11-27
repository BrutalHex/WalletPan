export class Setting {
  static mainUrl: string = 'http://localhost:5000/api/';
  static Ripple: string = 'wss://s1.ripple.com'; //;'wss://s.altnet.rippletest.net:51233'; //

  static GetApiUrl = (address: string): string => Setting.mainUrl + address;
}

export default Setting;
