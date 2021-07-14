import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />
        <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "enzomarzo";
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "weslleyfratini",
    "wallacebarbeiro",
    "HelenaAMartins",
  ];
  const [communities, setCommunities] = React.useState([{
    id: '43123492140124982',
    title: "Queria sorvete, mas era feijão",
    image: "https://img10.orkut.br.com/community/08d82085dab0b6ecb71cd49fd79d5a5c.jpeg"
  }])

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
            <form onSubmit={function handleCreateCommunity (e) {
                e.preventDefault();
                const formData = new FormData(e.target);
                const community = {
                  id: new Date().toISOString(),
                  title: formData.get('title'),
                  image: formData.get('image')
                }
                const pushCommunity = [...communities, community];
                setCommunities(pushCommunity);
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
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((pessoa) => {
                return (
                  <li key={pessoa}>
                    <a href={`/users/${pessoa}`} key={pessoa}>
                      <img src={`https://github.com/${pessoa}.png`} />
                      <span>{pessoa}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas comunidades ({communities.length})
            </h2>
            <ul>
              {communities.map((comunidade) => {
                return (
                  <li key={comunidade.id}>
                    <a href={`/users/${comunidade.title}`}>
                      <img src={comunidade.image} />
                      <span>{comunidade.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
