import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderCardsComponent } from './placeholder-cards.component';

describe('PlaceholderCardsComponent', () => {
  let component: PlaceholderCardsComponent;
  let fixture: ComponentFixture<PlaceholderCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
