import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBrandheaderComponent } from './basic-brandheader.component';

describe('BasicBrandheaderComponent', () => {
  let component: BasicBrandheaderComponent;
  let fixture: ComponentFixture<BasicBrandheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBrandheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBrandheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
