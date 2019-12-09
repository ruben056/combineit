import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerkloosheidComponent } from './werkloosheid.component';

describe('WerkloosheidComponent', () => {
  let component: WerkloosheidComponent;
  let fixture: ComponentFixture<WerkloosheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerkloosheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerkloosheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
