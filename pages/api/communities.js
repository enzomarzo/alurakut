import { SiteClient } from "datocms-client";

export default async function RequestReceiver(request, response) {
  //não é a forma de segurança correta, testar se está com post - mas serve para fins didaticos.
  if (request.method === "POST") {
    const TOKEN = "ea7e07c0453ee8c8401fd83980d79e";
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "976883", // id
      ...request.body,
      /* title: "Testando nova comunidade",
      image: "https://www.universidadedolivro.com.br/wp-content/uploads/2020/08/Mecanica-produto-teste-nao-comprar-p-1533242083167.jpg",
      creator_slug: "Enzo" */
    });

    response.json({
      dados: "teste",
      record: record,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
