import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestuviewComponent } from './managestuview.component';

describe('ManagestuviewComponent', () => {
  let component: ManagestuviewComponent;
  let fixture: ComponentFixture<ManagestuviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestuviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestuviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
