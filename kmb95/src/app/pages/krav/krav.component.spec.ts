import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KravComponent } from './krav.component';

describe('KravComponent', () => {
  let component: KravComponent;
  let fixture: ComponentFixture<KravComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KravComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
