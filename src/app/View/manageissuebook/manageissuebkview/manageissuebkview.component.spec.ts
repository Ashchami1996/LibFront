import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageissuebkviewComponent } from './manageissuebkview.component';

describe('ManageissuebkviewComponent', () => {
  let component: ManageissuebkviewComponent;
  let fixture: ComponentFixture<ManageissuebkviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageissuebkviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageissuebkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
