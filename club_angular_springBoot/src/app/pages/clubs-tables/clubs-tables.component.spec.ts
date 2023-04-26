import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsTablesComponent } from './clubs-tables.component';

describe('ClubsTablesComponent', () => {
  let component: ClubsTablesComponent;
  let fixture: ComponentFixture<ClubsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubsTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
