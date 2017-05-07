import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen  = false;

  constructor() { }
  
  @HostListener('mouseenter') mouseEnter()
  {
    this.isOpen = true;    
  }

  @HostListener('mouseleave') mouseLeave()
  {
    this.isOpen = false;    
  }

}
