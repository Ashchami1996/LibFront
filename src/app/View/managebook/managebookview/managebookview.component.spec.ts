import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookviewComponent } from './managebookview.component';

describe('ManagebookviewComponent', () => {
  let component: ManagebookviewComponent;
  let fixture: ComponentFixture<ManagebookviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebookviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebookviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
