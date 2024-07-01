import { createSneaker } from "../../../service/client.server";
import ProductForm from "./ProductForm";

const CreateForm = () => {
  const blankForm = {
    name: "",
    description: "",
    brand: "",
    price: "",
    image: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
    },
  };

  return (
    <ProductForm submitFunction={createSneaker} initialState={blankForm} />
  );
};

export default CreateForm;
