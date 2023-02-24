import { type Photo, type Video } from '@/types';
import { Subject } from 'rxjs';

interface IImageDataModal {
  isOpen: boolean;
  file?: Photo | Video;
}

export class SubjectModal {
  subject$ = new Subject<IImageDataModal>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(imageData: IImageDataModal) {
    this.subject$.next(imageData);
  }
}

export const sharingInformationModalService = new SubjectModal();
