// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";

const DrinksPage = () => {
  const data = [
    {
      id: "1",
      snack: "drink",
      name: "Coca-Cola 2L",
      description: "A tradicional Coca-Cola que a família brasileira adora.",
      price: 12,
      image: "https://i.imgur.com/Lg3aKhf.jpeg",
    },
    {
      id: "2",
      snack: "drink",
      name: "Guaraná Antarctica",
      description:
        "O irresistível e saboroso Guaraná Antarctica em sua versão latinha.",
      price: 6.5,
      image: "https://i.imgur.com/hOBrOIm.jpeg",
    },
    {
      id: "3",
      snack: "drink",
      name: "Suco de Abacaxi",
      description:
        "Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde.",
      price: 8,
      image: "https://i.imgur.com/VV9qTMh.jpeg",
    },
  ];

  return (
    <>
      <Head title="Bebidas" />
      <SnackTitle children="Bebidas" />
      <Snacks snacks={data} />
    </>
  );
};

export default DrinksPage;
