import Link from 'next/link';
import Titulo from '../components/Titulo';
import Rodape from '../components/Rodape';

export default function Pinturas({pinturas}){
    return (
        <div> <Titulo/>
        {pinturas.map((pintura, index) =>(
            <Link href='/profile/[id]' as={`/profile/${index}`}>
                <div key={pintura._id}>
                <p> {pintura.nome} </p>
                </div>
            </Link>
        ))} <Rodape/> 
        </div> 
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pintura')
    const repo = await res.json();
    const pinturas = await repo;
    return {        
        props: {pinturas}
    }
})
