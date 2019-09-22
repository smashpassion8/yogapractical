import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalityPComponent } from './totality-p.component';

describe('TotalityPComponent', () => {
  let component: TotalityPComponent;
  let fixture: ComponentFixture<TotalityPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalityPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalityPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
