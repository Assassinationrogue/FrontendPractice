import { TestBed } from '@angular/core/testing';

import { CustomComponentService } from './custom-component.service';

describe('CustomComponentService', () => {
  let service: CustomComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
