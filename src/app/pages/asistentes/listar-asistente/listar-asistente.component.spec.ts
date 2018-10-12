import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsistenteComponent } from './listar-asistente.component';

describe('ListarAsistenteComponent', () => {
  let component: ListarAsistenteComponent;
  let fixture: ComponentFixture<ListarAsistenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAsistenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
