export default function FunctionBody({ funcao, nomeFuncao, comentario = null, children }){
    return (
        <>
            <section>
                <div className="d-flex flex-wrap" style={{ gap: 8 }}>
                    <h5 style={{ color: '#D35E97' }}>{ funcao }</h5>
                    <h5 style={{ color: '#41E664' }}>{ nomeFuncao }</h5>
                    <h5 style={{ color: '#D35E97' }}>{'() {'}</h5>
                    {
                        comentario != null ? 
                        <h5 style={{ color: '#4A5E8F' }}>
                                // { comentario }
                            </h5>
                        : comentario
                    }
                </div>
                <div className="mx-3">
                    <h5 style={{ color: '#D35E97' }}>return (</h5>
                </div>
            </section>

            <section className="d-flex flex-wrap justify-content-start mx-5" style={{ gap: 32 }}>
                { children }
            </section>

            <div className="mx-3">
                <h5 style={{ color: '#D35E97' }}>)</h5>
            </div>
            <h5 style={{ color: '#D35E97' }}>{'}'}</h5>
        </>
    )
}

export const ConstBody = ({ nomeConst, comentario = null, variableArr }) => (
    <>
        <section>
            <div className="d-flex flex-wrap" style={{ gap: 8 }}>
                <h5 style={{ color: '#D35E97' }}>const</h5>
                <h5 style={{ color: '#706FD5' }}>{ nomeConst }</h5>
                <h5 style={{ color: '#D35E97' }}>{ ' = {' }</h5>
                {
                    comentario != null ? 
                    <h5 style={{ color: '#4A5E8F' }}>
                            // { comentario }
                        </h5>
                    : comentario
                }
            </div>

            <div className="mx-3">
                {
                    variableArr.map(obj => (
                        <section className="d-flex flex-wrap" key={obj.name}>
                            <h5 style={{ color: '#F8F8F2' }}>{ obj.name }</h5>
                            <h5 style={{ color: '#D35E97' }}>:</h5>
                            <h5 className="mx-2" style={{ color: '#F1FA8C' }}>"{ obj.value }"</h5>
                        </section>
                    ))
                }
            </div>

            <h5 style={{ color: '#D35E97' }}>{'}'}</h5>
        </section>
    </>
)

export const LetBody = ({ nomeLet, arrProjects }) => (
    <>
        <section>
            <div className="d-flex flex-wrap" style={{ gap: 8 }}>
                <h5 style={{ color: '#D35E97' }}>let</h5>
                <h5 style={{ color: '#F8F8F2' }}>{ nomeLet }</h5>
                <h5 style={{ color: '#D35E97' }}>{' = ['}</h5>
                {
                    arrProjects.map(p => <h5 key={p} style={{ color: '#F1FA8C' }}>'{p}',</h5>)
                }
                <h5 style={{ color: '#D35E97' }}>{']'}</h5>
            </div>
        </section>
    </>
)