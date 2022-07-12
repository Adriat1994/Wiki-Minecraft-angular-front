import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomeContainerComponent } from './biome-container.component';

describe('BiomeContainerComponent', () => {
  let component: BiomeContainerComponent;
  let fixture: ComponentFixture<BiomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
