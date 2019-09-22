import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityposeComponent } from './gravitypose.component';

describe('GravityposeComponent', () => {
  let component: GravityposeComponent;
  let fixture: ComponentFixture<GravityposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravityposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
