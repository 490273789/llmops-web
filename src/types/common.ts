// ============================================================
// LLMOps Platform - Type Definitions
// ============================================================

// Common API Response
export interface ApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

// Pagination
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  list: T[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

// Common Entity
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
