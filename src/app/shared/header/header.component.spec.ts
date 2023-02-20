import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugEle: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugEle = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("open", () => {
    it('should trigger open by setting toggle to true', () => {
      component.toggle = false;
      component.open();
      fixture.detectChanges();
      expect(component.toggle).toBe(true);
    })

    it('should not trigger open by setting toggle to false', () => {
      component.toggle = true;
      component.open();
      fixture.detectChanges();
      expect(component.toggle).toBe(false);
    })

    it('should click and open the side bar',()=>{
      const a = spyOn(component.isOpen,'emit');
      component.open();
      expect(a).toHaveBeenCalled();
    })
  })

  describe("changeColor",()=>{
    it('should increment index and change the currentColor value',()=>{
      component.currentColor = "green"
      component.changeColor();
      
      
      expect(component.index).toBeGreaterThan(0)
      expect(component.currentColor).toBe("warn")
    })
  })

});
