import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthierListComponent } from '@src/app/luthier/luthier-list/luthier-list.component';

describe('LuthierListComponent', () => {
  let component: LuthierListComponent;
  let fixture: ComponentFixture<LuthierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuthierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuthierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
