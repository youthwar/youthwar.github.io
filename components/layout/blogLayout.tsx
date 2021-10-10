import { BlogGrid, Grid, Row, PostTitle } from '@components/layout';

export default function BlogPost({ children, meta }: { children: any; meta: any }) {
  const { title } = meta;
  
  return (
    <Grid>
      <PostTitle>{ title}</PostTitle>
      <BlogGrid>{children}</BlogGrid>
    </Grid>
  )
}
