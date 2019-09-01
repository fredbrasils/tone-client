import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuthierComponent } from '@src/app/luthier/luthier.component';

describe('LuthierComponent', () => {
  let component: LuthierComponent;
  let fixture: ComponentFixture<LuthierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuthierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuthierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
