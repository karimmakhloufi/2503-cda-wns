import express from "express";

const port = 3000;
const app = express();

app.use(express.json());

let ads = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

app.get("/", (_req, res) => {
  res.send("Hello world from express");
});

app.get("/ads", (_req, res) => {
  res.send(ads);
});

app.post("/ads", (req, res) => {
  ads.push(req.body);
  res.send("Ad has been created");
});

app.delete("/ads/:id", (req, res) => {
  ads = ads.filter((ad) => parseInt(req.params.id) !== ad.id);
  res.send("Ad has been deleted");
});

app.put("/ads/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  ads = ads.map((ad) => {
    if (Number.parseInt(req.params.id) === ad.id) {
      return req.body;
    } else {
      return ad;
    }
  });
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
