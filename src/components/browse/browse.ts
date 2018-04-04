import { Input, OnInit, Component, Output, EventEmitter } from "@angular/core";
import { Provider } from "../../classes/provider";
import { ModalController } from "ionic-angular";

@Component({
  selector: "browse",
  templateUrl: "browse.html"
})
export class BrowseComponent implements OnInit {
  @Input("title") title: string;
  @Input("labels") labels: string[];
  @Input("provider") provider: Provider;
  @Input("onAdd") callbackAdd;

  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  private elements = [];

  constructor(public modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.provider.getAll().subscribe(elements => (this.elements = elements));
  }

  select(key: string) {
    this.onSelect.emit(key);
  }

  add() {
    this.callbackAdd();
  }

  getLabels(element) {
    let labels: string[] = [];
    this.labels.forEach(attributes => {
      let label;
      attributes.split(".").forEach(attribute => {
        if (!label) {
          label = element[attribute];
        } else {
          label = label[attribute];
        }
      });
      labels.push(label);
    });
    return labels;
  }
}
