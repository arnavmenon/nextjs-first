import Layout from '../components/layout';
import { useRouter } from "next/router";


function GameData({data}) {

    return(
        <Layout>
            <div>
               <h1>{data.name}</h1>
               {data.description_raw}
            </div>
        </Layout>
    );
}

export async function getServerSideProps({query}) {

    console.log(query);

    const res = await fetch(`https://api.rawg.io/api/games/${query.id}`)
    const data = await res.json()
  
    return { props: { data } }
  }

export default GameData;