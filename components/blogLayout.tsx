export default function BlogPost({ children, meta }: { children: any; meta: any }) {
  return (
    <div className="blogWrap">
      <div className="row">{children}</div>
    </div>
  )
}
