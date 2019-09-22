import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryseriesPComponent } from './primaryseries-p.component';

describe('PrimaryseriesPComponent', () => {
  let component: PrimaryseriesPComponent;
  let fixture: ComponentFixture<PrimaryseriesPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryseriesPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryseriesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
