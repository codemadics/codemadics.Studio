import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignTileComponent } from './design-tile.component';

describe('DesignTileComponent', () => {
  let component: DesignTileComponent;
  let fixture: ComponentFixture<DesignTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
