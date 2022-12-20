// Import Components
import Head from "../../components/Head";
import SnackTitle from "../../components/SnackTitle";
import Snacks from "../../components/Snacks";

const BurgersPage = () => {
  const data = [
    {
      id: "1",
      snack: "burger",
      name: "Mega",
      description:
        "O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.",
      price: 25.5,
      image: "https://i.imgur.com/ZvxA5QA.jpeg",
    },
    {
      id: "2",
      snack: "burger",
      name: "Extra Bacon",
      description:
        "Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.",
      price: 23.5,
      image: "https://i.imgur.com/ygxnZNZ.jpeg",
    },
  ];

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgers" />
      <SnackTitle children="Hambúrguer" />
      <Snacks snacks={data} />
    </>
  );
};

export default BurgersPage;
