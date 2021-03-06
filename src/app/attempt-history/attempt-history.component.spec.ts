import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptHistoryComponent } from './attempt-history.component';

describe('AttemptHistoryComponent', () => {
  let component: AttemptHistoryComponent;
  let fixture: ComponentFixture<AttemptHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttemptHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
