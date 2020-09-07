export default class AccordionItem {
  title: string;
  text: string;
  index: number;

  static indexHolder: number;

  constructor(title: string, text: string, index: number = AccordionItem.indexHolder++) {
    this.title = title;
    this.text = text;
    this.index = index;
  }
}
