// Components
import SideBar, { SidebarMobile } from "@/components/sidebar";
import RepoCard from "@/components/repoCard";
import FunctionBody, { ConstBody, LetBody } from "@/components/functionBody";
// JS, React e NextJS
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

export async function getServerSideProps(){
  const githubData = await Promise.all([
    axios.get('https://api.github.com/users/LucaasSouza'),
    axios.get('https://api.github.com/users/LucaasSouza/repos?sort=author-date-asc')
  ])

  const lastRepos = []
  for(let i = 0; i < 8; i++) lastRepos.push(githubData[1].data[i])

  return {
    props: {
      userData: githubData[0].data,
      repositories: lastRepos // 8 repositórios mais recentes
      // repositories: githubData[1].data //Todos Repositórios
    }
  }
}

export default function Home({ userData, repositories }){
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => { // Tamanho da tela atual
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
    return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
  }, [])

  function ControlPage(){
    return (
      <section
        style={{
          zIndex: 10,
          marginLeft: windowWidth >= 790 ? 280 : 0,
          backgroundColor: '#313341',
          boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.7)'
        }}
        className={`${windowWidth >= 790 ? 'position-fixed' : ''} w-100 text-white p-3`}
      >
        <Image
          width={20}
          height={20}
          alt="Javascript logo"
          style={{ marginRight: 8 }}
          src="/img/logo/javascript-banner.png"
        />

        <span style={{ marginRight: 8 }}>
          portfolio.js &nbsp;

          <span style={{ cursor: 'pointer' }} onClick={() => alert('Você achou o easter egg kkkkkk')}>
            &#x2715;
          </span>
        </span>

        <span style={{ borderLeft: '1px solid gray'}} />
      </section>
    )
  }

  return (
    <>
      { windowWidth >= 790 ? <SideBar user={userData} /> : <SidebarMobile user={userData} width={windowWidth} /> }

      {/* <SideBar user={userData} /> */}

      { ControlPage() }

      <div
        style={{
          marginLeft: windowWidth >= 790 ? 300 : 8,
          paddingTop: windowWidth >= 790 ? 80 : 20
        }}
        className="mb-4"
      >
        <main>
          <ConstBody
            nomeConst={'Eu'}
            comentario={'Algumas informações sobre mim'}
            variableArr={[
              { name: 'nome', value: 'Jadson Lucas Pereira Souza' },
              { name: 'email', value: 'jadsonlucas2004@gmail.com' },
              { name: 'profissao', value: 'Desenvolvedor Júnior Frontend de Sistemas Web' },
              { name: 'curso', value: 'Engenharia de Software' },
            ]}
          />

          <br /><br />

          <FunctionBody
            funcao={'function'}
            nomeFuncao={'QuemSouEu'}
            comentario={'Uma breve apresentação sobre mim'}
          >
            <h5 style={{ color: '#F1FA8C' }} className="m-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt erat cursus,
              blandit justo ut, tempus sem. Pellentesque rutrum, augue ut auctor volutpat, tellus erat
              ullamcorper nunc, sit amet luctus turpis tellus ut eros. Interdum et malesuada fames ac
              ante ipsum primis in faucibus."
            </h5>
          </FunctionBody>

          <br /><br />

          <LetBody
            nomeLet='ProjetosQueParticipei'
            arrProjects={
              ['ERP Web', 'PetHappy', 'Painel de Vendas - Glight', 'PDV - Glight', 'EHL - Agência']
            }
            />

          <br /><br />

          <FunctionBody
            funcao={'async function'}
            nomeFuncao={'RepositoriosMaisRecentes'}
            comentario={'Meus últimos 8 repositórios atualizados'}
          >
            { repositories.map(rep => <RepoCard key={rep.id} repositorio={rep} />) }
          </FunctionBody>

          <br /><br />

          <FunctionBody
            funcao={'function'}
            nomeFuncao={'MinhaProfissaoNoFuturo'}
            comentario={'O que eu acho que irá acontecer com a profissão de desenvolvedor web no futuro'}
          >
            <h5 style={{ color: '#F1FA8C' }} className="m-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt erat cursus,
              blandit justo ut, tempus sem. Pellentesque rutrum, augue ut auctor volutpat, tellus erat
              ullamcorper nunc, sit amet luctus turpis tellus ut eros. Interdum et malesuada fames ac
              ante ipsum primis in faucibus."
            </h5>
          </FunctionBody>

          <section>
            Desenvolvido por Lucas Souza
          </section>
        </main>
      </div>
    </>
  )
}