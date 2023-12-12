import Titulo from '../../components/Titulo';
import Rodape from '../../components/Rodape';

function Pinturas({ pintura = {} }) {
    return (
        <div><Titulo/>
                <p>{pintura.nome}</p>
                <p>{pintura.usuario}</p>
                <p>{pintura.descricao}</p>
            <Rodape/>
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=pintura')
    const repo = await res.json()
    const pintura = await repo[context.params.id];

    return {
        props: { pintura }
    }
})
export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
        ],
        fallback: true,
    };
}
export default Pinturas;
