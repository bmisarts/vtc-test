import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDatasComponent } from './stat-datas.component';

describe('StatDatasComponent', () => {
  let component: StatDatasComponent;
  let fixture: ComponentFixture<StatDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
