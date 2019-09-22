import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudraComponent } from './mudra.component';

describe('MudraComponent', () => {
  let component: MudraComponent;
  let fixture: ComponentFixture<MudraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
