# API de Subscriber IoT com o Google Cloud

Na arquitetura de software, subscriber, faz parte do padão de projeto publish–subscribe que é um padrão de mensagens em que os remetentes de mensagens, chamados publishers, não programam as mensagens a serem enviadas diretamente para receptores específicos, chamados subscribers, mas categorizam as mensagens publicadas em classes sem o conhecimento de quais assinantes, se houver, pode ser. Da mesma forma, os assinantes manifestam interesse em uma ou mais classes e recebem apenas mensagens de seu interesse, sem o conhecimento de quais editores, se houver, existem.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
yarn install
```

Antes de tudo, é preciso ter as credenciais de conta de serviço para autenticação do serviço de Pub/Sub do Google Cloud por meio do painel da API no Google Cloud Platform. Em seguida é preciso colar essas credenciais, no formato JSON, dentro do arquivo **GoogleCredentials.json**, que está na raiz do projeto.

Por fim, para executar o projeto é preciso transpilar o código Typescript para JavaScript. Para isso digite o seguinte comando no terminal:

```bash
yarn build
```

### Uso

Para executar o projeto já transpilado para JavaScript digite o seguinte comando no terminal:

```bash
yarn start
```


## Licença

MIT
