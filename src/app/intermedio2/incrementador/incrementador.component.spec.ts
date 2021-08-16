import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
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

  it('Debe mostrar la leyenda en el h3', () => {
    component.leyenda = 'Progreso de carga!';
    fixture.detectChanges(); // dispara la detección de cambios

    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga!');
  });

  it('Debe mostrar en el input el valor de progreso', async () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    await fixture.whenStable();

    const input = fixture.debugElement.query(By.css('input'));
    const elem = input.nativeElement;

    expect(elem.value).toBe('55');
  });
});
