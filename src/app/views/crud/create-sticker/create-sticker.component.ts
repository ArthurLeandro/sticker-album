import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-create-sticker",
  templateUrl: "./create-sticker.component.html",
  styleUrls: ["./create-sticker.component.css"],
})
export class CreateStickerComponent implements OnInit {
  stickerForm: FormGroup;
  iamge: string = " ";

  constructor(private builder: FormBuilder) {
    this.GenerateNewForm();
  }

  ngOnInit(): void {}

  public GenerateNewForm(): void {
    this.stickerForm = this.builder.group({
      name: "",
      description: "",
      stickerNumber: 0,
      side: "",
      type: "",
      image: "",
    });
  }

  UploadImage(e: any) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = (event: any) => {
      // console.log(event.target.result);
      this.iamge = event.target.result;
      this.stickerForm.value["image"] = this.iamge;
    };
  }

  SendSticker(data: any): void {
    console.log("TODO: enviar para o backend:", data);
  }
}
