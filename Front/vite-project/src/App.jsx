import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/pages/Menu'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      
      <article>
      <img src='https://portalamazonia.com/wp-content/uploads/2020/09/b2ap3_large_equeejaguatirica.jpg'/>
        <h3>
          Instituto Jaguatriica é uma organização não governamental dedicada à proteção e preservação da fauna silvestre brasileira. Nossa missão é promover a conscientização sobre a importância da biodiversidade e a necessidade de proteger os habitats naturais dos animais. Atuamos em diversas frentes, desde o resgate, reabilitação e reintegração de espécies ameaçadas até a educação ambiental, envolvendo a comunidade em ações concretas de conservação.

          Acreditamos que cada ação conta e que todos podem fazer a diferença. Por isso, oferecemos oportunidades de voluntariado, possibilitando que pessoas engajadas contribuam diretamente para a proteção da natureza. Além disso, contamos com um programa de apadrinhamento de animais, no qual qualquer pessoa pode apoiar financeiramente o cuidado de animais resgatados por meio de doações diretas via PIX.

          Nossas iniciativas são planejadas com base nos princípios de sustentabilidade, responsabilidade ambiental e ciência aplicada, assegurando que todas as ações tenham um impacto positivo e duradouro. Também trabalhamos na educação e sensibilização da população, promovendo campanhas e programas educativos que incentivam a convivência harmônica entre humanos e a vida selvagem.

          O Instituto Jaguatriica tem como visão um futuro onde a fauna brasileira esteja segura e preservada, com ecossistemas restaurados e populações animais vivendo em equilíbrio. Juntos, acreditamos que é possível transformar nossa relação com a natureza e garantir um planeta mais saudável para as próximas gerações.

          Seja voluntário, apadrinhe um animal ou entre em contato conosco para conhecer mais sobre nossas ações. Ajude-nos a salvar vidas e preservar a natureza!
        </h3>
        
      </article>
    </>
  )
}

export default App
