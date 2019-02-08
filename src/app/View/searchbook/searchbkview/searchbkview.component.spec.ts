import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbkviewComponent } from './searchbkview.component';

describe('SearchbkviewComponent', () => {
  let component: SearchbkviewComponent;
  let fixture: ComponentFixture<SearchbkviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbkviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
