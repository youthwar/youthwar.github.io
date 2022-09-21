import React from "react";
import { BlogGrid, Grid, PostTitle } from "@components/layout";

type Props = {
  children?: JSX.Element;
  meta: { [key: string]: any };
};

const BlogPost: React.FC<Props> = ({ children, meta }: Props): JSX.Element => {
  const { title } = meta;

  return (
    <Grid>
      <PostTitle>{title}</PostTitle>
      <BlogGrid>{children}</BlogGrid>
    </Grid>
  );
};

export default BlogPost;
