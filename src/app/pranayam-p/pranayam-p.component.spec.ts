import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranayamPComponent } from './pranayam-p.component';

describe('PranayamPComponent', () => {
  let component: PranayamPComponent;
  let fixture: ComponentFixture<PranayamPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranayamPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranayamPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
