import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLoginformComponent } from './basic-loginform.component';

describe('BasicLoginformComponent', () => {
  let component: BasicLoginformComponent;
  let fixture: ComponentFixture<BasicLoginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLoginformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
