import { Movie } from './movie.model';
export interface SuccessResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
