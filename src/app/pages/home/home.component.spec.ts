import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('numero de fotos debe de ser 7', () => {
    component.ngOnInit()
    expect(component.numberpictures).toEqual(7);
  });
  it('el array debe contener 0 objetos', () => {
    expect(component.list).toHaveSize(0);
  });

  it('debe  cambiar el load a true', () => {
    component.showloading()
    expect(component.load).toBeTrue();
  });
  it('debe  cambiar el load a false', () => {
    component.hideloading()
    expect(component.load).toBeFalse();
  });
});
