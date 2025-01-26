export interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

export interface ComponentI {
  _uid?: string;
  component?: string;
}