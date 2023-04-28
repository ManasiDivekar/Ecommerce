import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorderpageComponent } from './myorderpage.component';

describe('MyorderpageComponent', () => {
  let component: MyorderpageComponent;
  let fixture: ComponentFixture<MyorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyorderpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
