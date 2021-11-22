type Props = {
  [key: string]: string | number;
}
const generateMQ = (values: Props) => {
  return {
    '@media (max-width: 1025px)': {
      ...values
    }
  }
}

export default generateMQ;