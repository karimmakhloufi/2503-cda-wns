import { SubmitHandler, useForm } from "react-hook-form";
import {
  AdInput,
  useCreateAdMutation,
  useGetAllCategoriesAndTagsQuery,
} from "../generated/graphql-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { GET_ALL_ADS } from "../graphql/operations";

const NewAdForm = () => {
  const navigate = useNavigate();

  // bellow is a way to ask apollo to refetch somes queries
  /*   const client = useApolloClient();
  await client.refetchQueries({
    include: [GET_ALL_ADS],
  }); */

  const { error, loading, data } = useGetAllCategoriesAndTagsQuery();

  // useing the refetch queries here, if the mutation succeed, the GET_ALL_ADS will be re-executed
  const [createAd] = useCreateAdMutation({
    refetchQueries: [
      {
        query: GET_ALL_ADS,
      },
    ],
  });
  const { register, handleSubmit } = useForm<AdInput>();

  const onSubmit: SubmitHandler<AdInput> = async (data) => {
    try {
      const sanitizedData = { ...data, price: Number(data.price) };

      const { data: newAdData } = await createAd({
        variables: { data: sanitizedData },
      });
      // bellow the version without the destructuration / alias
      // const result = await createAd({ variables: { data: newData } });
      // const newAdData = result.data;
      navigate(`/ads/${newAdData?.createAd}`, { replace: true });
    } catch {
      toast.error("Une error !");
    }
  };

  if (loading) return <p>Wait for it...</p>;
  if (error) return <p>Woops, on a tout cassé</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre
        <input
          defaultValue={"Je vends ma 206"}
          {...register("title", { required: true })}
        />
      </label>

      <br />

      <label>
        Description
        <input
          defaultValue={"Ma 206 est super"}
          {...register("description", { required: true })}
        />
      </label>

      <br />

      <label>
        Vendeur
        <input
          defaultValue={"John Doe"}
          {...register("owner", { required: true })}
        />
      </label>

      <br />

      <label>
        Ville
        <input
          defaultValue={"Paris"}
          {...register("location", { required: true })}
        />
      </label>

      <br />

      <label>
        Image
        <input
          defaultValue={
            "https://www.actuauto.fr/wp-content/uploads/2021/01/Peugeot-206-scaled.jpg"
          }
          {...register("picture", { required: true })}
        />
      </label>

      <br />

      <label>
        Prix
        <input
          type="number"
          defaultValue={4000}
          {...register("price", { required: true })}
        />
      </label>

      <br />

      <label>
        Categorie
        <select {...register("category", { required: true })}>
          {data?.getAllCategories.map((el) => (
            <option value={el.id} key={el.id}>
              {el.title}
            </option>
          ))}
        </select>
      </label>

      <br />
      {data?.getAllTags.map((el) => (
        <div key={el.id}>
          <label>
            {el.title}
            <input value={el.id} type="checkbox" {...register("tags")} />
          </label>
        </div>
      ))}

      <input type="submit" />
    </form>
  );
};
export default NewAdForm;
