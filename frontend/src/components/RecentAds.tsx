import { Link } from "react-router";
import { useGetAllAdsQuery } from "../generated/graphql-types";
import AdCard from "./AdCard";

const RecentAds = () => {
  // we get the refetch function here to send HTTP request to the API
  const { data, loading, error, refetch } = useGetAllAdsQuery({
    fetchPolicy: "network-only",
  });
  if (loading) return <p>Wait for it...</p>;
  if (error) return <p>Woops, on a tout cassé</p>;
  if (!data) return <p>Woops, on a tout cassé (should never render this</p>;

  return (
    <>
      <h2>Annonces récentes ({data.getAllAds.length})</h2>
      <button onClick={() => refetch()}>Refetch!</button>
      <section className="recent-ads">
        {data?.getAllAds.map((el) => (
          <Link key={el.id} to={`/ads/${el.id}`}>
            <AdCard picture={el.picture} title={el.title} price={el.price} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default RecentAds;
