import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeugdvakantieComponent } from './jeugdvakantie.component';

describe('JeugdvakantieComponent', () => {
  let component: JeugdvakantieComponent;
  let fixture: ComponentFixture<JeugdvakantieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeugdvakantieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeugdvakantieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
