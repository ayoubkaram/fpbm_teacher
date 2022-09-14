import { TestBed } from '@angular/core/testing';

import { StudentNotesService } from './student-notes.service';

describe('StudentNotesService', () => {
  let service: StudentNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
