import { TestBed, async, inject } from '@angular/core/testing';

import { PracticeRoomJoinGuard } from './practice-room-join.guard';

describe('PracticeRoomJoinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracticeRoomJoinGuard]
    });
  });

  it('should ...', inject([PracticeRoomJoinGuard], (guard: PracticeRoomJoinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
