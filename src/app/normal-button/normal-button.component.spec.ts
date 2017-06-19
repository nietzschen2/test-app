import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalButtonComponent } from './normal-button.component';

describe('NormalButtonComponent', () => {
  let component: NormalButtonComponent;
  let fixture: ComponentFixture<NormalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
