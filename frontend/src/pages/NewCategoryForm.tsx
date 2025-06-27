import axios from "axios";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  title: string;
};

const NewCategoryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post("http://backend:3000/categories", data);
      toast.success("Category has been created");
    } catch (err) {
      console.log(err);
      toast.error("An error occurred");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre
        <input {...register("title", { required: true, minLength: 3 })} />
      </label>
      {errors.title?.type === "minLength" && (
        <p role="alert">Category must have at least 3 characters</p>
      )}

      <input type="submit" />
    </form>
  );
};

export default NewCategoryForm;
