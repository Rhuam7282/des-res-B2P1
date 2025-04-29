import ralado from '../assets/images/ralado.jpg';
import po from '../assets/images/po.jpg';
import carne from '../assets/images/carne.jpg';
import coquinho from '../assets/images/coquinho.jpg';
import queimado from '../assets/images/queimado.jpg';
import agua from '../assets/images/agua.jpg';
import cocada from '../assets/images/cocada.jpg';
import bala from '../assets/images/bala.jpg';
export const cardapio = {
  entradas: [
    { 
      imagem: ralado,
      nome: "Coco ralado",
      descricao: "Nossa entrada de coco ralado tem coco que é ralado",
      preco: "R$1banana",
      categoria: "entradas"
    },
    { 
      imagem: po,
      nome: "Coco em pó",
      descricao: "Nossa entrada de coco em pó tem coco que é em pó",
      preco: "R$0,75banana",
      categoria: "entradas"
    }
  ],
  pratos: [
    { 
      imagem: carne,
      nome: "Coco aberto",
      descricao: "Nosso prato principal de coco aberto tem coco que é aberto",
      preco: "R$3bananas",
      categoria: "pratos"
    },
    { 
      imagem: coquinho,
      nome: "Coquinhos",
      descricao: "Nosso prato principal de coquinhos tem cocos que são inhos",
      preco: "R$2bananas",
      categoria: "pratos"
    },
    { 
      imagem: queimado,
      nome: "Coco queimado",
      descricao: "Nosso prato principal de coco queimado tem coco que é queimado",
      preco: "R$2bananas",
      categoria: "pratos"
    }
  ],
  sobremesas: [
    { 
      imagem: agua,
      nome: "Água de coco",
      descricao: "Nossa sobremesa de água de coco tem água de coco",
      preco: "R$2bananas",
      categoria: "sobremesas"
    },
    { 
      imagem: cocada,
      nome: "Cocada sem açúcar",
      descricao: "Nossa sobremesa de cocada sem açúcar é uma cocada sem açúcar",
      preco: "R$1,5bananas",
      categoria: "sobremesas"
    },
    { 
      imagem: bala,
      nome: "Bala de coco",
      descricao: "Nossa sobremesa de bala de coco é uma porção de balas de coco",
      preco: "R$1bananas",
      categoria: "sobremesas"
    }
  ]
};