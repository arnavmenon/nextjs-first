import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import React from 'react'

function Index ({data}) {
    return (
        <Layout>
            <div>
                <h1>Highest Rated Games</h1>
                {data.map((item, i) => (
                   <li key={i}>
                    <Link as={`/${item.id}`} href="/[id]">
                      <a> {item.name} </a>
                    </Link>
                    </li>
                   
               ))}
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