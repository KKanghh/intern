import { post } from "./post";

interface sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface response {
  content: post[];
  pageable: {
    sort: sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  sort: sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
