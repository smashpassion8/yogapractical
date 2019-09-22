import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySeriesComponent } from './primaryseries.component';

describe('PrimarySeriesComponent', () => {
  let component: PrimarySeriesComponent;
  let fixture: ComponentFixture<PrimarySeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
