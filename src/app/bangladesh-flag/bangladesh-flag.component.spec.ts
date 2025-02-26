import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangladeshFlagComponent } from './bangladesh-flag.component';

describe('BangladeshFlagComponent', () => {
  let component: BangladeshFlagComponent;
  let fixture: ComponentFixture<BangladeshFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BangladeshFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangladeshFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
