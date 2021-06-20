import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensumListComponent } from './pensum-list.component';

describe('PensumListComponent', () => {
  let component: PensumListComponent;
  let fixture: ComponentFixture<PensumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
