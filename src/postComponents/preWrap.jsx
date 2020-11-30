
const pre = ({ value }) => {
  return (
    <pre dangerouslySetInnerHTML={{__html: `
      { value }
    `}}>
    </pre>
  )
}

export default pre;