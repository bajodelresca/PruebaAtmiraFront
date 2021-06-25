import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { map } from 'rxjs/operators';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [DetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe  comenzar con el isImage desactivado', () => {
    expect(component.isImage).toBeFalse();
  });
  it('debe  comenzar con el isVideo desactivado', () => {
    expect(component.isVideo).toBeFalse();
  });
  it('debe  comenzar con el card indefinido', () => {
    expect(component.card).toBeUndefined();
  });
});
