import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmListComponent } from './pkm-list.component';

describe('PkmListComponent', () => {
  let component: PkmListComponent;
  let fixture: ComponentFixture<PkmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
