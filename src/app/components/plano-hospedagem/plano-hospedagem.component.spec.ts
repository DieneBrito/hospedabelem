import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoHospedagemComponent } from './plano-hospedagem.component';

describe('PlanoHospedagemComponent', () => {
  let component: PlanoHospedagemComponent;
  let fixture: ComponentFixture<PlanoHospedagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoHospedagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoHospedagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
