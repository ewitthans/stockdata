import { Component, Input, OnInit } from "@angular/core";
import { APIService } from "./api.service";
import { Stock } from "./stock";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @Input()
  public stockData: Stock;

  constructor(private svc: APIService) {}

  ngOnInit() {
    this.svc.getStocks().subscribe(data => {
      this.stockData = data;
      console.log(this.stockData);
      console.log(this.stockData.companyName);
    });
  }
}
