import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundMeComponent } from './fund-me.component';

describe('FundMeComponent', () => {
  let component: FundMeComponent;
  let fixture: ComponentFixture<FundMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
