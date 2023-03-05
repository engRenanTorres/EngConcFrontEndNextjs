//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/listquestions to access the api
import {
  Alternatives,
  Institute,
  Level,
  Profession,
} from '@/domain/questions/details';
import { Question } from '@/domain/questions/questions';
import type { NextApiRequest, NextApiResponse } from 'next';

const fgv: Institute = {
  name: 'FGV',
};
const engSeg: Profession = { name: 'Engenharia de Segurança do Trabalho' };
const questions: Question[] = [
  {
    id: 1,
    institute: fgv,
    level: Level.SUPERIOR,
    profession: engSeg,
    concurso: 'CODESP',
    year: 2010,
    subjectArea: { name: 'Previdência', professions: [engSeg] },
    body: 'A definição de natureza da lesão, segundo a NBR 14.280, é',
    alternatives: [
      '(A)Qualquer dano sofrido pelo organismo humano, como consequência de acidente do trabalho.',
      '(B)Expressão que identifica a lesão, segundo suas características principais.',
      '(C)Indicação da sede da lesão.',
      '(D)Lesão que se manifesta no momento do acidente.',
      '(E)Lesão que não se manifesta imediatamente após a circunstância acidental da qual resultou.',
    ],
    answer: Alternatives.B,
    tips: 'Texto da própia NBR',
    updatedAt: [Date.now()],
    createdAt: Date.now(),
    author: { name: 'Renan', roles: [1] },
  },
  {
    id: 2,
    institute: fgv,
    level: Level.SUPERIOR,
    profession: engSeg,
    concurso: 'CODESP',
    year: 2010,
    subjectArea: { name: 'NR23', professions: [engSeg] },
    body: 'Associe o tipo de extintor de incêndio (numerados na coluna da direita) à classe de fogo (na coluna da esquerda) na qual ele deve ser utilizado, segundo determina a NR-23. \nClasse de fogo   |   Tipo de extintor \n   A      |      I- Espuma \n   B      |      II-Dióxido de Carbono \n   C      |      III-Químico Seco \n   D      |      IV- Água pressurizada ou Água-Gás \n Assinale a alternativa que apresente somente associações corretas.',
    alternatives: [
      '(A)A-I/B-II/C-IV',
      '(B)A-IV/B-III/C-II',
      '(C)A-II/B-I/D-IV',
      '(D)A-III/B-II/C-I',
      '(E)A-IV/B-III/D-II',
    ],
    answer: Alternatives.B,
    tips: 'Classe A = Materiais combustíveis sólidos (Extintor mais recomendado Água Pressurizada-AP pois resfria e abafa), \n Classe B = Materiais combustíveis líquidos (Extintor mais recomendado Espuma pois abafa o fogo fazendo uma camada entre o líquido e o ar), \n Classe C = Ignição elétrica (Extintor mais recomendado é o de CO2 pois retira o comburuente/oxigênio sem muitos danos aos equipamentos), \n Classe D = Metais Pirofóricos (Extintor mais recomendado é o de pó químico).',
    updatedAt: [Date.now()],
    createdAt: Date.now(),
    author: { name: 'Renan', roles: [1] },
  },
  {
    id: 3,
    institute: fgv,
    level: Level.SUPERIOR,
    profession: { name: 'Engenharia' },
    concurso: 'CODESP',
    year: 2010,
    subjectArea: { name: 'NR9', professions: [engSeg] },
    body: 'Em relação às técnicas de Análise de Riscos, analise as afirmativas a seguir: \n    I. APR é uma técnica que identifica os cenários acidentais possíveis e determina o risco desses cenários quantitativamente. \n        II.   O HAZOP é uma técnica que só pode ser aplicada em sistemas de operação em bateladas, avaliando qualitativamente o risco do sistema em estudo. \n        III.   Utilizando a técnica FMEA, determinam-se os modos de falhas de componentes de um sistema operacional e seus efeitos em outros componentes e no sistema, podendo ser de forma quantitativa. \n        IV.  A metodologia Análise por Árvore de Falhas avalia de forma qualitativa e quantitativa o risco de um determinado cenário ocorrer e auxilia a identificar as combinações de falhas humanas e de componentes. \n        Assinale',
    alternatives: [
      '(A)Se apenas as afirmativas I e II forem corretas.',
      '(B)Se apenas as afirmativas III e IV forem corretas.',
      '(C)Se apenas as afirmativas I e IV forem corretas.',
      '(D)Se apenas as afirmativas II e IV forem corretas.',
      '(E)Se apenas as afirmativas I e III forem corretas.',
    ],
    answer: Alternatives.B,
    tips: 'A APR é qualitativa e a HAZOP trás análises quantitativas.',
    updatedAt: [Date.now()],
    createdAt: Date.now(),
    author: { name: 'Renan', roles: [1] },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>,
) {
  res.status(200).json(questions);
}
