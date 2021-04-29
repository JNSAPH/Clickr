import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickRouteComponent } from './click-route.component';

describe('ClickRouteComponent', () => {
  let component: ClickRouteComponent;
  let fixture: ComponentFixture<ClickRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
