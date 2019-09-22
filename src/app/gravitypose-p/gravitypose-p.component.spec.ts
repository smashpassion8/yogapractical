import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityposePComponent } from './gravitypose-p.component';

describe('GravityposePComponent', () => {
  let component: GravityposePComponent;
  let fixture: ComponentFixture<GravityposePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityposePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravityposePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
