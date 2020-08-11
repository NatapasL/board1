import axios from 'axios'

import { Layout } from '../components/Layout'

export default () => {
  return <Layout>index</Layout>
}

// export const getServerSideProps = async () => {
//   axios.post('http://localhost:3000/api/get', {
//     path: 'boards',
//   }).then(({ data }) => console.log(data))

//   return { props: {} }
// }