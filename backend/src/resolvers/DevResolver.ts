import { ID, Mutation, Resolver } from "type-graphql";
import Category from "../entities/Category";
import dataSource from "../config/db";
import Tag from "../entities/Tag";
import Ad from "../entities/Ad";

@Resolver()
export default class DevResolver {
  @Mutation(() => ID, { nullable: true })
  async resetAndSeed() {
    try {
      // get all TypeORM entities from datasource
      const entities = dataSource.entityMetadatas;
      // concatenate them in 1 string, comma separated
      const tableNames = entities
        .map((entity) => `"${entity.tableName}"`)
        .join(", ");
      // run a truncate to clear all tables
      await dataSource.query(`TRUNCATE ${tableNames} CASCADE;`);
    } catch (error) {
      throw new Error(`ERROR: Cleaning test database: ${error}`);
    }

    // seed entities
    const category1 = Category.create({ title: "category1" });
    await category1.save();

    const category2 = Category.create({ title: "category2" });
    await category2.save();

    const tag1 = Tag.create({ title: "tag1" });
    await tag1.save();

    const tag2 = Tag.create({ title: "tag2" });
    await tag2.save();

    const categoryId = category1.id;
    // const category = await Category.findOneBy({ id: categoryId });

    const ad1 = Ad.create({
      title: "ad1",
      description: "",
      location: "",
      owner: "",
      price: 100,
      picture: "",
    });
    ad1.category = { id: categoryId } as Category;
    ad1.tags = [tag1, tag2];
    await ad1.save();

    return null;
  }
}
