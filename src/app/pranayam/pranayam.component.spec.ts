import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PranayamComponent } from './pranayam.component';

describe('PranayamComponent', () => {
  let component: PranayamComponent;
  let fixture: ComponentFixture<PranayamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PranayamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PranayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
