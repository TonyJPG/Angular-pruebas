import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incrementador Component, pruebas unitarias', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('No debe de pasar de 100 el progreso', async () => {
    component.progreso = 98;

    fixture.detectChanges();
    await fixture.whenStable();

    component.onChanges(103);

    expect(component.progreso).toBe(100);
  });
});
