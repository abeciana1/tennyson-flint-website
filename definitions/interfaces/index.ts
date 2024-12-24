export interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}