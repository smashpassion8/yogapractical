import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsanaDetailComponent } from './asana-detail.component';

describe('AsanaDetailComponent', () => {
  let component: AsanaDetailComponent;
  let fixture: ComponentFixture<AsanaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsanaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsanaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
