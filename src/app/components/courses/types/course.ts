
import { ID } from '@datorama/akita';

export interface Course {
  id: ID;
  name: string;
  description: string;
  active: boolean;
};

export function createCourse({ id, name, description }: Partial<Course>): Course {
  return {
    id,
    name,
    description,
    active: false
  };
}
