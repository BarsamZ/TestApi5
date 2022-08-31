import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaListComponent } from './nasa-list.component';

describe('NasaListComponent', () => {
  let component: NasaListComponent;
  let fixture: ComponentFixture<NasaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
