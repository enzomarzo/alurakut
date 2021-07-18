import React from "react";
import nookies from "nookies";
import jwt from 'jsonwebtoken'
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBox } from "../src/components/ProfileRelations";
import { ProfileSidebar } from "../src/components/ProfileSidebar";

export default function Home(props) {
  const githubUser = props.githubUser; // declarei essas props no final dessa página. O getServerSideProps que é um carregamento do servidor
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "jessicacosta07",
    "peas",
    "fernandadegolin",
    "weslleyfratini",
    "HelenaAMartins",
    "wallacebarbeiro",
    "victorzottmann",
  ];
  const [communities, setCommunities] = React.useState([]);

  let communityTitle = [];
  for (let i = 0; i < communities.length; i++) {
    communityTitle.push(communities[i].title);
  }
  
  console.log(communityTitle)

  let communityImage = [];
  for (let i = 0; i < communities.length; i++) {
    communityImage.push(communities[i].image);
  }

  const [seguidores, setSeguidores] = React.useState([])    // utilizamos o useState para dizer que a variável seguidores vai mudar. E vai passar a ser a setSeguidores
  
  React.useEffect( () => {

    //Fetch => retorna uma Promisse. Precisamos usar os 2 then para pegar o retorno dessa promisse
    fetch('https://api.github.com/users/enzomarzo/followers')
      .then(res => res.json())
      .then(data => setSeguidores(data))

    //Fetch => retorna uma Promisse. Precisamos usar os 2 then para pegar o retorno dessa promisse
    //1 parametro = 'url'
    //2 parametro = Headers do tipo objeto
    //3 paraemtro = body do tipo objeto => o JSON.stringify é para transformar o objeto JS para JSON
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': 'ea7e07c0453ee8c8401fd83980d79e',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({"query": `query {
            allComunidades {
              id
              title
              image
              creatorSlug
            }
      }`})
    })
    .then((res) => res.json())
    .then((resJson) => {
      const communitiesDato = resJson.data.allComunidades;
      console.log(communitiesDato)
      setCommunities(communitiesDato);
    })
  },[])

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />

      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a), {githubUser}</h1>
            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault();
                const formData = new FormData(e.target);
                const community = {
                  title: formData.get("title"),
                  image: formData.get("image"),
                  creatorSlug: githubUser
                };
                fetch('/api/communities'), { 
                  method: 'POST',
                  headers: { 'content-Type': 'application/json'},
                  body: JSON.stringify(community)
                }
                .then(async (res) => { 
                  const dados = await res.json();
                  console.log(dados.record)
                  const community = dados.record;
                  const pushCommunity = [...communities, community];
                  setCommunities(pushCommunity);
                })
              }}
            >
              <div className="buttonsWelcomeArea">
                <button>Criar comunidade</button>
                <button>Escrever depoimento</button>
                <button>Deixar um scrap</button>
              </div>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  type="text"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque aqui a url da foto"
                  name="image"
                  type="text"
                  arial-label="Coloque aqui a url da foto"
                />
              </div>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBox
            title="Pessoas da comunidade"
            items={pessoasFavoritas}
            url={(item) => `https://github.com/${item}.png`}
            name={pessoasFavoritas}
          />

          <ProfileRelationsBox
            title="Minhas comunidades"
            items={communityImage}
            url={(item) => `${item}`}
            name={communityTitle}
          />

{/*         <ProfileRelationsBox 
            title="seguidores" 
            items={seguidores.followers} 
          /> */}

        </div>
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN
  const { githubUser } = jwt.decode(token);

  return {
    props: {
      githubUser
    },
  }
}
