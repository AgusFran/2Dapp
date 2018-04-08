import { Input, OnInit, Component, Output, EventEmitter } from "@angular/core";
import { Provider } from "../../classes/provider";
import { ModalController, AlertController, ToastController } from "ionic-angular";

@Component({
  selector: "browse",
  templateUrl: "browse.html"
})
export class BrowseComponent implements OnInit {
  @Input("labels") labels: string[];
  @Input("provider") provider: Provider;
  @Input("onAdd") callbackAdd;

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  private elements = [];

  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit(): void {
    this.provider.getAll().subscribe(elements => (this.elements = elements));
  }

  select(element) {
    this.onSelect.emit(element);
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
