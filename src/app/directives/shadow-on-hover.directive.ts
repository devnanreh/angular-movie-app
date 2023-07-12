import { Directive, ElementRef, HostBinding, Renderer2 } from "@angular/core";

@Directive({
  selector: "[shadowOnHover]",
})
export class ShadowOnHover {
  @HostBinding("class")
  shadowOnHover = "shadow-on-hover";
}
