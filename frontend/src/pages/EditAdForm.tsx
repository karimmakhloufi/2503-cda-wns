import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  useCreateAdMutation,
  useGetAdQuery,
  useGetAllCategoriesAndTagsQuery,
} from "../generated/graphql-types";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  description: string;
  owner: string;
  price: number;
  picture: string;
  location: string;
  category: number;
  tags: string[];
};

const EditAdForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: dataCatsAndTags,
    loading: loadCatsAndTags,
    error: errCatsAndTags,
  } = useGetAllCategoriesAndTagsQuery();
  const {
    data: dataAd,
    loading: loadAd,
    error: errAd,
  } = useGetAdQuery({
    variables: { getAdId: Number(id) },
  });
  const [createAd] = useCreateAdMutation();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newData = {
        ...data,
        category: `${data.category}`,
      };
      const { data: newAdData } = await createAd({
        variables: { data: newData },
      });
      // const result = await createAd({ variables: { data: newData } });
      // const newAdData = result.data;
      navigate(`/ads/${newAdData?.createAd}`, { replace: true });
    } catch {
      toast.error("Une error !");
    }
  };

  if (errAd || errCatsAndTags) return <p>Woops, we broke something</p>;
  if (!loadAd || loadCatsAndTags) return <p>Still loading, plz wait...</p>;
  if (!dataAd || !dataCatsAndTags)
    return <p>Something's amiss (should never render this)</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Titre
        <input
          defaultValue={dataAd.getAd.title}
          {...register("title", { required: true })}
        />
      </label>

      <br />

      <label>
        Description
        <input
          defaultValue={dataAd.getAd.description}
          {...register("description", { required: true })}
        />
      </label>

      <br />

      <label>
        Vendeur
        <input
          defaultValue={dataAd.getAd.owner}
          {...register("owner", { required: true })}
        />
      </label>

      <br />

      <label>
        Ville
        <input
          defaultValue={dataAd.getAd.location}
          {...register("location", { required: true })}
        />
      </label>

      <br />

      <label>
        Image
        <input
          defaultValue={dataAd.getAd.picture}
          {...register("picture", { required: true })}
        />
      </label>

      <br />

      <label>
        Prix
        <input
          type="number"
          defaultValue={dataAd.getAd.price}
          {...register("price", { required: true })}
        />
      </label>

      <br />

      <label>
        Categorie
        <select
          defaultValue={dataAd.getAd.category.id}
          {...register("category", { required: true })}
        >
          {dataCatsAndTags.getAllCategories.map((el) => (
            <option value={el.id} key={el.id}>
              {el.title}
            </option>
          ))}
        </select>
      </label>

      <br />
      {dataCatsAndTags.getAllTags.map((el) => (
        <div key={el.id}>
          <label>
            {el.title}
            <input
              defaultChecked={dataAd.getAd.tags.some((tag) => tag.id === el.id)}
              value={el.id}
              type="checkbox"
              {...register("tags")}
            />
          </label>
        </div>
      ))}

      <input type="submit" />
    </form>
  );
};
export default EditAdForm;
