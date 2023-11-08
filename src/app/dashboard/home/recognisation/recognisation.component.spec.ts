import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognisationComponent } from './recognisation.component';

describe('RecognisationComponent', () => {
  let component: RecognisationComponent;
  let fixture: ComponentFixture<RecognisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecognisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
