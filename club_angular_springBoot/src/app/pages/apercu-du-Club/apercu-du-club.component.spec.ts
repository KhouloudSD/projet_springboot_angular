import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuDuClubComponent } from './apercu-du-club.component';

describe('ApercuDuClubComponent', () => {
  let component: ApercuDuClubComponent;
  let fixture: ComponentFixture<ApercuDuClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuDuClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuDuClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
