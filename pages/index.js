import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import React from 'react'

function Index ({data}) {
    return (
        <Layout>
            <div>
                <h1>Latest Games</h1>
                {data.map((item, i) => {
                   return (
                   <li key={i}>{item.name}</li>
                   )
               })}
            </div>
        </Layout>
    );
}

export async function getStaticProps(){
    const res = await fetch(`https://api.rawg.io/api/games?page_size=12`);
    const data = await res.json();
    return { 
      props: {
              data: data.results
            }
    }
}

export default Index;